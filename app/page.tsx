import Globe from "@/components/globe";
import { Button } from "@/components/ui/button";
import TextShimmer from "@/components/ui/text-shimmer";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<section className="relative px-6 pb-24 mx-auto mt-40 text-center max-w-7xl md:px-8">
				<div className="backdrop-filter-[12px] animate-fade-in group inline-flex h-7 -translate-y-4 items-center justify-between gap-1 rounded-full border dark:border-white/5 bg-black/5 dark:bg-white/10 px-3 text-xs text-white opacity-0 transition-all ease-in hover:cursor-pointer hover:bg-black/10 dark:hover:bg-white/15 dark:text-black">
					<Link href="/about">
						<TextShimmer className="inline-flex items-center justify-center">
							<span>Introducing Masonry Studio</span>{" "}
							<ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
						</TextShimmer>
					</Link>
				</div>
				<h1 className="animate-fade-in -translate-y-4 text-balance bg-linear-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-bold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-white/40">
					Design, Develop, Deploy
				</h1>
				<p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
					At Masonry Studio, we believe in the power of design,
					development, and
					<br className="hidden md:block" /> deployment to create
					beautiful and functional websites.
				</p>
				<div className="flex flex-row gap-4 items-center justify-center animate-fade-in [--animation-delay:400ms] -translate-y-4 opacity-0">
					<Link href="/contact">
						<Button>Contact Us</Button>
					</Link>
					<Link href="/about">
						<Button variant="secondary">Learn More</Button>
					</Link>
				</div>
			</section>
			<div className="flex flex-col gap-32 items-center max-w-[1400px] mx-auto">
				<section className="grid grid-cols-1 gap-16 lg:gap-16 xl:gap-32 lg:grid-cols-2 px-4 justify-between animate-fade-in opacity-0 [--animation-delay:600ms]">
					<Image
						src="/home/start-ups.png"
						alt="Placeholder"
						width={1200}
						height={800}
						className="relative w-full"
					/>
					<div className="flex flex-col items-start w-full gap-6">
						<div className="flex flex-col items-start gap-2">
							<h2 className="text-4xl font-bold font-display">
								Start Up&apos;s
								<span className="text-blue-500">.</span>
							</h2>
							<p className="text-sans font-normal text-gray-400 max-w-[1200px]">
								Choose from our templates, designed specifically
								for startups and built with Next.js and a
								headless CMS. They offer speed, flexibility, and
								scalability to meet the needs of growing
								businesses..
								<br />
								<br />
								Select a layout, and we&apos;ll customize it
								with your branding-colors, logo, and content—to
								create a professional, unique site.
								<br />
								<br />
								Easily manage and update your site as your
								business evolves. Launch a website that grows
								with your startup!
							</p>
						</div>
						<Link href="/development/start-ups">
							<Button>Learn More</Button>
						</Link>
					</div>
				</section >
				<section className="grid grid-cols-1 gap-16 lg:gap-16 xl:gap-32 lg:grid-cols-2 px-4 justify-between animate-fade-in opacity-0 [--animation-delay:700ms]">
					<div className="block lg:hidden">
						<Image
							src="/home/bespoke.png"
							alt="Placeholder"
							width={1200}
							height={800}
							className="w-full"
						/>
					</div>
					<div className="flex flex-col items-start gap-6 lg:pl-10">
						<div className="flex flex-col items-start gap-2">
							<h2 className="text-4xl font-bold font-display">
								Bespoke
								<span className="text-orange-500">.</span>
							</h2>
							<p className="text-sans font-normal text-gray-400 max-w-[1200px]">
								Get a bespoke website designed and built from
								scratch, tailored to your startup&apos;s unique
								needs. Our team works with you to create a
								custom site that reflects your brand&apos;s
								vision and goals, ensuring a seamless user
								experience and professional design.
								<br />
								<br />
								Built with Next.js and a headless CMS, your site
								will be fast, scalable, and easy to manage.
								Whether you need a landing page or a full-scale
								platform, we deliver a solution that&apos;s 100%
								unique to your business.
							</p>
						</div>
						<Link href="/development/bespoke">
							<Button>Learn More</Button>
						</Link>
					</div>
					<div className="hidden lg:block">
						<Image
							src="/home/bespoke.png"
							alt="Placeholder"
							width={1200}
							height={800}
							className="w-full"
						/>
					</div>
				</section>
				<section className="grid grid-cols-1 gap-16 lg:gap-16 xl:gap-32 lg:grid-cols-2 px-4 justify-between animate-fade-in opacity-0 [--animation-delay:800ms]">
					<div className="w-full">
						<Globe />
					</div>
					<div className="flex flex-col items-start w-full gap-6">
						<div className="flex flex-col items-start w-full gap-2">
							<h2 className="text-4xl font-bold font-display">
								Hosting<span className="text-red-500">.</span>
							</h2>
							<p className="w-full font-normal text-gray-400 text-sans">
								Host your business website on our reliable,
								high-performance platform, designed for speed
								and scalability. Our hosting ensures fast load
								times and smooth user experiences.
								<br />
								<br />
								To prevent downtime, our servers are linked to a
								backup server using Docker Swarm, ensuring
								continuous availability even during maintenance
								or unexpected issues.
								<br />
								<br />
								Enjoy secure, scalable hosting that grows with
								your business!
							</p>
						</div>
						<Link href="/hosting/our-platform">
							<Button>Learn More</Button>
						</Link>
					</div>
				</section>
			</div >
		</>
	);
}
