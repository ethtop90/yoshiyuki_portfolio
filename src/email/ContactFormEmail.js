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

function Email({ name, email, message }) {
	return (
		<Tailwind config={tailwindConfig}>
			<Body>
				<Container className=" w-full bg-background max-w-none">
					<Container className="p-10">
						<Section className="flex flex-col items-center text-copy p-7 bg-foreground shadow-md rounded-md">
							<Heading className="text-center leading-tight">
								New Message From <span className="text-primary">{name}</span>
							</Heading>
							<Text>{message}</Text>
							<Hr />
							<Text>The sender's email is: {email}</Text>
						</Section>
					</Container>
				</Container>
			</Body>
		</Tailwind>
	);
}

export default function ContactFormEmail({ name, email, message }) {
	return (
		<Html>
			<Head />
			<Preview>New message from Portfolio Contact Form</Preview>
			<Email name={name} email={email} message={message} />
		</Html>
	);
}
