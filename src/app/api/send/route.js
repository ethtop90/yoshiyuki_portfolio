import ContactFormEmail from "@/email/ContactFormEmail";
import ContactFormEmailResponse from "@/email/ContactFormEmailResponse";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PRIVATE_RESEND_API);

export async function POST(req) {
	const { name, email, message } = await req.json();

	const data1 = await resend.emails.send({
		from: "Portfolio Contact Form <onboarding@resend.dev>",
		to: "kamae.yoshiyuki@gmail.com",
		subject: `Message From ${name}`,
		reply_to: email,
		react: <ContactFormEmail name={name} email={email} message={message} />,
	});

	if (data1.error != null) {
		return Response.json(data1.error);
	}

	const data2 = await resend.emails.send({
		from: "Jacob Fecunda <onboarding@resend.dev>",
		to: ["kamae.yoshiyuki@gmail.com", email],
		subject: `Message From Jacob`,
		reply_to: "kamae.yoshiyuki@gmail.com",
		react: <ContactFormEmailResponse name={name} />,
	});
	if (data2.error != null) {
		return Response.json(data2.error);
	}

	return Response.json(data1);
}
