'use client'
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"
import AutoScroll from "embla-carousel-auto-scroll"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { parse } from "date-fns";
import { PostResponse, PostTheWharfDispatch } from "@/services/models/blog";
import { getAllPosts } from "@/services/blog";

export function CustomCarousel() {
    const heights = [332, 414, 284];

    const mobileHeight = [319]

    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const [data, setData] = React.useState<PostResponse | null>(null)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState<string | null>(null)

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
            setData(response)
            console.log(response)
        } catch (err) {
            setError('Failed to fetch data')
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        handleData()
    }, [])

    if (loading) return (
        <div className='w-screen h-screen bg-white' />
    )
    if (error) return <p>{error}</p>

    const MemoizedCarouselItem = React.memo(({ item, height }: { item: PostTheWharfDispatch, height: number }) => (
        <CarouselItem className={"pl-1 md:basis-1/4 md:-ml-3 flex justify-center"}>
            <Card
                className="flex flex-col items-center w-[304px] rounded-none cursor-pointer"
                style={{ height: `${height}px` }}
            >
                <CardContent className="flex flex-col items-center w-full h-full p-0">
                    <Link href={`/the-wharf-dispatch/${item.slug}`} className="relative h-full w-full">
                        <div className="relative group flex-grow w-full h-full max-h-[282px] md:max-h-[376px]">
                            <Image
                                src={item.acf_medias.section_1 ?? ''}
                                alt={'card'}
                                width={304}
                                height={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 292 : 414}
                                className="object-cover w-full h-full"
                            />
                            <span className="absolute bottom-0 py-2 px-4 text-white group-hover:text-navy z-10 flex-wrap flex w-full subheader3-bold">{item.title.rendered}</span>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/0 group-hover:bg-marigold/80 transition-colors" />
                        </div>
                        <div className="w-full px-2 z-10" style={{ backgroundColor: item.acf.color }}>
                            <div className="flex justify-between items-center bg-navy p-2 w-full">
                                <span className="body2 text-white">{formatDate(date(item?.acf?.date ?? ''))}</span>
                            </div>
                        </div>
                    </Link>
                </CardContent>
            </Card>
        </CarouselItem>
    ));

    MemoizedCarouselItem.displayName = "MemoizedCarouselItem";

    return (
        <Carousel
            className="w-full"
            opts={{ loop: true, align: 'center' }}
        >
            <CarouselContent className="-ml-1">
                {data && data.map((item, index) => (
                    <MemoizedCarouselItem
                        key={index}
                        item={item}
                        height={SCREEN_WIDTH < MOBILE_BREAKPOINT ? mobileHeight[0] : heights[index % heights.length]}
                    />
                ))}
            </CarouselContent>
            <CarouselPrevious variant={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'marigold' : 'icon'} />
            <CarouselNext variant={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'marigold' : 'icon'} />
        </Carousel>
    );
}