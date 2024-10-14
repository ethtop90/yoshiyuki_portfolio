"use client";
import { navItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const path = usePathname();

	return (
		<div className="sticky  top-7 flex flex-col items-center p-5 lg:p-7 rounded-md shadow-lg bg-foreground gap-7 ">
			{navItems.map(({ title, link }, index) => (
				<Link
					href={link}
					key={index}
					className={`flex items-center justify-center w-full p-2 rounded-md ${
						path == link
							? "bg-primary text-copy"
							: " text-copy hover:text-primary active:scale-110"
					} transition-all`}
				>
					{title}
				</Link>
			))}
		</div>
	);
}
