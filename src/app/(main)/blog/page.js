import { client } from "@/app/lib/sanity";
import BlogCard from "./components/BlogCard";

export const revalidate = 30;

async function getData() {
	const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
        title,
        smallDescription,
        "currentSlug": slug.current,
        titleImage
    }`;

	const data = await client.fetch(query);

	return data;
}

export default async function page() {
	const data = await getData();

	return (
		<div className="flex flex-col w-full gap-16 p-7 rounded-md shadow-md bg-foreground">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{data.map((blog, index) => (
					<BlogCard key={index} blog={blog} />
				))}
			</div>
		</div>
	);
}
