'use client'
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import Link from "next/link";
import GowanusWharf from "@/components/sections/gowanus";
import Footer from "@/components/sections/footer";
import AvailableApartments from "@/components/sections/availableApartments";
import Inquire from "../inquire/page";
import InquireComponent from "@/components/sections/inquire";

export default function UnionChannel() {
    return (
        <main>
            <NavBar variant="white" hasBackground={false} showLogoIcon={false} hasHomeButton={false} position="absolute" />
            <section className="flex">
                <Image
                    src={"/logos/union-channel-logo-white.svg"}
                    alt={"union-channel-logo-white"}
                    width={585}
                    height={171}
                    className="w-full object-contain absolute max-w-[585px] left-1/2 transform -translate-x-1/2 self-center"
                />
                <Image src={"/medias/UnionChannelHero.png"} alt={"UnionChannelHero"} width={1440} height={810} className="w-full h-screen object-cover" />
            </section>
            <section className="flex flex-col items-center bg-sand w-full py-24 gap-16">
                <Image src="/logos/waveicon-navy.svg" alt="waveicon-navy" width={242} height={12} />
                <span className="body1 max-w-4xl text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
                </span>
                <div className="w-full py-8 flex justify-center">
                    <Button label="3d exterior" variant='navy' icon={<ArrowUpRight />} />
                </div>
            </section>
            <section className="flex flex-col items-center justify-center bg-sand w-full pb-8 px-8">
                <video src="/medias/the-club.webm" autoPlay muted loop controls disablePictureInPicture disableRemotePlayback className="aspect-video object-cover w-full">the-club</video>
            </section>
            <section className="flex items-center justify-center w-full py-24 text-navy ">
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col text-center justify-center items-center">
                        <Image
                            src="/medias/services-1.png"
                            alt="services"
                            height={482}
                            width={592}
                            className="w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col text-center justify-center items-center gap-16">
                        <h1 className="header2">apartments</h1>
                        <span className="body1 max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                    </div>
                </div>
            </section>
            <section className="w-full flex justify-center py-16">
                <Carousel className="w-full" opts={{ loop: true, align: 'center' }}>
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="max-w-[1000px]">
                                <div className="p-1">
                                    <Card className="rounded-none">
                                        <CardContent className="flex aspect-video items-center justify-center max-h-[600px] p-0">
                                            <Image src={"/medias/MasterBrandFilm.png"} alt={"MasterBrandFilm"} width={1088} height={608} className="w-full h-full object-cover" />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
            <section className="w-full flex justify-center p-16 text-navy">
                <Accordion type="single" collapsible className="w-full max-w-5xl">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger className="subheader2">Residence Feature Category {index + 1}</AccordionTrigger>
                            <AccordionContent className="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
            <section className="flex items-center justify-center w-full py-24 text-navy ">
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col text-center justify-center items-center gap-16">
                        <h1 className="header2 leading-none">
                            WALK
                        </h1>
                        <h1 className="header2 leading-none -mt-16">
                            THROUGH
                        </h1>
                        <span className="body1 max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                        <div>
                            <Button label="explore" variant="navy" icon={<ArrowUpRight />} />
                        </div>
                    </div>
                    <div className="flex flex-col text-center justify-center items-center">
                        <Image
                            src="/medias/services-1.png"
                            alt="services"
                            height={482}
                            width={592}
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-col justify-center items-center py-16 bg-teal text-white">
                <h1 className="header2">The club</h1>
                <span className="body1 max-w-4xl text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
                </span>
                <div className="w-full py-8 flex justify-center">
                    <Button label="explore" variant='navy' icon={<ArrowUpRight />} />
                </div>
                <Carousel className="w-full" opts={{ loop: true, align: 'center' }}>
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="max-w-[1000px]">
                                <div className="p-1">
                                    <Card className="rounded-none border-none">
                                        <CardContent className="flex aspect-video items-center justify-center max-h-[600px] p-0">
                                            <Image src={"/medias/MasterBrandFilm2.png"} alt={"MasterBrandFilm"} width={1088} height={608} className="w-full h-full object-cover" />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
            <section className="flex flex-col items-center justify-center w-full py-24 text-navy bg-sand">
                <div className="grid grid-cols-2">
                    <div className="relative w-full overflow-hidden group">
                        <img
                            src="/medias/services-1.png"
                            alt="services"
                            className="w-full"
                        />
                        <img
                            src="/medias/services-2.png"
                            alt="services"
                            className="w-full absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />
                    </div>
                    <div className="flex flex-col text-center justify-center  items-center gap-16">
                        <h1 className="header2">services</h1>
                        <span className="body1 max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                        <div>
                            <Button label="explore" variant="navy" icon={<ArrowUpRight />} />
                        </div>
                    </div>
                </div>
            </section>
            <GowanusWharf />
            <AvailableApartments />
            <InquireComponent />
            <Footer />
        </main>
    )
}