export default function FeatureGridItem({
	title,
	body,
	icon,
	colour,
	cta = true,
}: {
	title: string;
	body: string;
	icon: React.ReactNode;
	colour: string;
	cta: boolean;
}) {
	return (
		<div className="relative flex flex-col w-full p-4 overflow-hidden bg-neutral-100/80 dark:bg-neutral-900/80 rounded-2xl gap-4">
			{icon}
			<h3 className="text-subheader-2">{title}</h3>
			<p className="mb-8 text-body text-neutral-500 dark:text-neutral-400 min-h-10">
				{body}
			</p>
			{cta && (
				<button
					className={`text-body w-fit bg-none border border-[${colour}] text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors rounded-full px-4 py-2 mt-auto active:scale-95 z-10`}
				>
					Learn More
				</button>
			)}
			<svg
				width="400"
				height="200"
				viewBox="0 0 334 180"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute bottom-0 right-0"
			>
				<g opacity="0.7" filter="url(#filter0_f_203_558)">
					<ellipse
						cx="249.5"
						cy="145.5"
						rx="149.5"
						ry="45.5"
						fill={colour}
						fillOpacity="0.20"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_203_558"
						x="0"
						y="0"
						width="499"
						height="291"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="50"
							result="effect1_foregroundBlur_203_558"
						/>
					</filter>
				</defs>
			</svg>
		</div>
	);
}
