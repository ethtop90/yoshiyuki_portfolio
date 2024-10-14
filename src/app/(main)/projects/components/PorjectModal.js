"use client";

import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

export default function PorjectModal({ project, isOpen, setIsOpen }) {
	const { title, type, description, src, link, tech } = project;
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={(e) => {
						e.stopPropagation();
						setIsOpen(false);
					}}
					className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
				>
					<motion.div
						initial={{ scale: 0, rotate: "12.5deg" }}
						animate={{ scale: 1, rotate: "0deg" }}
						exit={{ scale: 0, rotate: "0deg" }}
						onClick={(e) => e.stopPropagation()}
						className="bg-primary-content text-copy p-5 rounded-md w-full max-w-[300px] md:max-w-[700px] shadow-xl cursor-default relative "
					>
						<div
							onClick={() => setIsOpen(false)}
							className="absolute right-3 bg-primary-content p-2 rounded-full top-2 cursor-pointer z-30"
						>
							<IoClose fill="white" size={20} />
						</div>

						<div className="relative z-10 flex flex-col md:flex-row gap-5">
							<Image
								src={src}
								width={1000}
								height={1000}
								className="object-cover rounded-md w-[300px]  "
							/>
							<div className="flex flex-col justify-center gap-5">
								<div>
									<p className=" text-primary text-sm ">{type}</p>
									<h3 className="text-3xl font-bold ">{title}</h3>
								</div>
								<p className=" text-copy-light ">{description}</p>

								<div className="flex flex-wrap gap-3  justify-start">
									{tech.map((language, index) => {
										return (
											<ul
												key={index}
												title={language.title}
												className="text-black px-2 py-1 xs:px-4 xs:py-2 bg-white rounded-full"
											>
												<img
													className="h-[15px]"
													src={language.link}
													alt={language.title}
												/>
											</ul>
										);
									})}
								</div>

								<Link
									href={link}
									className=" flex justify-center p-3 rounded-md bg-primary max-w-[140px] text-copy mt-5"
								>
									Website
								</Link>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>	
	);
}
