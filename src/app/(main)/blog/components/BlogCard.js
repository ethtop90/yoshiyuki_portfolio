"use client";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
	const { title, smallDescription, titleImage, currentSlug } = blog;
	return (
		<div className="flex flex-col w-full gap-7 group  bg-primary-content p-5 rounded-md shadow-lg cursor-pointer">
			<div className="overflow-hidden rounded-md shadow-lg">
				<Image
					src={urlFor(titleImage).url()}
					priority
					width={1000}
					height={1000}
					className="object-cover rounded-md aspect-square group-hover:scale-125 transition-all"
				/>
			</div>

			<div>
				<h3
					title={title}
					className="text-2xl md:text-3xl font-bold text-copy truncate "
				>
					{title}
				</h3>
				<p className=" text-copy-light  line-clamp-3 mt-2 ">
					{smallDescription}
				</p>
			</div>
			<Link href={`/blog/${currentSlug}`} className="text-primary">
				Read More
			</Link>
		</div>
	);
}
