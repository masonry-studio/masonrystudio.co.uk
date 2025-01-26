import Image, { StaticImageData } from "next/image";
import Breadcrumb from "@/components/ui/breadcrumbs";

export default function ServiceBanner({
	title,
	description,
	image,
	alt,
}: {
	title: string;
	description: string;
	image: StaticImageData;
	alt: string;
}) {
	return (
		<>
			<div className="w-full flex flex-col gap-5 items-start justify-center h-auto">
				<div>
					<h1 className="text-header">{title}</h1>
					<Breadcrumb />
				</div>
				<p className="min-h-[78px]">{description}</p>
				<button className=" my-auto backdrop-filter-[12px] group h-7 rounded-full border dark:border-white/5 bg-black/5 dark:bg-white/20 px-3 text-xs text-white hover:cursor-pointer hover:bg-black/10 dark:hover:bg-white/15 dark:text-black">
					Get in touch now
				</button>
			</div>
			<div className="max-w-[600px] flex">
				<Image className="my-auto" src={image} alt={alt} priority />
			</div>
		</>
	);
}
