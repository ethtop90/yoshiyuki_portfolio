"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Hello", "Welcome", "To", "My", "Portfolio"];

export default function Preloader() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			setTimeout(() => {
				setIsLoading(false);
				document.body.style.cursor = "default";
				window.scrollTo(0, 0);
			}, 2000);
		})();
	}, []);

	return (
		<AnimatePresence mode="wait">{isLoading && <Splash />}</AnimatePresence>
	);
}

function Splash() {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		if (index == words.length - 1) return;
		setTimeout(
			() => {
				setIndex(index + 1);
			},
			index == 0 ? 1000 : 150
		);
	}, [index]);
	return (
		<motion.div
			initial={{ top: 0 }}
			exit={{
				top: "-100vh",
				transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
			}}
			className="h-screen w-screen fixed top-0 left-0 z-50 text-white flex items-center justify-center bg-primary rounded-md"
		>
			<motion.p
				className="text-5xl "
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.75, transition: { duration: 1, delay: 0.2 } }}
			>
				<span></span>
				{words[index].toUpperCase()}
			</motion.p>
		</motion.div>
	);
}
