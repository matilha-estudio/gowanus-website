'use client'
import NavBar from "@/components/navbar";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../lib/utils";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export default function Inquire() {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768
    return (
        <main>
            <NavBar variant="white" hasBackground={false} hasHomeButton={false} position="absolute" />

            <section className="relative flex flex-col items-center bg-navy w-full py-52 gap-16">
                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XXL", " text-white z-10")}>
                    inquire
                </h1>
                <Image
                    src={"/medias/inquirebanner.png"}
                    alt={"inquirebanner"}
                    width={212.8}
                    height={146.06}
                    className="absolute left-1/2 transform -translate-x-1/2 self-center bottom-32 md:bottom-28 object-cover w-[138px] md:w-[213px] "
                />
            </section>

            <section className="flex flex-col items-center justify-center gap-10 w-full md:py-24 py-12 text-navy bg-white px-8 md:px-16">
                <h1 className="header1 leading-none text-center">LEASING INTEREST</h1>

                <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
                    <InputWithLabel label="First Name" placeholder="First" />
                    <InputWithLabel label="Last Name" placeholder="Last" />
                    <InputWithLabel label="Email" placeholder="email@email.com" />
                    <InputWithLabel label="Zip Code" placeholder="XXXXX" />
                </div>
                <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">
                    <InputWithLabel label="Apartment Type" placeholder="Select preferred apartment type" />
                    <InputWithLabel label="Apartment Type" placeholder="Select preferred apartment type" />
                </div>
                <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
                    <InputWithLabel label="First Name" placeholder="First" />
                    <InputWithLabel label="Last Name" placeholder="Last" />
                </div>
                <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">
                    <InputWithLabel label="Last Name" placeholder="Last" />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6">
                    <Button label="submit" variant='navy' size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} />
                    <Button label="schedule a tour" variant='navy' size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
                </div>
            </section>

            <section className="flex flex-col items-center justify-center gap-10 w-full md:py-24 py-12 text-navy bg-white px-8 md:px-16">
                <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl bg-sand py-16 md:p-16">
                    <div className="relative flex flex-col items-center gap-8">
                        <h2 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader2" : "subheader1", "text-center")}>get in touch</h2>
                        <div className="relative flex flex-col items-center">
                            <a href="/" className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>555.555.5555</a>
                            <a href="/" className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>CONTACT@gowanuswharf.com</a>
                        </div>
                        <div className="relative flex items-center gap-4">
                            <Link href="">
                                <Image src={"/icons/Instagram-navy.svg"} alt={"Instagram"} width={30} height={30} />
                            </Link>
                            <Link href="">
                                <Image src={"/icons/Linkedin-navy.svg"} alt={"Instagram"} width={30} height={30} />
                            </Link>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center gap-8">
                        <h2 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader2" : "subheader1", "text-center")}>find us</h2>
                        <a href="/" className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>585 Union St, Brooklyn, NY</a>
                        <div className="relative flex flex-col items-center">
                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>Mon-Fri (8am – 7pm)</span>
                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>Saturday (10am – 4pm)</span>
                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>Sunday (Closed)</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}