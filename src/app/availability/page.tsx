"use client"

import NavBar from "@/components/navbar";
import { useScrollByVh } from "@/hooks/useScrollByVh";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { cn } from "../lib/utils";
import InquireComponent from "@/components/sections/inquire";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Availability() {
    const scrollByVh = useScrollByVh();
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-white">
            <NavBar variant="white" hasBackground={false} hasHomeButton={false} position="absolute" />

            <section className="flex relative text-white justify-center w-full min-h-96 md:h-[50vh] bg-canalRoyale">
                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XXL", " text-white z-10 absolute left-1/2 transform -translate-x-1/2 self-center text-center")}>
                    availability
                </h1>
                <Button
                    variant="icon"
                    icon={<ArrowDown className='text-marigold' />}
                    className='absolute bottom-2 z-20 hidden md:flex'
                    onClick={scrollByVh}
                />
            </section>

            <section id="availability-section">

            </section>

            <InquireComponent />

            <Footer />
        </main>
    )
}