"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
	const pathname = usePathname();
	const breadcrumbs = pathname.split("/");
	breadcrumbs.shift();

	return (
		<>
			<ul className="flex items-center h-3 gap-2 text-sm">
				<li className="text-masonry-grey list-none hover:text-black dark:hover:text-white transition-colors">
					<Link href="/">Home</Link>
				</li>
				<li className="text-[#9CA5AF] list-none">
					<h4><ChevronRight size={18}/></h4>
				</li>
				{breadcrumbs.map((item, index) => {
					const href =
						"/" + breadcrumbs.slice(0, index + 1).join("/");
					return (
						<li
							key={index}
							className="text-masonry-grey last-of-type:text-primary list-none hover:text-black dark:hover:text-white transition-colors"
						>
							<Link className="capitalize" href={href}>
								{item}
							</Link>
							{index < breadcrumbs.length - 1 && (
								<h4 className="pl-2"> <ChevronRight size={18} /> </h4>
							)}
						</li>
					);
				})}
			</ul>
		</>
	);
}
