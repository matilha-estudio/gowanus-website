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

export function CustomCarousel() {
    const heights = [332, 414, 284];

    const mobileHeight = [319]

    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const events = [
        {
            title: "EVENT: Conference on Tech Innovation",
            date: new Date('2024-09-01'),
            location: "San Francisco, CA",
            image: "/medias/cardExemple/2024_GW_MVP_4_Yoga.jpg",
            link: "/",
            color: "#006182" // canalRoyale
        },
        {
            title: "BLOG: Art Exhibition: Modern Masters",
            date: new Date('2024-08-15'),
            location: "",
            image: "/medias/cardExemple/2024_GW_MVP_7_Union.png",
            link: "/",
            color: "#C27D9E" // lavenderLake
        },
        {
            title: "EVENT: Music Festival",
            date: new Date('2024-07-20'),
            location: "Los Angeles, CA",
            image: "/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg",
            link: "/",
            color: "#F28F66" // orangesicle
        },
        {
            title: "BLOG: Startup Pitch Night",
            date: new Date('2024-10-05'),
            location: "",
            image: "/medias/cardExemple/2024_GW_MVP_16_Dogs.jpg",
            link: "/",
            color: "#BA2129" // red
        },
        {
            title: "EVENT: Health & Wellness Retreat",
            date: new Date('2024-11-10'),
            location: "Sedona, AZ",
            image: "/medias/cardExemple/2024_GW_MVP_17_JenLewin.jpg",
            link: "/",
            color: "#3BABA3" // teal
        },
        {
            title: "BLOG: Gourmet Food Festival",
            date: new Date('2024-09-12'),
            location: "",
            image: "/medias/cardExemple/2024_GW_MVP_19_Andrew.gif",
            link: "/",
            color: "#F2C724" // marigold
        },
        {
            title: "EVENT: Winter Charity Gala",
            date: new Date('2024-12-15'),
            location: "Boston, MA",
            image: "/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg",
            link: "/",
            color: "#F2C724" // navy
        }
    ];

    const MemoizedCarouselItem = React.memo(({ item, height }: { item: typeof events[0], height: number }) => (
        <CarouselItem className={"pl-1 md:basis-1/4 md:-ml-3 flex justify-center"}>
            <Card
                className="flex flex-col items-center w-[304px] rounded-none cursor-pointer"
                style={{ height: `${height}px` }}
            >
                <CardContent className="flex flex-col items-center w-full h-full p-0">
                    <Link href={item.link} className="relative h-full w-full">
                        <div className="relative flex-grow w-full h-full max-h-[282px] md:max-h-[376px]">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={304}
                                height={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 292 : 414}
                                className="object-cover w-full h-full"
                            />
                            <span className="absolute bottom-0 py-2 px-4 text-white z-10 flex-wrap flex w-full subheader3-bold">{item.title}</span>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/0 hover:bg-marigold/80 transition-colors" />
                        </div>
                        <div className="w-full px-2 z-10" style={{ backgroundColor: item.color }}>
                            <div className="flex justify-between items-center bg-navy p-2 w-full">
                                <span className="body2 text-white">{formatDate(item.date)}</span>
                                <span className="body2 text-white">{item.location}</span>
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
            plugins={[
                AutoScroll({
                    stopOnMouseEnter: true,
                    speed: 1,
                    stopOnInteraction: SCREEN_WIDTH < MOBILE_BREAKPOINT ? true : false
                }),
            ]}
        >
            <CarouselContent className="-ml-1">
                {events.map((item, index) => (
                    <MemoizedCarouselItem
                        key={item.title}
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