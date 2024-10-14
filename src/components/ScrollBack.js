"use client";

import { useEffect, useState } from "react";
import { IoChevronUp } from "react-icons/io5";

export default function ScrollBack() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div
			className={`fixed bottom-5 right-5 z-40 transition-opacity duration-500 ease-in-out ${
				scrollY >= 700 ? "opacity-100" : "opacity-0"
			} ${scrollY >= 700 ? "pointer-events-auto" : "pointer-events-none"}`}
		>
			<div
				onClick={() => {
					scrollTo({ top: 0, left: 0, behavior: "smooth" });
				}}
				className="w-10 h-10 bg-primary rounded-md shadow-md my-auto cursor-pointer relative"
			>
				<IoChevronUp className="text-white left-3  top-2 relative" />
				<IoChevronUp className="text-white left-3 top-0 relative" />
			</div>
		</div>
	);
}
