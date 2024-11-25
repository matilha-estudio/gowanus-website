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
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { CustomCarousel2 } from "@/components/ui/customCarousel2";
import Footer from "@/components/sections/footer";
import InquireComponent from "@/components/sections/inquire";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import WalkThrough from "@/components/sections/walkThrough";
import Reveal from "@/components/animations/reveal";
import { CarouselResponse } from "@/services/models/carousel";
import { getCarousel } from "@/services/carousel";
import { getTheClub } from "@/services/theClub";
import { TheClubResponse } from "@/services/models/theClub";
import { type CarouselApi } from "@/components/ui/carousel"
import NavbarComponent from "@/components/navbarComponent";
import { getLinks } from "@/services/links";
import { acf } from "@/services/models/links";

export default function TheClub() {
    const scrollByVh = useScrollByVh();

    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const [expanded, setExpanded] = useState(false);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0)

    const toggleExpand = () => setExpanded(!expanded);

    const [dataCarousel, setDataCarousel] = useState<CarouselResponse | null>(null)
    const [dataTheClub, setDataTheClub] = useState<TheClubResponse | null>(null)
    const [links, setLinks] = useState<acf | null>(null)

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    async function handleData() {
        try {
            const responseCarousel = await getCarousel()
            const responseTheClub = await getTheClub()
            const links = await getLinks()

            setDataCarousel(responseCarousel)
            setDataTheClub(responseTheClub)
            setLinks(links)
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
        <main className="flex min-h-screen flex-col items-center justify-between ">
            <NavbarComponent
                pageName="the club" pagePath="/the-club"
            />

            <section className="flex relative text-white justify-center w-full md:h-screen">
                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XXL", " text-white z-10 absolute left-1/2 transform -translate-x-1/2 text-center self-center w-full")}>
                    {dataTheClub && dataTheClub[0].title.rendered}
                </h1>
                <video src={dataTheClub && dataTheClub[0].acf_medias.video_header ? dataTheClub[0]?.acf_medias.video_header : ""} autoPlay muted loop playsInline className="aspect-square md:aspect-video object-cover w-full md:h-screen">the-club</video>
                <div className={cn("absolute inset-0 bg-black/30")} />
                <Button
                    variant="icon"
                    icon={<ArrowDown className='text-marigold' />}
                    className='absolute bottom-2 z-20 hidden md:flex'
                    onClick={scrollByVh}
                />
            </section>

            <section className="relative flex flex-col items-center bg-navy w-full pb-24">
                <Image src="/logos/waveicon-teal.svg" alt="waveicon-navy" width={182} height={12} className='pt-24' />
                <Reveal className="flex flex-col text-center items-center text-white gap-16 mt-16">
                    <>
                        {
                            SCREEN_WIDTH > MOBILE_BREAKPOINT && dataTheClub && (
                                <>
                                    <TextReveal text={dataTheClub[0].acf_medias.title} />

                                </>
                            )
                        }
                        <h1 className={'header1MD leading-none md:hidden'}>
                            {dataTheClub && dataTheClub[0].acf_medias.title}
                        </h1>
                        <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-screen-md")}>
                            {dataTheClub && dataTheClub[0].acf_medias.subtitle}
                        </span>
                    </>
                </Reveal>
            </section>

            <section className="relative flex flex-col items-center justify-center w-full py-24 lg:px-20 text-navy bg-white">
                <div className="absolute w-full h-1/5 bg-navy top-0" />
                <div className="grid px-6 md:grid-cols-2 w-full h-full">
                    <div className="relative w-full overflow-hidden group gap-8 max-w-[672px] max-h-[618px] h-full aspect-square">
                        <Image
                            src={dataTheClub && dataTheClub[0].acf_medias.section_1 ? dataTheClub[0]?.acf_medias.section_1[0]?.image_1 : ""}
                            alt="section_1"
                            className="w-full h-full max-w-[672px] max-h-[618px] object-cover"
                            width={672}
                            height={618}
                        />
                        <Image
                            src={dataTheClub && dataTheClub[0].acf_medias.section_1 ? dataTheClub[0]?.acf_medias.section_1[0]?.image_2 : ""}
                            alt="section_1"
                            width={672}
                            height={618}
                            className="w-full h-full max-w-[672px] max-h-[618px] object-cover absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />
                    </div>
                    <Reveal className="flex flex-col text-center justify-center items-center gap-8  md:gap-12">
                        <>
                            {
                                SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                                    <div className="max-w-[400px]" >
                                        <TextReveal
                                            style={{ lineHeight: .8 }}
                                            text={dataTheClub && dataTheClub[0].acf_medias.section_1 ? dataTheClub[0]?.acf_medias.section_1[0]?.title : ""} />
                                    </div>
                                )
                            }

                            <h1 className={'header1MD md:hidden'}>
                                {dataTheClub && dataTheClub[0].acf_medias.section_1[0]?.title}
                            </h1>

                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader4" : "subheader5-bold max-w-lg md:mt-4 md:-mb-2")}>
                                {dataTheClub && dataTheClub[0].acf_medias.section_1[0]?.subtitle}
                            </span>

                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                                {dataTheClub && dataTheClub[0].acf_medias.section_1[0]?.description}
                            </span>
                        </>
                    </Reveal>
                </div>
            </section>

            <section className="relative flex flex-col items-center justify-center w-full py-12 lg:px-20 text-navy bg-white">
                <div className="absolute w-full h-1/5 top-0" />
                <div className="grid px-6 md:grid-cols-2 gap-8 z-10 w-full">
                    <div className="relative w-full overflow-hidden group md:hidden">
                        <img
                            src={dataTheClub && dataTheClub[0].acf_medias.section_2 ? dataTheClub[0]?.acf_medias.section_2[0].image_1 : ""}
                            alt="section_2"
                            className="w-full"
                        />
                        <img
                            src={dataTheClub && dataTheClub[0].acf_medias.section_2 ? dataTheClub[0]?.acf_medias.section_2[0].image_2 : ""}
                            alt="section_2"
                            className="w-full absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />
                    </div>
                    <Reveal className="flex flex-col text-center justify-center items-center gap-8 md:gap-8 md:gap-12">
                        <>
                            {
                                SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                                    <div className="max-w-[400px] -mt-20">
                                        <TextReveal style={{ lineHeight: .8 }} text={dataTheClub && dataTheClub[0].acf_medias.section_2 ? dataTheClub[0]?.acf_medias.section_2[0].title : ""} />
                                    </div>
                                )
                            }

                            <h1 className={'header1MD md:hidden'}>
                                {dataTheClub && dataTheClub[0].acf_medias.section_2[0].title}
                            </h1>

                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader4" : "subheader5-bold max-w-lg md:mt-4")}>
                                {dataTheClub && dataTheClub[0].acf_medias.section_2[0].subtitle}
                            </span>

                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg md:-mt-4")}>
                                {dataTheClub && dataTheClub[0].acf_medias.section_2[0].description}
                            </span>
                        </>
                    </Reveal>
                    <div className="relative w-full overflow-hidden group md:flex hidden max-w-[672px] h-full aspect-square">
                        <Image
                            src={dataTheClub && dataTheClub[0].acf_medias.section_2 ? dataTheClub[0]?.acf_medias.section_2[0].image_1 : ""}
                            alt="services"
                            className="w-full h-full max-w-[672px] max-h-[618px] object-cover"
                            width={672}
                            height={618}
                        />
                        <Image
                            src={dataTheClub && dataTheClub[0].acf_medias.section_2 ? dataTheClub[0]?.acf_medias.section_2[0].image_2 : ""}
                            alt="services"
                            width={672}
                            height={618}
                            className="w-full h-full max-w-[672px] max-h-[618px] object-cover absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />
                    </div>
                </div>
                <div className="absolute w-full h-1/6 bottom-0 bg-lavenderLake max-md:hidden" />
            </section>

            <section className="relative flex flex-col items-center justify-center w-full pb-24 lg:px-20 text-navy bg-lavenderLake">
                <div className="absolute w-full h-[5%] top-0 bg-white md:hidden" />
                <div className="grid md:grid-cols-2 mx-auto md:pt-20">
                    <div className="relative group w-[336px] h-[330px] md:w-[672px] md:max-w-[672px] md:h-[618px] flex overflow-hidden mx-auto">
                        <div className="absolute bottom-0 w-[221px] h-[147px] md:h-[276px] md:w-[415px] overflow-hidden z-10">
                            <img
                                src={dataTheClub && dataTheClub[0].acf_medias.section_3 ? dataTheClub[0]?.acf_medias.section_3[0].image_1 : ""}
                                alt="services"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <img
                            src={dataTheClub && dataTheClub[0].acf_medias.section_3 ? dataTheClub[0]?.acf_medias.section_3[0].image_2 : ""}
                            alt="services"
                            className="w-full h-full z-10 object-cover absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />

                        <div className="absolute right-0 w-[196px] h-[256px] md:h-[481px] md:w-[368px] overflow-hidden group">
                            <img
                                src={dataTheClub && dataTheClub[0].acf_medias.section_3 ? dataTheClub[0]?.acf_medias.section_3[0].image_3 : ""}
                                alt="services"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <Reveal className="flex flex-col text-center justify-center items-center gap-8 md:gap-8 md:gap-12 mx-auto">
                        <>
                            {
                                SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                                    <div className="max-w-[430px]">
                                        <TextReveal style={{ lineHeight: .8 }} text={dataTheClub && dataTheClub[0].acf_medias.section_3 ? dataTheClub[0]?.acf_medias.section_3[0].title : ""} />
                                    </div>
                                )
                            }

                            <h1 className={'header1MD md:hidden'}>
                                {dataTheClub && dataTheClub[0].acf_medias.section_3[0].title}
                            </h1>
                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader4" : "subheader5-bold max-w-lg")}>
                                {dataTheClub && dataTheClub[0].acf_medias.section_3[0].subtitle}
                            </span>
                            <span className="body1 max-w-lg">
                                {dataTheClub && dataTheClub[0].acf_medias.section_3[0].description}
                            </span>
                        </>
                    </Reveal>
                </div>
            </section>

            <section className="relative flex flex-col items-center justify-center w-full py-12 lg:px-20 text-navy bg-white">
                <div className="absolute w-full h-1/6 bg-lavenderLake top-0" />
                <div className="grid px-6 md:grid-cols-2 w-full">
                    <div className="relative w-full overflow-hidden group md:hidden">
                        <img
                            src={dataTheClub && dataTheClub[0].acf_medias.section_4 ? dataTheClub[0]?.acf_medias.section_4[0].image_1 : ""}
                            alt="services"
                            className="w-full"
                        />
                        <img
                            src={dataTheClub && dataTheClub[0].acf_medias.section_4 ? dataTheClub[0]?.acf_medias.section_4[0].image_2 : ""}
                            alt="services"
                            className="w-full absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />
                    </div>
                    <Reveal className="flex flex-col text-center justify-center  items-center gap-8 md:gap-12">
                        <>
                            {
                                SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                                    <div className="max-w-[400px]">
                                        <TextReveal style={{ lineHeight: .8 }} text={dataTheClub && dataTheClub[0].acf_medias.section_4 ? dataTheClub[0]?.acf_medias.section_4[0].title : ""} />
                                    </div>
                                )
                            }

                            <h1 className={'header1MD md:hidden'}>
                                {dataTheClub && dataTheClub[0].acf_medias.section_4[0].title}
                            </h1>

                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader4" : "subheader5-bold max-w-lg md:mt-4")}>
                                {dataTheClub && dataTheClub[0].acf_medias.section_4[0].subtitle}
                            </span>

                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                                {dataTheClub && dataTheClub[0].acf_medias.section_4[0].description}
                            </span>
                        </>
                    </Reveal>
                    <div className="relative w-full overflow-hidden group md:flex hidden max-w-[672px] h-full aspect-square">
                        <Image
                            src={dataTheClub && dataTheClub[0].acf_medias.section_4 ? dataTheClub[0]?.acf_medias.section_4[0].image_1 : ""}
                            alt="services"
                            className="w-full h-full max-w-[672px] max-h-[618px] object-cover"
                            width={672}
                            height={618}
                        />
                        <Image
                            src={dataTheClub && dataTheClub[0].acf_medias.section_4 ? dataTheClub[0]?.acf_medias.section_4[0].image_2 : ""}
                            alt="services"
                            width={672}
                            height={618}
                            className="w-full h-full max-w-[672px] max-h-[618px] object-cover absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />
                    </div>
                </div>
            </section>

            <section className="relative flex flex-col items-center justify-center w-full py-24 lg:px-20 text-navy bg-white">
                <div className="absolute w-full h-1/5 md:bg-sand bottom-0" />
                <div className="grid px-6 md:grid-cols-2 gap-8 w-full z-10">
                    <div className="relative w-full overflow-hidden group max-w-[672px] h-full aspect-square">
                        <Image
                            src={dataTheClub && dataTheClub[0].acf_medias.section_5 ? dataTheClub[0]?.acf_medias.section_5[0].image_1 : ""}
                            alt="services"
                            className="w-full h-full max-w-[672px] max-h-[618px] object-cover"
                            width={672}
                            height={618}
                        />
                        <Image
                            src={dataTheClub && dataTheClub[0].acf_medias.section_5 ? dataTheClub[0]?.acf_medias.section_5[0].image_2 : ""}
                            alt="services"
                            width={672}
                            height={618}
                            className="w-full h-full max-w-[672px] max-h-[618px] object-cover absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />
                    </div>
                    <Reveal className="flex flex-col text-center justify-center items-center gap-8 md:gap-12">
                        <>
                            {
                                SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                                    <TextReveal style={{ lineHeight: .8 }} text={dataTheClub && dataTheClub[0].acf_medias.section_5 ? dataTheClub[0]?.acf_medias.section_5[0].title : ""} />
                                )
                            }

                            <h1 className={'header1MD md:hidden'}>
                                {dataTheClub && dataTheClub[0].acf_medias.section_5[0].title}
                            </h1>

                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader4" : "subheader5-bold max-w-lg")}>
                                {dataTheClub && dataTheClub[0].acf_medias.section_5[0].subtitle}
                            </span>

                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                                {dataTheClub && dataTheClub[0].acf_medias.section_5[0].description}
                            </span>
                        </>
                    </Reveal>
                </div>
                <div className="h-10" />
            </section>

            <section className="relative flex flex-col items-center justify-center w-full pb-24 text-navy bg-sand">
                <div className="grid md:grid-cols-2 -mt-10 mx-auto w-full px-5">
                    <div className="relative group w-[336px] h-[330px] md:w-[672px] md:h-[618px] md:hidden flex overflow-hidden mx-auto">
                        <div className="absolute bottom-0 right-0 w-[221px] h-[147px] md:h-[276px] md:w-[415px] overflow-hidden z-10">
                            <img
                                src={dataTheClub && dataTheClub[0].acf_medias.section_6 ? dataTheClub[0]?.acf_medias.section_6[0].image_1 : ""}
                                alt="services"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <img
                            src={dataTheClub && dataTheClub[0].acf_medias.section_6 ? dataTheClub[0]?.acf_medias.section_6[0].image_2 : ""}
                            alt="services"
                            className="w-full h-full z-10 object-cover absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />

                        <div className="absolute left-0 w-[196px] h-[256px] md:h-[481px] md:w-[368px] overflow-hidden group">
                            <img
                                src={dataTheClub && dataTheClub[0].acf_medias.section_6 ? dataTheClub[0]?.acf_medias.section_6[0].image_3 : ""}
                                alt="services"
                                className="w-full h-full object-cover"
                            />
                            {/* <img
                                src={dataTheClub && dataTheClub[0].acf_medias.section_6 ? dataTheClub[0]?.acf_medias.section_6[0].image_4 : ""}
                                alt="services"
                                className="w-full h-full object-cover absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                            /> */}
                        </div>
                    </div>

                    <Reveal className="flex flex-col text-center justify-center items-center gap-8 md:gap-12 mx-auto">
                        <>
                            {
                                SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                                    <div className="max-w-[400px]">
                                        <TextReveal style={{ lineHeight: .8 }} text={dataTheClub && dataTheClub[0].acf_medias.section_6 ? dataTheClub[0]?.acf_medias.section_6[0].title : ""} />
                                    </div>
                                )
                            }

                            <h1 className={'header1MD md:hidden'}>
                                {dataTheClub && dataTheClub[0].acf_medias.section_6[0].title}
                            </h1>
                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader4" : "subheader5-bold max-w-lg")}>
                                {dataTheClub && dataTheClub[0].acf_medias.section_6[0].subtitle}
                            </span>
                            <span className="body1 max-w-lg">
                                {dataTheClub && dataTheClub[0].acf_medias.section_6[0].description}
                            </span>
                        </>
                    </Reveal>

                    <div className="relative w-[336px] group h-[330px] md:w-full md:h-[618px] md:max-w-[672px] md:flex overflow-hidden mx-auto hidden">
                        <div className="absolute bottom-0 md:left-48 w-[221px] h-[147px] md:h-[276px] md:w-[415px] overflow-hidden z-10">
                            <img
                                src={dataTheClub && dataTheClub[0].acf_medias.section_6 ? dataTheClub[0]?.acf_medias.section_6[0].image_1 : ""}
                                alt="services"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <img
                            src={dataTheClub && dataTheClub[0].acf_medias.section_6 ? dataTheClub[0]?.acf_medias.section_6[0].image_2 : ""}
                            alt="services"
                            className="w-full max-w-[672px] h-full z-10 object-cover absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />

                        <div className="absolute left-0 w-[196px] h-[256px] md:h-[481px] md:w-[368px] overflow-hidden group">
                            <img
                                src={dataTheClub && dataTheClub[0].acf_medias.section_6 ? dataTheClub[0]?.acf_medias.section_6[0].image_3 : ""}
                                alt="services"
                                className="w-full h-full object-cover"
                            />
                            {/* <img
                                src={dataTheClub && dataTheClub[0].acf_medias.section_6 ? dataTheClub[0]?.acf_medias.section_6[0].image_4 : ""}
                                alt="services"
                                className="w-full h-full object-cover absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                            /> */}
                        </div>
                    </div>
                </div>
            </section>

            {
                dataTheClub && (
                    <section className="w-full flex justify-center pb-16 md:py-16 relative">
                        <div className="absolute w-full h-1/5 bg-sand top-0" />
                        <Carousel setApi={setApi} className="w-full" opts={{ loop: true, align: 'center' }}>
                            <CarouselContent>
                                {dataTheClub[0].acf_medias.list_images.map((item, index) => (
                                    <CarouselItem key={index} className="max-w-[1000px] flex flex-col gap-8">
                                        <div className="md:p-1">
                                            <Card className="rounded-none">
                                                <CardContent className="flex aspect-square md:aspect-video items-center justify-center max-h-[600px] p-0">
                                                    <Image src={item.image} alt={"MasterBrandFilm"} width={1088} height={608} className="w-full h-full object-cover" />
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="w-full flex justify-center mt-8 flex-wrap px-8">
                                <span className="body2 text-navy text-center max-w-screen-lg">
                                    {dataTheClub && dataTheClub[0]?.acf_medias.list_images[current]?.text}
                                </span>
                            </div>
                            <CarouselPrevious className="bg-navy active:bg-marigold rounded-none md:bg-transparent" />
                            <CarouselNext className="bg-navy active:bg-marigold rounded-none md:bg-transparent -mr-3" />
                        </Carousel>
                    </section>
                )
            }

            <section className="relative flex flex-col items-center justify-center w-full md:py-24 text-navy bg-white gap-16">
                <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4 max-w-lg" : "body1 max-w-screen-lg", "text-center")}>
                    {dataTheClub && dataTheClub[0].acf_medias.description}
                </span>
                <Link href={links?.brochure ?? ""} target="_blank">
                    <Button label="brochure" variant="navy" icon={<ArrowUpRight />} size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} />
                </Link>
                <div className="relative w-full flex flex-col items-center max-w-4xl gap-16 border-b border-navy">
                    <div
                        className={`w-full grid grid-cols-3 transition-max-height duration-1000 ease-in-out overflow-hidden ${expanded ? 'max-h-[1000px]' : 'max-h-32'
                            }`}
                    >
                        <div className="flex flex-col items-center">
                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader4" : "subheader2", "text-center")}>Union Channel</span>
                            {
                                dataTheClub && dataTheClub[0].acf_medias?.amenitys_union_channel.map((item, index) => (
                                    <p key={index} className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>{item.amenity}</p>
                                ))
                            }
                        </div>
                        <div className="flex flex-col items-center">
                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader4" : "subheader2", "text-center")}>DOUGLASS PORT</span>
                            {
                                dataTheClub && dataTheClub[0].acf_medias?.amenitys_douglass_port.map((item, index) => (
                                    <p key={index} className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>{item.amenity}</p>
                                ))
                            }
                        </div>
                        <div className="flex flex-col items-center">
                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader4" : "subheader2", "text-center")}>NEVINS LANDING</span>
                            {
                                dataTheClub && dataTheClub[0].acf_medias?.amenitys_nevins_land.map((item, index) => (
                                    <p key={index} className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1", "text-center")}>{item.amenity}</p>
                                ))
                            }
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

            <WalkThrough className="pt-0" videoSide="left" fontFamily="Freight" />

            <section className="relative flex flex-col items-center justify-center w-full pb-24 pt-0 text-navy bg-canalRoyale gap-16 md:-mb-10">
                <Reveal className="flex flex-col items-center text-center text-white gap-16">
                    <>
                        <Image src="/logos/waveicon-white.svg" alt="waveicon-navy" width={242} height={12} className='pt-24 -mb-5' />

                        {
                            SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                                <TextReveal text='PARTNERSHIPS' />
                            )
                        }

                        <h1 className={'header1MD md:hidden'}>
                            {dataCarousel && dataCarousel[0]?.acf_medias.page}
                        </h1>

                        <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-3xl")}>
                            {dataCarousel && dataCarousel[0]?.acf_medias.description}
                        </span>
                    </>
                </Reveal>
                <CustomCarousel2 data={dataCarousel ? dataCarousel[0]?.acf_medias.images : []} />
            </section>

            <InquireComponent fontFamily="TWK" />

            <Footer />

        </main >
    )
}