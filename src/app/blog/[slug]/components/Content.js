import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export const revalidate = 30;

async function getData(slug) {
	const query = `
    *[_type == 'blog' && slug.current == "${slug}"]{
        "currentSlug":slug.current,
        title,
        titleImage,
        content,
        faqs
    }[0]`;

	const data = await client.fetch(query);

	return data;
}
export default async function Content({ slug }) {
	const data = await getData(slug);
	const { title, titleImage, content, faqs } = data;

	return (
		<div className="w-full">
			<h1>
				<span className="block text-base text-center text-copy-lighter  tracking-wide uppercase">
					Jacob Fecunda - Blog
				</span>
				<span className="mt-8 block text-3xl text-center leading-tight font-bold text-primary tracking-tight sm:text-6xl">
					{title}
				</span>
			</h1>

			<Image
				src={urlFor(titleImage).url()}
				width={800}
				height={800}
				alt="Title Image"
				priority
				className="rounded-md mt-8 object-cover shadow-lg w-full h-[200px] md:h-[400px]"
			/>
			<div className="mt-16 mx-auto prose prose-lg  prose-li:marker:text-primary prose-li:text-copy prose-strong:text-primary prose-a:text-primary prose-headings:text-primary prose-p:text-copy ">
				<PortableText value={content} />
			</div>
		</div>
	);
}
