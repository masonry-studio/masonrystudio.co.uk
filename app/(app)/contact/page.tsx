import Breadcrumb from "@/components/ui/breadcrumbs";
import TextShimmer from "@/components/ui/text-shimmer";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Clock5, Mail } from "lucide-react";



export default async function Contact() {
    return (
        <>
            <section className="container flex flex-col items-center justify-center w-full my-24 p-8">
                <h1 className="text-header pb-0">Contact Us</h1>
                <Breadcrumb />
                <div className="mt-5 text-center">
                    <p className="text-body text-masonry-grey">Got any questions about our services or scaling your business with our platform?
                    </p>
                    <p className="text-body text-masonry-grey">Were here to help. Chat to our team now </p>
                </div>
            </section>
            <section className="container flex flex-row justify-center gap-6">
                <form className="w-full flex flex-col gap-y-6">
                    <div className="flex gap-4">
                        <input className="w-full bg-transparent border rounded-lg px-4 py-2" type="text" name="fname" id="fname" placeholder="First Name" />
                        <input className="w-full bg-transparent border rounded-lg px-4 py-2" type="text" name="lname" id="lname" placeholder="Last Name" />
                    </div>
                    <input className="w-full bg-transparent border rounded-lg px-4 py-2" type="email" name="email" id="email" placeholder="Email" />
                    <textarea className="w-full bg-transparent border rounded-lg px-4 py-2" rows={6} placeholder="Message"></textarea>
                    <div>
                        <h3 className="text-body font-semibold">Services*</h3>
                        <p className="text-xs text-masonry-grey">Please Select an option from the list below.</p>
                    </div>
                    <div className="w-full flex items-stretch gap-6">
                        <div className="w-full">
                            <h4 className="text-body text-masonry-grey font-semibold mb-2">Web Dev</h4>
                            <div className="flex text-sm items-center gap-2">
                                <input type="radio" name="service" value="start" />
                                <label>Start Up</label>
                            </div>
                            <div className="flex text-sm items-center gap-2">
                                <input type="radio" name="service" value="bespoke" />
                                <label>Bespoke</label>
                            </div>
                            <div className="flex text-sm items-center gap-2">
                                <input type="radio" name="service" value="ecommerce" />
                                <label>Ecommerce</label>
                            </div>
                        </div>
                        <div className="w-full">
                            <h4 className="text-body text-masonry-grey font-semibold mb-2">Hosting</h4>
                            <div className="flex text-sm items-center gap-2">
                                <input type="radio" name="service" value="platform" />
                                <label>Our Platform</label>
                            </div>
                            <div className="flex text-sm items-center gap-2">
                                <input type="radio" name="service" value="shared" />
                                <label>Shared Hosting</label>
                            </div>
                            <div className="flex text-sm items-center gap-2">
                                <input type="radio" name="service" value="dedicated" />
                                <label>Dedicated Hosting</label>
                            </div>
                        </div>
                        <div className="w-full">
                            <h4 className="text-body text-masonry-grey font-semibold mb-2">Other</h4>
                            <div className="flex text-sm items-center gap-2">
                                <input type="radio" name="service" value="1" />
                                <label>1</label>
                            </div>
                            <div className="flex text-sm items-center gap-2">
                                <input type="radio" name="service" value="2" />
                                <label>2</label>
                            </div>
                            <div className="flex text-sm items-center gap-2">
                                <input type="radio" name="service" value="3" />
                                <label>3</label>
                            </div>
                        </div>
                    </div>
                    <Button className="w-fit rounded-lg mx-auto mt-6 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 active:scale-95">
                        <TextShimmer className="inline-flex items-center justify-center">
                            <span>Submit</span>{" "}
                            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </TextShimmer>
                    </Button>
                </form>
                <div className="w-fit flex flex-col gap-4 px-4">
                    <div className="flex items-center gap-2">
                        <Mail color="hsl(var(--masonry-blue))" />
                        <p>hello@masonrystudio.co.uk</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock5 color="hsl(var(--masonry-orange))" />
                        <p>Mon-Fri, 9am - 5pm</p>
                    </div>
                </div>
            </section>
        </>
    )
}