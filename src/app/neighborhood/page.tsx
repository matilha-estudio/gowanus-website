'use client'

import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { useScrollByVh } from "@/hooks/useScrollByVh";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { cn } from "../lib/utils";
import TextReveal from "@/components/textReveal";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import MapComponent from "@/components/sections/mapComponent";
import InquireComponent from "@/components/sections/inquire";
import Footer from "@/components/sections/footer";
import Reveal from "@/components/animations/reveal";

export default function Neighborhood() {
    const scrollByVh = useScrollByVh();
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-white">
            <NavBar variant="white" hasBackground={false} hasHomeButton={false} position="absolute" />

            <section className="flex relative text-white justify-center w-full min-h-96 md:h-screen">
                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XXL", " text-white z-10 absolute left-1/2 transform -translate-x-1/2 self-center text-center")}>
                    gowanus is calling
                </h1>
                <Image src={"/medias/gowanusiscalling.png"} alt={"gowanusiscalling"} width={1440} height={810} className="w-full md:h-screen object-cover" />
                <div className={cn("absolute inset-0 bg-black/30")} />
                <Button
                    variant="icon"
                    icon={<ArrowDown className='text-marigold' />}
                    className='absolute bottom-2 z-20 hidden md:flex'
                    onClick={scrollByVh}
                />
            </section>

            <NavBar variant="navyOutline" hasBackground={true} position='sticky' className='top-0 hidden md:flex' />

            <section className="relative flex flex-col items-center bg-teal text-navy w-full">
                <Image src="/logos/waveicon-navy.svg" alt="waveicon-navy" width={242} height={12} className='pb-8 pt-24' />
                <Reveal>
                    <div className="flex flex-col text-center text-white gap-16 items-center">

                        {
                            SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                                <TextReveal text='Welcome to the neighborhood' />
                            )
                        }

                        <h1 className={'header1MD leading-none md:hidden'}>
                            Welcome to the neighborhood
                        </h1>

                        <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                    </div>
                </Reveal>

                <div className="h-32" />
            </section>

            <section className="relative flex flex-col items-center justify-center w-full pb-24 text-navy bg-white">
                <Reveal>
                    <div className="grid md:grid-cols-2 -mt-10 mx-auto">
                        {/* Mobile */}
                        <div className="relative w-[336px] h-[330px] md:w-[672px] md:h-[618px] md:hidden flex overflow-hidden mx-auto">
                            <div className="absolute bottom-0 right-0 w-[221px] h-[147px] md:h-[276px] md:w-[415px] overflow-hidden group z-10">
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_6_JenLewin.png"  // imagem estática
                                    alt="services"
                                    className="w-full h-full object-cover group-hover:hidden"
                                />
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_6_JenLewin.gif" // gif animado
                                    alt="services"
                                    className="w-full h-full object-cover hidden group-hover:block"
                                />
                            </div>

                            <div className="absolute left-0 w-[196px] h-[256px] md:h-[481px] md:w-[368px] overflow-hidden group">
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_19_Andrew.png" // imagem estática
                                    alt="services"
                                    className="w-full h-full object-cover group-hover:hidden"
                                />
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_19_Andrew.gif" // gif animado
                                    alt="services"
                                    className="w-full h-full object-cover hidden group-hover:block"
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="flex flex-col text-center justify-center items-center gap-12 mx-auto">
                            <h1 className="header1">Art & Culture</h1>
                            <span className="body1 max-w-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                            </span>
                        </div>

                        {/* Desktop */}
                        <div className="relative w-[336px] h-[330px] md:w-[672px] md:h-[618px] md:flex overflow-hidden mx-auto hidden">
                            <div className="absolute bottom-0 right-0 w-[221px] h-[147px] md:h-[276px] md:w-[415px] overflow-hidden group z-10">
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_19_Andrew.png"  // imagem estática
                                    alt="services"
                                    className="w-full h-full object-cover group-hover:hidden"
                                />
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_19_Andrew.gif" // gif animado
                                    alt="services"
                                    className="w-full h-full object-cover hidden group-hover:block"
                                />
                            </div>

                            <div className="absolute left-0 w-[196px] h-[256px] md:h-[481px] md:w-[368px] overflow-hidden group">
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_6_JenLewin.png"  // imagem estática
                                    alt="services"
                                    className="w-full h-full object-cover group-hover:hidden"
                                />
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_6_JenLewin.gif" // gif animado
                                    alt="services"
                                    className="w-full h-full object-cover hidden group-hover:block"
                                />
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            <section className="w-full flex justify-center md:py-16 relative bg-white">
                <div className="absolute w-full h-1/5 bg-white top-0" />
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

            <div className="h-32" />

            <section className="relative flex flex-col items-center justify-center w-full pb-24 text-white bg-green">
                <Reveal>
                    <div className="grid md:grid-cols-2 -mt-10 mx-auto">
                        {/* Mobile */}
                        <div className="relative w-[336px] h-[330px] md:w-[672px] md:h-[618px] md:hidden flex overflow-hidden mx-auto">
                            <div className="absolute bottom-0 right-0 w-[221px] h-[147px] md:h-[276px] md:w-[415px] overflow-hidden group z-10">
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_6_JenLewin.png"  // imagem estática
                                    alt="services"
                                    className="w-full h-full object-cover group-hover:hidden"
                                />
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_6_JenLewin.gif" // gif animado
                                    alt="services"
                                    className="w-full h-full object-cover hidden group-hover:block"
                                />
                            </div>

                            <div className="absolute left-0 w-[196px] h-[256px] md:h-[481px] md:w-[368px] overflow-hidden group">
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_19_Andrew.png" // imagem estática
                                    alt="services"
                                    className="w-full h-full object-cover group-hover:hidden"
                                />
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_19_Andrew.gif" // gif animado
                                    alt="services"
                                    className="w-full h-full object-cover hidden group-hover:block"
                                />
                            </div>
                        </div>

                        {/* Desktop */}
                        <div className="relative w-[336px] h-[330px] md:w-[672px] md:h-[618px] md:flex overflow-hidden mx-auto hidden">
                            <div className="absolute bottom-0 left-0 w-[221px] h-[147px] md:h-[276px] md:w-[415px] overflow-hidden group z-10">
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_19_Andrew.png"  // imagem estática
                                    alt="services"
                                    className="w-full h-full object-cover group-hover:hidden"
                                />
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_19_Andrew.gif" // gif animado
                                    alt="services"
                                    className="w-full h-full object-cover hidden group-hover:block"
                                />
                            </div>

                            <div className="absolute right-0 w-[196px] h-[256px] md:h-[481px] md:w-[368px] overflow-hidden group">
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_6_JenLewin.png"  // imagem estática
                                    alt="services"
                                    className="w-full h-full object-cover group-hover:hidden"
                                />
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_6_JenLewin.gif" // gif animado
                                    alt="services"
                                    className="w-full h-full object-cover hidden group-hover:block"
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="flex flex-col text-center justify-center items-center gap-12 mx-auto">
                            <h1 className="header1">DIning & nightlife</h1>
                            <span className="body1 max-w-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                            </span>
                        </div>
                    </div>
                </Reveal>
            </section>

            <section className="w-full flex justify-center md:py-16 relative bg-green">
                <div className="absolute w-full h-1/5 bg-green top-0" />
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

            <div className="h-32 w-full bg-green" />

            <section className="relative flex flex-col items-center justify-center w-full pb-24 text-navy bg-white">
                <Reveal>
                    <div className="grid md:grid-cols-2 -mt-10 mx-auto">
                        {/* Mobile */}
                        <div className="relative w-[336px] h-[330px] md:w-[672px] md:h-[618px] md:hidden flex overflow-hidden mx-auto">
                            <div className="absolute bottom-0 right-0 w-[221px] h-[147px] md:h-[276px] md:w-[415px] overflow-hidden group z-10">
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_6_JenLewin.png"  // imagem estática
                                    alt="services"
                                    className="w-full h-full object-cover group-hover:hidden"
                                />
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_6_JenLewin.gif" // gif animado
                                    alt="services"
                                    className="w-full h-full object-cover hidden group-hover:block"
                                />
                            </div>

                            <div className="absolute left-0 w-[196px] h-[256px] md:h-[481px] md:w-[368px] overflow-hidden group">
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_19_Andrew.png" // imagem estática
                                    alt="services"
                                    className="w-full h-full object-cover group-hover:hidden"
                                />
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_19_Andrew.gif" // gif animado
                                    alt="services"
                                    className="w-full h-full object-cover hidden group-hover:block"
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="flex flex-col text-center justify-center items-center gap-12 mx-auto">
                            <h1 className="header1">RETAIL</h1>
                            <span className="body1 max-w-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                            </span>
                        </div>

                        {/* Desktop */}
                        <div className="relative w-[336px] h-[330px] md:w-[672px] md:h-[618px] md:flex overflow-hidden mx-auto hidden">
                            <div className="absolute bottom-0 right-0 w-[221px] h-[147px] md:h-[276px] md:w-[415px] overflow-hidden group z-10">
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_19_Andrew.png"  // imagem estática
                                    alt="services"
                                    className="w-full h-full object-cover group-hover:hidden"
                                />
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_19_Andrew.gif" // gif animado
                                    alt="services"
                                    className="w-full h-full object-cover hidden group-hover:block"
                                />
                            </div>

                            <div className="absolute left-0 w-[196px] h-[256px] md:h-[481px] md:w-[368px] overflow-hidden group">
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_6_JenLewin.png"  // imagem estática
                                    alt="services"
                                    className="w-full h-full object-cover group-hover:hidden"
                                />
                                <img
                                    src="/medias/cardExemple/2024_GW_MVP_6_JenLewin.gif" // gif animado
                                    alt="services"
                                    className="w-full h-full object-cover hidden group-hover:block"
                                />
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            <section className="w-full flex justify-center md:py-16 relative bg-white">
                <div className="absolute w-full h-1/5 bg-white top-0" />
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

            <MapComponent showButton />

            <div className="h-20 w-full bg-navy" />

            <InquireComponent />

            <Footer />
        </main>
    )
}