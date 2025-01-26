import TextShimmer from "@/components/ui/text-shimmer";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
	return (
		<section className="relative mx-auto mt-40 max-w-7xl px-6 text-center md:px-8">
			<div className="backdrop-filter-[12px] animate-fade-in group inline-flex h-7 -translate-y-4 items-center justify-between gap-1 rounded-full border dark:border-white/5 bg-black/5 dark:bg-white/10 px-3 text-xs text-white opacity-0 transition-all ease-in hover:cursor-pointer hover:bg-black/10 dark:hover:bg-white/15 dark:text-black">
				<TextShimmer className="inline-flex items-center justify-center">
					<span>Introducing Masonry Studio</span>{" "}
					<ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
				</TextShimmer>
			</div>
			<h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-bold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-white/40">
				Design, Develop, Deploy
			</h1>
			<p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
				At Masonry Studio, we believe in the power of design,
				development, and
				<br className="hidden md:block" /> deployment to create
				beautiful and functional websites.
			</p>
		</section>
	);
}
