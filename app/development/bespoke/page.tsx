import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, Blocks, CircleCheckBig, Clock, CropIcon, Hammer, Users } from "lucide-react"
import Breadcrumb from "@/components/ui/breadcrumbs"
import { TracingBeam } from "@/components/ui/tracing-beam"
import darkImg from "@/public/about/banner-dark.png"
import lightImg from "@/public/about/banner-light.png"
import FeatureGridItem from "@/components/cards/feature-grid-item"
import Price from "@/components/cards/price"
import ChecklistItem from "@/components/cards/checklist-item"
import Faqs from "@/components/faqs"
import TextShimmer from "@/components/ui/text-shimmer"
import Icons from "@/components/icons"

const faq = [
    {
        id: 1,
        title: "Is the site fully custom?",
        content: ["Yes.", "We design your entire website from the ground up, including page blocks and functionality, constructing every element from scratch."]
    },
    {
        id: 2,
        title: "How long does a bespoke site take?",
        content: ["This all depends upon the agreed scope of your site. The more complex you site is the longer it will take. However, we implement build phases to ensure that your site is launched as quickly as possible.", "‎", "All Timelines will be established and agreed upon prior to the commencement of the project."]
    },
    {
        id: 3,
        title: "Got any other questions?",
        content: ["You can contact us directly via our contact page, or by emailing us at hello@masonrystudio.co.uk"],
    },
];

