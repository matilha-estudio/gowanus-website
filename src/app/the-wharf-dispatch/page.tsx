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

export default function TheWharfDispatch() {
    const scrollByVh = useScrollByVh();
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const heights = [652, 332, 414, 284, 270, 284, 414, 332];
    const mobileHeight = [319]

    const events = [
        {
            title: "EVENT: Conference on Tech Innovation",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque",
            date: new Date('2024-09-01'),
            location: "San Francisco, CA",
            image: "/medias/cardExemple/2024_GW_MVP_4_Yoga.jpg",
            link: "/",
            type: "blog",
            color: "#006182" // canalRoyale, 
        },
        {
            title: "BLOG: Art Exhibition: Modern Masters",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque",
            date: new Date('2024-08-15'),
            location: "",
            image: "/medias/cardExemple/2024_GW_MVP_7_Union.png",
            link: "/",
            type: "blog",
            color: "#C27D9E" // lavenderLake, 
        },
        {
            title: "EVENT: Music Festival",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque",
            date: new Date('2024-07-20'),
            location: "Los Angeles, CA",
            image: "/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg",
            link: "/",
            type: "blog",
            color: "#F28F66" // orangesicle, 
        },
        {
            title: "BLOG: Startup Pitch Night",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque",
            date: new Date('2024-10-05'),
            location: "",
            image: "/medias/cardExemple/2024_GW_MVP_16_Dogs.jpg",
            link: "/",
            type: "blog",
            color: "#BA2129" // red, 
        },
        {
            title: "EVENT: Health & Wellness Retreat",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque",
            date: new Date('2024-11-10'),
            location: "Sedona, AZ",
            image: "/medias/cardExemple/2024_GW_MVP_17_JenLewin.jpg",
            link: "/",
            type: "blog",
            color: "#3BABA3" // teal, 
        },
        {
            title: "BLOG: Gourmet Food Festival",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque",
            date: new Date('2024-09-12'),
            location: "",
            image: "/medias/cardExemple/2024_GW_MVP_19_Andrew.gif",
            link: "/",
            type: "blog",
            color: "#F2C724" // marigold, 
        },
        {
            title: "EVENT: Winter Charity Gala",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque",
            date: new Date('2024-12-15'),
            location: "Boston, MA",
            image: "/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg",
            link: "/",
            type: "blog",
            color: "#F2C724" // navy, 
        }
    ];

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <NavBar variant="white" hasBackground={false} hasHomeButton={false} position="absolute" />

            <section className="flex relative text-white justify-center w-full min-h-96 md:h-screen">
                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XXL", " text-white z-10 absolute left-1/2 transform -translate-x-1/2 self-center text-center")}>
                    the wharf dispatch
                </h1>
                <Image src={"/medias/thewharfdispatch.png"} alt={"thewharfdispatch"} width={1440} height={810} className="w-full md:h-screen object-cover" />
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
                </span>
                <div className="w-full md:py-8 flex justify-center">
                    <Button label="3d exterior" variant='navy' size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
                </div>
            </section>

            <section className="flex flex-wrap gap-16 justify-between items-center pb-20 max-w-6xl justify-self-center">
                {
                    events.map((item, index) => {
                        const HEIGHT = SCREEN_WIDTH < MOBILE_BREAKPOINT ? mobileHeight[0] : heights[index % heights.length];

                        return (
                            <div key={index} className={cn(HEIGHT >= 652 ? "w-[747px]" : "w-[304px]", "relative flex flex-col")}>
                                <Card
                                    className={cn(HEIGHT >= 652 ? "w-[747px]" : "w-[304px]", "flex flex-col items-center rounded-none justify-self-center cursor-pointer")}
                                    style={{ height: `${HEIGHT}px`, minHeight: mobileHeight[0] }} // Altura mínima para evitar sobreposição
                                >
                                    <CardContent className="flex flex-col items-center w-full h-full p-0">
                                        <Link href={item.link} className="relative h-full w-full">
                                            <div className="relative flex-grow w-full h-full max-h-[282px] md:max-h-[652px]">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={304}
                                                    height={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 292 : 414}
                                                    className="object-cover w-full h-full"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/0 hover:bg-marigold/80 transition-colors" />
                                            </div>
                                            <div className="w-full px-2 z-10" style={{ backgroundColor: item.color }}>
                                                <div className="flex justify-between items-center bg-navy p-2 w-full">
                                                    <span className="body2 text-white">{item.type?.toUpperCase()}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </CardContent>
                                </Card>
                                <span className="pb-2 pt-8 px-4 text-navy flex-wrap flex w-full subheader3-bold" style={{ marginTop: '16px' }}>
                                    {item.title}
                                </span>
                                <span className="py-2 px-4 text-navy flex-wrap flex w-full body2">
                                    {item.description.length > 115
                                        ? `${item.description.slice(0, 115)}...`
                                        : item.description}
                                </span>
                                <span className="py-2 px-4 text-navy flex-wrap flex w-full subheader5">{formatDate(item.date)}</span>
                            </div>
                        );
                    })
                }
            </section>

            <Footer />
        </main>
    )
}