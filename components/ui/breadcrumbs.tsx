"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Breadcrumbs() {
	const pathname = usePathname();
	const breadcrumbs = pathname.split("/");
	breadcrumbs.shift();

	return (
		<>
			<ul className="flex items-center h-3 text-sm gap-2">
				<li className="list-none text-masonry-grey hover:text-black dark:hover:text-white transition-colors">
					<Link href="/">Home</Link>
				</li>
				{breadcrumbs.map((item, index) => {
					const path = breadcrumbs.slice(0, index + 1).join("/");
					const name = item.charAt(0).toUpperCase() + item.slice(1);
					return (
						<React.Fragment key={index}>
							<li className="text-[#9CA5AF] list-none">
								<h4><ChevronRight size={18} /></h4>
							</li>
							{index === breadcrumbs.length - 1 ? (
								<li key={index} className="list-none text-masonry-grey hover:text-black dark:hover:text-white transition-colors">
									<Link href={`/${path}`}>{name.split("-").map((v) => `${v.slice(0, 1).toUpperCase()}${v.slice(1)} `)}</Link>
								</li>
							) : (
								<li key={index} className="list-none text-masonry-grey">
									{name}
								</li>
							)}
						</React.Fragment>
					);
				})}
			</ul>
		</>
	);
}
