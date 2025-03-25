import { motion } from "framer-motion";
import { CornerDownRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function MobileLinks({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const mobileLinkVar = {
		initial: {
			y: "-20px",
			opacity: 0,
		},
		open: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
	};

	return (
		<>
			<motion.li
				variants={mobileLinkVar}
				className="border-grey-dark border-b py-0.5 pl-6 md:border-none"
			>
				<Link
					className={`hover:text-grey flex h-16 w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${open ? "[&_a]:translate-y-0" : ""
						}`}
					href={"/"}
					onClick={() => setOpen(!open)}
				>
					Home
				</Link>
			</motion.li>
			<motion.li
				variants={mobileLinkVar}
				className="border-grey-dark border-b py-0.5 pl-6 md:border-none"
			>
				<div
					className={`hover:text-grey flex h-16 w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${open ? "[&_a]:translate-y-0" : ""
						} select-none`}
				>
					Web Development
				</div>
			</motion.li>
			<motion.ul className="flex flex-col uppercase ease-in md:flex-row md:items-center md:normal-case">
				<motion.li
					variants={mobileLinkVar}
					className="border-grey-dark border-b py-0.5 pl-10 md:border-none"
				>
					<Link
						href="/development/start-ups"
						className={`hover:text-grey flex h-16 w-full items-center flex-row gap-3 text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${open ? "[&_a]:translate-y-0" : ""
							}`}
						onClick={() => {
							setOpen(!open);
						}}
					>
						<CornerDownRight className="w-4 h-4" />
						Start ups
					</Link>
				</motion.li>

				<motion.li
					variants={mobileLinkVar}
					className="border-grey-dark border-b py-0.5 pl-10 md:border-none"
				>
					<Link
						href="/development/bespoke"
						className={`hover:text-grey flex h-16 w-full items-center flex-row gap-3 text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${open ? "[&_a]:translate-y-0" : ""
							}`}
						onClick={() => {
							setOpen(!open);
						}}
					>
						<CornerDownRight className="w-4 h-4" />
						Bespoke
					</Link>
				</motion.li>
			</motion.ul>
			<motion.li
				variants={mobileLinkVar}
				className="border-grey-dark border-b py-0.5 pl-6 md:border-none"
			>
				<div
					className={`hover:text-grey flex h-16 w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${open ? "[&_a]:translate-y-0" : ""
						} select-none`}
				>
					Hosting
				</div>
			</motion.li>
			<motion.ul className="flex flex-col uppercase ease-in md:flex-row md:items-center md:normal-case">
				{/* <motion.li
					variants={mobileLinkVar}
					className="border-grey-dark border-b py-0.5 pl-10 md:border-none"
				>
					<Link
						href="/hosting/shared"
						className={`hover:text-grey flex h-16 w-full items-center flex-row gap-3 text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${open ? "[&_a]:translate-y-0" : ""
							}`}
						onClick={() => {
							setOpen(!open);
						}}
					>
						<CornerDownRight className="w-4 h-4" />
						Shared Hosting
					</Link>
				</motion.li>

				<motion.li
					variants={mobileLinkVar}
					className="border-grey-dark border-b py-0.5 pl-10 md:border-none"
				>
					<Link
						href="/hosting/dedicated"
						className={`hover:text-grey flex h-16 w-full items-center flex-row gap-3 text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${open ? "[&_a]:translate-y-0" : ""
							}`}
						onClick={() => {
							setOpen(!open);
						}}
					>
						<CornerDownRight className="w-4 h-4" />
						Dedicated Hosting
					</Link>
				</motion.li> */}
				<motion.li
					variants={mobileLinkVar}
					className="border-grey-dark border-b py-0.5 pl-10 md:border-none"
				>
					<Link
						href="/hosting/our-platform"
						className={`hover:text-grey flex h-16 w-full items-center flex-row gap-3 text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${open ? "[&_a]:translate-y-0" : ""
							}`}
						onClick={() => {
							setOpen(!open);
						}}
					>
						<CornerDownRight className="w-4 h-4" />
						Our Platform
					</Link>
				</motion.li>
			</motion.ul>
			<motion.li
				variants={mobileLinkVar}
				className="border-grey-dark border-b py-0.5 pl-6 md:border-none"
			>
				<Link
					className={`hover:text-grey flex h-16 w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${open ? "[&_a]:translate-y-0" : ""
						}`}
					href={"/about"}
					onClick={() => setOpen(!open)}
				>
					About
				</Link>
			</motion.li>
			<motion.li
				variants={mobileLinkVar}
				className="border-grey-dark border-b py-0.5 pl-6 md:border-none"
			>
				<Link
					className={`hover:text-grey flex h-16 w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${open ? "[&_a]:translate-y-0" : ""
						}`}
					href={"/contact"}
					onClick={() => setOpen(!open)}
				>
					Let&apos;s Talk
				</Link>
			</motion.li>
		</>
	);
}
