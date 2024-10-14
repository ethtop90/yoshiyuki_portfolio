import React from "react";
import ContactForm from "./components/ContactForm";

export default function page() {
	return (
		<div className="flex flex-col w-full gap-16 p-7 rounded-md shadow-md bg-foreground">
			<div className="flex flex-col md:flex-row md:items-start gap-10">
				<div className="flex-[80%] flex-col gap-5">
					<div>
						<p className="text-xsm text-primary">Want to work?</p>
						<h2 className="text-4xl text-copy font-bold">Contact Me</h2>
					</div>
					<p className="text-copy-light">
						Have questions, ideas, or feedback? I'd love to hear from you! Reach
						out anytime and i'll get back to you as soon as possible. Fill in
						the form or send me an email!
					</p>
				</div>
				<ContactForm />
			</div>
		</div>
	);
}

// Get in touch with us
// Have questions, ideas, or feedback? We'd love to hear from you! Reach out to us anytime and we'll get back to you as soon as possible.
// Fill in the form or Send us an email!
