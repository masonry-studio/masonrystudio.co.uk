"use client"

import Icons from "@/components/icons";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";
import { Archive, Code, ContainerIcon, Database, DatabaseBackup, Package } from "lucide-react";
import { forwardRef, useRef } from "react";

const Circle = forwardRef<
	HTMLDivElement,
	{ className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				"z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
				className,
			)}
		>
			{children}
		</div>
	)
})

export function AnimatedBackup({
	className,
}: {
	className?: string
}) {
	const containerRef = useRef<HTMLDivElement>(null)
	const div1Ref = useRef<HTMLDivElement>(null)
	const div2Ref = useRef<HTMLDivElement>(null)
	const div3Ref = useRef<HTMLDivElement>(null)
	const div4Ref = useRef<HTMLDivElement>(null)
	const div5Ref = useRef<HTMLDivElement>(null)
	const div6Ref = useRef<HTMLDivElement>(null)
	const div7Ref = useRef<HTMLDivElement>(null)

	return (
		<div
			className={cn(
				"bg-background relative flex w-full items-center justify-center overflow-hidden rounded-lg p-2 lg:p-8",
				className,
			)}
			ref={containerRef}
		>
			<div className="flex size-full flex-row items-stretch justify-between gap-10">
				<div className="flex flex-col justify-center gap-2">
					<Circle ref={div1Ref}>
						<Icons.NextJS className="size-6" />
					</Circle>
					<Circle ref={div2Ref}>
						<Icons.Payload className="size-6" />
					</Circle>
					<Circle ref={div3Ref}>
						<Icons.Postgres className="size-6" />
					</Circle>
					<Circle ref={div4Ref}>
						<Icons.Minio className="size-6" />
					</Circle>
					<Circle ref={div5Ref}>
						<Icons.Docker className="size-6" />
					</Circle>
				</div>
				<div className="flex flex-col justify-center">
					<Circle ref={div6Ref} className="size-16">
						<Icons.Masonry className="size-6" />
					</Circle>
				</div>
				<div className="flex flex-col justify-center gap-2">
					<Circle ref={div7Ref}>
						<DatabaseBackup className="size-6" />
					</Circle>
				</div>
			</div>

			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div1Ref}
				toRef={div6Ref}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div2Ref}
				toRef={div6Ref}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div3Ref}
				toRef={div6Ref}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div4Ref}
				toRef={div6Ref}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div5Ref}
				toRef={div6Ref}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div6Ref}
				toRef={div7Ref}
				duration={3}
			/>
		</div>
	)
}