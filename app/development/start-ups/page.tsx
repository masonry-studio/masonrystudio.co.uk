import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, Blocks, CropIcon, FileIcon, Paperclip, Users } from "lucide-react"
import Breadcrumb from "@/components/ui/breadcrumbs"
import { TracingBeam } from "@/components/ui/tracing-beam"
import darkImg from "@/public/about/banner-dark.png"
import lightImg from "@/public/about/banner-light.png"
import FeatureGridItem from "@/components/cards/feature-grid-item"
import Price from "@/components/cards/price"
import Faqs from "@/components/faqs"
import TextShimmer from "@/components/ui/text-shimmer"
import Icons from "@/components/icons"

const faq = [
    { id: 1, title: "Difference between the Start up and Bespoke plan?", content: ["Our Start Up option has been developed specifically for small to medium-sized businesses. While we employ the latest technology, this solution is tailored to facilitate the initial implementation of essential features. This enables you to commence operations effectively, and as your business expands, your website can adapt and grow alongside you.", "The bespoke option is designed for medium to large enterprises seeking to elevate their website through the integration of a fully customized design, components, functionality, and automation features."] },
    { id: 2, title: "What if we needed certain functionality?", content: ["If you require additional functionality from the outset that exceeds the capabilities of the startup option, we can provide a supplementary quote to accommodate the extra requirements."] },
    {
        id: 3, title: "How long does the whole process take?", content: ["The duration of the process may range from 4 to 6 weeks, contingent upon the project's size and the volume of content that needs to be generated.", "We will collaborate with you to ensure that the project is completed within the established timeline by maintaining clear and transparent communication throughout the process."],
    },
];

