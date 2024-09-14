"use client";

import { sanitize } from "isomorphic-dompurify";
import type React from "react";
import { useState } from "react";
import DoneModal from "../../parts/common/DoneModal";
import NavAnchor from "../../parts/common/NavAnchor";

const Contact = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isBlank, setIsBlank] = useState(false);
	const [isValid, setIsValid] = useState(true);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const sendForm = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!isBlankString(formData.name) || !isBlankString(formData.message)) {
			setIsBlank(false);
		} else {
			setIsBlank(true);
			return;
		}
		if (!validateEmail(formData.email)) {
			setIsValid(false);
			return;
		}
		const sanitizedName = sanitize(formData.name);
		const sanitizedEmail = sanitize(formData.email);
		const sanitizedSubject = sanitize(formData.subject);
		const sanitizedMessage = sanitize(formData.message);

		const res = await fetch("/api/contacts", {
			body: JSON.stringify({
				name: sanitizedName,
				email: sanitizedEmail,
				subject: sanitizedSubject,
				message: sanitizedMessage,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		if (res.ok) {
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
			setIsBlank(false);
			setIsValid(true);
			setIsOpen(true);
		}
	};

	const isBlankString = (str: string) => {
		return /^[\s　\n]*$/.test(str);
	};
	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	return (
		<div className="outlineStyle font-notoSans">
			<h1 className="text-center text-3xl font-bold mt-16">お問い合わせ</h1>
			<p className="text-center text-sm text-gray-500 mt-4 mb-16 mx-4">
				ご意見・ご要望・ご質問など、お気軽にお問い合わせください。
				カジュアルな内容なら
				<NavAnchor
					href="https://discord.com/channels/1126311403914018856/1126311570155257896"
					text="Discord"
				/>
				で受け付けています。
			</p>
			<div className="mb-6 mx-4">
				<form onSubmit={sendForm}>
					<div className="mb-8">
						<label
							htmlFor="name-input"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							お名前
						</label>
						<input
							type="text"
							id="name-input"
							name="name"
							placeholder="山田太郎"
							value={formData.name}
							onChange={handleInputChange}
							className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-yellow-500 focus:border-yellow-500"
						/>
						{isBlank && (
							<p className="text-red-500 text-sm mt-2">
								お名前を入力してください
							</p>
						)}
					</div>
					<div className="mb-8">
						<label
							htmlFor="email-input"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							メールアドレス
						</label>
						<input
							type="text"
							id="email-input"
							name="email"
							placeholder="example@keio.jp"
							value={formData.email}
							onChange={handleInputChange}
							className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-yellow-500 focus:border-yellow-500"
						/>
						{!isValid && (
							<p className="text-red-500 text-sm mt-2">
								メールアドレスの形式が正しくありません
							</p>
						)}
					</div>
					<div className="mb-8">
						<label
							htmlFor="subject-input"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							件名
						</label>
						<input
							type="text"
							id="subject-input"
							name="subject"
							placeholder=""
							value={formData.subject}
							onChange={handleInputChange}
							className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-yellow-500 focus:border-yellow-500"
						/>
					</div>
					<div className="mb-8">
						<label
							htmlFor="large-input"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							お問い合わせ内容
						</label>
						<input
							type="text"
							id="large-input"
							name="message"
							value={formData.message}
							onChange={handleInputChange}
							className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-yellow-500 focus:border-yellow-500"
						/>
					</div>
					<div className="flex justify-end">
						<button
							type="submit"
							className="font-medium rounded-md px-4 py-2 text-sm bg-yellow-500 text-white duration-300 hover:bg-yellow-600"
						>
							送信
						</button>
					</div>
				</form>
			</div>
			<DoneModal
				title="お問い合わせありがとうございました！"
				body="お問い合わせ内容を確認後、ご連絡いたします。"
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
		</div>
	);
};

export default Contact;
