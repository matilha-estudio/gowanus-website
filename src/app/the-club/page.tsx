'use client'

import NavBar from "@/components/navbar";
import TextReveal from "@/components/textReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { useScrollByVh } from "@/hooks/useScrollByVh";
import { ArrowDown, ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "../lib/utils";
import { CustomCarousel2 } from "@/components/ui/customCarousel2";
import Footer from "@/components/sections/footer";
import InquireComponent from "@/components/sections/inquire";

export default function TheClub() {
    const scrollByVh = useScrollByVh();

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => setExpanded(!expanded);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-sand">
            <NavBar variant="white" hasBackground={false} showLogoIcon={false} hasHomeButton={false} position="absolute" />

            <section className="flex text-white justify-center w-full h-screen">
                <h1 className="absolute max-w-[585px] left-1/2 transform -translate-x-1/2 self-center header2XXL">
                    The Club
                </h1>
                <video src="/medias/the-club.webm" autoPlay muted loop className="aspect-video object-cover w-full h-screen">the-club</video>
                <Button
                    variant="icon"
                    icon={<ArrowDown className='text-marigold' />}
                    className='absolute bottom-2 z-20'
                    onClick={scrollByVh}
                />
            </section>

            <NavBar variant="navyOutline" hasBackground={true} showLogoIcon={true} position='sticky' className='top-0' />

            <section className="relative flex flex-col items-center bg-navy w-full pb-24">
                <Image src="/logos/waveicon-marigold.svg" alt="waveicon-navy" width={242} height={12} className='pt-24' />
                <div className="flex flex-col text-center text-white gap-16">

                    <TextReveal text='Welcome to the club' />

                    <span className="body1 max-w-3xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus. Maecenas at convallis lacus.
                    </span>
                </div>
            </section>

            <section className="relative flex flex-col items-center justify-center w-full py-24 text-navy bg-white">
                <div className="absolute w-full h-1/5 bg-navy top-0" />
                <div className="grid grid-cols-2">
                    <div className="relative w-full overflow-hidden group">
                        <img
                            src="/medias/the-club-exemple1.png"
                            alt="services"
                            className="w-full"
                        />
                        <img
                            src="/medias/the-club-exemple2.png"
                            alt="services"
                            className="w-full absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />
                    </div>
                    <div className="flex flex-col text-center justify-center  items-center gap-12">
                        <h1 className="header1">Wellness</h1>
                        <span className="subheader3-bold max-w-lg">
                            yoga Studio  |  Spa
                        </span>
                        <span className="body1 max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                    </div>
                </div>
            </section>

            <section className="relative flex flex-col items-center justify-center w-full py-24 text-navy bg-white">
                <div className="absolute w-full h-1/5 bg-lavenderLake bottom-0" />
                <div className="grid grid-cols-2">
                    <div className="flex flex-col text-center justify-center  items-center gap-12">
                        <h1 className="header1">SPORT</h1>
                        <span className="subheader3-bold max-w-lg">
                            Basketball Court  |  mini golf | Golf SIMULAtor
                        </span>
                        <span className="body1 max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                    </div>
                    <div className="relative w-full overflow-hidden group">
                        <img
                            src="/medias/sport1.png"
                            alt="services"
                            className="w-full"
                        />
                        <img
                            src="/medias/sport2.png"
                            alt="services"
                            className="w-full absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />
                    </div>
                </div>
            </section>

            <section className="relative flex flex-col items-center justify-center w-full py-24 text-white bg-lavenderLake">
                <div className="grid grid-cols-2">
                    <div className="relative w-[672px] h-[618px] flex overflow-hidden">
                        <div className="absolute bottom-0 h-[276px] w-[415px] overflow-hidden group z-10">
                            <img
                                src="/medias/coworking1.png"
                                alt="services"
                                className="w-full h-full object-cover"
                            />
                            <img
                                src="/medias/coworking2.png"
                                alt="services"
                                className="w-full h-full object-cover absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                            />
                        </div>
                        <div className="absolute right-0 h-[481px] w-[368px] overflow-hidden group">
                            <img
                                src="/medias/coworking2.png"
                                alt="services"
                                className="w-full h-full object-cover"
                            />
                            <img
                                src="/medias/coworking1.png"
                                alt="services"
                                className="w-full h-full object-cover absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col text-center justify-center  items-center gap-12">
                        <h1 className="header1">FITNESS</h1>
                        <span className="subheader3-bold max-w-lg">
                            Premiere Gym | Mirror Fitness Room
                        </span>
                        <span className="body1 max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                    </div>
                </div>
            </section>

            <section className="relative flex flex-col items-center justify-center w-full py-24 text-navy bg-white">
                <div className="absolute w-full h-1/5 bg-lavenderLake top-0" />
                <div className="grid grid-cols-2">
                    <div className="relative w-full overflow-hidden group">
                        <img
                            src="/medias/rooftop1.png"
                            alt="services"
                            className="w-full"
                        />
                        <img
                            src="/medias/rooftop2.png"
                            alt="services"
                            className="w-full absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />
                    </div>
                    <div className="flex flex-col text-center justify-center  items-center gap-12">
                        <h1 className="header1">Rooftop</h1>
                        <span className="subheader3-bold max-w-lg">
                            rooftop Pool  | Skylounge |  outdoor dining Terrace | Lounging lawn
                        </span>
                        <span className="body1 max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                    </div>
                </div>
            </section>

            <section className="relative flex flex-col items-center justify-center w-full py-24 text-navy bg-white">
                <div className="absolute w-full h-1/5 bg-sand bottom-0" />
                <div className="grid grid-cols-2">
                    <div className="flex flex-col text-center justify-center  items-center gap-12">
                        <h1 className="header1">Entertainment</h1>
                        <span className="subheader3-bold max-w-lg">
                            Dining Lounge | Game Lounge | Entertainment Lounge | Kids room
                        </span>
                        <span className="body1 max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                    </div>
                    <div className="relative w-full overflow-hidden group">
                        <img
                            src="/medias/entertainment1.png"
                            alt="services"
                            className="w-full"
                        />
                        <img
                            src="/medias/entertainment2.png"
                            alt="services"
                            className="w-full absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />
                    </div>
                </div>
            </section>

            <section className="relative flex flex-col items-center justify-center w-full py-24 text-navy bg-sand">
                <div className="grid grid-cols-2">
                    <div className="flex flex-col text-center justify-center  items-center gap-12">
                        <h1 className="header1">FITNESS</h1>
                        <span className="subheader3-bold max-w-lg">
                            Premiere Gym | Mirror Fitness Room
                        </span>
                        <span className="body1 max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                    </div>
                    <div className="relative w-[672px] h-[618px] flex overflow-hidden">
                        <div className="absolute bottom-0 right-0 h-[276px] w-[415px] overflow-hidden group z-10">
                            <img
                                src="/medias/coworking1.png"
                                alt="services"
                                className="w-full h-full object-cover"
                            />
                            <img
                                src="/medias/coworking2.png"
                                alt="services"
                                className="w-full h-full object-cover absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                            />
                        </div>
                        <div className="absolute left-0 h-[481px] w-[368px] overflow-hidden group">
                            <img
                                src="/medias/coworking2.png"
                                alt="services"
                                className="w-full h-full object-cover"
                            />
                            <img
                                src="/medias/coworking1.png"
                                alt="services"
                                className="w-full h-full object-cover absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full flex flex-col justify-center items-center py-16 bg-white text-white">
                <div className="absolute w-full h-1/5 bg-sand top-0" />
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

            <section className="relative flex flex-col items-center justify-center w-full py-24 text-navy bg-white gap-16">
                <span className="body1 max-w-4xl text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus. Maecenas at convallis lacus.
                </span>
                <div>
                    <Button label="brochure" variant="navy" icon={<ArrowUpRight />} className="h-10 w-fit" />
                </div>
                <div className="relative w-full flex flex-col items-center max-w-4xl gap-16">
                    <div
                        className={`w-full grid grid-cols-3 items-center transition-max-height duration-1000 ease-in-out overflow-hidden ${expanded ? 'max-h-[1000px]' : 'max-h-32'
                            }`}
                    >
                        <div className="flex flex-col items-center">
                            <span className="subheader2">Union Channel</span>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="subheader2">DOUGLASS PORT</span>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="subheader2">NEVINS LANDING</span>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                            <p className="body1">Amenity 1</p>
                        </div>
                    </div>
                    <button
                        onClick={toggleExpand}
                        className={cn(
                            "flex flex-1 gap-6 items-center justify-between py-4 font-medium transition-all hover:underline subheader4",
                            "-mt-8 text-clay"
                        )}
                    >
                        {expanded ? 'view less' : 'view all'}
                        <ArrowDownRight
                            className={cn(
                                "h-6 w-6 shrink-0 transition-transform duration-200",
                                expanded ? "-rotate-90" : ""
                            )}
                        />
                    </button>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center w-full py-24 text-navy bg-white">
                <div className="grid grid-cols-2">
                    <video src="/medias/the-club.webm" autoPlay muted loop className="aspect-video object-contain">the-club</video>
                    <div className="flex flex-col text-center justify-center items-center gap-16">
                        <h1 className="header1">WALK THROUGH</h1>
                        <span className="body1 max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                        <div>
                            <Button label="explore" variant='navy' icon={<ArrowUpRight />} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative flex flex-col items-center justify-center w-full pb-24 pt-0 text-navy bg-canalRoyale gap-16">
                <div className="flex flex-col items-center text-center text-white gap-16">
                    <Image src="/logos/waveicon-marigold.svg" alt="waveicon-navy" width={242} height={12} className='pt-24 -mb-5' />

                    <TextReveal text='PARTNERSHIPS' />

                    <span className="body1 max-w-3xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus. Maecenas at convallis lacus.
                    </span>
                </div>
                <CustomCarousel2 />
            </section>

            <InquireComponent />

            <Footer />

        </main >
    )
}