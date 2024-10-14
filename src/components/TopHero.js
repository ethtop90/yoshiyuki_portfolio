import {
	attributesGroup1,
	attributesGroup2,
	attributesGroup3,
} from "@/constants";
import React from "react";
import Image from "next/image";

export default function TopHero() {
	return (
		<div className=" absolute top-0 w-full h-[250px] max-w-[1440px] left-1/2 transform -translate-x-1/2 py-2 rounded-md bg-primary overflow-hidden ">
			<div className="text-6xl text-primary-content text-opacity-100 font-bold whitespace-nowrap">
				{/* <h1 className=" animate-infinite-scroll">{attributesGroup1}</h1>
				<h1 className=" animate-infinite-scroll2">{attributesGroup2}</h1>
				<h1 className=" animate-infinite-scroll">{attributesGroup3}</h1> */}
				<Image
					src="/images/background.jpg"
					priority
					layout="fill" // Use layout="fill" for full coverage
					objectFit="cover" // This will maintain the aspect ratio and cover the container
					className="rounded-md group-hover:scale-125 transition-all"
				/>
			</div>
		</div>
	);
}
