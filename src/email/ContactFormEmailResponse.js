import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Preview,
	Section,
	Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

import tailwindConfig from "../../tailwind.config";

function Email({ name }) {
	return (
		<Tailwind config={tailwindConfig}>
			<Body>
				<Container className=" w-full bg-background max-w-none">
					<Container className="p-10">
						<Section className="flex flex-col items-center text-copy p-7 bg-foreground rounded-md">
							<Heading className="text-center  leading-tight">
								Thanks For Contacting <span className="text-primary">Me!</span>
							</Heading>
							<Hr />
							<Text>
								Hey {name},
								<br />
								<br />
								I've received your message and will reply by email as soon as I
								can.
								<br />
								<br />
								Talk to you soon!
								<br />
								<br />
								Kind regards,
								<br />
								<br />
								Jacob
							</Text>
						</Section>
					</Container>
				</Container>
			</Body>
		</Tailwind>
	);
}

export default function ContactFormEmailResponse({ name }) {
	return (
		<Html>
			<Head />
			<Preview>Thanks For Contacting Me</Preview>
			<Email name={name} />
		</Html>
	);
}
