import lightImg from "@/public/about/banner-light.png";
import darkImg from "@/public/about/banner-dark.png";
import {
	ArrowRightIcon,
	CircleCheckBig,
} from "lucide-react";
import Faqs from "@/components/faqs";
import Breadcrumb from "@/components/ui/breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import ChecklistItem from "@/components/cards/checklist-item";
import FeatureGridItem from "@/components/cards/feature-grid-item";
import Icons from "@/components/icons";

const faq = [
	{ id: 1, title: "How can I contact a specific member in the team?", content: ["Please find our specific contact details below:", "‎", "Ty Mason: ty.mason@masonrystudio.co.uk", "Andrew Mason: andrew.mason@masonrystudio.co.uk"] },
	{ id: 2, title: "What are your buisness hours?", content: ["We are open from Monday to Friday between 9am to 5pm. We may be able to respond to any messages over the weekend but it isn't guaranteed."] },
	{
		id: 3,
		title: "Got any other questions?",
		content: ["You can contact us directly via our contact page, or by emailing us at hello@masonrystudio.co.uk"],
	},
];

export default async function About() {
	return (
		<>
			<svg
				className="absolute mt-16 -z-10 animate-fade-in opacity-0 [--animation-delay:200ms]"
				viewBox="0 0 1440 464"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_106_780)">
					<path
						opacity="0.5"
						d="M0 0V464L720 241.28L1440 464V0H0Z"
						fill="#E5484D"
						fillOpacity="0.05"
					/>
					<path
						opacity="0.5"
						d="M0 0H1440V241.28H0V0Z"
						fill="#E5484D"
						fillOpacity="0.05"
					/>
					<path
						opacity="0.5"
						d="M0 0V18.56L720 241.28L1440 18.56V0H0Z"
						fill="#E5484D"
						fillOpacity="0.05"
					/>
					<path
						d="M0 0V18.56L720 241.28L1440 18.56V0H0Z"
						fill="#E5484D"
						fillOpacity="0.05"
					/>
				</g>
				<defs>
					<clipPath id="clip0_106_780">
						<rect width="1440" height="464" fill="white" />
					</clipPath>
				</defs>
			</svg>

			<section className="container flex flex-row w-full my-24 p-8 animate-fade-in opacity-0 [--animation-delay:200ms]">
				<div className="w-full flex flex-col gap-5 items-start justify-center h-auto">
					<div className="w-full">
						<h1 className="text-header">About Us</h1>
						<Breadcrumb />
					</div>
					<p className="pb-4 md:max-w-2/3 text-neutral-500 dark:text-neutral-400">Hello, world! We are Masonry Studio, a new, upcoming, family-duo owned web agency providing services from small start-ups, to large enterprises.</p>
					<Link href="/contact">
						<button className="my-auto backdrop-filter-[12px] group flex flex-row items-center gap-1 h-7 rounded-full border dark:border-white/5 dark:text-white text-black bg-black/5 dark:bg-white/20 px-3 text-xs hover:cursor-pointer hover:bg-black/10 dark:hover:bg-white/15">
							Get in touch <ArrowRightIcon size={14} />
						</button>
					</Link>
				</div>
				<div className=" flex-col max-w-[600px] hidden md:flex">
					<Image
						className="my-auto dark:block hidden"
						src={darkImg}
						alt="Tech Stack"
						priority
					/>
					<Image
						className="my-auto dark:hidden"
						src={lightImg}
						alt="Tech Stack"
						priority
					/>
				</div>
			</section>

			<section className="container my-16 lg:my-32 items-center flex flex-col w-full animate-fade-in opacity-0 [--animation-delay:300ms]">
				<div className="grid grid-cols-1 md:grid-cols-2 w-full items-center lg:gap-16">
					<div className="w-full">
						<h2 className="text-subheader mb-3">
							Our Story<span className="text-masonry-blue">.</span>
						</h2>
						<div className="flex flex-col items-start gap-4 md:gap-2 text-balanced">
							<p>
								Hi there! We&apos;re Andy and Ty, a family duo with a
								shared passion for building high-quality, performant,
								flexible and scalable websites. With years of experience
								working in different agencies, we noticed a gap between
								what clients wanted and what these agencies were able to
								deliver.
							</p>
							<br />
							<p>
								We got sick of seeing how many businesses were stuck
								with outdated, slow websites that couldn&apos;t keep up
								with today&apos;s needs. We knew we could help by
								offering something better, With a focus on
								industry-leading technologies such as Next.js,
								PayloadCMS and Postgres. Our goal is to make modern,
								efficient web technology accessible to any business
								that&apos;s ready to stand out online.
							</p>
						</div>
					</div>
					<div className="flex-row gap-2 hidden md:flex justify-end">
						<Image src="https://tygr.dev/profile.png" alt="Ty" width={512} height={512} className="relative md:w-[192px] md:h-[192px] lg:size-[256px] translate-y-16 translate-x-16 border rounded-lg" />
						<Image src="https://github.com/andyMa5on.png" alt="Andy" width={512} height={512} className="relative md:w-[192px] md:h-[192px] lg:size-[256px] -translate-y-16 rounded-lg border" />
					</div>
				</div>
			</section>

			<section className="container my-24 animate-fade-in opacity-0 [--animation-delay:400ms]">
				<h2 className="text-center mb-8 text-4xl font-bold">
					Our values<span className="text-masonry-orange">.</span>
				</h2>

				<div className="grid gap-6">
					<ChecklistItem
						id={1}
						icon={
							<CircleCheckBig
								className="mt-1 text-masonry-orange"
								size={24}
							/>
						}
						colour="#FC6432"
						title="Innovation First"
						body="We believe that the best result's come from staying ahead of the curve. By using the latest technologies like Next.js and Payload CMS, we create modern, efficient websites that offer more flexibility, speed, and scalability than traditional solutions."
					/>
					<ChecklistItem
						id={2}
						icon={
							<CircleCheckBig
								className="mt-1 text-masonry-orange"
								size={24}
							/>
						}
						colour="#FC6432"
						title="Quality Over Quantity"
						body="We're dedicated to crafting each project with precision and care. We limit the number of clients we work with at any given time to ensure we can focus on quality and delivering the best possible results for every client."
					/>
					<ChecklistItem
						id={3}
						icon={
							<CircleCheckBig
								className="mt-1 text-masonry-orange"
								size={24}
							/>
						}
						colour="#FC6432"
						title="Client-Centric Approach"
						body="We don't believe in one-size-fits-all solutions. Every business is unique, and so are it's needs. Our process starts by understanding each clients goals and challenges so we can build a solution that truly serves their vision and drives growth."
					/>
					<ChecklistItem
						id={4}
						icon={
							<CircleCheckBig
								className="mt-1 text-masonry-orange"
								size={24}
							/>
						}
						colour="#FC6432"
						title="Transparency & Trust"
						body="We see our clients as partners, and we believe great partnerships are built on trust. That's why were open and transparent about our process, timelines, and costs. With us, clients always know whats happening, when, and why."
					/>
				</div>
			</section>

			<section className="container flex flex-col my-24 animate-fade-in opacity-0 [--animation-delay:500ms]">
				<h2 className="text-center mb-8 text-4xl font-bold">
					Technology We Use
					<span className="text-masonry-red">.</span>
				</h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
					<FeatureGridItem
						title="Payload CMS"
						body="A modern, headless content management system for creating and managing content, advanced features like access control, localization and more."
						icon={<Icons.Payload className="size-8" />}
						colour="var(--masonry-blue)"
						cta={false}
					/>
					<FeatureGridItem
						title="Next.js"
						body="Used by some of the largest companies in the world, Next.js is a meta-framework for React which provides Server Side Rendering, Built-in Optimizations, and more."
						icon={<Icons.NextJS className="size-8" />}
						colour="var(--masonry-orange)"
						cta={false}
					/>
					<FeatureGridItem
						title="PostgreSQL"
						body="A powerful, open-source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads."
						icon={
							<Icons.Postgres className="size-8" />
						}
						colour="var(--masonry-red)"
						cta={false}
					/>
					<FeatureGridItem
						title="TailwindCSS"
						body="A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
						icon={
							<Icons.Tailwind className="size-8" />
						}
						colour="var(--masonry-orange)"
						cta={false}
					/>
					<FeatureGridItem
						title="Docker"
						body="An open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly."
						icon={
							<Icons.Docker className="size-8" />
						}
						colour="var(--masonry-red)"
						cta={false}
					/>
					<FeatureGridItem
						title="Minio"
						body="MinIO is an object storage system. It is API compatible with the Amazon S3 cloud storage service. It is capable of working with unstructured data with the maximum supported object size being 50TB."
						icon={
							<Icons.Minio className="size-8" />
						}
						colour="var(--masonry-blue)"
						cta={false}
					/>
				</div>
			</section>

			<section className="container flex flex-col px-8 my-24 animate-fade-in opacity-0 [--animation-delay:600ms]">
				<h2 className="text-subheader text-center mb-8 text-for">
					FAQS
				</h2>
				<Faqs data={faq} />
			</section>
		</>
	);
}
