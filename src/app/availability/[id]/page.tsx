"use client"

import NavBar from "@/components/navbar";
import { useScrollByVh } from "@/hooks/useScrollByVh";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { cn } from "../../lib/utils";
import InquireComponent from "@/components/sections/inquire";
import Footer from "@/components/sections/footer";
import WalkThrough from "@/components/sections/walkThrough";
import Image from "next/image";

export default function AvailabilityDetails({ params }: { params: { id: string } }) {
    const scrollByVh = useScrollByVh();
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-white">
            <NavBar variant="white" hasBackground={false} hasHomeButton={false} position="absolute" />

            <section className="flex relative text-white justify-center w-full min-h-96 md:h-[50vh] bg-canalRoyale">
                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XXL", " text-white z-10 absolute left-1/2 transform -translate-x-1/2 self-center text-center")}>
                    {params.id}
                </h1>
                <Image src={"/medias/UnionChannelBanner.png"} alt={"banner"} width={1440} height={810} className="w-full h-full object-cover" />
                <div className={cn("absolute inset-0 bg-black/30")} />
            </section>

            <section id="availability-details-section">

            </section>

            <WalkThrough />

            <InquireComponent />

            <Footer />
        </main>
    )
}