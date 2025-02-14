"use client"

import NavBar from "@/components/navbar";
import { useScrollByVh } from "@/hooks/useScrollByVh";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { cn } from "../lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Footer from "@/components/sections/footer";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { useEffect, useState } from "react";
import { PostResponse } from "@/services/models/blog";
import { getAllPosts } from "@/services/blog";
import { parse } from "date-fns";
import NewsletterComponent from "@/components/sections/newsletter";
import NavbarComponent from "@/components/navbarComponent";
import { getLinks } from "@/services/links";
import { acf } from "@/services/models/links";

export default function TheWharfDispatch() {
    const scrollByVh = useScrollByVh();
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 769

    const heights = [652, 332, 414, 284, 270, 284, 414, 332];
    const mobileHeight = [319]

    const [data, setData] = useState<PostResponse | null>(null)
    const [links, setLinks] = useState<acf | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    function date(date: string) {
        if (date) {
            const formattedDate = parse(date, 'yyyyMMdd', new Date());
            return formattedDate
        }
        return new Date()
    }

    async function handleData() {
        try {
            const response = await getAllPosts()
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
        <div className='w-screen h-screen bg-white' />
    )
    if (error) return <p>{error}</p>

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <NavbarComponent pageName="the wharf dispatch" pagePath="/the-wharf-dispatch" />

            <section className="flex relative text-white justify-center w-full h-96 md:h-screen">
                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XXL", " text-white z-10 absolute left-1/2 transform -translate-x-1/2 self-center text-center")}>
                    the drift
                </h1>
                <Image src={"/medias/thewharfdispatch.png"} alt={"thewharfdispatch"} width={1440} height={810} className="w-full h-full md:h-screen object-cover" />
                <div className={cn("absolute inset-0 bg-canalRoyale/70")} />
                <Button
                    variant="icon"
                    icon={<ArrowDown className='text-marigold' />}
                    className='absolute bottom-2 z-20 hidden md:flex'
                    onClick={scrollByVh}
                />
            </section>

            <section className="flex flex-col items-center bg-white w-full py-24 gap-16">
                <Image src="/logos/waveicon-orangesicle.svg" alt="waveicon-orangesicle" width={242} height={12} />
                <span className={cn("max-w-64 md:max-w-4xl text-center", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>
                    New eats. Arts openings. Exclusive community affairs. Read into the ups, comings and goings on around Gowanus Wharf.
                </span>
                <Link href={'/3d-exterior'} className="w-full md:py-8 flex justify-center">
                    <Button label="3d exterior" variant='navy' size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
                </Link>
            </section>

            <section className="flex flex-wrap gap-16 md:justify-between items-center justify-center pb-20 max-w-6xl justify-self-center">
                {
                    data && data.map((item, index) => {
                        const HEIGHT = SCREEN_WIDTH < MOBILE_BREAKPOINT ? mobileHeight[0] : heights[index % heights.length];

                        return (
                            <div key={index} className={cn(HEIGHT >= 652 ? "w-[747px]" : "w-[304px]", "relative flex flex-col")}>
                                <Card
                                    className={cn(HEIGHT >= 652 ? "w-[747px]" : "w-[304px]", "flex flex-col items-center rounded-none justify-self-center cursor-pointer")}
                                    style={{ height: `${HEIGHT}px`, minHeight: mobileHeight[0] }} // Altura mínima para evitar sobreposição
                                >
                                    <CardContent className="flex flex-col items-center w-full h-full p-0">
                                        <Link href={`/the-wharf-dispatch/${item.slug}`} className="relative h-full w-full">
                                            <div className="relative flex-grow w-full h-full max-h-[282px] md:max-h-[652px]">
                                                <Image
                                                    src={item.acf_medias.section_1 ?? ''}
                                                    alt={'banner'}
                                                    width={304}
                                                    height={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 292 : 414}
                                                    className="object-cover w-full h-full"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/0 hover:bg-marigold/80 transition-colors" />
                                            </div>
                                            <div className="w-full px-2 z-10" style={{ backgroundColor: item.acf.color }}>
                                                <div className="flex justify-between items-center bg-navy p-2 w-full">
                                                    <span className="body2 text-white">{item.acf.type?.toUpperCase()}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </CardContent>
                                </Card>
                                <span className="pb-2 pt-8 px-4 text-navy flex-wrap flex w-full subheader3-bold" style={{ marginTop: '16px' }}>
                                    {item.title.rendered}
                                </span>
                                <span className="py-2 px-4 text-navy flex-wrap flex w-full body2">
                                    {item.acf.section_1.description.length > 115
                                        ? `${item.acf.section_1.description.slice(0, 115)}...`
                                        : item.acf.section_1.description}
                                </span>
                                <span className="py-2 px-4 text-navy flex-wrap flex w-full subheader5-bold">{formatDate(date(item?.acf?.date ?? ''))}</span>
                            </div>
                        );
                    })
                }
            </section>

            <NewsletterComponent />

            <Footer />
        </main>
    )
}