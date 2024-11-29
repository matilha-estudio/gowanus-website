'use client'

import NavBar from "@/components/navbar";
import Image from "next/image";
import { cn } from "../lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useScrollByVh } from "@/hooks/useScrollByVh";
import TextReveal from "@/components/textReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import InquireComponent from "@/components/sections/inquire";
import Footer from "@/components/sections/footer";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import AvailableApartments from "@/components/sections/availableApartments";
import { CustomCarousel3 } from "@/components/ui/customCarousel3";
import Reveal from "@/components/animations/reveal";
import { useEffect, useState } from "react";
import { getServicePage } from "@/services/services";
import { ApiResponseService } from "@/services/models/service";
import NavbarComponent from "@/components/navbarComponent";
import Link from "next/link";
import { getLinks } from "@/services/links";
import { acf } from "@/services/models/links";

export default function VennServices() {
    const scrollByVh = useScrollByVh();
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const [data, setData] = useState<ApiResponseService | null>(null)
    const [links, setLinks] = useState<acf | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    async function handleData() {
        try {
            const response = await getServicePage()
            const links = await getLinks()
            setData(response)
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
        <main className="flex min-h-screen flex-col items-center justify-between bg-canalRoyale">
            <NavbarComponent
                pageName="services" pagePath="/venn-services"
            />

            <section className="flex relative text-white justify-center w-full md:h-screen">
                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XXL", " text-white text-center md:w-full z-10 absolute left-1/2 transform -translate-x-1/2 self-center")}>
                    Resident Services
                </h1>
                <Image
                    src={"/medias/services-banner.png"}
                    alt={"services-banner"}
                    width={1440} height={810}
                    className="w-full hidden md:block md:h-screen object-cover"
                />
                <Image
                    src={"/medias/services-banner.png"}
                    alt={"services-banner"}
                    width={1440} height={810}
                    className="w-full md:hidden aspect-square object-cover"
                />
                <div className={cn("absolute inset-0 bg-black/30")} />
                <Button
                    variant="icon"
                    icon={<ArrowDown className='text-marigold' />}
                    className='absolute bottom-2 z-20 hidden md:flex'
                    onClick={scrollByVh}
                />
            </section>

            <section className="relative flex flex-col items-center bg-canalRoyale text-navy w-full">
                <Image src="/logos/waveicon-sand.svg" alt="waveicon-navy" width={242} height={12} className='pb-8 pt-24 max-md:max-w-[153px]' />
                <Reveal className="flex flex-col text-center text-white gap-10 items-center max-w-[1152px]">
                    <>
                        {
                            SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                                <TextReveal text={data?.acf.title ?? ''} />
                            )
                        }

                        <h1 className={'header1MD leading-none md:hidden'}>
                            {data?.acf.title}
                        </h1>

                        <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-3xl")}>
                            {data?.acf.subtitle}
                        </span>
                    </>

                </Reveal>

                <div className="flex flex-col items-center justify-center gap-16 mt-24 bg-white w-full h-full pb-12">
                    <div className="relative flex flex-col md:flex-row px-8 justify-center gap-16 ">
                        <Image src={data?.acf_medias.image_url_1 ?? ''}
                            alt="services-3" width={672} height={650}
                            className="object-cover -mt-6 aspect-square max-h-[650px]"
                        />

                        <span className="body2 px-5 text-center md:hidden flex -mt-6">{data?.acf.subtitle}</span>

                        <Image src={data?.acf_medias.image_url_2 ?? ''}
                            alt="services-2" width={408} height={650}
                            className="object-cover -mt-6 max-md:aspect-square max-h-[650px]"
                        />
                    </div>
                    <span className="body2 max-w-3xl text-center hidden md:flex">{data?.acf.images_subtitle}</span>
                </div>
            </section>

            <section className="w-full flex flex-col items-center justify-center gap-16 pt-0 p-8 md:p-16 text-navy bg-white">
                <Accordion type="single" collapsible className="w-full max-w-5xl">
                    {data?.acf.services.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`} className="w-full">
                            <AccordionTrigger className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'subheader4' : 'subheader2')}>{item.title}</AccordionTrigger>
                            <AccordionContent className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body2")}>
                                {item.description}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <Link href={links?.brochure ?? ""} target="_blank">
                    <Button label="brochure" variant="navy" icon={<ArrowUpRight />} size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} />
                </Link>
            </section>

            <section className="relative flex flex-col items-center bg-sand w-full pb-24 text-navy z-10">
                <Image src="/logos/waveicon-canalroyale.svg" alt="waveicon-navy" width={242} height={12} className='pt-24 pb-10' />
                <Reveal className="flex flex-col text-center gap-16 items-center">
                    <>
                        {
                            SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                                <TextReveal text={data?.acf.resident_programming.title ?? ''} />
                            )
                        }

                        <h1 className={'header1MD leading-none md:hidden'}>
                            {data?.acf.resident_programming.title}
                        </h1>

                        <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-3xl")}>
                            {data?.acf.resident_programming.text}
                        </span>
                    </>
                </Reveal>

                <div className="h-20" />
                <CustomCarousel3 data={data} />
                <div className="h-10" />
                <Link href={links?.sampleCalendar ?? ""} target="_blank">
                    <Button label="View sample calendar" variant="navy" icon={<ArrowUpRight />} size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} />
                </Link>
            </section>

            <div className="h-20 md:h-0 z-10 max-md:hidden" />

            <InquireComponent />

            <Footer />
        </main>
    )
}