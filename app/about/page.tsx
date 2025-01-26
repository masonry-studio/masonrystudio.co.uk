import lightImg from "@/public/about/banner-light.png";
import darkImg from "@/public/about/banner-dark.png";
import {
	ArrowRightIcon,
	CircleCheckBig,
	Code2,
	Container,
	FileJson2,
	LayoutDashboard,
	MonitorCog,
} from "lucide-react";
import Faqs from "@/components/faqs";
import Breadcrumb from "@/components/ui/breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import ChecklistItem from "@/components/cards/checklist-item";
import FeatureGridItem from "@/components/cards/feature-grid-item";

const faq = [
	{ id: 1, title: "test 1", content: ["test 1"] },
	{ id: 2, title: "test 2", content: ["test 2"] },
	{
		id: 3,
		title: "test 3",
		content: ["test 3 content 1", "test 3 content 2"],
	},
];

export default async function About() {
	return (
		<>
			<svg
				className="absolute mt-16 -z-10"
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

			<section className="container flex flex-row w-full my-24 p-8">
				<div className="w-full flex flex-col gap-5 items-start justify-center h-auto">
					<div>
						<h1 className="text-header">About Us</h1>
						<Breadcrumb />
					</div>
					<p className="min-h-[78px]">Content goes here</p>
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

			<section className="container my-24 max-w-[1400px]">
				<h2 className="text-subheader mb-3">
					Our Story<span className="text-[#0091ff]">.</span>
				</h2>
				<div className="flex flex-col gap-4 md:gap-2">
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
			</section>

			<section className="container my-24">
				<h2 className="text-subheader text-center mb-8">
					Our values<span className="text-[#FC6432]">.</span>
				</h2>

				<div className="grid gap-6">
					<ChecklistItem
						id={1}
						icon={
							<CircleCheckBig
								className="mt-1"
								color="#FC6432"
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
								className="mt-1"
								color="#FC6432"
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
								className="mt-1"
								color="#FC6432"
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
								className="mt-1"
								color="#FC6432"
								size={24}
							/>
						}
						colour="#FC6432"
						title="Transparency & Trust"
						body="We see our clients as partners, and we believe great partnerships are built on trust. That's why were open and transparent about our process, timelines, and costs. With us, clients always know whats happening, when, and why."
					/>
				</div>
			</section>

			<section className="container flex flex-col lg:flex-row my-24">
				<div className="lg:w-16">
					<h2 className="text-center mb-8 lg:mb-0 lg:-rotate-90 lg:flex lg:justify-center lg:translate-y-72 whitespace-nowrap text-4xl font-bold h-12">
						Technology We Use
						<span className="text-[#E5484D]">.</span>
					</h2>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
					<FeatureGridItem
						title="Payload CMS"
						body="A modern, headless content management system for creating and managing content, advanced features like access control, localization and more."
						icon={<MonitorCog size={32} />}
						colour="#0091FF"
						cta={true}
					/>
					<FeatureGridItem
						title="Next.js"
						body="Used by some of the largest companies in the world, Next.js is a meta-framework for React which provides Server Side Rendering, Built-in Optimizations, and more."
						icon={<Code2 size={32} />}
						colour="#FC6432"
						cta={true}
					/>
					<FeatureGridItem
						title="PostgreSQL"
						body="A powerful, open-source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads."
						icon={<FileJson2 size={32} />}
						colour="#E5484D"
						cta={true}
					/>
					<FeatureGridItem
						title="TailwindCSS"
						body="A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
						icon={<LayoutDashboard size={32} />}
						colour="#E5484D"
						cta={true}
					/>
					<FeatureGridItem
						title="Docker"
						body="An open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly."
						icon={<Container size={32} />}
						colour="#0091FF"
						cta={true}
					/>
					<FeatureGridItem
						title="Coolify"
						body="An open-source, all-in-one, PaaS that enables us to host and manage your applications, databases and other services with ease."
						icon={<Container size={32} />}
						colour="#FC6432"
						cta={true}
					/>
				</div>
			</section>

			<section className="container flex flex-col px-8 my-24">
				<h2 className="text-subheader text-center mb-8 text-for">
					FAQS
				</h2>
				<Faqs data={faq} />
			</section>
		</>
	);
}
