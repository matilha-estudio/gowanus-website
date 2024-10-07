"use client"

import Reveal from "@/components/animations/reveal";
import NavBar from "@/components/navbar";
import Footer from "@/components/sections/footer";
import TextReveal from "@/components/textReveal";
import { useScrollByVh } from "@/hooks/useScrollByVh";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { cn, formatDate } from "@/lib/utils";
import { getPostDetail } from "@/services/blog";
import { BlogDetailsProps } from "@/services/models/blog-details";
import { parse } from "date-fns";
import { ArrowUpLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Article({ params }: { params: { slug: string } }) {
    const scrollByVh = useScrollByVh();
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const [data, setData] = useState<BlogDetailsProps | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    function date() {
        if (data) {
            const formattedDate = parse(data[0].acf.date, 'yyyyMMdd', new Date());
            return formattedDate
        }
        return new Date()
    }


    async function handleData() {
        try {
            const response = await getPostDetail(params.slug)
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
        <div className='w-screen h-screen bg-white' />
    )
    if (error) return <p>{error}</p>

    return (
        data && (
            <Reveal className="flex min-h-screen flex-col items-center bg-white">
                <>
                    <NavBar
                        variant="navyOutline"
                        hasBackground={false}
                        hasHomeButton={false}
                        position="absolute"
                        pageName="article"
                        pagePath={`/the-wharf-dispatch/${params.slug}`}
                        className="bg-sand"
                    />

                    <section className="flex flex-col w-full px-8 pt-24 gap-8 text-navy max-w-screen-2xl">

                        <div className="flex flex-wrap-reverse justify-between items-center gap-8">
                            <Image
                                src="/logos/waveicon-teal.svg"
                                alt="waveicon-orangesicle"
                                width={242}
                                height={12}
                                className="max-w-[154px] md:max-w-[242px]"
                            />
                            <Link href={"/the-wharf-dispatch"} className="flex items-center gap-4 hover:cursor-pointer">
                                <ArrowUpLeft />
                                <span className="body2">Back to The Wharf Dispatch</span>
                            </Link>
                        </div>

                        <Reveal>
                            <div className="flex flex-col text-left gap-8 items-left max-w-screen-sm md:gap-16">

                                {
                                    SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                                        <TextReveal text={data[0].title.rendered} />
                                    )
                                }

                                <h1 className={'header1MD leading-none md:hidden'}>
                                    {data[0].title.rendered}
                                </h1>
                                <div className="w-full gap-8 flex">
                                    <span className={cn("uppercase text-teal", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent4-bold" : "subheader3-bold")}>
                                        {data[0].acf.type}
                                    </span>
                                    <span className={cn("uppercase", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent4-bold" : "subheader3-bold")}>
                                        {formatDate(date())}
                                    </span>
                                </div>
                            </div>
                        </Reveal>
                    </section>

                    <section className="flex flex-col w-full px-8 py-12 gap-8 text-navy items-center max-w-screen-2xl">
                        <Image src={data[0].acf_medias.section_1} alt="section 1" width={1152} height={624} className="aspect-square object-cover md:aspect-video md:w-full md:max-h-[624px]" />

                        <div className="w-full flex flex-col gap-16 mb-8">
                            <h1 className={cn("text-left", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader2" : "subheader1")}>
                                {data[0]?.acf.section_1.subtitle_or_pull_quote ?? ''}
                            </h1>

                            <span className={cn("text-left", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>
                                {data[0]?.acf.section_1.description ?? ''}
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-16">
                            <h1 className={cn("text-left", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader2" : "subheader1")}>
                                {data[0]?.acf.section_1.subtitle_or_pull_quote_2 ?? ''}
                            </h1>

                            <span className={cn("text-left", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>
                                {data[0]?.acf.section_1.description_2 ?? ''}
                            </span>
                        </div>
                    </section>

                    {
                        data[0]?.acf.section_2.description && (
                            <section className="relative flex flex-col w-full px-8 py-12 gap-8 text-white items-center z-10 max-w-screen-2xl">
                                <div className="relative flex w-full flex-wrap gap-8 justify-center md:h-[544px] lg:h-[644px]">
                                    <Image
                                        src={data[0].acf_medias.section_2_image_1}
                                        alt="section 2"
                                        width={1152}
                                        height={624}
                                        className="aspect-square object-cover md:aspect-video md:max-w-[560px] md:max-h-[644px]"
                                    />
                                    <Image
                                        src={data[0].acf_medias.section_2_image_2}
                                        alt="section 2"
                                        width={1152}
                                        height={624}
                                        className="aspect-square object-cover md:aspect-video md:max-w-[560px] md:max-h-[644px]"
                                    />
                                </div>

                                <div className="w-full flex flex-col gap-16 mb-8">
                                    <h1 className={cn("text-left", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader2" : "subheader1")}>
                                        {data[0]?.acf.section_2.subtitle_or_pull_quote ?? ''}
                                    </h1>

                                    <span className={cn("text-left", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>
                                        {data[0]?.acf.section_2.description ?? ''}
                                    </span>
                                </div>
                                <div className="w-full flex flex-col gap-16">
                                    <h1 className={cn("text-left", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader2" : "subheader1")}>
                                        {data[0]?.acf.section_2.subtitle_or_pull_quote_2 ?? ''}
                                    </h1>

                                    <span className={cn("text-left", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>
                                        {data[0]?.acf.section_2.description_2 ?? ''}
                                    </span>
                                </div>

                                <div
                                    className="absolute h-full w-full top-[35%] -z-10"
                                    style={{ backgroundColor: data[0].acf.color }}
                                />
                            </section>
                        )
                    }

                    {
                        data[0]?.acf.section_3.description && (
                            <section className="relative flex flex-col w-full px-8 py-12 gap-8 text-navy items-center bg-white z-10 max-w-screen-2xl">
                                <div
                                    className="absolute h-[10%] w-full top-0 -z-10"
                                    style={{ backgroundColor: data[0].acf.color }}
                                />
                                <Image src={data[0].acf_medias.section_3} alt="section 3" width={1152} height={624} className="aspect-square object-cover md:aspect-video md:w-full md:max-h-[624px]" />

                                <div className="w-full flex flex-col gap-16 mb-8">
                                    <h1 className={cn("text-left", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader2" : "subheader1")}>
                                        {data[0]?.acf.section_3.subtitle_or_pull_quote ?? ''}
                                    </h1>

                                    <span className={cn("text-left", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>
                                        {data[0]?.acf.section_3.description ?? ''}
                                    </span>
                                </div>
                            </section>
                        )
                    }

                    <Footer />
                </>
            </Reveal>
        )
    )
}