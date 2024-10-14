"use client";
import { navItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
	const path = usePathname();

	return (
		<div className="fixed left-1/2 transform -translate-x-1/2 top-4 flex  md:hidden items-center justify-center gap-1  p-2 rounded-md shadow-lg bg-foreground sm:gap-2 ">
			{navItems.map(({ title, link }, index) => (
				<Link
					href={link}
					key={index}
					className={`flex items-center justify-center w-full p-1 rounded-md text-xsm sm:text-sm ${
						path == link ? "bg-primary text-copy" : " text-copy"
					}`}
				>
					{title}
				</Link>
			))}
		</div>
	);
}
