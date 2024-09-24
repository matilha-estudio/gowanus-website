'use client'

import NavBar from "@/components/navbar";
import Image from "next/image";
import { cn } from "../lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useScrollByVh } from "@/hooks/useScrollByVh";
import TextReveal from "@/components/textReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import InquireComponent from "@/components/sections/inquire";
import Footer from "@/components/sections/footer";

export default function VennServices() {
    const scrollByVh = useScrollByVh();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-canalRoyale">
            <NavBar variant="white" hasBackground={false} hasHomeButton={false} position="absolute" />
            <section className="flex text-white justify-center w-full h-screen">
                <h1 className="absolute max-w-[585px] left-1/2 transform -translate-x-1/2 self-center header2XXL z-10">
                    SERVICES
                </h1>
                <Image src={"/medias/services-1.png"} alt={"services"} width={1440} height={810} className="w-full h-screen object-cover" />
                <div className={cn("absolute inset-0 bg-black/30")} />
                <Button
                    variant="icon"
                    icon={<ArrowDown className='text-marigold' />}
                    className='absolute bottom-2 z-20'
                    onClick={scrollByVh}
                />
            </section>

            <NavBar variant="navyOutline" hasBackground={true} position='sticky' className='top-0' />

            <section className="relative flex flex-col items-center bg-canalRoyale text-navy w-full">
                <Image src="/logos/waveicon-sand.svg" alt="waveicon-navy" width={242} height={12} className='pt-24' />
                <div className="flex flex-col text-center text-white gap-16">

                    <TextReveal text='A Wealth Of Conveniences' />

                    <span className="body1 max-w-3xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus. Maecenas at convallis lacus.
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-16 mt-24 bg-white w-full h-full pb-24">
                    <div className="flex justify-center gap-16">
                        <Image src="/medias/services-3.png" alt="services-3" width={672} height={650} className="object-cover -mt-6" />
                        <Image src="/medias/services-2.png" alt="services-2" width={408} height={650} className="object-cover -mt-6" />
                    </div>
                    <span className="body2 max-w-3xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</span>
                </div>
            </section>

            <section className="w-full flex flex-col items-center justify-center gap-16 p-16 text-navy bg-white">
                <Accordion type="single" collapsible className="w-full max-w-5xl">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger className="subheader2">Residence Feature Category {index + 1}</AccordionTrigger>
                            <AccordionContent className="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <div>
                    <Button label="brochure" variant="navy" icon={<ArrowUpRight />} className="h-10 w-fit" />
                </div>
            </section>

            <section className="relative flex flex-col items-center bg-sand w-full pb-24 text-navy">
                <Image src="/logos/waveicon-navy.svg" alt="waveicon-navy" width={242} height={12} className='pt-24' />
                <div className="flex flex-col text-center gap-16">

                    <TextReveal text='RESIDENT PROGRAMMING' />

                    <span className="body1 max-w-3xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus. Maecenas at convallis lacus.
                    </span>
                </div>
            </section>

            <InquireComponent />

            <Footer />
        </main>
    )
}