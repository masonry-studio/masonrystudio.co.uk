import { AnimatedBackup } from "@/app/hosting/our-platform/backup";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { ArrowRightIcon, Bot, CheckCircle2Icon, GitCommitIcon, MoreHorizontal, TriangleAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OurPlatformPage() {
	const deploymentWords = ["website,", "store,", "platform,", "idea,", "business,"];
	const hostingWords = ["deployment.", "SEO.", "uptime.", "performance.", "storage.", "security."];

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

			<section className="container flex flex-row w-full my-24 p-8 animate-fade-in opacity-0 [--animation-delay:300ms]">
				<div className="flex flex-col items-start justify-center w-full h-auto gap-5">
					<div className="w-full">
						<h1 className="text-header">Our Platform</h1>
						<Breadcrumbs />
					</div>
					<p className="pb-4 md:max-w-1/2 text-masonry-grey">We use the latest technologies like Next.js and Payload CMS along with a hosting solution that uses a containerized solution to deploy your site to the cloud.</p>
					<Link href="/contact">
						<button className="my-auto backdrop-filter-[12px] group flex flex-row items-center gap-1 h-7 rounded-full border dark:border-white/5 dark:text-white text-black bg-black/5 dark:bg-white/20 px-3 text-xs hover:cursor-pointer hover:bg-black/10 dark:hover:bg-white/15">
							Get in touch <ArrowRightIcon size={14} />
						</button>
					</Link>
				</div>
			</section>
			<section className="container flex flex-row w-full my-24 p-8 animate-fade-in opacity-0 [--animation-delay:400ms]">
				<div className="flex flex-row items-center w-full gap-24 rounded-xl">
					<div className="flex flex-col w-full h-full gap-4">
						<div className="text-2xl sm:text-3xl md:text-4xl font-bold font-display whitespace-nowrap min-w-[530px]">
							Focus on your<FlipWords words={deploymentWords} /> <br />
							Not your<FlipWords words={hostingWords} />
						</div>
						<p className="text-masonry-grey">
							Using a containerized solution, we can rapidly and easily deploy your site to our cloud without sacrificing
							performance, security, or scalability. In the event one of our servers goes down, your site will automatically
							failover to another server, ensuring your site is always online.
							<br /><br />
							Getting big? Great! You&apos;re in good hands. Our platform is designed to scale with you, so you can focus on growing your business
							without the headache of managing your infrastructure.
						</p>
					</div>
					<div className="grid-cols-2 gap-4 justify-items-center relative w-full h-[20rem] overflow-hidden hidden lg:grid">
						<Image className="absolute left-0 border w-72 top-8 rounded-xl" src="/hosting/server-rack.svg" alt="server rack" width={680} height={1330} />
						<Image className="absolute right-0 border w-72 rounded-xl" src="/hosting/server-rack.svg" alt="server rack" width={680} height={1330} />
					</div>
				</div>
			</section>
			<section className="container flex flex-row w-full my-24 p-8 animate-fade-in opacity-0 [--animation-delay:500ms]">
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-16">
					<div className="flex flex-col items-start gap-8">
						<div className="flex flex-col items-start gap-4">
							<h1 className="text-subheader font-display">From localhost to https, <br /> in seconds</h1>
							<p className="text-masonry-grey">
								Using Git, we can push a new update to your site and have the changed applied to production in seconds. Don&apos;t fret! Your site will never go down during this process.
							</p>
						</div>
						<div className="flex flex-col items-center w-full h-full gap-4 sm:items-start md:p-4">
							<div className="-z-10 border rounded-xl flex flex-col gap-3 overflow-hidden sm:max-w-sm w-[calc(100%-2rem)] sm:w-4/5 p-4 min-h-56 max-h-56 h-full">
								<div className="flex flex-row w-full gap-2">
									<div className="bg-red-500 rounded-full size-2"></div>
									<div className="bg-yellow-500 rounded-full size-2"></div>
									<div className="bg-green-500 rounded-full size-2"></div>
								</div>
								<code className="overflow-hidden font-mono text-xs whitespace-nowrap">
									~/sites/tygr.dev: git push<br />
									Enumerating objects: 12. done. <br />
									Counting objects: 100% (12/12). done.<br />
									Writing objects: 100% (12/12). 154 bytes. done.<br />
									Total 12 (delta 0), reused 0 (delta 0).<br />
									remote: Resolving deltas: 100% (3/3), completed with 3 local objects.<br />
									To github.com:tygrdotdev/tygr.dev.git<br />
									9c913bf..5de1030 main -&gt; main<br />
									<br />
									✅ tygr.dev has been deployed!
								</code>
							</div>
							<div className="z-10 flex flex-col w-full h-full overflow-hidden border -mt-36 sm:-mt-24 sm:self-end rounded-xl sm:max-w-sm sm:w-4/5 max-h-56">
								<div className="flex flex-row items-center justify-between w-full p-2 px-2 border-b gap-2 bg-neutral-100 dark:bg-neutral-950">
									<div className="flex flex-row gap-2">
										<div className="bg-red-500 rounded-full size-2"></div>
										<div className="bg-yellow-500 rounded-full size-2"></div>
										<div className="bg-green-500 rounded-full size-2"></div>
									</div>
									<p className="font-mono text-xs text-masonry-grey">tygr.dev</p>
								</div>
								<Image src="/hosting/git-push.png" alt="deployment" width={680} height={300} className="object-cover object-center" />
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start gap-8">
						<div className="flex flex-col items-start gap-4">
							<h1 className="text-subheader font-display">Something break? <br /> Don&apos;t Sweat.</h1>
							<p className="text-masonry-grey">
								In the event we screw something up, we can easily rollback your site, store or platform to an earlier version with zero downtime. Go ahead, ship on a Friday.
							</p>
						</div>
						<div className="flex flex-col w-full h-full">
							<div className="flex flex-row gap-2 items-center justify-between border rounded-xl p-3 w-full whitespace-nowrap max-w-[400px]">
								<div className="flex flex-col items-start justify-between overflow-hidden gap-2">
									<div className="flex flex-row items-start justify-between w-full gap-1">
										<p className="text-sm"><span className="text-masonry-grey">tygr.dev/</span>aj4y2nf91</p>
										<p className="text-sm">1d ago</p>
									</div>
									<div className="flex flex-row items-start gap-1">
										<GitCommitIcon size={24} />
										<div className="flex flex-row w-full gap-2">
											<p>2a67b43 </p>
											<span className="font-mono">feat: add album preview...</span>
										</div>
									</div>
								</div>
								<CheckCircle2Icon size={24} />
							</div>
							<svg width="117" height="152" viewBox="0 0 117 152" fill="none" xmlns="http://www.w3.org/2000/svg" className="self-center">
								<g clipPath="url(#clip0_461_505)">
									<path d="M4 4V60C4 66.6274 9.37259 72 16 72H104C110.627 72 116 77.3726 116 84V152" stroke="url(#paint0_linear_461_505)" strokeWidth="2" />
									<path d="M4 4V60C4 66.6274 9.37259 72 16 72H104C110.627 72 116 77.3726 116 84V152" stroke="url(#paint1_linear_461_505)" strokeWidth="2" />
									<mask id="mask0_461_505" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="8" height="8">
										<path d="M8 0H0V8H8V0Z" fill="white" />
									</mask>
									<g mask="url(#mask0_461_505)">
										<path fillRule="evenodd" clipRule="evenodd" d="M4 0.5L8 7.5H0L4 0.5Z" fill="#0091FF" />
									</g>
								</g>
								<defs>
									<linearGradient id="paint0_linear_461_505" x1="116" y1="72" x2="4.00001" y2="72" gradientUnits="userSpaceOnUse">
										<stop stopColor="#E5484D" />
										<stop offset="0.5" stopColor="#FC6432" />
										<stop offset="1" stopColor="#0091FF" />
									</linearGradient>
									<clipPath id="clip0_461_505">
										<rect width="117" height="152" fill="white" />
									</clipPath>
								</defs>
							</svg>

							<div className="flex flex-row gap-2 items-center justify-between border rounded-xl p-3 w-full whitespace-nowrap max-w-[400px] self-end">
								<div className="flex flex-col items-start justify-between overflow-hidden gap-2">
									<div className="flex flex-row items-start justify-between w-full gap-1">
										<p className="text-sm"><span className="text-masonry-grey">tygr.dev/</span>j47xnf9yj</p>
										<p className="text-sm">10m ago</p>
									</div>
									<div className="flex flex-row items-start gap-1">
										<GitCommitIcon size={24} />
										<div className="flex flex-row w-full gap-2">
											<p>a7dcb3f </p>
											<span className="font-mono">fix: spotify now playing...</span>
										</div>
									</div>
								</div>
								<TriangleAlert size={24} />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="container flex flex-row w-full my-24 p-8 animate-fade-in opacity-0 [--animation-delay:600ms]">
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-16">
					<div className="flex flex-col items-start gap-4">
						<h1 className="text-subheader font-display">Take a peek into the future</h1>
						<p className="text-masonry-grey">
							While working on a new feature, our platform automatically spins up a preview deployment of your site, store or platform so you can see what we&apos;re cooking up before it goes live.
						</p>
						<div className="flex flex-col items-start justify-center w-full h-full">
							<div className="flex flex-row items-start w-full pl-3 gap-3">
								<div className="flex flex-col items-center gap-0">
									<div className="h-6 rounded-full border-l-3" />
									<GitCommitIcon size={24} className="text-masonry-grey" />
									<div className="h-8 rounded-full border-l-3" />
								</div>
								<div className="flex flex-row items-center pt-6 gap-2">
									<Link href="https://github.com/tygrdotdev" target="_blank">
										<Image src="https://github.com/tygrdotdev.png" alt="tygrdotdev" width={24} height={24} className="border rounded-full" />
									</Link>
									<Link href="https://github.com/masonry-studio/masonrystudio.co.uk/commit/f26058c45a4c1921e6a0d03dfbfdd18342f6fc79" target="_blank">
										<p className="font-mono text-sm text-masonry-grey">feat: create contact page</p>
									</Link>
								</div>
							</div>
							<div className="w-full border rounded-lg">
								<div className="flex flex-row items-center justify-between px-4 py-2 border-b gap-2 bg-neutral-100 dark:bg-neutral-900">
									<div className="flex flex-row items-center text-sm gap-2">
										<Bot size={24} />
										<p className="font-semibold">masonry-studio-bot</p>
										<span className="px-2 border rounded-full border-black/10 dark:border-white/10">bot</span>
										<p className="hidden text-neutral-500 dark:text-neutral-400 lg:block">commented today</p>
									</div>
									<MoreHorizontal size={24} className="cursor-pointer" />
								</div>
								<div className="p-4">
									<p>
										The preview deployment is ready 🟢
										<br /> <br />
										<span className="text-blue-500 cursor-pointer">
											Open Preview
										</span>{" "}
										{" "}|{" "}
										<span className="text-blue-500 cursor-pointer">
											Open Build Logs
										</span>
										<br /> <br />
										Last Updated at: 2025-03-12 14:23:37 CET
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start gap-4">
						<h1 className="text-subheader font-display">Plan B? We got it.</h1>
						<p className="text-masonry-grey">
							When it comes to servers, sometimes they can be
							un-predictable. Luckily, we come prepared. All persistent storage is automatically
							backed up every hour ensuring if anything breaks, we got
							your back.
						</p>
						<div className="w-full">
							<AnimatedBackup />
						</div>
					</div>
				</div>
			</section>
			<section className="container grid grid-cols-1 md:grid-cols-2 w-full mt-24 mb-12 p-8 animate-fade-in opacity-0 [--animation-delay:700ms] gap-8 md:gap-4">
				<div className="flex flex-col items-center w-full text-center gap-2 md:text-start md:items-start">
					<h1 className="text-subheader">Don&apos;t hold back. Ship with confidence.</h1>
					<p className="text-masonry-grey">Let us handle the headache of hosting. We have cheap plans for hobbyists and small businesses and more robust options for when it get&apos;s serious.</p>
				</div>
				<div className="flex flex-row items-center justify-center w-full md:flex-col lg:flex-row gap-4 md:items-end lg:items-center lg:justify-end">
					<Link href="/hosting/shared">
						<Button variant="secondary">
							Shared Hosting
						</Button>
					</Link>
					<Link href="/hosting/dedicated">
						<Button>
							Dedicated Hosting
						</Button>
					</Link>
				</div>
			</section>
		</>
	)
}