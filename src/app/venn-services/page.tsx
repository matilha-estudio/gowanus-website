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

export default function VennServices() {
    const scrollByVh = useScrollByVh();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-canalRoyale">
            <NavBar variant="white" hasBackground={false} showLogoIcon={false} hasHomeButton={false} position="absolute" />
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

            <NavBar variant="navyOutline" hasBackground={true} showLogoIcon={true} position='sticky' className='top-0' />

            <section className="relative flex flex-col items-center bg-canalRoyale w-full pb-24">
                <Image src="/logos/waveicon-sand.svg" alt="waveicon-navy" width={242} height={12} className='pt-24' />
                <div className="flex flex-col text-center text-white gap-16">

                    <TextReveal text='A Wealth Of Conveniences' />

                    <span className="body1 max-w-3xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus. Maecenas at convallis lacus.
                    </span>
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

            <section className="flex flex-col items-center justify-center w-full py-24 text-navy bg-navy p-16">
                <img src="/medias/GW-eblast-sketches.png" alt="Availabilities" className="object-fill w-full h-full max-h-[700px] absolute" />
                <div className="flex flex-col text-center text-navy gap-8 bg-sand px-20 py-16 w-full h-full z-10">
                    <h1 className="header1 leading-none">inquire </h1>
                    <div className="flex flex-wrap gap-4">
                        <InputWithLabel label="First Name" placeholder="First" />
                        <InputWithLabel label="Last Name" placeholder="Last" />
                        <InputWithLabel label="Email" placeholder="email@email.com" />
                        <InputWithLabel label="Zip Code" placeholder="XXXXX" />
                        <InputWithLabel label="Apartment Type" placeholder="Select preferred apartment type" />
                        <div className="flex gap-4">
                            <Button variant='navy' label="submit" size='default' icon={<ArrowUpRight />} className="h-10 w-fit" />
                            <Button variant='navy' label="schedule a tour" size='default' icon={<ArrowUpRight />} className="h-10 w-fit" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-between w-full py-24 pt-40 text-white bg-navy p-16">
                <div className="relative flex flex-col gap-8">
                    <Image src="/logos/gowanus-navy-marigold.svg" alt="gowanus-navy-marigold" width={216} height={10} />
                    <div className="flex w-full justify-between">
                        <div className="flex gap-16 ">
                            <div className="flex flex-col gap-2">
                                <a href="/" className="subheader4 hover:text-marigold">Union Channel</a>
                                <a href="/" className="subheader4 hover:text-marigold">Douglass Port</a>
                                <a href="/" className="subheader4 hover:text-marigold">NEVINS LANDING</a>
                                <a href="/" className="subheader4 hover:text-marigold">the club</a>
                                <a href="/" className="subheader4 hover:text-marigold">services</a>
                                <a href="/" className="subheader4 hover:text-marigold">explore gowanus</a>
                                <a href="/" className="subheader4 hover:text-marigold">wharf happenings</a>
                                <a href="/" className="subheader4 hover:text-marigold">availabilities</a>
                                <a href="/" className="subheader4 hover:text-marigold">Virtual Tours</a>
                            </div>
                            <div className="flex flex-col gap-2">
                                <a href="/" className="subheader4 hover:text-marigold">contact</a>
                                <a href="/" className="subheader4 hover:text-marigold">resident login</a>
                                <a href="/" className="subheader4 hover:text-marigold">Building Brochure</a>

                                <div className="flex-1" />

                                <div className="flex flex-col gap-2">
                                    <a href="/" className="accent3 hover:text-marigold">Team</a>
                                    <a href="/" className="accent3 hover:text-marigold">Legal Disclaimern</a>
                                    <a href="/" className="accent3 hover:text-marigold">Fair Housing</a>
                                    <a href="/" className="accent3 hover:text-marigold">Copyright 2024 Gowanus Wharf</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-end justify-end gap-8">
                            <div className="flex flex-col gap-2 text-end items-end">
                                <a href="/">
                                    <img src="/logos/gowanus-favicon-white.svg" alt="gowanus-favicon-white" width={67} height={43} className="mb-8" />
                                </a>
                                <a href="/" className="subheader4 hover:text-marigold">100 1st St, Brooklyn, NY 11231</a>
                                <a href="/" className="subheader4 hover:text-marigold">555.555.5555</a>
                                <a href="/" className="subheader4 hover:text-marigold">CONTACT@gowanuswharf.com</a>
                            </div>
                            <div className="flex gap-4">
                                <Link href="">
                                    <Image src={"/icons/Instagram.svg"} alt={"Instagram"} width={24} height={24} />
                                </Link>
                                <Link href="">
                                    <Image src={"/icons/Linkedin.svg"} alt={"Instagram"} width={24} height={24} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}