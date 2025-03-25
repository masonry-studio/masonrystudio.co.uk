"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Icons from "@/components/icons";

export default function Footer() {
	return (
		<>
			<div className="flex flex-col mt-12 border-t">
				<div className="flex flex-col justify-between w-full p-4 md:flex-row gap-8 sm:p-6 md:p-8">
					<div className="flex flex-col gap-4 md:w-full">
						<Link href='/'>
							<Icons.MasonryTitle />
						</Link>
						<div className="flex flex-col gap-2">
							<p>
								Email:{" "}
								<a href="mailto:hello@masonrystudio.co.uk">
									hello@masonrystudio.co.uk
								</a>
							</p>
							<p>Open: Mon - Fri 09:00 - 17:00</p>
						</div>
					</div>
					<div className="flex flex-row flex-wrap justify-between w-full gap-8">
						<div className="flex flex-col items-start gap-3 md:items-center">
							<h2 className="text-2xl font-bold">Web Dev</h2>
							<div className="flex flex-wrap items-start sm:flex-col gap-3 sm:items-center">
								<Link href="/development/start-ups">
									<Button
										variant="link"
										className="p-0 sm:px-4 sm:py-2"
									>
										Start Up&apos;s
									</Button>
								</Link>
								<Link href="/development/bespoke">
									<Button
										variant="link"
										className="p-0 sm:px-4 sm:py-2"
									>
										Bespoke
									</Button>
								</Link>
								{/* <Link href="/development/ecommerce">
									<Button
										variant="link"
										className="p-0 sm:px-4 sm:py-2"
									>
										Ecommerce
									</Button>
								</Link> */}
							</div>
						</div>
						<div className="flex flex-col items-start gap-3 sm:items-center">
							<h2 className="text-2xl font-bold">Hosting</h2>
							<div className="flex flex-wrap items-start sm:flex-col gap-3 sm:items-center">
								<Link href="/hosting/our-platform">
									<Button
										variant="link"
										className="p-0 sm:px-4 sm:py-2"
									>
										Our Platform
									</Button>
								</Link>
								{/* <Link href="/hosting/shared">
									<Button
										variant="link"
										className="p-0 sm:px-4 sm:py-2"
									>
										Shared Hosting
									</Button>
								</Link>
								<Link href="/hosting/dedicated">
									<Button
										variant="link"
										className="p-0 sm:px-4 sm:py-2"
									>
										Dedicated Hosting
									</Button>
								</Link> */}
							</div>
						</div>
						<div className="flex flex-col items-start gap-3 sm:items-center">
							<h2 className="text-2xl font-bold">Other</h2>
							<div className="flex flex-wrap items-start sm:flex-col gap-3 sm:items-center">
								<Link href="/about">
									<Button
										variant="link"
										className="p-0 sm:px-4 sm:py-2"
									>
										About Us
									</Button>
								</Link>
								{/* <Link href="/work">
									<Button
										variant="link"
										className="p-0 sm:px-4 sm:py-2"
									>
										Our Work
									</Button>
								</Link> */}
								<Link href="/contact">
									<Button
										variant="link"
										className="p-0 sm:px-4 sm:py-2"
									>
										Let&apos;s Talk
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-between w-full px-4 py-2 border-t md:flex-row gap-4 dark:bg-neutral-900/50 bg-neutral-100/50">
					<span className="text-sm text-neutral-500 dark:text-neutral-400">
						Copyright © 2025 Masonry Studio. All rights reserved.
					</span>
					<div className="flex flex-row items-center">
						<Link href="/tos">
							<Button
								variant="link"
								className="text-neutral-500 dark:text-neutral-400"
							>
								Terms & Conditions
							</Button>
						</Link>
						<div className="border-l border-neutral-500" />
						<Link href="/privacy">
							<Button
								variant="link"
								className="text-neutral-500 dark:text-neutral-400"
							>
								Privacy Policy
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
