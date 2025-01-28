export default function ChecklistItem({
	icon,
	title,
	body,
}: {
	icon: React.ReactNode;
	colour: string;
	title: string;
	body: string;
	id: number;
}) {
	return (
		<div className="flex flex-row gap-3 rounded-xl w-full p-4 bg-neutral-100/80 dark:bg-neutral-900/80">
			<div className="hidden sm:block">{icon}</div>
			<div className="flex flex-col gap-1">
				<div className="flex flex-row gap-2">
					<div className="block sm:hidden">{icon}</div>
					<h3 className="text-subheader-2">{title}</h3>
				</div>
				<p className="text-body">{body}</p>
			</div>
		</div>
	);
}
