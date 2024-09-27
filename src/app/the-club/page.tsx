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
import { useWindowWidth } from "@/hooks/useWindowWidth";
import WalkThrough from "@/components/sections/walkThrough";

export default function TheClub() {
    const scrollByVh = useScrollByVh();

    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => setExpanded(!expanded);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between ">
            <NavBar variant="white" hasBackground={false} hasHomeButton={false} position="absolute" />

            <section className="flex relative text-white justify-center w-full md:h-screen">
                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XXL", " text-white z-10 absolute left-1/2 transform -translate-x-1/2 text-center self-center w-full")}>
                    The Club
                </h1>
                <video src="/medias/the-club.webm" autoPlay muted loop className="aspect-square md:aspect-video object-cover w-full md:h-screen">the-club</video>
                <div className={cn("absolute inset-0 bg-black/30")} />
                <Button
                    variant="icon"
                    icon={<ArrowDown className='text-marigold' />}
                    className='absolute bottom-2 z-20 hidden md:flex'
                    onClick={scrollByVh}
                />
            </section>

            <NavBar variant="navyOutline" hasBackground={true} position='sticky' className='top-0 hidden md:flex' />

            <section className="relative flex flex-col items-center bg-navy w-full pb-24">
                <Image src="/logos/waveicon-marigold.svg" alt="waveicon-navy" width={182} height={12} className='pt-24' />
                <div className="flex flex-col text-center items-center text-white gap-16 mt-16">

                    {
                        SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                            <TextReveal text='Welcome to the club' />
                        )
                    }

                    <h1 className={'header1MD leading-none md:hidden'}>
                        Welcome to the club
                    </h1>

                    <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                    </span>
                </div>
            </section>

            <section className="relative flex flex-col items-center justify-center w-full py-24 text-navy bg-white">
                <div className="absolute w-full h-1/5 bg-navy top-0" />
                <div className="grid px-6 md:grid-cols-2">
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
                        {
                            SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                                <TextReveal text='Wellness' />
                            )
                        }

                        <h1 className={'header1MD md:hidden'}>
                            Wellness
                        </h1>

                        <span className={cn(SCREEN_WIDTH > MOBILE_BREAKPOINT ? "subheader4" : "subheader3-bold max-w-lg")}>
                            yoga Studio  |  Spa
                        </span>

                        <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                    </div>
                </div>
            </section>

            <section className="relative flex flex-col items-center justify-center w-full py-12 text-navy bg-white">
                <div className="absolute w-full h-1/5 top-0" />
                <div className="grid px-6 md:grid-cols-2">
                    <div className="relative w-full overflow-hidden group md:hidden">
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
                        {
                            SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                                <TextReveal text='SPORT' />
                            )
                        }

                        <h1 className={'header1MD md:hidden'}>
                            SPORT
                        </h1>

                        <span className={cn(SCREEN_WIDTH > MOBILE_BREAKPOINT ? "subheader4" : "subheader3-bold max-w-lg")}>
                            Basketball Court  |  mini golf | Golf SIMULAtor
                        </span>

                        <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                    </div>
                    <div className="relative w-full overflow-hidden group md:flex hidden">
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
                </div>
            </section>

            <section className="relative flex flex-col items-center justify-center w-full pb-24 mt-10 text-white bg-lavenderLake">
                <div className="grid md:grid-cols-2 -mt-10 mx-auto">
                    <div className="relative w-[336px] h-[330px] md:w-[672px] md:h-[618px] flex overflow-hidden mx-auto">
                        <div className="absolute bottom-0 w-[221px] h-[147px] md:h-[276px] md:w-[415px] overflow-hidden group z-10">
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

                        <div className="absolute right-0 w-[196px] h-[256px] md:h-[481px] md:w-[368px] overflow-hidden group">
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

                    <div className="flex flex-col text-center justify-center items-center gap-12 mx-auto">
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

            <section className="relative flex flex-col items-center justify-center w-full py-12 text-navy bg-white">
                <div className="absolute w-full h-1/5 bg-lavenderLake top-0" />
                <div className="grid px-6 md:grid-cols-2">
                    <div className="relative w-full overflow-hidden group md:hidden">
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
                        {
                            SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                                <TextReveal text='Rooftop' />
                            )
                        }

                        <h1 className={'header1MD md:hidden'}>
                            Rooftop
                        </h1>

                        <span className={cn(SCREEN_WIDTH > MOBILE_BREAKPOINT ? "subheader4" : "subheader3-bold max-w-lg")}>
                            rooftop Pool  | Skylounge |  outdoor dining Terrace | Lounging lawn
                        </span>

                        <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                    </div>
                    <div className="relative w-full overflow-hidden group md:flex hidden">
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
                </div>
            </section>

            <section className="relative flex flex-col items-center justify-center w-full py-24 text-navy bg-white">
                <div className="absolute w-full h-1/5 md:bg-sand bottom-0" />
                <div className="grid px-6 md:grid-cols-2">
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
                        {
                            SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                                <TextReveal text='Entertainment' />
                            )
                        }

                        <h1 className={'header1MD md:hidden'}>
                            Entertainment
                        </h1>

                        <span className={cn(SCREEN_WIDTH > MOBILE_BREAKPOINT ? "subheader4" : "subheader3-bold max-w-lg")}>
                            Dining Lounge | Game Lounge | Entertainment Lounge | Kids room
                        </span>

                        <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                    </div>
                </div>
                <div className="h-10" />
            </section>

            <section className="relative flex flex-col items-center justify-center w-full pb-24 text-navy bg-sand">
                <div className="grid md:grid-cols-2 -mt-10 mx-auto">
                    <div className="relative w-[336px] h-[330px] md:w-[672px] md:h-[618px] md:hidden flex overflow-hidden mx-auto">
                        <div className="absolute bottom-0 w-[221px] h-[147px] md:h-[276px] md:w-[415px] overflow-hidden group z-10">
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

                        <div className="absolute right-0 w-[196px] h-[256px] md:h-[481px] md:w-[368px] overflow-hidden group">
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

                    <div className="flex flex-col text-center justify-center items-center gap-12 mx-auto">
                        <h1 className="header1">FITNESS</h1>
                        <span className="subheader3-bold max-w-lg">
                            Premiere Gym | Mirror Fitness Room
                        </span>
                        <span className="body1 max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                    </div>

                    <div className="relative w-[336px] h-[330px] md:w-[672px] md:h-[618px] md:flex overflow-hidden mx-auto hidden">
                        <div className="absolute bottom-0 w-[221px] h-[147px] md:h-[276px] md:w-[415px] overflow-hidden group z-10">
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

                        <div className="absolute right-0 w-[196px] h-[256px] md:h-[481px] md:w-[368px] overflow-hidden group">
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

            <section className="w-full flex justify-center md:py-16 relative">
                <div className="absolute w-full h-1/5 bg-sand top-0" />
                <Carousel className="w-full" opts={{ loop: true, align: 'center' }}>
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="max-w-[1000px]">
                                <div className="md:p-1">
                                    <Card className="rounded-none">
                                        <CardContent className="flex aspect-square md:aspect-video items-center justify-center max-h-[600px] p-0">
                                            <Image src={"/medias/MasterBrandFilm.png"} alt={"MasterBrandFilm"} width={1088} height={608} className="w-full h-full object-cover" />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-navy active:bg-marigold rounded-none md:bg-transparent" />
                    <CarouselNext className="bg-navy active:bg-marigold rounded-none md:bg-transparent -mr-3" />
                </Carousel>
            </section>

            <section className="relative flex flex-col items-center justify-center w-full md:py-24 text-navy bg-white gap-16">
                <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg", "text-center")}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                </span>
                <div>
                    <Button label="brochure" variant="navy" icon={<ArrowUpRight />} size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} />
                </div>
                <div className="relative w-full flex flex-col items-center max-w-4xl gap-16">
                    <div
                        className={`w-full grid grid-cols-3 items-center transition-max-height duration-1000 ease-in-out overflow-hidden ${expanded ? 'max-h-[1000px]' : 'max-h-32'
                            }`}
                    >
                        <div className="flex flex-col items-center">
                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader4" : "subheader2", "text-center")}>Union Channel</span>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader4" : "subheader2", "text-center")}>DOUGLASS PORT</span>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader4" : "subheader2", "text-center")}>NEVINS LANDING</span>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
                            <p className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>Amenity 1</p>
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

            <WalkThrough className="pt-0" />

            <section className="relative flex flex-col items-center justify-center w-full pb-24 pt-0 text-navy bg-canalRoyale gap-16">
                <div className="flex flex-col items-center text-center text-white gap-16">
                    <Image src="/logos/waveicon-marigold.svg" alt="waveicon-navy" width={242} height={12} className='pt-24 -mb-5' />

                    {
                        SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                            <TextReveal text='PARTNERSHIPS' />
                        )
                    }

                    <h1 className={'header1MD md:hidden'}>
                        PARTNERSHIPS
                    </h1>

                    <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                    </span>
                </div>
                <CustomCarousel2 />
            </section>

            <InquireComponent />

            <Footer />

        </main >
    )
}