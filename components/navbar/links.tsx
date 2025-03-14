"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme/toggle";

export default function NavbarLinks() {
	return (
		<NavigationMenu className="hidden sm:block">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						Web Development
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
							<ListItem
								href="/development/start-ups"
								title="Start Ups"
							>
								Professional and affordable web development
								services for start-ups.
							</ListItem>
							<ListItem
								href="/development/bespoke"
								title="Bespoke"
							>
								Need something custom? We can help you with
								that.
							</ListItem>
							{/* TODO: Uncomment this when we have ecommerce plans in action */}
							{/* <ListItem href="/development/start-ups" title="Ecommerce">
								Easily sell your products online with our ecommerce solutions.
							</ListItem> */}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Hosting</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
							<ListItem
								href="/hosting/shared"
								title="Shared Hosting"
							>
								Cheap and reliable shared hosting for any kind
								of website.
							</ListItem>
							<ListItem
								href="/hosting/dedicated"
								title="Dedicated Hosting"
							>
								High performance dedicated hosting for your
								business.
							</ListItem>
							<ListItem
								href="/hosting/our-platform"
								title="Our Platform"
							>
								Learn more about how our hosting platform works.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/about">
						<Button variant="ghost">About</Button>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className="px-4">
					<Link href="/contact">
						<Button>Let&apos;s Talk</Button>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<ThemeToggle />
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = ({
	ref,
	className,
	title,
	children,
	...props
}: React.ComponentPropsWithoutRef<"a"> & {
	ref?: React.RefObject<React.ElementRef<"a">>;
}) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">
						{title}
					</div>
					<p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
};
ListItem.displayName = "ListItem";
