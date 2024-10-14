import { createClient } from "next-sanity";

import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
	apiVersion: "2023-05-03",
	dataset: "production",
	projectId: "ol7m2osm",
	useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
	return builder.image(source);
}
