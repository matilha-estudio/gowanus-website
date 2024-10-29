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
import { useEffect, useState } from "react";
import { getNeighborhood } from "@/services/neighborhood";
import { NeighborhoodResponse } from "@/services/models/neighborhood";

export default function Neighborhood() {
    const scrollByVh = useScrollByVh();
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const [data, setData] = useState<NeighborhoodResponse | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    async function handleData() {
        try {
            const response = await getNeighborhood()
            setData(response)
        } catch (err) {
            setError('Failed to fetch data')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        handleData()
    }, [])

    if (loading) return (
        <div className='w-screen h-screen bg-navy' />
    )
    if (error) return <p>{error}</p>

    return (
        <Reveal className="flex min-h-screen flex-col items-center justify-between bg-white">
            <>
                <NavBar variant="white" hasBackground={false} hasHomeButton={false} position="absolute" pageName="neighborhood" pagePath="/neighborhood" />

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

                <NavBar variant="navyOutline" hasBackground={true} position='sticky' className='top-0 hidden md:flex' pageName="neighborhood" pagePath="/neighborhood" />

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
                                Pick up on the inimitable blend of people and experiences that energize our living locale.
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
                                <h1 className="header1 max-w-56 leading-none">Life Out Loud</h1>
                                <span className="body1 max-w-lg">
                                    Artful invention. Personal expression. Makers, doers, and dreamers collide and create culture.
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

                                <Image src={"/logos/waveicon-marigold.svg"} alt="waveicon-marigold" width={200} height={10} className="absolute self-center left-1/2 transform -translate-x-1/2 z-20" />

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
                            {data && data[0].acf_medias.list_images.map((item, index) => (
                                <CarouselItem key={index} className="max-w-[1000px] flex flex-col gap-8">
                                    <div className="md:p-1">
                                        <Card className="rounded-none">
                                            <CardContent className="flex aspect-square md:aspect-video items-center justify-center max-h-[600px] p-0">
                                                <Image src={item.image} alt={"MasterBrandFilm"} width={1088} height={608} className="w-full h-full object-cover" />
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <span className="body2 text-navy text-center self-center">
                                        {item.description}
                                    </span>
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
                            <div className="relative w-[336px] h-[330px] md:w-[672px] md:h-[618px] md:flex  mx-auto hidden">
                                <div className="absolute bottom-0 left-0 w-[221px] h-[147px] md:h-[250px] md:w-[378px] overflow-hidden group z-10">
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

                                <Image src={"/logos/waveicon-marigold.svg"} alt="waveicon-marigold" width={200} height={10} className="absolute self-center -right-24 z-20" />

                                <div className="absolute right-0 size-[336px] overflow-hidden group">
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
                                <h1 className="header1">Eats and Afters</h1>
                                <span className="body1 max-w-lg">
                                    A feast for the senses around every corner. The bites are bumping. The beats go boom.
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
                                <CarouselItem key={index} className="max-w-[1000px] flex flex-col gap-8">
                                    <div className="md:p-1">
                                        <Card className="rounded-none">
                                            <CardContent className="flex aspect-square md:aspect-video items-center justify-center max-h-[600px] p-0">
                                                <Image src={"/medias/MasterBrandFilm.png"} alt={"MasterBrandFilm"} width={1088} height={608} className="w-full h-full object-cover" />
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <span className="body2 text-center self-center text-white">
                                        {/* {item.description} */}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </span>
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
                                <h1 className="header1">Greater Goods</h1>
                                <span className="body1 max-w-lg">
                                    Shop into an eclectic mix of brands you'll love, curated provisions, and locally-owned businesses.
                                </span>
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

                                <Image src={"/logos/waveicon-marigold.svg"} alt="waveicon-marigold" width={200} height={10} className="absolute top-24 left-40 z-20" />

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
                        </div>
                    </Reveal>
                </section>

                <section className="w-full flex justify-center md:py-16 relative bg-white">
                    <div className="absolute w-full h-1/5 bg-white top-0" />
                    <Carousel className="w-full" opts={{ loop: true, align: 'center' }}>
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="max-w-[1000px] flex flex-col gap-8">
                                    <div className="md:p-1">
                                        <Card className="rounded-none">
                                            <CardContent className="flex aspect-square md:aspect-video items-center justify-center max-h-[600px] p-0">
                                                <Image src={"/medias/MasterBrandFilm.png"} alt={"MasterBrandFilm"} width={1088} height={608} className="w-full h-full object-cover" />
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <span className="body2 text-navy text-center self-center">
                                        {/* {item.description} */}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </span>
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
            </>
        </Reveal>
    )
}