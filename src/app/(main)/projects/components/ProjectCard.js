"use client";
import Image from "next/image";
import { useState } from "react";
import PorjectModal from "./PorjectModal";

export default function ProjectCard({ project }) {
	const [isOpen, setIsOpen] = useState(false);
	const { title, type, src } = project;
	return (
		<div
			onClick={() => setIsOpen(true)}
			className="flex flex-col w-full gap-7 group  bg-primary-content p-5 rounded-md shadow-lg cursor-pointer"
		>
			<div className="overflow-hidden rounded-md shadow-lg">
				<Image
					src={src}
					priority
					width={1000}
					height={1000}
					className="object-cover rounded-md  group-hover:scale-125 transition-all"
				/>
			</div>

			<div>
				<p className=" text-primary text-sm ">{type}</p>
				<h3 className="text-2xl md:text-3xl font-bold text-copy truncate ">
					{title}
				</h3>
			</div>

			<PorjectModal project={project} isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	);
}
