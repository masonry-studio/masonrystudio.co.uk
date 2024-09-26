import Link from "next/link";
import Icons from "../icons";
import NavbarLinks from "./links";

export default function Navbar() {
	return (
		<nav className="flex flex-row w-full border-b justify-between px-6 py-4 animate-fade-in fixed left-0 top-0 z-50 -translate-x-4 opacity-0 backdrop-blur-md [--animation-delay:600ms]">
			<Link href="/">
				<Icons.Masonry className="h-8 w-8" />
			</Link>
			<div className="flex flex-row gap-4 items-center">
				<NavbarLinks />
			</div>
		</nav>
	)
}