import React, { useState } from "react";
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();
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

    const res = await fetch("/api/send", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (res.ok) router.push("/thank-you");
  };

  return (
    <div className="outlineStyle font-notoSans">
      <div className="mb-6">
        <form onSubmit={sendForm}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-yellow-500 focus:border-yellow-500"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-yellow-500 focus:border-yellow-500"
          />
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            お問い合せ内容
          </label>
          <input
            type="text"
            id="large-input"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-yellow-500 focus:border-yellow-500"
          />
          <button type="submit">送信</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
