'use client'
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import GowanusWharf from "@/components/sections/gowanus";
import Footer from "@/components/sections/footer";
import AvailableApartments from "@/components/sections/availableApartments";
import InquireComponent from "@/components/sections/inquire";
import Services from "@/components/sections/services";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { cn } from "../lib/utils";
import { useScrollByVh } from "@/hooks/useScrollByVh";
import WalkThrough from "@/components/sections/walkThrough";
import Reveal from "@/components/animations/reveal";
import { useEffect, useState } from "react";
import { getUnionChannelPage } from "@/services/unionChannel";
import { ApiResponseUnionChannel } from "@/services/models/unionChannel";
import { getTheClub } from "@/services/theClub";
import { TheClubResponse } from "@/services/models/theClub";
import Link from "next/link";
import { type CarouselApi } from "@/components/ui/carousel"
import NavbarComponent from "@/components/navbarComponent";
import { getLinks } from "@/services/links";
import { acf } from "@/services/models/links";

export default function UnionChannel() {
    const scrollByVh = useScrollByVh();

    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 769

    const [links, setLinks] = useState<acf | null>(null)
    const [data, setData] = useState<ApiResponseUnionChannel | null>(null)
    const [dataTheClub, setDataTheClub] = useState<TheClubResponse | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const [api, setApi] = useState<CarouselApi>()
    const [api2, setApi2] = useState<CarouselApi>()

    const [current, setCurrent] = useState(0)
    const [current2, setCurrent2] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    useEffect(() => {
        if (!api2) {
            return
        }

        setCurrent2(api2.selectedScrollSnap())

        api2.on("select", () => {
            setCurrent2(api2.selectedScrollSnap())
        })
    }, [api])

    async function handleData() {
        try {
            const response = await getUnionChannelPage()
            const responseTheClub = await getTheClub()
            const links = await getLinks()
            setLinks(links)
            setData(response)
            setDataTheClub(responseTheClub)
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
        <main>
            <NavbarComponent pageName="union channel" pagePath="/union-channel" />
            <section className="flex">
                {
                    SCREEN_WIDTH < MOBILE_BREAKPOINT ?
                        <Image
                            src={"/logos/union-channel-short-white-GA.svg"}
                            alt={"union-channel-logo-white"}
                            width={585}
                            height={171}
                            className="w-full object-contain absolute max-w-[142px] left-1/2 transform -translate-x-1/2 self-center"
                        />
                        :
                        <Image
                            src={"/logos/union-channel-GA-logo-white.svg"}
                            alt={"union-channel-logo-white"}
                            width={585}
                            height={171}
                            className="w-full object-contain absolute max-w-[585px] left-1/2 transform -translate-x-1/2 self-center"
                        />
                }
                <Image src={"/medias/UnionChannelHero.png"} alt={"UnionChannelHero"} width={1440} height={810} className="w-full h-screen object-cover" />
                <Button
                    variant="icon"
                    icon={<ArrowDown className='text-marigold' />}
                    className='absolute bottom-2 z-20 left-1/2 transform -translate-x-1/2 self-center'
                    onClick={scrollByVh}
                />
            </section>

            <section className="flex flex-col items-center bg-sand w-full py-24 gap-16">
                <Image src="/logos/waveicon-teal.svg" alt="waveicon-navy" width={242} height={12} />
                <span className={cn("max-w-64 md:max-w-4xl text-center", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>
                    {data?.acf_medias.description}
                </span>
                <Link href={'/3d-exterior'} className="w-full md:py-8 flex justify-center">
                    <Button label="3d exterior" variant='navy' size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
                </Link>
            </section>
            <section className="relative flex flex-col items-center justify-center bg-white w-full pb-8 px-8">
                <div className="absolute top-0 w-full h-[20%] bg-sand" />
                <video src={data?.acf_medias.image_url} autoPlay playsInline muted loop controls disablePictureInPicture disableRemotePlayback className="aspect-square md:aspect-video object-cover w-full z-10">the-club</video>
            </section>

            <section className="flex flex-col items-center justify-center w-full py-24 text-navy">
                <div className="grid md:grid-cols-2 grid-cols-1 px-4">
                    <div className="relative w-full overflow-hidden group max-w-[592px] max-h-[482px] h-full aspect-square self-center">
                        <Image
                            src={data?.acf_medias.apartments_section?.image_1 ?? ''}
                            alt="photo 1"
                            className="w-full h-full max-w-[592px] max-h-[482px] object-cover"
                            width={592}
                            height={482}
                        />
                        <Image
                            src={data?.acf_medias.apartments_section?.image_2 ?? ''}
                            alt="photo 2"
                            width={592}
                            height={482}
                            className="w-full h-full max-w-[592px] max-h-[482px] object-cover absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />
                    </div>
                    <Reveal className="flex flex-col text-center justify-center items-center pt-3 gap-8 md:gap-16">
                        <>
                            <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2")}>{data?.acf_medias.apartments_section?.title}</h1>
                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                                {data?.acf_medias.apartments_section?.description}
                            </span>
                        </>
                    </Reveal>
                </div>
            </section>

            <section className="w-full flex justify-center md:py-16">
                <Carousel setApi={setApi} className="w-full" opts={{ loop: true, align: 'center' }}>
                    <CarouselContent>
                        {data?.acf_medias.carousel.map((item, index) => (
                            <>
                                <CarouselItem key={index} className="max-w-[1000px] flex flex-col justify-center gap-8">
                                    <div className="md:p-1">
                                        <Card className="rounded-none">
                                            <CardContent className="flex aspect-square md:aspect-video items-center justify-center max-h-[600px] p-0">
                                                <Image src={item.image} alt={"MasterBrandFilm"} width={1088} height={608} className="w-full h-full object-cover" />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            </>
                        ))}
                    </CarouselContent>
                    <div className="w-full flex justify-center mt-8 flex-wrap px-8">
                        <span className="body2 text-navy text-center max-w-screen-lg">
                            {data && data.acf_medias.carousel[current]?.description}
                        </span>
                    </div>
                    <CarouselPrevious className="bg-navy active:bg-marigold rounded-none md:bg-transparent" />
                    <CarouselNext className="bg-navy active:bg-marigold rounded-none md:bg-transparent -mr-3" />
                </Carousel>
            </section>

            <section className="w-full flex justify-center p-8 md:p-16 text-navy">
                <Accordion type="single" collapsible className="w-full max-w-5xl">
                    {data?.acf_medias.feature_category.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`} className="w-full">
                            <AccordionTrigger className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'subheader4' : 'subheader2')}>{item.title}</AccordionTrigger>
                            <AccordionContent className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body2")}>
                                {item.description}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            <WalkThrough className="bg-white" videoSide="right" fontFamily="TWK" />

            <section className="w-full flex flex-col justify-center items-center py-16 gap-8 md:gap-16 bg-teal text-navy">
                <Reveal className="flex flex-col items-center gap-8">
                    <>
                        <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2")}>{dataTheClub && dataTheClub[0]?.acf_medias.title}</h1>
                        <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-3xl", 'text-center')}>
                            {dataTheClub && dataTheClub[0]?.acf_medias.description}
                        </span>
                        <Link href='/the-club' className="w-full md:py-8 flex justify-center">
                            <Button label="explore" variant='navy' size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
                        </Link>
                    </>
                </Reveal>
                <Carousel setApi={setApi2} className="w-full" opts={{ loop: true, align: 'center' }}>
                    <CarouselContent>
                        {dataTheClub && dataTheClub[0]?.acf_medias?.list_images?.map((item, index) => (
                            <CarouselItem key={index} className="max-w-[1000px] flex flex-col gap-8">
                                <div className="md:p-1">
                                    <Card className="rounded-none border-none">
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
                            {dataTheClub && dataTheClub[0]?.acf_medias.list_images[current2]?.text}
                        </span>
                    </div>
                    <CarouselPrevious className="bg-navy active:bg-marigold rounded-none md:bg-transparent" />
                    <CarouselNext className="bg-navy active:bg-marigold rounded-none md:bg-transparent -mr-3" />
                </Carousel>
            </section>
            <Services fontFamily="TWK" />
            <GowanusWharf />
            <div className="h-20" />
            <AvailableApartments />
            <InquireComponent />
            <Footer />
        </main>
    )
}