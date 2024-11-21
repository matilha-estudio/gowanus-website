"use client"

import NavBar from "@/components/navbar";
import { useScrollByVh } from "@/hooks/useScrollByVh";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { cn } from "../lib/utils";
import InquireComponent from "@/components/sections/inquire";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import AvailableApartments from "@/components/sections/availableApartments";
import Image from "next/image";
import Link from "next/link";

export default function VirtualTours() {
    const scrollByVh = useScrollByVh();
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const virtualTourLinks = {
        gym: "https://bubbletourstore.s3.us-east-1.amazonaws.com/gowanus/GYM/vtour/tour.html",
        outdoorCourtyard: "https://bubbletourstore.s3.us-east-1.amazonaws.com/gowanus/Outdoor+Courtyard/vtour/tour.html",
        rooftopPool: "https://bubbletourstore.s3.us-east-1.amazonaws.com/gowanus/Rooftop+Pool/vtour/tour.html",
        skyLounge: "https://bubbletourstore.s3.us-east-1.amazonaws.com/gowanus/Sky+Lounge/vtour/tour.html",
        workFromHomeLounge: "https://bubbletourstore.s3.us-east-1.amazonaws.com/gowanus/Work+from+Home+Lounge/vtour/tour.html",
        unitWalkthrough: "https://bubbletourstore.s3.us-east-1.amazonaws.com/gowanus/Unit+Walkthrough/vtour/tour.html",
    };

    return (
        <main className="flex flex-col items-center justify-between bg-white">
            <NavBar variant="white" hasBackground={false} hasHomeButton={false} position="absolute" pageName="virtual tours" pagePath="/virtual-tours" />

            <section className="flex relative text-white justify-center w-full min-h-96 md:h-screen bg-canalRoyale">
                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XXL", " text-white z-10 absolute left-1/2 transform -translate-x-1/2 self-center text-center")}>
                    virtual tours
                </h1>
                <video src="/medias/walkthrough.mov" autoPlay muted loop playsInline className="aspect-square md:aspect-video object-cover w-full md:h-screen">virtual tours</video>
                <div className={cn("absolute inset-0 bg-black/30")} />
                <Button
                    variant="icon"
                    icon={<ArrowDown className='text-marigold' />}
                    className='absolute bottom-2 z-20 hidden md:flex'
                    onClick={scrollByVh}
                />
            </section>

            <section className="relative w-full bg-white text-navy items-center flex flex-col py-36 gap-16 max-w-[1440px]">
                <span className={cn("max-w-64 md:max-w-4xl text-center", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>
                    Click each image to virtually explore Gowanus Wharf
                </span>

                <div className="flex gap-20 flex-wrap w-full px-8 md:px-24">

                    <Link href={virtualTourLinks.unitWalkthrough} target="_blank" className="flex flex-col items-center justify-center gap-8 group">
                        <div className="relative w-full h-full max-w-[584px] max-h-[482.76px]">
                            <div className="absolute w-full h-full group-hover:bg-marigold/70 group-hover:cursor-pointer z-10 transition-colors" />
                            <Image
                                src={'/medias/apartments/12-585-Union-St-Unit-H-Living-Room-R05A.webp'}
                                alt="Living-Room-R05A"
                                width={584}
                                height={482.76}
                                className="aspect-square object-cover w-full h-full max-w-[584px] max-h-[482.76px]"
                            />
                        </div>

                        <span className="text-navy flex-wrap flex text-center body2">
                            Lorem ipsum unitWalkthrough.
                        </span>
                    </Link>

                    <Link href={virtualTourLinks.gym} target="_blank" className="flex flex-col items-center justify-center gap-8 group">
                        <div className="relative w-full h-full max-w-[584px] max-h-[482.76px]">
                            <div className="absolute w-full h-full group-hover:bg-marigold/70 group-hover:cursor-pointer z-10 transition-colors" />
                            <Image
                                src={'/medias/the-club/06-585 Union St-Gym-R02.jpg'}
                                alt="Living-Room-R05A"
                                width={584}
                                height={482.76}
                                className="aspect-square object-cover w-full h-full max-w-[584px] max-h-[482.76px]"
                            />
                        </div>

                        <span className="text-navy flex-wrap flex text-center body2">
                            Lorem ipsum gym.
                        </span>
                    </Link>

                    <Link href={virtualTourLinks.outdoorCourtyard} target="_blank" className="flex flex-col items-center justify-center gap-8 group">
                        <div className="relative w-full h-full max-w-[584px] max-h-[482.76px]">
                            <div className="absolute w-full h-full group-hover:bg-marigold/70 group-hover:cursor-pointer z-10 transition-colors" />
                            <Image
                                src={'/medias/apartments/12-585-Union-St-Unit-H-Living-Room-R05A.webp'}
                                alt="Living-Room-R05A"
                                width={584}
                                height={482.76}
                                className="aspect-square object-cover w-full h-full max-w-[584px] max-h-[482.76px]"
                            />
                        </div>

                        <span className="text-navy flex-wrap flex text-center body2">
                            Lorem ipsum outdoorCourtyard.
                        </span>
                    </Link>

                    <Link href={virtualTourLinks.rooftopPool} target="_blank" className="flex flex-col items-center justify-center gap-8 group">
                        <div className="relative w-full h-full max-w-[584px] max-h-[482.76px]">
                            <div className="absolute w-full h-full group-hover:bg-marigold/70 group-hover:cursor-pointer z-10 transition-colors" />
                            <Image
                                src={'/medias/the-club/11-585 Union St-Rooftop Pool-R02A.jpg'}
                                alt="Living-Room-R05A"
                                width={584}
                                height={482.76}
                                className="aspect-square object-cover w-full h-full max-w-[584px] max-h-[482.76px]"
                            />
                        </div>

                        <span className="text-navy flex-wrap flex text-center body2">
                            Lorem ipsum rooftopPool.
                        </span>
                    </Link>

                    <Link href={virtualTourLinks.skyLounge} target="_blank" className="flex flex-col items-center justify-center gap-8 group">
                        <div className="relative w-full h-full max-w-[584px] max-h-[482.76px]">
                            <div className="absolute w-full h-full group-hover:bg-marigold/70 group-hover:cursor-pointer z-10 transition-colors" />
                            <Image
                                src={'/medias/the-club/09-251 Douglass St-Sky Lounge-R06.jpg'}
                                alt="Living-Room-R05A"
                                width={584}
                                height={482.76}
                                className="aspect-square object-cover w-full h-full max-w-[584px] max-h-[482.76px]"
                            />
                        </div>

                        <span className="text-navy flex-wrap flex text-center body2">
                            Lorem ipsum skyLounge.
                        </span>
                    </Link>

                    <Link href={virtualTourLinks.workFromHomeLounge} target="_blank" className="flex flex-col items-center justify-center gap-8 group">
                        <div className="relative w-full h-full max-w-[584px] max-h-[482.76px]">
                            <div className="absolute w-full h-full group-hover:bg-marigold/70 group-hover:cursor-pointer z-10 transition-colors" />
                            <Image
                                src={'/medias/the-club/08-585 Union St-Coworking Lounge-R05.jpg'}
                                alt="Living-Room-R05A"
                                width={584}
                                height={482.76}
                                className="aspect-square object-cover w-full h-full max-w-[584px] max-h-[482.76px]"
                            />
                        </div>

                        <span className="text-navy flex-wrap flex text-center body2">
                            Lorem ipsum workFromHomeLounge.
                        </span>
                    </Link>


                </div>
            </section>

            <AvailableApartments />

            <InquireComponent />

            <Footer />
        </main>
    )
}