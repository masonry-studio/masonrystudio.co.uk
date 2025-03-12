import Breadcrumbs from "@/components/ui/breadcrumbs";
import { FlipWords } from "@/components/ui/flip-words";
import { ArrowRightIcon, CheckCircle2Icon, GitCommitIcon, TriangleAlert } from "lucide-react";
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
				<div className="w-full flex flex-col gap-5 items-start justify-center h-auto">
					<div className="w-full">
						<h1 className="text-header">Our Platform</h1>
						<Breadcrumbs />
					</div>
					<p className="pb-4 md:max-w-1/2 text-neutral-500 dark:text-neutral-400">We use the latest technologies like Next.js and Payload CMS along with a hosting solution that uses a containerized solution to deploy your site to the cloud.</p>
					<Link href="/contact">
						<button className="my-auto backdrop-filter-[12px] group flex flex-row items-center gap-1 h-7 rounded-full border dark:border-white/5 dark:text-white text-black bg-black/5 dark:bg-white/20 px-3 text-xs hover:cursor-pointer hover:bg-black/10 dark:hover:bg-white/15">
							Get in touch <ArrowRightIcon size={14} />
						</button>
					</Link>
				</div>
			</section>
			<section className="container flex flex-row w-full my-24 p-8 animate-fade-in opacity-0 [--animation-delay:400ms]">
				<div className="flex flex-row gap-24 items-center w-full rounded-xl">
					<div className="flex flex-col gap-4 w-full h-full">
						<div className="text-2xl sm:text-3xl md:text-4xl font-bold font-display whitespace-nowrap">
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
						<Image className="absolute w-72 top-8 left-0 border rounded-xl" src="/hosting/server-rack.svg" alt="server rack" width={680} height={1330} />
						<Image className="absolute w-72 right-0 border rounded-xl" src="/hosting/server-rack.svg" alt="server rack" width={680} height={1330} />
					</div>
				</div>
			</section>
			<section className="container flex flex-row w-full my-24 p-8 animate-fade-in opacity-0 [--animation-delay:500ms]">
				<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-16 md:gap-12 lg:gap-16">
					<div className="gap-8 flex flex-col items-start">
						<div className="flex flex-col gap-4 items-start">
							<h1 className="text-subheader font-display">From localhost to https, <br /> in seconds</h1>
							<p className="text-masonry-grey">
								Using Git, we can push a new update to your site and have the changed applied to production in seconds. Don&apos;t fret! Your site will never go down during this process.
							</p>
						</div>
						<div className="flex flex-col gap-4 items-center sm:items-start w-full h-full md:p-4">
							<div className="-z-10 border rounded-xl flex flex-col gap-3 overflow-hidden sm:max-w-sm w-[calc(100%-2rem)] sm:w-4/5 p-4 min-h-56 max-h-56 h-full">
								<div className="w-full flex flex-row gap-2">
									<div className="size-2 bg-red-500 rounded-full"></div>
									<div className="size-2 bg-yellow-500 rounded-full"></div>
									<div className="size-2 bg-green-500 rounded-full"></div>
								</div>
								<code className="font-mono text-xs whitespace-nowrap overflow-hidden">
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
							<div className="-mt-36 sm:-mt-24 z-10 sm:self-end border rounded-xl flex flex-col overflow-hidden w-full sm:max-w-sm sm:w-4/5 max-h-56 h-full">
								<div className="w-full flex flex-row gap-2 px-2 items-center justify-between p-2 border-b bg-neutral-950">
									<div className="flex flex-row gap-2">
										<div className="size-2 bg-red-500 rounded-full"></div>
										<div className="size-2 bg-yellow-500 rounded-full"></div>
										<div className="size-2 bg-green-500 rounded-full"></div>
									</div>
									<p className="text-masonry-grey font-mono text-xs">tygr.dev</p>
								</div>
								<Image src="/hosting/git-push.png" alt={"deployment"} width={680} height={300} className="object-cover object-center" />
							</div>
						</div>
					</div>
					<div className="gap-8 flex flex-col items-start">
						<div className="flex flex-col gap-4 items-start">
							<h1 className="text-subheader font-display">Something break? <br /> Don&apos;t Sweat.</h1>
							<p className="text-masonry-grey">
								In the event we screw something up, we can easily rollback your site, store or platform to an earlier version with zero downtime. Go ahead, ship on a Friday.
							</p>
						</div>
						<div className="flex flex-col w-full h-full">
							<div className="flex flex-row gap-2 items-center justify-between border rounded-xl p-3 w-full whitespace-nowrap max-w-2/3">
								<div className="flex flex-col gap-2 items-start justify-between overflow-hidden">
									<div className="flex flex-row gap-1 items-start justify-between w-full">
										<p className="text-sm"><span className="text-masonry-grey">tygr.dev/</span>aj4y2nf91</p>
										<p className="text-sm">1d ago</p>
									</div>
									<div className="flex flex-row gap-1 items-start">
										<GitCommitIcon size={24} />
										<div className="flex flex-row gap-2 w-full">
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

							<div className="flex flex-row gap-2 items-center justify-between border rounded-xl p-3 w-full whitespace-nowrap max-w-2/3 self-end">
								<div className="flex flex-col gap-2 items-start justify-between overflow-hidden">
									<div className="flex flex-row gap-1 items-start justify-between w-full">
										<p className="text-sm"><span className="text-masonry-grey">tygr.dev/</span>j47xnf9yj</p>
										<p className="text-sm">10m ago</p>
									</div>
									<div className="flex flex-row gap-1 items-start">
										<GitCommitIcon size={24} />
										<div className="flex flex-row gap-2 w-full">
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

			</section>
		</>
	)
}