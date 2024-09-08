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

export function CustomCarousel2() {
    const heights = [386];

    const events = [
        {
            title: 'feature partner 1',
            date: new Date('2024-09-01'),
            location: "San Francisco, CA",
            image: "/medias/cardExemple/2024_GW_MVP_4_Yoga.jpg",
            link: "/",
            color: "#006182" // canalRoyale
        },
        {
            title: 'feature partner 3',
            date: new Date('2024-07-20'),
            location: "Los Angeles, CA",
            image: "/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg",
            link: "/",
            color: "#F28F66" // orangesicle
        },
        {
            title: 'feature partner 5',
            date: new Date('2024-11-10'),
            location: "Sedona, AZ",
            image: "/medias/cardExemple/2024_GW_MVP_17_JenLewin.jpg",
            link: "/",
            color: "#3BABA3" // teal
        },
        {
            title: 'feature partner 7',
            date: new Date('2024-12-15'),
            location: "Boston, MA",
            image: "/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg",
            link: "/",
            color: "#F28F66" // navy
        }
    ];

    const [expanded, setExpanded] = React.useState(false);
    const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpanded(prev => !prev);
        setExpandedIndex(index)
    };

    const MemoizedCarouselItem = React.memo(({ item, height, index }: { item: typeof events[0], height: number, index: number }) => {
        const isExpanded = expandedIndex === index && expanded;

        return (
            <CarouselItem
                className={cn(
                    "-ml-5 px-16 transition-max-width duration-1000 ease-in-out",
                    !expanded && "basis-1/4",
                    !isExpanded && expanded && "hidden"
                )}
            >
                <Card
                    className={cn(
                        "flex flex-col items-center rounded-none cursor-pointer border-none transition-all duration-1000 ease-in-out",
                        isExpanded ? "max-w-full w-full" : "w-[304px]"
                    )}
                    style={{ height: `${height}px` }}
                >
                    <CardContent
                        className={cn(
                            "relative flex items-center h-full p-0 w-full transition-all duration-1000 ease-in-out"
                        )}
                    >
                        <div className="relative flex-grow max-w-[304px] h-full" onClick={() => toggleExpand(index)}>
                            <div className={cn("absolute inset-0 bg-gradient-to-t from-black/30 to-black/0 hover:bg-marigold/80 transition-colors", expanded && "hidden")} />
                            <X className={cn("absolute top-2 left-2 text-white", !expanded && "hidden")} />
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={304}
                                height={386}
                                className="object-cover h-full"
                            />
                            <span className={cn("absolute top-1/2 -translate-y-1/2 py-2 px-4 text-white z-10 text-center flex-wrap flex w-full subheader1 self-center leading-none",
                                expanded && "hidden"
                            )}>
                                {item.title}
                            </span>
                        </div>

                        <div
                            className={cn(
                                "relative flex flex-col text-navy px-16 transition-all duration-1000 ease-in-out gap-8",
                                !isExpanded && "hidden"
                            )}
                        >
                            <h1 className="subheader1  leading-none">{item.title}</h1>
                            <span className="body1  leading-none">{item.title}</span>
                            <span className="body1 text-canalRoyale  leading-none">{item.location}</span>
                        </div>
                    </CardContent>
                </Card>
            </CarouselItem>
        );
    });

    MemoizedCarouselItem.displayName = "MemoizedCarouselItem2";

    return (
        <Carousel
            className="w-full px-16"
            opts={{ loop: true, align: 'center' }}
            plugins={[
                AutoScroll({
                    stopOnMouseEnter: true,
                    speed: 1
                }),
            ]}
        >
            <CarouselContent className="-ml-1">
                {events.map((item, index) => (
                    <MemoizedCarouselItem
                        key={item.title}
                        item={item}
                        height={heights[index % heights.length]}
                        index={index}
                    />
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}