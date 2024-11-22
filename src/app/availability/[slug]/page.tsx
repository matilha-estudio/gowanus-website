"use client"

import NavBar from "@/components/navbar";
import { useScrollByVh } from "@/hooks/useScrollByVh";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { cn } from "../../lib/utils";
import InquireComponent from "@/components/sections/inquire";
import Footer from "@/components/sections/footer";
import WalkThrough from "@/components/sections/walkThrough";
import Image from "next/image";
import { PropertiesResponse } from "@/services/models/availability";
import { getAvailabilityPage } from "@/services/availability";
import { useEffect, useMemo, useState } from "react";
import Reveal from "@/components/animations/reveal";
import TextReveal from "@/components/textReveal";
import { Button } from "@/components/ui/button";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import NavbarComponent from "@/components/navbarComponent";

export default function AvailabilityDetails({ params }: { params: { slug: string } }) {
    const scrollByVh = useScrollByVh();
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    const [data, setData] = useState<PropertiesResponse[] | null>(null)

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

    const filteredData = useMemo(() => {
        if (!data) return null;

        // Formata o slug de params, caso exista
        const formattedParams = params.slug?.replace(/%20/g, ' ');

        return data.filter((property) => property.residence_group === formattedParams);
    }, [data, params.slug]);

    async function handleData() {
        try {
            const response = await getAvailabilityPage()
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
        <main className="flex min-h-screen flex-col items-center justify-between bg-white">
            <NavbarComponent pageName="availability" pagePath="/availability" />

            <section className="flex relative text-white justify-center w-full min-h-96 md:h-[50vh] bg-canalRoyale">
                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XXL", " text-white z-10 absolute left-1/2 transform -translate-x-1/2 self-center text-center")}>
                    {filteredData && filteredData[0]?.apartment_type}
                </h1>
                <Image
                    src={(filteredData && filteredData[0]?.image) ?? ''}
                    alt={"banner"}
                    width={1440} height={810}
                    className="w-full h-full object-cover max-md:aspect-square"
                />
                <Link href={"/availability"} className="flex items-center gap-4 hover:cursor-pointer absolute bottom-4 z-10 text-sand">
                    <ArrowUpLeft />
                    <span className="body2">Back to Availabilities</span>
                </Link>
                <div className={cn("absolute inset-0 bg-black/30")} />
            </section>

            <section className="relative flex flex-col items-center  text-navy w-full">
                <Image src="/logos/waveicon-marigold.svg" alt="waveicon-navy" width={242} height={12} className='pb-8 pt-24' />
                <Reveal>
                    <div className="flex flex-col text-center text-navy gap-16 items-center">

                        {
                            SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                                <div className="w-full max-w-screen-lg">
                                    <TextReveal text={(filteredData && filteredData[0]?.residence_group) ?? ''} />
                                </div>
                            )
                        }

                        <h1 className={'header1MD leading-none md:hidden'}>
                            {(filteredData && filteredData[0]?.residence_group) ?? ''}
                        </h1>

                        <div className="flex flex-col gap-8 mt-8">
                            <span className="subheader3-bold leading-none">
                                {(filteredData && `FROM ${filteredData[0]?.rent}+/Month`) ?? ''} | {(filteredData && filteredData[0]?.availability) ?? ''}
                            </span>

                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-screen-sm")}>
                                Pick up on the inimitable blend of people and experiences that energize our living locale.
                            </span>
                        </div>

                        <div className="flex gap-4 items-center justify-center">
                            <Button
                                label="Floorplan"
                                variant="navy"
                                size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'}
                                className="md:h-[48px]"
                            />
                            <Button
                                label="inquire"
                                variant="navy"
                                size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'}
                                className="md:h-[48px]"
                            />
                            <Button
                                label="apply now"
                                variant="navy"
                                size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'}
                                icon={<ArrowUpRight />}
                            />
                        </div>
                    </div>
                </Reveal>

                <div className="h-32" />
            </section>

            <section className="w-full flex justify-center md:py-16 relative bg-white">
                <Carousel setApi={setApi} className="w-full" opts={{ loop: true, align: 'center' }}>
                    <CarouselContent>
                        {filteredData && filteredData[0].images_carousel.map((item, index) => (
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
                            {filteredData && filteredData[0]?.images_carousel[current]?.label}
                        </span>
                    </div>
                    <CarouselPrevious className="bg-navy active:bg-marigold rounded-none md:bg-transparent" />
                    <CarouselNext className="bg-navy active:bg-marigold rounded-none md:bg-transparent -mr-3" />
                </Carousel>
            </section>

            <section className="w-full flex flex-col items-center justify-center md:py-16 md:px-8 px-4 relative bg-white">
                <Accordion type="single" collapsible className="w-full max-w-5xl">
                    <AccordionItem value="detail" className="w-full">
                        <AccordionTrigger className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'subheader4' : 'subheader2')}>Details</AccordionTrigger>
                        {filteredData && filteredData[0]?.details.map((item, index) => (
                            <AccordionContent key={index} className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body2")}>
                                {item.detail}
                            </AccordionContent>
                        ))}
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className="w-full max-w-5xl">
                    <AccordionItem value="detail" className="w-full">
                        <AccordionTrigger className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'subheader4' : 'subheader2')}>Amenities</AccordionTrigger>
                        {filteredData && filteredData[0]?.amenities.map((item, index) => (
                            <AccordionContent key={index} className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body2")}>
                                {item.amenity}
                            </AccordionContent>
                        ))}
                    </AccordionItem>
                </Accordion>
            </section>

            <WalkThrough videoSide="right" className="bg-white z-20" />

            <InquireComponent />

            <Footer />
        </main>
    )
}