import Link from "next/link";
import Icons from "../icons";
import NavbarLinks from "./links";

export default function Navbar() {
	return (
		<nav className="flex flex-row w-full border-b justify-between px-6 py-4">
			<Link href="/">
				<Icons.Masonry className="h-8 w-8" />
			</Link>
			<div className="flex flex-row gap-4 items-center">
				<NavbarLinks />
			</div>
		</nav>
	)
}