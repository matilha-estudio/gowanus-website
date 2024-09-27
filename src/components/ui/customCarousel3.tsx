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
import { cn, formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export function CustomCarousel3() {
    const heights = [386];

    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const events = [
        {
            title: 'community',
            date: new Date('2024-09-01'),
            location: "San Francisco, CA",
            image: "/medias/cardExemple/2024_GW_MVP_4_Yoga.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare.",
            color: "#006182" // canalRoyale
        },
        {
            title: 'culture',
            date: new Date('2024-07-20'),
            location: "Los Angeles, CA",
            image: "/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare.",
            color: "#F28F66" // orangesicle
        },
        {
            title: 'amusement',
            date: new Date('2024-11-10'),
            location: "Sedona, AZ",
            image: "/medias/cardExemple/2024_GW_MVP_17_JenLewin.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare.",
            color: "#3BABA3" // teal
        },
        {
            title: 'environment',
            date: new Date('2024-12-15'),
            location: "Boston, MA",
            image: "/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare.",
            color: "#F28F66" // navy
        },
        {
            title: 'wellness',
            date: new Date('2024-12-15'),
            location: "Boston, MA",
            image: "/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare.",
            color: "#F28F66" // navy
        }
    ];

    const MemoizedCarouselItem3 = React.memo(({ item, height, index }: { item: typeof events[0], height: number, index: number }) => {

        return (
            <CarouselItem
                className={cn("px-16 md:px-3 md:basis-1/4 lg:basis-1/5")}
            >
                <Card
                    className={cn(
                        "flex flex-col items-center rounded-none cursor-pointer border-none",
                        "max-w-[304px] max-h-[275px]",
                        "md:max-w-[237px] md:max-h-[280px]",
                    )}
                    style={{ height: `${height}px` }}
                >
                    <CardContent
                        className={cn(
                            "relative flex items-center h-full p-0 w-full"
                        )}
                    >
                        <div className="relative flex-wrap h-full">
                            <div className={cn("absolute inset-0 bg-gradient-to-t from-black/30 to-black/0")} />
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={304}
                                height={386}
                                className="object-cover h-full"
                            />
                            <span className={cn(
                                "absolute top-1/2 -translate-y-1/2 py-2 md:px-4 text-white z-10 text-center w-full leading-none",
                                "flex-wrap text-[14px] md:text-[18px]", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader1" : "subheader2"
                            )}>
                                {item.title}
                            </span>
                        </div>
                    </CardContent>
                </Card>
                <div className="flex items-center w-full mt-4">
                    <span className={cn("text-center w-full", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3-md" : "body2")}>{item.description}</span>
                </div>
            </CarouselItem>
        );
    });

    MemoizedCarouselItem3.displayName = "MemoizedCarouselItem3";

    return (
        <Carousel
            className="w-full"
            opts={{ loop: true, align: 'end' }}
        >
            <CarouselContent className="-ml-1">
                {events.map((item, index) => (
                    <MemoizedCarouselItem3
                        key={item.title}
                        item={item}
                        height={heights[index % heights.length]}
                        index={index}
                    />
                ))}
            </CarouselContent>
            <CarouselPrevious className="bg-navy active:bg-marigold rounded-none md:bg-transparent" />
            <CarouselNext className="bg-navy active:bg-marigold rounded-none md:bg-transparent -mr-3" />
        </Carousel>
    );
}