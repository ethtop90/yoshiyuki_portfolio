import Link from "next/link";
import Content from "./components/Content";
import { client } from "@/app/lib/sanity";

export const revalidate = 30;

export async function generateMetadata({ params }) {
	// read route params
	const query = `
    *[_type == 'blog' && slug.current == "${params.slug}"]{
        "currentSlug":slug.current,
        title,
        smallDescription

    }[0]`;

	const { title, smallDescription } = await client.fetch(query);

	return {
		title: `JF Blog | ${title}`,
		description: smallDescription,
	};
}

export default function page({ params }) {
	return (
		<div className="flex flex-col items-center gap-10 max-w-[1440px] w-full mx-auto py-10 px-6 md:px-16 bg-background">
			<Link href="/" className="font-bold text-copy text-5xl">
				JF
			</Link>
			<Content slug={params.slug} />
		</div>
	);
}
