"use client";

import React from "react";
import Link from "next/link";
import Icons from "../icons";
import NavbarLinks from "./links";
import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileLinks from "@/components/navbar/mobile-links";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Navbar() {
	const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] =
		React.useState<boolean>(false);

	React.useEffect(() => {
		const html = document.querySelector("html");
		if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
	}, [hamburgerMenuIsOpen]);

	React.useEffect(() => {
		const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);
		window.addEventListener("orientationchange", closeHamburgerNavigation);
		window.addEventListener("resize", closeHamburgerNavigation);

		return () => {
			window.removeEventListener(
				"orientationchange",
				closeHamburgerNavigation
			);
			window.removeEventListener("resize", closeHamburgerNavigation);
		};
	}, [setHamburgerMenuIsOpen]);

	const mobilenavbarVariant = {
		initial: {
			opacity: 0,
			scale: 1,
		},
		animate: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.2,
				ease: "easeOut",
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.2,
				delay: 0.2,
				ease: "easeOut",
			},
		},
	};

	const containerVariants = {
		open: {
			transition: {
				staggerChildren: 0.06,
			},
		},
	};

	return (
		<>
			<header className="animate-fade-in fixed left-0 top-0 z-50 w-full -translate-y-4 border-b opacity-0 backdrop-blur-md [--animation-delay:600ms]">
				<div className="container flex h-16 items-center justify-between">
					<Link className="text-md flex items-center" href="/">
						<Icons.Masonry className="w-8 h-8" />
					</Link>
					<div className="ml-auto items-center gap-2 flex-row hidden md:flex">
						<NavbarLinks />
					</div>
					<button
						className="ml-6 md:hidden"
						onClick={() => setHamburgerMenuIsOpen((open) => !open)}
					>
						<span className="sr-only">Toggle menu</span>
						{hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
					</button>
				</div>
			</header>
			<AnimatePresence>
				<motion.nav
					initial="initial"
					exit="exit"
					variants={mobilenavbarVariant}
					animate={hamburgerMenuIsOpen ? "animate" : "exit"}
					className={cn(
						`bg-background/70 fixed left-0 top-0 z-50 h-dvh w-full overflow-auto backdrop-blur-md`,
						{
							"pointer-events-none": !hamburgerMenuIsOpen,
						}
					)}
				>
					<div className="container flex h-16 items-center justify-between">
						<Link
							className="text-md flex items-center"
							href="/"
							onClick={() =>
								setHamburgerMenuIsOpen((open) => !open)
							}
						>
							<Icons.Masonry className="w-8 h-8" />
						</Link>

						<button
							className="ml-6 md:hidden"
							onClick={() =>
								setHamburgerMenuIsOpen((open) => !open)
							}
						>
							<span className="sr-only">Toggle menu</span>
							{hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
						</button>
					</div>
					<motion.ul
						className="flex flex-col uppercase ease-in md:flex-row md:items-center md:normal-case"
						variants={containerVariants}
						initial="initial"
						animate={hamburgerMenuIsOpen ? "open" : "exit"}
						layout="position"
					>
						<ScrollArea className="h-screen-no-nav">
							<MobileLinks
								open={hamburgerMenuIsOpen}
								setOpen={setHamburgerMenuIsOpen}
							/>
						</ScrollArea>
					</motion.ul>
				</motion.nav>
			</AnimatePresence>
		</>
	);
}
