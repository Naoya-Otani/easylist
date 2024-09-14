"use client";

import type { SearchSuggestion } from "@/src/@types/searchSuggestions";
import { sanitize } from "isomorphic-dompurify";
import { useRouter } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

type Props = {
	useSuggest?: boolean;
	isFullWidth?: boolean;
};

const SearchBar = ({ useSuggest, isFullWidth }: Props) => {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);

	const handleSearch = async () => {
		await performSearch(searchQuery);
	};

	const getSuggestions = async (
		searchQuery: string,
	): Promise<SearchSuggestion[]> => {
		const sanitizedQuery = sanitize(searchQuery);
		const encodedQuery = encodeURIComponent(sanitizedQuery);
		const url = `/api/rakutan/getSuggestions?keyword=${encodedQuery}`;
		const res = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json();
		});

		return res;
	};

	const performSearch = async (query: string) => {
		const sanitizedQuery = sanitize(query);
		const encodedQuery = encodeURIComponent(sanitizedQuery);
		const url = `/api/rakutan/search?&reviews=avg&filter=normal&query=${encodedQuery}`;

		if (isBlankString(searchQuery)) {
			return;
		}

		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ query }),
			});
			const data = await response.json();
			setSearchQuery(data);
			router.push(`/rakutan/result?q=${encodedQuery}`);
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	useEffect(() => {
		if (useSuggest === false) return;
		if (isBlankString(searchQuery)) {
			setSuggestions([]);
			return;
		}
		const getSuggestionsAsync = async () => {
			const sug = await getSuggestions(searchQuery);
			setSuggestions(sug);
		};

		getSuggestionsAsync();
	}, [searchQuery]);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.nativeEvent.isComposing || e.key !== "Enter") return;
		performSearch(searchQuery);
	};

	const isBlankString = (str: string) => {
		return /^[\s　\n]*$/.test(str);
	};

	return (
		<div className="lg:bg-bgSearchbar lg:bg-cover lg:aspect-[5/1] lg:py-24">
			<div className="flex items-center justify-center md:mt-14 lg:mt-0">
				<div className="relative items-center">
					<div className="absolute left-0 bottom-[100%] bg-yellow-500 rounded-t-md w-fit h-fit flex justify-center items-center px-4 py-2">
						<p className="text-white tracking-wide text-sm font-bold">
							授業名か先生名で検索
						</p>
					</div>
					<input
						type="text"
						placeholder="例）音楽"
						className={`px-4 py-2 rounded-b rounded-tr border-yellow-500 focus:outline-none focus:border-yellow-500 border-2  focus:ring-0 font-notoSans placeholder:font-notoSans ${
							isFullWidth ? "w-full" : "w-[320px] lg:w-[400px]"
						}`}
						onChange={handleChange}
						onKeyDown={handleKeyDown}
						value={searchQuery}
					/>
					<button
						type="button"
						className="absolute right-0 top-0 bottom-0"
						onClick={handleSearch}
						aria-label="検索ボタン"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 mx-2 text-gray-500"
						>
							<title>検索</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
							/>
						</svg>
					</button>
					{suggestions.length > 0 && <Suggestions suggestions={suggestions} />}
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
