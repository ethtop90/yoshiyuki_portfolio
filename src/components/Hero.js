import { myInfo } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	const { name, title, email, tel, location, img, links } = myInfo;
	return (
		<>
			<div className="relative flex flex-col w-full lg:h-[200px] justify-between  divide-solid divide-y-2 md:divide-y-0 md:divide-x-2  px-7 md:py-7 md:px-0 rounded-md shadow-lg bg-foreground md:flex-row ">
				{/* Photo Title Section */}
				<div className="relative flex flex-col items-center md:flex-row md:items-start py-7 md:px-7 md:py-0 gap-x-7 ">
					<Image
						src={img}
						alt="Me"
						width={1000}
						height={1000}
						className=" w-[220px] h-[250px] absolute md:relative object-cover rounded-md shadow-left-bottom  border-background -top-28"
					/>
					<div className="flex flex-col items-center text-center  mt-[120px] md:text-left md:items-start md:mt-0 gap-y-1">
						<h5 className="text-2xl text-copy font-bold">{name}</h5>
						<p className="text-reg text-primary">{title}</p>
						<div className="flex gap-4 mt-5">
							{links.map(({ link, Icon }, index) => (
								<Link href={link} key={index}>
									<Icon
										className="transition duration-300 ease-in-out text-copy rounded-full  transform hover:scale-125 cursor-pointer"
										size="1.75rem"
									/>
								</Link>
							))}
						</div>
					</div>
				</div>
				{/* Contact Details Section  */}
				<div className="grid grid-cols-1 content-center text-center md:content-start md:text-left lg:grid-cols-2 lg:grid-rows-2 gap-4 py-7 md:px-7 md:py-0">
					<div className="flex flex-col gap-1">
						<p className="text-primary uppercase">email</p>
						<Link href={`mailto:${email}`} className="text-copy truncate">
							{email}
						</Link>
					</div>
					<div className="flex flex-col gap-1">
						{/* <p className="text-primary uppercase">phone</p>
						<Link href={`tel:${tel}`} className="text-copy">
							{tel}
						</Link> */}
					</div>
					<div className="flex flex-col gap-1">
						<p className="text-primary uppercase">location</p>
						<p className="text-copy">{location}</p>
					</div>
				</div>
			</div>
		</>
	);
}
