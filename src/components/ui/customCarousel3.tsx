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
import { ApiResponseService } from "@/services/models/service";

interface ICustomCarousel3 {
    data: ApiResponseService | null
}

export function CustomCarousel3({ data }: ICustomCarousel3) {
    const heights = [386];

    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 769

    const events = [
        {
            title: 'community',
            image: "/medias/services/240926_DogSelects_032.jpg",
            description: "Connect with neighbors via community feed, interest groups, and marketplace.",
        },
        {
            title: 'culture',
            image: "/medias/services/ROLLERSKATING_GIFS_013.jpg",
            description: "Get special invites to art shows, concerts, and restaurant openings.",
        },
        {
            title: 'amusement',
            image: "/medias/services/240926_KaraokeSelects_004.jpg",
            description: "See exclusive resident parties and events hosted in community spaces.",
        },
        {
            title: 'environment',
            image: "/medias/services/Canal_Reflection_lowres.png",
            description: "Find local vendors and service providers to help lighten your daily lift.",
        },
        {
            title: 'wellness',
            image: "/medias/services/LaurenFilm_008 copy.jpg",
            description: "Book spa treatments and RSVP for special wellness offerings and classes.",
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
                <div className="flex items-center w-full mt-4 max-w-[304px] md:max-w-[237px]">
                    <span className={cn("text-center w-full", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3-md" : "body2")}>{item.description}</span>
                </div>
            </CarouselItem>
        );
    });

    MemoizedCarouselItem3.displayName = "MemoizedCarouselItem3";

    return (
        <Carousel
            className="w-full lg:max-w-screen-2xl"
            opts={{ loop: true, align: 'center' }}
        >
            <CarouselContent className="ml-5">
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