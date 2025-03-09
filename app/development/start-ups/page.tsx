'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, TableOfContents } from "lucide-react"
import Breadcrumb from "@/components/ui/breadcrumbs"
import { TracingBeam } from "@/components/ui/tracing-beam"
import darkImg from "@/public/about/banner-dark.png"
import lightImg from "@/public/about/banner-light.png"
import FeatureGridItem from "@/components/cards/feature-grid-item"
import Price from "@/components/cards/price"

export default function StartUps() {
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
                        <h1 className="text-header">Start Ups</h1>
                        <Breadcrumb />
                    </div>
                    <p className="min-h-[78px]">Professional, affordable and built to grow with you and your business.</p>
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
                <p>At <span className="text-primary">Masonry Studio</span>, we provide small businesses with high-quality, fully responsive websites built using the exact same modern technologies we use on our bespoke builds.</p>
                <p>Our service utilizes a flexible templated block system, offering a solid foundation that not only meets your current needs but also serves as a stepping stone toward a fully bespoke website. Using modern technologies, we enable step-by-step development that allows your site to grow alongside your business. As your needs evolve, we can seamlessly transition your site to a custom solution tailored specifically to your unique vision, ensuring a powerful online presence now and into the future.</p>
            </section>
            <section className="container flex flex-col my-24">
                <div>
                    <h2 className="text-subheader text-center mb-3">
                        Out The Box Features<span className="text-masonry-blue">.</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <FeatureGridItem
                        title="Bespoke CMS"
                        body="Satisfied Customers"
                        icon={<TableOfContents size={32} />}
                        colour="var(--masonry-blue)"
                        cta={false}
                    />
                    <FeatureGridItem
                        title="Page Blocks"
                        body="Satisfied Customers"
                        icon={<TableOfContents size={32} />}
                        colour="var(--masonry-orange)"
                        cta={false}
                    />
                    <FeatureGridItem
                        title="Responsive Design"
                        body="Satisfied Customers"
                        icon={<TableOfContents size={32} />}
                        colour="var(--masonry-red)"
                        cta={false}
                    />
                    <FeatureGridItem
                        title="User Roles"
                        body="Satisfied Customers"
                        icon={<TableOfContents size={32} />}
                        colour="var(--masonry-red)"
                        cta={false}
                    />
                    <FeatureGridItem
                        title="Blog"
                        body="Satisfied Customers"
                        icon={<TableOfContents size={32} />}
                        colour="var(--masonry-blue)"
                        cta={false}
                    />
                    <FeatureGridItem
                        title="Custom Forms"
                        body="Satisfied Customers"
                        icon={<TableOfContents size={32} />}
                        colour="var(--masonry-orange)"
                        cta={false}
                    />
                </div>
            </section>
            <section className="container flex flex-col my-24">
                <h2 className="text-subheader text-center mb-3">
                    Our Process<span className="text-masonry-orange">.</span>
                </h2>
                <TracingBeam >
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
            <section className="container">
                <h2 className="text-subheader mb-8">
                    Whats Included<span className="text-masonry-red">.</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4">
                    <Price title="Basic" desc="some text about the package" price={500} priceMethod="One off payment" features={["Custom Domain", "Hosting", "SSL Certificate", "SEO Optimisation", "24/7 Support"]} />
                    <Price title="Bolt on 1" desc="some text about the package" price={500} priceMethod="month" features={["Custom Domain", "Hosting", "SSL Certificate", "SEO Optimisation", "24/7 Support"]} />
                    <Price title="Bolt on 2" desc="some text about the package" price={500} priceMethod="month" features={["Custom Domain", "Hosting", "SSL Certificate", "SEO Optimisation", "24/7 Support"]} />
                    <Price title="Bolt on 3" desc="some text about the package" price={500} priceMethod="month" features={["Custom Domain", "Hosting", "SSL Certificate", "SEO Optimisation", "24/7 Support"]} />
                </div>
            </section>
        </>
    )
}