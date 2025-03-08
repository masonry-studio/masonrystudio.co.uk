"use server";

import { actionClient } from "@/lib/safe-action";
import { createTransport } from "nodemailer";
import { z } from "zod";

export const sendContactMail = actionClient.schema(z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.string().email(),
	message: z.string(),
	service: z.string(),
})).action(async ({ parsedInput: { firstName, lastName, email, message, service } }) => {
	"use server";

	// send mail
	const transporter = createTransport({
		host: process.env.SMTP_HOST,
		secure: process.env.SMTP_SECURE === "true",
		port: parseInt(process.env.SMTP_PORT!),
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
		debug: process.env.NODE_ENV === "development"
	});

	const body = `
		Full Name: <b>${firstName} ${lastName}</b>
		<br />
		Email: <b>${email}</b>
		<br />
		Service: <b>${service.slice(0, 1).toUpperCase() + service.slice(1)}</b>
		<br />
		<br />
		Message: 
		<br />
		<code>
		${message.replace(/\n/g, "<br />")}
		</code>
	`;

	const res = await transporter.sendMail({
		from: process.env.SMTP_FROM,
		to: "hello@masonrystudio.co.uk",
		subject: "New Contact Form Submission",
		html: body
	}).then((res) => {
		return { error: false, message: "Success! Your message has been sent." }
	}).catch((err) => {
		console.error("Error sending message: ", err);
		return { error: true, message: "An error occurred while sending your message. Please try again." }
	})

	return res;
})