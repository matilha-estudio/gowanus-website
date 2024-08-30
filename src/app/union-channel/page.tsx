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
            <section className="flex flex-col items-center w-full py-24 text-navy">
                <Image src="/medias/Explore/Image_1.png" width={322} height={420} alt="Image1" className="absolute left-28 -mt-4 object-cover" />
                <Image src="/medias/Explore/Image_2.png" width={343} height={228} alt="Image2" className="absolute left-8 mt-96 object-cover z-10" />
                <Image src="/medias/Explore/Image_3.png" width={156} height={104.71} alt="Image3" className="absolute right-[438px] mt-4 object-cover -z-10" />
                <Image src="/medias/Explore/Image_4.png" width={276} height={276} alt="Image4" className="absolute right-24 mt-4 object-cover" />
                <Image src="/medias/Explore/Image_5.png" width={367.46} height={244} alt="Image5" className="absolute right-32 mt-80 object-cover -z-10" />
                <div className="flex flex-col text-center gap-16">
                    <div className="flex flex-col z-20">
                        <h1 className="header1XXL leading-none">gowanus</h1>
                        <h1 className="header1XXL leading-none">is</h1>
                        <h1 className="header1XXL leading-none">calling</h1>
                    </div>
                    <span className="body1 max-w-lg z-20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                    </span>
                    <div>
                        <Button variant='marigold' label="learn more" icon={<ArrowUpRight />} />
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center w-full py-24 text-navy">
                <img src="/medias/Availabilities.png" alt="Availabilities" className="object-cover w-full absolute -z-10" />
                <div className="flex flex-col text-center text-white gap-8">
                    <h1 className="header1">Available APARTMENTS </h1>
                    <span className="body1 max-w-3xl">
                        1 to 3-Bedrooms Now Pre-leasing
                    </span>
                    <div>
                        <Button variant='marigold' label="view all" size='default' icon={<ArrowUpRight />} />
                    </div>
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