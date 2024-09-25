import Link from "next/link";
import Icons from "./icons";
import { ThemeToggle } from "./theme/toggle";

export default function Navbar() {
	return (
		<nav className="flex flex-row w-full border-b justify-between p-4">
			<Link href="/">
				<Icons.Masonry className="h-8 w-8" />
			</Link>
			<div />
			<div>
				<ThemeToggle />
			</div>
		</nav>
	)
}