export default function StartUps() {
    return (
        <>
            <svg
                className="absolute mt-16 -z-10 animate-fade-in opacity-0 [--animation-delay:400ms]"
                viewBox="0 0 1440 464"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_106_780)">
                    <path
                        opacity="0.5"
                        d="M0 0V464L720 241.28L1440 464V0H0Z"
                        fill="#E5484D"
                        fillOpacity="0.05"
                    />
                    <path
                        opacity="0.5"
                        d="M0 0H1440V241.28H0V0Z"
                        fill="#E5484D"
                        fillOpacity="0.05"
                    />
                    <path
                        opacity="0.5"
                        d="M0 0V18.56L720 241.28L1440 18.56V0H0Z"
                        fill="#E5484D"
                        fillOpacity="0.05"
                    />
                    <path
                        d="M0 0V18.56L720 241.28L1440 18.56V0H0Z"
                        fill="#E5484D"
                        fillOpacity="0.05"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_106_780">
                        <rect width="1440" height="464" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <section className="container flex flex-row w-full my-24 p-8 animate-fade-in opacity-0 [--animation-delay:400ms]">
                <div className="flex flex-col items-start justify-center w-full h-auto gap-5">
                    <div>
                        <h1 className="pr-1 text-header">Start Ups</h1>
                        <Breadcrumb />
                    </div>
                    <p className="min-h-[78px] text-masonry-grey">Professional, affordable and built to grow with you and your business. Our Start up plan provides you with the familairality of your usual website builder, but with the added benefit of a lower cost, increase in performance, and the ability to go all hands on with no limits.</p>
                    <div className="backdrop-filter-[12px] group inline-flex h-7 -translate-y-4 items-center justify-between gap-1 rounded-full border dark:border-white/5 bg-black/5 dark:bg-white/10 px-3 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-black/10 dark:hover:bg-white/15 dark:text-black mt-4">
                        <Link href="/contact">
                            <TextShimmer className="inline-flex items-center justify-center">
                                <span>Get in Touch</span>{" "}
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </TextShimmer>
                        </Link>
                    </div>
                </div>
                <div className="flex-col max-w-[600px] hidden md:flex">
                    <Image
                        className="hidden my-auto dark:block"
                        src={darkImg}
                        alt="Tech Stack"
                        priority
                    />
                    <Image
                        className="my-auto dark:hidden"
                        src={lightImg}
                        alt="Tech Stack"
                        priority
                    />
                </div>
            </section>
            <section className="container flex flex-col gap-2 text-masonry-grey text-balance animate-fade-in opacity-0 [--animation-delay:500ms]">
                <p>At <span className="font-semibold text-primary">Masonry Studio</span>, we provide small businesses with high-quality, fully responsive websites built using the exact same modern technologies we use on our bespoke builds.</p>
                <p>Our service utilizes a flexible templated block system, offering a solid foundation that not only meets your current needs but also serves as a stepping stone toward a fully fledged website. Using modern technologies, we enable step-by-step development that allows your site to grow alongside your business. As your needs evolve, we can seamlessly transition your site to a custom solution tailored specifically to your unique vision, ensuring a powerful online presence now and into the future.</p>
            </section>
            <section className="container flex flex-col gap-4 my-24 animate-fade-in opacity-0 [--animation-delay:600ms]">
                <div>
                    <h2 className="mb-3 text-center text-subheader">
                        Out The Box Features<span className="text-masonry-blue">.</span>
                    </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <FeatureGridItem
                        title="Bespoke CMS"
                        body="A fully customisable content management system, granting us the ability to build your site from the ground up to work with your business."
                        icon={<Icons.Payload className="size-8" />}
                        colour="var(--masonry-blue)"
                        cta={false}
                    />
                    <FeatureGridItem
                        title="Page Blocks"
                        body="Gone are the days spending hours in a template file trying to get the layout right. Our page blocks allow you to drag and drop the layout you want with ease."
                        icon={<Blocks size={32} />}
                        colour="var(--masonry-orange)"
                        cta={false}
                    />
                    <FeatureGridItem
                        title="Responsive Design"
                        body="Every part of your site will be designed to fit any device, providing your users with the ultimate experience, no matter the shape or size."
                        icon={<CropIcon size={32} />}
                        colour="var(--masonry-red)"
                        cta={false}
                    />
                    <FeatureGridItem
                        title="User Roles"
                        body="Need specific restrictions like who in you&apos;re team can edit certain parts of your site. We can build specific roles allowing you full control over your team and viewers."
                        icon={<Users size={32} />}
                        colour="var(--masonry-red)"
                        cta={false}
                    />
                    <FeatureGridItem
                        title="Blog"
                        body="Want to keep your users updated with the latest news or updates? Every site comes with a blog that can be customised to fit your needs."
                        icon={<Paperclip size={32} />}
                        colour="var(--masonry-blue)"
                        cta={false}
                    />
                    <FeatureGridItem
                        title="Custom Forms"
                        body="Forms are a crutial part of any site. Need a way to collect subscribers for your newsletter, or provide an easy way for your users to contact you? We can build custom forms that will fit your needs."
                        icon={<FileIcon size={32} />}
                        colour="var(--masonry-orange)"
                        cta={false}
                    />
                </div>
            </section>
            <section className="container flex flex-col my-24 gap-4 animate-fade-in opacity-0 [--animation-delay:700ms]">
                <h2 className="mb-3 text-center text-subheader">
                    Our Process<span className="text-masonry-red">.</span>
                </h2>
                <TracingBeam >
                    <div className="flex flex-col gap-8 ml-12 md:ml-0">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-subheader">Discovery</h3>
                            <p className="text-body text-masonry-grey">We begin by understanding your business and your goals. We will work with you to identify your target audience and the message you want to convey.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-subheader">Design</h3>
                            <p className="text-body text-masonry-grey">We select one of our templates that suits your business and goals the best as a starting point. Once decided upon, we will then apply any tweaks neccessary to make meet your needs.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-subheader">Content Gathering</h3>
                            <p className="text-body text-masonry-grey">As we design your site, you will slowly start recieving request for the content we will need for the new design. This could include text, images, videos, branding guidelines, fonts, etc...</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-subheader">Design Sign Off</h3>
                            <p className="text-body text-masonry-grey">With the design completed, you will recieve access to view it and sign off or request some changes. Once it is all agreed upon development can begin.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-subheader">Development</h3>
                            <p className="text-body text-masonry-grey">We will develop your website using the latest technologies and best practices. We will ensure that your website is responsive, fast, and secure.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-subheader">Deployment</h3>
                            <p className="text-body text-masonry-grey">We will deploy your website to a secure and reliable server. We will ensure that your website is live and accessible to your audience.</p>
                        </div>
                    </div>
                </TracingBeam>
            </section>
            <section className="container hidden flex-col gap-8 items-center animate-fade-in opacity-0 [--animation-delay:800ms]">
                <h2 className="text-subheader">
                    Our Pricing<span className="text-masonry-orange">.</span>
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
                    <Price title="Basic" desc="some text about the package" price={500} priceMethod="One off payment" features={["Custom Domain", "Hosting", "SSL Certificate", "SEO Optimisation", "24/7 Support"]} />
                    <Price title="Bolt on 1" desc="some text about the package" price={500} priceMethod="month" features={["Custom Domain", "Hosting", "SSL Certificate", "SEO Optimisation", "24/7 Support"]} />
                    <Price title="Bolt on 2" desc="some text about the package" price={500} priceMethod="month" features={["Custom Domain", "Hosting", "SSL Certificate", "SEO Optimisation", "24/7 Support"]} />
                    <Price title="Bolt on 3" desc="some text about the package" price={500} priceMethod="month" features={["Custom Domain", "Hosting", "SSL Certificate", "SEO Optimisation", "24/7 Support"]} />
                </div>
            </section>

            <section className="container flex flex-col px-8 my-24 animate-fade-in opacity-0 [--animation-delay:900ms]">
                <h2 className="mb-8 text-center text-subheader text-for">
                    FAQS
                </h2>
                <Faqs data={faq} />
            </section>
        </>
    )
}