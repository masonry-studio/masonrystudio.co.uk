"use client"

import Breadcrumb from "@/components/ui/breadcrumbs";
import TextShimmer from "@/components/ui/text-shimmer";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import Spinner from "@/components/ui/spinner";
import { toast } from "sonner";
import { sendContactMail } from "@/app/contact/actions";

export default function Contact() {
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");
	const [service, setService] = React.useState("");
	const [valid, setValid] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		if (firstName && lastName && email && message && service) {
			setValid(true)
		} else {
			setValid(false)
		}
	}, [firstName, lastName, email, message, service]);

	async function handleSubmit() {
		setLoading(true);
		// Mock API call
		await sendContactMail({
			firstName,
			lastName,
			email,
			message,
			service,
		}).then((res) => {
			if (!res) {
				return { error: true, message: "An error occurred while sending your message. Please try again." }
			}

			if (res.serverError) {
				toast.error("Failed to send message. Please try again.", {
					description: "An error occurred while sending your message. Please try again.",
				});
			}

			if (res.data) {
				toast.success(res.data.error ? "Failed to send message." : "Success!", {
					description: res.data.message
				});
			}
		}).finally(() => {
			setFirstName("");
			setLastName("");
			setEmail("");
			setMessage("");
			setService("");
			setLoading(false);
		})
	}

	return (
		<>
			<section className="container flex flex-col items-center justify-center w-full mt-24 mb-12 p-8 animate-fade-in opacity-0 [--animation-delay:200ms]">
				<h1 className="w-full pb-0 text-center text-header">Contact Us</h1>
				<Breadcrumb />
				<div className="mt-5 text-center">
					<p className="text-body text-masonry-grey">
						Got any questions about our services, scaling your
						business with our platform or general inquiries?
					</p>
					<p className="text-body text-masonry-grey">
						We&apos;re here to help. Chat to our team now!{" "}
					</p>
				</div>
			</section>
			<section className="container flex flex-col justify-center gap-6 max-w-[800px] w-full animate-fade-in opacity-0 [--animation-delay:300ms]">
				<form className="flex flex-col w-full gap-y-6" onSubmit={async (e) => {
					e.preventDefault();
					await handleSubmit();
				}}>
					<div className="flex flex-col sm:flex-row gap-4">
						<Input
							type="text"
							name="fname"
							id="fname"
							placeholder="First Name"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<Input
							type="text"
							name="lname"
							id="lname"
							placeholder="Last Name"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<Input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Textarea
						placeholder="Your Message"
						className="min-h-36"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<div>
						<h3 className="font-semibold text-body">Services</h3>
						<p className="text-xs text-masonry-grey">
							Please Select an option from the list below.
						</p>
					</div>
					<RadioGroup className="flex flex-row flex-wrap w-full gap-8 sm:gap-12" value={service} onValueChange={(v) => setService(v)}>
						<div>
							<h4 className="mb-2 font-semibold text-body text-masonry-grey">
								Web Dev
							</h4>
							<div className="flex flex-col gap-2">
								<div className="flex items-center text-sm gap-2">
									<RadioGroupItem
										id="start"
										value="start"
									/>
									<label>Start Up</label>
								</div>
								<div className="flex items-center text-sm gap-2">
									<RadioGroupItem
										id="bespoke"
										value="bespoke"
									/>
									<label>Bespoke</label>
								</div>
								<div className="flex items-center text-sm gap-2">
									<RadioGroupItem
										id="ecommerce"
										value="ecommerce"
									/>
									<label>E-commerce</label>
								</div>
							</div>
						</div>
						<div>
							<h4 className="mb-2 font-semibold text-body text-masonry-grey">
								Hosting
							</h4>
							<div className="flex flex-col gap-2">
								<div className="flex items-center text-sm gap-2">
									<RadioGroupItem
										id="platform"
										value="platform"
									/>
									<label>Our Platform</label>
								</div>
								{/* <div className="flex items-center text-sm gap-2">
									<RadioGroupItem
										id="shared"
										value="shared"
									/>
									<label>Shared Hosting</label>
								</div>
								<div className="flex items-center text-sm gap-2">
									<RadioGroupItem
										id="dedicated"
										value="dedicated"
									/>
									<label>Dedicated Hosting</label>
								</div> */}
							</div>
						</div>
						<div>
							<h4 className="mb-2 font-semibold text-body text-masonry-grey">
								Other
							</h4>
							<div className="flex flex-col gap-2">
								<div className="flex items-center text-sm gap-2">
									<RadioGroupItem id="service" value="quote" />
									<label>Get a Quote</label>
								</div>
								<div className="flex items-center text-sm gap-2">
									<RadioGroupItem id="service" value="idea" />
									<label>Discuss your idea</label>
								</div>
								<div className="flex items-center text-sm gap-2">
									<RadioGroupItem id="service" value="query" />
									<label>General Query</label>
								</div>
							</div>
						</div>
					</RadioGroup>
					<Button className="backdrop-filter-[12px] group inline-flex items-center self-center justify-between gap-2 w-fit border dark:border-white/10 bg-black/10 dark:bg-white/10 px-4 mb-2 my-4 text-white transition-all ease-in hover:cursor-pointer hover:bg-black/10 dark:hover:bg-white/15 dark:text-black" disabled={!valid}>
						<TextShimmer className="inline-flex items-center justify-center" shimmerWidth={valid ? 50 : 0}>
							<span>{loading ? "Loading" : "Submit"}</span>{" "}
							{loading ? (
								<Spinner className="ml-2 size-3" />
							) : (
								<ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
							)}
						</TextShimmer>
					</Button>
				</form>
			</section>
		</>
	);
}