export default function Bespoke() {
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

            <section className="container flex flex-row w-full p-8 my-24 animate-fade-in opacity-0 [--animation-delay:400ms]">
                <div className="flex flex-col items-start justify-center w-full h-auto gap-5">
                    <div>
                        <h1 className="pr-1 text-header">Bespoke</h1>
                        <Breadcrumb />
                    </div>
                    <p className="min-h-[78px] text-masonry-grey">
                        Need something custom that adds value to your business? Our Bespoke plan provides you with
                    </p>
                    <div className="backdrop-filter-[12px] group inline-flex h-7 -translate-y-4 items-center justify-between gap-1 rounded-full border dark:border-white/5 bg-black/5 dark:bg-white/10 px-3 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-black/10 dark:hover:bg-white/15 dark:text-black mt-4">
                        <Link href="/contact">
                            <TextShimmer className="inline-flex items-center justify-center">
                                <span>Get in Touch</span>{" "}
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </TextShimmer>
                        </Link>
                    </div>
                </div>
                <div className=" flex-col max-w-[600px] hidden md:flex">
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

            <section className="container flex flex-col gap-2 text-masonry-grey text-balance w-full animate-fade-in opacity-0 [--animation-delay:500ms]">
                <p>
                    At <span className="font-semibold text-primary">Masonry Studio</span>, we build truly bespoke websites designed to reflect your unique brand and business needs. Using Next.js and Payload CMS, we create custom page blocks tailored specifically for your content and functionality requirements.
                </p>
                <p>
                    These modular blocks allow for flexible layouts, enabling you to add, update, and rearrange sections as your business evolves. Every block is crafted to match your vision, so your site isn&apos;t just responsive and high-performing—it&apos;s adaptable and ready to scale as you grow.
                </p>
                <p>
                    With a bespoke build from us, you&apos;ll have a site built for long-term flexibility, tailored precisely to your goals.
                </p>
            </section>

            <section className="container my-24 animate-fade-in opacity-0 [--animation-delay:600ms]">
                <h2 className="mb-8 text-4xl font-bold text-center">
                    Why Choose A Bespoke Build<span className="text-masonry-blue">?</span>
                </h2>

                <div className="grid gap-6">
                    <ChecklistItem
                        id={1}
                        icon={
                            <CircleCheckBig
                                className="mt-1 text-masonry-blue"
                                size={24}
                            />
                        }
                        colour="#FC6432"
                        title="Our Stack"
                        body="We believe that the best results come from staying ahead of the curve. By using the latest technologies like Next.js and Payload CMS, we create modern, efficient websites that offer more flexibility, speed, and scalability than traditional solutions."
                    />
                    <ChecklistItem
                        id={2}
                        icon={
                            <CircleCheckBig
                                className="mt-1 text-masonry-blue"
                                size={24}
                            />
                        }
                        colour="#FC6432"
                        title="Quality > Quantity"
                        body="We&apos;re dedicated to crafting each project with precision and care. We limit the number of clients we work with at any given time to ensure we can focus on quality and deliver the best possible results for every client."
                    />
                    <ChecklistItem
                        id={3}
                        icon={
                            <CircleCheckBig
                                className="mt-1 text-masonry-blue"
                                size={24}
                            />
                        }
                        colour="#FC6432"
                        title="Fully Customisable"
                        body="We don&apos;t believe in one-size-fits-all solutions. Every business is unique, and so are its needs. Our process starts by understanding each client&apos;s goals and challenges so we can build a solution that truly serves their vision and drives growth."
                    />
                    <ChecklistItem
                        id={4}
                        icon={
                            <CircleCheckBig
                                className="mt-1 text-masonry-blue"
                                size={24}
                            />
                        }
                        colour="#FC6432"
                        title="Transparency"
                        body="We see our clients as partners, and we believe great partnerships are built on trust. That&apos;s why we&apos;re open and transparent about our process, timelines, and costs. With us, clients always know what&apos;s happening, when, and why."
                    />
                </div>
            </section>

            <section className="container flex flex-col gap-4 my-24">
                <div>
                    <h2 className="text-center text-subheader">
                        Features<span className="text-masonry-orange">?</span>
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
                        body="Need a new page but don't want to dive into the code? Our page blocks allow you to drag and drop the layout you want with ease."
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
                        title="Automated Processes"
                        body="Find yourself doing the same processes over and over again? Save time and money by having them done for you."
                        icon={<Clock size={32} />}
                        colour="var(--masonry-blue)"
                        cta={false}
                    />
                    <FeatureGridItem
                        title="Custom Functionality"
                        body="Every business works differently. We build exactly what you need without limits."
                        icon={<Hammer size={32} />}
                        colour="var(--masonry-orange)"
                        cta={false}
                    />
                </div>
            </section>


            <section className="container flex flex-col my-24">

                <h2 className="mb-3 text-center text-subheader">
                    Our Process<span className="text-masonry-red">.</span>
                </h2>



                <TracingBeam>
                    <div className="flex flex-col gap-8 ml-12 md:ml-0">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-subheader">Discovery</h3>
                            <p className="text-body text-masonry-grey">We begin by understanding your business and your goals. We will work with you to identify your target audience and the message you want to convey.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-subheader">Design</h3>
                            <p className="text-body text-masonry-grey">We will create a design that is tailored to your business and your audience. We will work with you to ensure that the design meets your needs and your vision.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-subheader">Content Gathering</h3>
                            <p className="text-body text-masonry-grey">As we design your site you will slowly start recieving request for the content we will need for the new design. This could include text, images, videos, branding guidelines, font families ...</p>
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

            <section className="container hidden">

                <h2 className="mb-8 text-subheader">
                    Whats Included<span className="text-masonry-orange">.</span>
                </h2>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
                    <Price title="Basic" desc="some text about the package" price={500} priceMethod="One off payment" features={["Custom Domain", "Hosting", "SSL Certificate", "SEO Optimisation", "24/7 Support"]} />
                    <Price title="Bolt on 1" desc="some text about the package" price={500} priceMethod="month" features={["Custom Domain", "Hosting", "SSL Certificate", "SEO Optimisation", "24/7 Support"]} />
                    <Price title="Bolt on 2" desc="some text about the package" price={500} priceMethod="month" features={["Custom Domain", "Hosting", "SSL Certificate", "SEO Optimisation", "24/7 Support"]} />
                    <Price title="Bolt on 3" desc="some text about the package" price={500} priceMethod="month" features={["Custom Domain", "Hosting", "SSL Certificate", "SEO Optimisation", "24/7 Support"]} />

                </div>


            </section>

            <section className="container flex flex-col px-8 my-24 animate-fade-in opacity-0 [--animation-delay:600ms]">
                <h2 className="mb-8 text-center text-subheader text-for">
                    FAQS
                </h2>
                <Faqs data={faq} />
            </section>
        </>
    )
}