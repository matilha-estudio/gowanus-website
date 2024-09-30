'use client'

import NavBar from "@/components/navbar";
import Image from "next/image";
import { cn } from "../lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useScrollByVh } from "@/hooks/useScrollByVh";
import TextReveal from "@/components/textReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import InquireComponent from "@/components/sections/inquire";
import Footer from "@/components/sections/footer";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import AvailableApartments from "@/components/sections/availableApartments";
import { CustomCarousel3 } from "@/components/ui/customCarousel3";

export default function VennServices() {
    const scrollByVh = useScrollByVh();
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-canalRoyale">
            <NavBar variant="white" hasBackground={false} hasHomeButton={false} position="absolute" />

            <section className="flex relative text-white justify-center w-full md:h-screen">
                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XXL", " text-white z-10 absolute left-1/2 transform -translate-x-1/2 self-center")}>
                    SERVICES
                </h1>
                <Image src={"/medias/services-1.png"} alt={"services"} width={1440} height={810} className="w-full md:h-screen object-cover" />
                <div className={cn("absolute inset-0 bg-black/30")} />
                <Button
                    variant="icon"
                    icon={<ArrowDown className='text-marigold' />}
                    className='absolute bottom-2 z-20 hidden md:flex'
                    onClick={scrollByVh}
                />
            </section>

            <NavBar variant="navyOutline" hasBackground={true} position='sticky' className='top-0 hidden md:flex' />

            <section className="relative flex flex-col items-center bg-canalRoyale text-navy w-full">
                <Image src="/logos/waveicon-sand.svg" alt="waveicon-navy" width={242} height={12} className='pb-8 pt-24' />
                <div className="flex flex-col text-center text-white gap-16 items-center">

                    {
                        SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                            <TextReveal text='A Wealth Of Conveniences' />
                        )
                    }

                    <h1 className={'header1MD leading-none md:hidden'}>
                        A Wealth Of Conveniences
                    </h1>

                    <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                    </span>

                </div>

                <div className="flex flex-col items-center justify-center gap-16 mt-24 bg-white w-full h-full pb-24">
                    <div className="flex flex-col md:flex-row px-8 justify-center gap-16">
                        <Image src="/medias/services-3.png" alt="services-3" width={672} height={650} className="object-cover -mt-6" />
                        <span className="body2 px-5 text-center md:hidden flex -mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</span>

                        <Image src="/medias/services-2.png" alt="services-2" width={408} height={650} className="object-cover -mt-6" />
                    </div>
                    <span className="body2 max-w-3xl text-center hidden md:flex">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</span>
                </div>
            </section>

            <section className="w-full flex flex-col items-center justify-center gap-16 pt-0 p-8 md:p-16 text-navy bg-white">
                <Accordion type="single" collapsible className="w-full max-w-5xl">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`} className="w-full">
                            <AccordionTrigger className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'subheader4' : 'subheader2')}>Service Category Category {index + 1}</AccordionTrigger>
                            <AccordionContent className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body2")}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <div>
                    <Button label="brochure" variant="navy" icon={<ArrowUpRight />} size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} />
                </div>
            </section>

            <section className="relative flex flex-col items-center bg-sand w-full pb-24 text-navy">
                <Image src="/logos/waveicon-canalroyale.svg" alt="waveicon-navy" width={242} height={12} className='pt-24 pb-10' />
                <div className="flex flex-col text-center gap-16 items-center">
                    {
                        SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                            <TextReveal text='RESIDENT PROGRAMMING' />
                        )
                    }

                    <h1 className={'header1MD leading-none md:hidden'}>
                        RESIDENT PROGRAMMING
                    </h1>

                    <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                    </span>
                </div>

                <div className="h-10" />
                <CustomCarousel3 />
                <div className="h-10" />
                <div>
                    <Button label="View sample calendar" variant="navy" icon={<ArrowUpRight />} size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} />
                </div>
            </section>
            <div className="h-20 md:h-0" />
            <AvailableApartments />
            <InquireComponent />

            <Footer />
        </main>
    )
}