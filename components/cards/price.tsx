import { CheckCircle } from "lucide-react";

export default function Price({ title, desc, price, priceMethod, features }: { title: string, desc: string, price: number, priceMethod: string, features: string[] }) {
    return (
        <div className="flex flex-col gap-4 border border-accent-foreground/40 p-8 rounded-3xl w-full md:w-fit h-full">
            <h2 className="text-subheader-2">{title}</h2>
            <p className="text-masonry-grey">{desc}</p>
            <h2 className="text-masonry-grey font mt-12">
                <span className="text-primary text-subheader-2">£{price}</span> / <span className="text-xs">{priceMethod}</span>
            </h2>
            <ul className="flex flex-col gap-1">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <CheckCircle color="var(--masonry-blue)" size={16} />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    )
}