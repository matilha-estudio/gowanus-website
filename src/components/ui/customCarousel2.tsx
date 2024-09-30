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

export function CustomCarousel2() {
    const heights = [386];

    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const events = [
        {
            title: 'feature partner 1',
            date: new Date('2024-09-01'),
            location: "San Francisco, CA",
            image: "/medias/cardExemple/2024_GW_MVP_4_Yoga.jpg",
            link: "/",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus. Maecenas at convallis lacus. ",
            color: "#006182" // canalRoyale
        },
        {
            title: 'feature partner 3',
            date: new Date('2024-07-20'),
            location: "Los Angeles, CA",
            image: "/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg",
            link: "/",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus. Maecenas at convallis lacus. ",
            color: "#F28F66" // orangesicle
        },
        {
            title: 'feature partner 5',
            date: new Date('2024-11-10'),
            location: "Sedona, AZ",
            image: "/medias/cardExemple/2024_GW_MVP_17_JenLewin.jpg",
            link: "/",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus. Maecenas at convallis lacus. ",
            color: "#3BABA3" // teal
        },
        {
            title: 'feature partner 7',
            date: new Date('2024-12-15'),
            location: "Boston, MA",
            image: "/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg",
            link: "/",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus. Maecenas at convallis lacus. ",
            color: "#F28F66" // navy
        }
    ];

    const [expanded, setExpanded] = React.useState(false);
    const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpanded(prev => !prev);
        setExpandedIndex(index)
    };

    const MemoizedCarouselItem2 = React.memo(({ item, height, index }: { item: typeof events[0], height: number, index: number }) => {
        const isExpanded = expandedIndex === index && expanded;

        return (
            <CarouselItem
                className={cn(
                    "px-16 transition-max-width duration-1000 ease-in-out mr-10",
                    !expanded && "md:basis-1/4 lg:basis-1/5",
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
                            "relative flex flex-col md:flex-row items-center h-full p-0 w-full transition-all duration-1000 ease-in-out"
                        )}
                    >
                        <div className="relative flex-grow max-w-[304px] h-full" onClick={() => toggleExpand(index)}>
                            <div className={cn("absolute inset-0 bg-gradient-to-t from-black/30 to-black/0 hover:bg-marigold/80 transition-colors", expanded && "md:hidden h-[238px] md:h-full bg-marigold/80")} />
                            <X className={cn("absolute top-2 left-2 text-white", !expanded && "hidden")} />
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={304}
                                height={386}
                                className={cn("object-cover h-full", expanded && "h-[238px] md:h-full")}
                            />
                            <span className={cn("absolute top-1/2 -translate-y-1/2 py-2 px-4 text-white z-10 text-center flex-wrap flex w-full subheader1 self-center leading-none",
                                expanded && "md:hidden"
                            )}>
                                {item.title}
                            </span>
                        </div>

                        <div
                            className={cn(
                                "relative flex flex-col text-navy p-4 md:px-16 transition-all duration-1000 ease-in-out gap-2 md:gap-8 h-full",
                                !isExpanded && "hidden"
                            )}
                        >
                            <h1 className="subheader1 leading-none hidden md:flex">{item.title}</h1>
                            <span className={cn("leading-none", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3-md" : "body2")}>{item.description}</span>
                            <span className={cn("leading-none text-canalRoyal", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3-md" : "body2")}>{item.location}</span>
                        </div>
                    </CardContent>
                </Card>
            </CarouselItem>
        );
    });

    MemoizedCarouselItem2.displayName = "MemoizedCarouselItem2";

    return (
        <Carousel
            className={cn("w-full lg:max-w-screen-2xl")}
            opts={{ loop: true, align: 'center' }}
        >
            <CarouselContent className="-ml-1">
                {events.map((item, index) => (
                    <MemoizedCarouselItem2
                        key={item.title}
                        item={item}
                        height={heights[index % heights.length]}
                        index={index}
                    />
                ))}
            </CarouselContent>
            {
                !expanded && (
                    <>
                        <CarouselPrevious className="bg-navy active:bg-marigold rounded-none md:bg-transparent" />
                        <CarouselNext className="bg-navy active:bg-marigold rounded-none md:bg-transparent -mr-3" />
                    </>
                )
            }
        </Carousel>
    );
}