import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
	return (
		<>
			<div className="flex flex-col items-center justify-center w-full min-h-screen-no-nav gap-4">
				<h1 className="text-3xl font-bold font-display">
					┐(￣∀￣)┌
				</h1>
				<p className="text-xl text-neutral-500 dark:text-neutral-400">
					This page doesn't exist or you don't have access to it.
				</p>
				<Link href="/">
					<Button>
						Back to saftey
					</Button>
				</Link>
			</div>
		</>
	)
}