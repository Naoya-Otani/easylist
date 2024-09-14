import faculties from "@/src/data/faculties";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import type React from "react";
import { Fragment, useEffect, useState } from "react";
import SearchBtn from "../../atoms/Button/SearchBtn";

const FacultySelector = () => {
	const router = useRouter();
	const [selected, setSelected] = useState(faculties[0]);
	const [secondLanguage, setSecondLanguage] = useState(
		selected.secondLanguage.langName[0],
	);

	useEffect(() => {
		setSecondLanguage(selected.secondLanguage.langName[0]);
	}, [selected]);

	const searchHandler = (e: React.FormEvent) => {
		e.preventDefault();
		router.push(
			`/rakutan/category/specialized/result?faculty=${selected.name}&lang=${secondLanguage}`,
		);
	};

	return (
		<form onSubmit={searchHandler}>
			<div className="flex flex-col md:flex-row gap-4 mb-8">
				<Listbox value={selected} onChange={setSelected}>
					<div className="relative mt-1 z-20 md:basis-1/2">
						<Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-5 pr-10 text-left border border-gray-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
							<span className="block truncate">{selected.name}</span>
							<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
								<ChevronUpDownIcon
									className="w-5 h-5 text-gray-400"
									aria-hidden="true"
								/>
							</span>
						</Listbox.Button>
						<Transition
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-gray-200">
								{faculties.map((faculty) => (
									<Listbox.Option
										key={faculty.id}
										className={({ active }) =>
											`relative cursor-default select-none py-2 pl-10 pr-4 ${
												active
													? "bg-yellow-50 text-yellow-500"
													: "text-gray-800"
											}`
										}
										value={faculty}
									>
										{({ selected, active }) => (
											<>
												<span
													className={`block truncate ${
														selected ? "font-medium" : "font-normal"
													}`}
												>
													{faculty.name}
												</span>
												{selected ? (
													<span
														className={`${
															active ? "text-yellow-600" : "text-yellow-600"
														}
                                absolute inset-y-0 left-
                                0 flex items-center pl-3`}
													/>
												) : null}
											</>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</Listbox>
				<Listbox value={secondLanguage} onChange={setSecondLanguage}>
					<div className="relative mt-1 md:basis-1/2">
						<Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-5 pr-10 text-left border border-gray-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
							<span className="block truncate">{secondLanguage}</span>
							<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
								<ChevronUpDownIcon
									className="w-5 h-5 text-gray-400"
									aria-hidden="true"
								/>
							</span>
						</Listbox.Button>
						<Transition
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-gray-200">
								{selected.secondLanguage.langName.map((lang) => (
									<Listbox.Option
										key={lang}
										className={({ active }) =>
											`relative cursor-default select-none py-2 pl-10 pr-4 ${
												active
													? "bg-yellow-50 text-yellow-500"
													: "text-gray-800"
											}`
										}
										value={lang}
									>
										{({ selected, active }) => (
											<>
												<span
													className={`${
														selected ? "font-medium" : "font-normal"
													} block truncate`}
												>
													{lang}
												</span>
												{selected ? (
													<span
														className={`${
															active ? "text-yellow-600" : "text-yellow-600"
														}
                                absolute inset-y-0 left-
                                0 flex items-center pl-3`}
													/>
												) : null}
											</>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</Listbox>
			</div>

			<div className="flex justify-end lg:justify-center">
				<SearchBtn />
			</div>
		</form>
	);
};

export default FacultySelector;
