'use client'
import Image from "next/image"
import Link from "next/link"

import { ArrowRightIcon, CircleCheckBig, TableOfContents } from "lucide-react"

import Breadcrumb from "@/components/ui/breadcrumbs"
import { TracingBeam } from "@/components/ui/tracing-beam"

import darkImg from "@/public/about/banner-dark.png"
import lightImg from "@/public/about/banner-light.png"
import FeatureGridItem from "@/components/cards/feature-grid-item"
import Price from "@/components/cards/price"
import ChecklistItem from "@/components/cards/checklist-item"
import Faqs from "@/components/faqs"

const faq = [
	{ id: 1, title: "How can I contact a specific member in the team?", content: ["Please find our specific contact details below:", "‎", "Ty Mason: ty.mason@masonrystudio.co.uk", "Andrew Mason: andrew.mason@masonrystudio.co.uk"] },
	{ id: 2, title: "What are your buisness hours?", content: ["We are open from Monday to Friday between 9am to 5pm. We may be able to respond to any messages over the weekend but it isn't guaranteed."] },
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
                className="absolute mt-16 -z-10"
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

            <section className="container flex flex-row w-full my-24 p-8">
                <div className="w-full flex flex-col gap-5 items-start justify-center h-auto">
                    <div>
                        <h1 className="text-header">Bespoke</h1>
                        <Breadcrumb />
                    </div>
                    <p className="min-h-[78px]">
                        Need a website that doesn’t just look good but also adds value to your business? Taking your business to the next level with a fully custom build.
                    </p>
                    <Link href="/contact">
                        <button className="my-auto backdrop-filter-[12px] group flex flex-row items-center gap-1 h-7 rounded-full border dark:border-white/5 dark:text-white text-black bg-black/5 dark:bg-white/20 px-3 text-xs hover:cursor-pointer hover:bg-black/10 dark:hover:bg-white/15">
                            Get in touch <ArrowRightIcon size={14} />
                        </button>
                    </Link>
                </div>
                <div className=" flex-col max-w-[600px] hidden md:flex">
                    <Image
                        className="my-auto dark:block hidden"
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

            <section className="container flex flex-col gap-2 text-masonry-grey text-body">
                <p>
                    At <span className="text-primary">Masonry Studio</span>, we build truly bespoke websites designed to reflect your unique brand and business needs. Using Next.js and Payload CMS, we create custom page blocks tailored specifically for your content and functionality requirements.
                </p>
                <p>
                    These modular blocks allow for flexible layouts, enabling you to add, update, and rearrange sections as your business evolves. Every block is crafted to match your vision, so your site isn’t just responsive and high-performing—it’s adaptable and ready to scale as you grow.
                </p>
                <p>
                    With a bespoke build from us, you’ll have a site built for long-term flexibility, tailored precisely to your goals.
                </p>
            </section>

            <section className="container my-24 animate-fade-in opacity-0 [--animation-delay:400ms]">
                <h2 className="text-center mb-8 text-4xl font-bold">
                    Why Choose A Bespoke Build<span className="text-masonry-orange">.</span>
                </h2>

                <div className="grid gap-6">
                    <ChecklistItem
                        id={1}
                        icon={
                            <CircleCheckBig
                                className="mt-1 text-masonry-orange"
                                size={24}
                            />
                        }
                        colour="#FC6432"
                        title="User Experience"
                        body="We believe that the best results come from staying ahead of the curve. By using the latest technologies like Next.js and Payload CMS, we create modern, efficient websites that offer more flexibility, speed, and scalability than traditional solutions."
                    />
                    <ChecklistItem
                        id={2}
                        icon={
                            <CircleCheckBig
                                className="mt-1 text-masonry-orange"
                                size={24}
                            />
                        }
                        colour="#FC6432"
                        title="Faster Site"
                        body="We’re dedicated to crafting each project with precision and care. We limit the number of clients we work with at any given time to ensure we can focus on quality and deliver the best possible results for every client."
                    />
                    <ChecklistItem
                        id={3}
                        icon={
                            <CircleCheckBig
                                className="mt-1 text-masonry-orange"
                                size={24}
                            />
                        }
                        colour="#FC6432"
                        title="Website Security"
                        body="We don’t believe in one-size-fits-all solutions. Every business is unique, and so are its needs. Our process starts by understanding each client’s goals and challenges so we can build a solution that truly serves their vision and drives growth."
                    />
                    <ChecklistItem
                        id={4}
                        icon={
                            <CircleCheckBig
                                className="mt-1 text-masonry-orange"
                                size={24}
                            />
                        }
                        colour="#FC6432"
                        title="Website Uptime"
                        body="We see our clients as partners, and we believe great partnerships are built on trust. That’s why we’re open and transparent about our process, timelines, and costs. With us, clients always know what’s happening, when, and why."
                    />
                </div>
            </section>

            <section className="container flex flex-col my-24">
                <div>
                    <h2 className="text-subheader text-center mb-3">
                        Features<span className="text-masonry-blue">?</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <FeatureGridItem
                        title="Bespoke CMS"
                        body="A CMS platform thats built for developers allowing us the ability to built it from the ground up to work with your business."
                        icon={<TableOfContents size={32} />}
                        colour="var(--masonry-blue)"
                        cta={false}
                    />
                    <FeatureGridItem
                        title="Page Blocks"
                        body="Custom designed blocks built specifically for you and your business. Pages built with block instead of templates gives you great control and flexibility."
                        icon={<TableOfContents size={32} />}
                        colour="var(--masonry-orange)"
                        cta={false}
                    />
                    <FeatureGridItem
                        title="Responsive Design"
                        body="Every part of your build will be designed to fit any device that your viewers the ultimate experience."
                        icon={<TableOfContents size={32} />}
                        colour="var(--masonry-red)"
                        cta={false}
                    />
                    <FeatureGridItem
                        title="User Roles"
                        body="Need specific restrictions like who in you’re team can edit certain parts of your site. We can build specific roles allowing you full control over your team and viewers "
                        icon={<TableOfContents size={32} />}
                        colour="var(--masonry-red)"
                        cta={false}
                    />
                    <FeatureGridItem
                        title="Automated Processes"
                        body="Find yourself doing the same processes over and over again. Save time and money by having them done for you."
                        icon={<TableOfContents size={32} />}
                        colour="var(--masonry-blue)"
                        cta={false}
                    />
                    <FeatureGridItem
                        title="Functionality"
                        body="Every business works slightly different so we build exactly what you need."
                        icon={<TableOfContents size={32} />}
                        colour="var(--masonry-orange)"
                        cta={false}
                    />
                </div>
            </section>


            <section className="container flex flex-col my-24">

                <h2 className="text-subheader text-center mb-3">
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

                <h2 className="text-subheader mb-8">
                    Whats Included<span className="text-masonry-orange">.</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4">
                    <Price title="Basic" desc="some text about the package" price={500} priceMethod="One off payment" features={["Custom Domain", "Hosting", "SSL Certificate", "SEO Optimisation", "24/7 Support"]} />
                    <Price title="Bolt on 1" desc="some text about the package" price={500} priceMethod="month" features={["Custom Domain", "Hosting", "SSL Certificate", "SEO Optimisation", "24/7 Support"]} />
                    <Price title="Bolt on 2" desc="some text about the package" price={500} priceMethod="month" features={["Custom Domain", "Hosting", "SSL Certificate", "SEO Optimisation", "24/7 Support"]} />
                    <Price title="Bolt on 3" desc="some text about the package" price={500} priceMethod="month" features={["Custom Domain", "Hosting", "SSL Certificate", "SEO Optimisation", "24/7 Support"]} />

                </div>


            </section>

            <section className="container flex flex-col px-8 my-24 animate-fade-in opacity-0 [--animation-delay:600ms]">
                <h2 className="text-subheader text-center mb-8 text-for">
                    FAQS
                </h2>
                <Faqs data={faq} />
            </section>
        </>
    )
}