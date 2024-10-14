"use client";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Skill({ skill, level }) {
	const [currentLevel, setCurrentLevel] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			const interval = setInterval(() => {
				setCurrentLevel((prevLevel) => {
					if (prevLevel < level) {
						return prevLevel + 1; // Adjust the increment rate as needed
					}
					clearInterval(interval);
					return level;
				});
			}, 10); // Adjust the timer as needed for smoother animation

			return () => clearInterval(interval);
		}
	}, [isInView, level]);

	return (
		<div>
			<p className="text-copy-light">{skill}</p>
			<div>
				<motion.p
					className="text-copy text-right"
					initial={{ marginRight: "100%" }}
					whileInView={{ marginRight: `${100 - Number(level)}%` }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					{currentLevel}%
				</motion.p>
				<div ref={ref} className="bg-primary-content w-full rounded-full">
					<motion.div
						className="bg-primary h-1 rounded-full"
						initial={{ width: 0 }}
						whileInView={{
							width: `${level}%`,
						}}
						viewport={{ once: true }}
						transition={{ duration: 1 }}
					></motion.div>
				</div>
			</div>
		</div>
	);
}
