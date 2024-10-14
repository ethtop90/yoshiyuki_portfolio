import Preloader from "@/components/Preloader";
import "../../app/globals.css";
import TopHero from "@/components/TopHero";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import ScrollBack from "@/components/ScrollBack";

export const metadata = {
	title: "JF | Portfolio",
	description:
		"I'm a forward-thinking Full-Stack Web3 Developer, who thrives in the face of challenges and embodies an unwavering commitment to lifelong learning.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-background">
				<Preloader />
				<TopHero />
				<div className="relative flex flex-col gap-7 w-full max-w-[1440px] mx-auto mt-40 px-6 pb-28 sm:px-16">
					<Hero />
					<div className="md:grid grid-cols-5 grid-rows-5 gap-7">
						<div className="hidden md:block row-span-5 col-start-1 row-start-1">
							<Navbar />
						</div>
						<div className="col-span-4 row-span-5 col-start-2 row-start-1">
							{children}
						</div>
					</div>
				</div>
				<MobileNav />
				<ScrollBack />
			</body>
		</html>
	);
}
