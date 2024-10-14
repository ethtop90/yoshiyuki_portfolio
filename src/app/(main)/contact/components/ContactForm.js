"use client";

import { useEffect, useState } from "react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSending, setIsSending] = useState(false);
	const [isError, setIsError] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		setIsSending(true);

		const res = await fetch("/api/send", {
			method: "POST",
			body: JSON.stringify(formData),
		});
		const { statusCode } = await res.json();

		setIsSending(false);
		if (statusCode != null) {
			setIsError(true);
		} else {
			setFormData({
				name: "",
				email: "",
				message: "",
			});
			setIsSubmitted(true);
		}
	}

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	useEffect(() => {
		(async () => {
			if (isSubmitted) {
				setTimeout(() => {
					setIsSubmitted(false);
				}, 2000);
			}
			if (isError) {
				setTimeout(() => {
					setIsError(false);
				}, 5000);
			}
		})();
	}, [isSubmitted, isError]);

	return (
		<form
			className="flex w-full  mx-auto flex-col bg-background p-5 rounded-md shadow-md gap-y-10 text-reg text-copy  "
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				className="peer block w-full appearance-none bg-foreground p-2 rounded-md  focus:outline-none  focus:ring-0"
				placeholder="Name"
				name="name"
				value={formData.name}
				onChange={handleChange}
				required
			/>

			<input
				type="email"
				className="peer block w-full appearance-none bg-foreground p-2 rounded-md  focus:outline-none  focus:ring-0"
				placeholder="Email"
				name="email"
				value={formData.email}
				onChange={handleChange}
				required
			/>

			<textarea
				className="peer block w-full appearance-none bg-foreground p-2 rounded-md  focus:outline-none focus:ring-0"
				placeholder="Message"
				name="message"
				rows={5}
				value={formData.message}
				onChange={handleChange}
				required
			/>

			{isSending ? (
				<p className=" text-center animate-pulse text-copy">Sending...</p>
			) : (
				<button
					type="submit"
					className="w-full md:w-[40%] mx-auto text-reg rounded-md p-2  bg-primary transition-all text-copy"
				>
					{isSubmitted ? "Sent!" : "Send"}
				</button>
			)}
			{isError && (
				<p className="text-center text-sm text-copy">
					There has been an error trying to send your message. Please try again
					later.
				</p>
			)}
		</form>
	);
}
