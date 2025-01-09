import bannerImg from '@/pub/images/Image.png'
import Image from 'next/image'
import { CircleCheckBig, Code2, Container, FileJson2, LayoutDashboard, MonitorCog } from 'lucide-react'
import Card1 from '@/components/cards/card1'
import Card2 from '@/components/cards/card2'

const values = [
    { id: 1, title: 'Innovation First', body: 'We believe that the best results come from staying ahead of the curve. By using the latest technologies like Next.js and Payload CMS, we create modern, efficient websites that offer more flexibility, speed, and scalability than traditional solutions.', icon: CircleCheckBig, colour: '#FC6432' },
    { id: 2, title: 'Quality Over Quantity', body: 'We’re dedicated to crafting each project with precision and care. We limit the number of clients we work with at any given time to ensure we can focus on quality and delivering the best possible results for every client.', icon: CircleCheckBig, colour: '#FC6432' },
    { id: 3, title: 'Client-Centric Approach', body: 'We don’t believe in one-size-fits-all solutions. Every business is unique, and so are its needs. Our process starts by understanding each client’s goals and challenges so we can build a solution that truly serves their vision and drives growth.', icon: CircleCheckBig, colour: '#FC6432' },
    { id: 4, title: 'Transparency & Trust', body: 'We see our clients as partners, and we believe great partnerships are built on trust. That’s why we’re open and transparent about our process, timelines, and costs. With us, clients always know what’s happening, when, and why.', icon: CircleCheckBig, colour: '#FC6432' },
]

const tech = [
    { id: 1, title: 'Payload CMS', body: 'A modern, headless content management system for creating and managing content, advanced features like access control, localization.', icon: MonitorCog, colour: '#0091FF', cta: true, button: { text: 'Learn More', colour: 'border-[#0091FF]' } },
    { id: 2, title: 'Next.js', body: 'A Javascript framework using React, that provides additional features like server side components, route handlers, built in optimisation.', icon: Code2, colour: '#FC6432', cta: true, button: { text: 'Learn More', colour: 'border-[#FC6432]' } },
    { id: 3, title: 'Mongo DB', body: 'Modern, document-oriented NoSQL database that stores data in flexible, JSON-like formats called BSON. It is designed for scalability, high performance, and ease of development.', icon: FileJson2, colour: '#E5484D', cta: true, button: { text: 'Learn More', colour: 'border-[#E5484D]' } },
    { id: 4, title: 'Tailwind', body: 'A CSS Framework that uses utility classes to control layout, colour, spacing, typography etc.', icon: LayoutDashboard, colour: '#E5484D', cta: true, button: { text: 'Learn More', colour: 'border-[#E5484D]' } },
    { id: 5, title: 'Docker', body: 'Docker is an open-source platform that allows developers to build, test, run, and manage applications using containers.', icon: Container, colour: '#0091FF', cta: true, button: { text: 'Learn More', colour: 'border-[#0091FF]' } },
    { id: 6, title: 'Coolify', body: 'An open-source, self-hosted platform. It offers a user-friendly interface for deploying Docker-based applications, integrates with Git.', icon: Container, colour: '#FC6432', cta: true, button: { text: 'Learn More', colour: 'border-[#FC6432]' } },
]


export default async function About() {
    return (
        <>
            <svg className="absolute mt-16 -z-10" viewBox="0 0 1440 464" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_106_780)">
                    <path opacity="0.5" d="M0 0V464L720 241.28L1440 464V0H0Z" fill="#E5484D" fillOpacity="0.05" />
                    <path opacity="0.5" d="M0 0H1440V241.28H0V0Z" fill="#E5484D" fillOpacity="0.05" />
                    <path opacity="0.5" d="M0 0V18.56L720 241.28L1440 18.56V0H0Z" fill="#E5484D" fillOpacity="0.05" />
                    <path d="M0 0V18.56L720 241.28L1440 18.56V0H0Z" fill="#E5484D" fillOpacity="0.05" />
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
                        <h1 className="header-text">
                            About us
                        </h1>
                        <p>Breadcrumb goes here</p>
                    </div>
                    <p className='min-h-[78px]'>content goes here for a brief insight in the page</p>
                    <button className=" my-auto backdrop-filter-[12px] group h-7 rounded-full border dark:border-white/5 bg-black/5 dark:bg-white/20 px-3 text-xs text-white hover:cursor-pointer hover:bg-black/10 dark:hover:bg-white/15 dark:text-black">get in touch now</button>
                </div>
                <div className='max-w-[600px] flex'>
                    <Image className='my-auto' src={bannerImg} alt="test image" priority />
                </div>
            </section>

            <section className='container my-24'>
                <h2 className='subheader-text mb-8'>Our Story<span className='text-[#0091ff]'>.</span></h2>
                <div className='flex flex-col gap-4 body-text'>
                    <p>We’re Andy and Ty, an uncle and nephew team with a shared passion for web development.</p>
                    <p>
                        With years of experience working in different agencies, we noticed how many businesses were stuck with outdated, slow websites that couldn’t keep up with today’s needs. So, we teamed up to offer something better: modern, high-performance websites built on the latest technology, designed to help businesses grow without the usual tech limitations.</p>
                    <p>
                        We knew we could help by offering something better. With a focus on high-performance tools like Next.js and Payload CMS, we build custom, scalable websites designed to grow with our clients’ businesses. Our goal is to make modern, efficient web technology accessible to any business that’s ready to stand out online.
                    </p>
                </div>
            </section>

            <section className='container my-24'>
                <h2 className='subheader-text text-center mb-8'>Our values<span className='text-[#FC6432]'>.</span></h2>

                <div className='grid gap-6'>

                    {values.map((item) => { return <Card1 key={item.id} content={item} /> })}

                </div>
            </section>

            <section className='container flex flex-col lg:flex-row px-8 my-24'>
                <div className='lg:w-16'>
                    <h2 className='text-center mb-8 lg:mb-0 lg:-rotate-90 lg:flex lg:justify-center lg:translate-y-72 whitespace-nowrap text-4xl font-bold h-12'>
                        Technology We Use
                        <span className='text-[#E5484D]'>.</span>
                    </h2>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {tech.map((item) => { return <Card2 key={item.id} content={item} /> })}
                </div>
            </section>

        </>
    )
}