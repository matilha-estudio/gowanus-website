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

export default function VirtualTours() {
    const scrollByVh = useScrollByVh();
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-white">
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

            <section id="virtual-tours-section">

            </section>

            <AvailableApartments />

            <InquireComponent />

            <Footer />
        </main>
    )
}