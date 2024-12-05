"use client"
import "@/app/globals.css";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { cn } from "../lib/utils";
import InquireComponent from "@/components/sections/inquire";
import Footer from "@/components/sections/footer";
import { HubspotProvider } from 'next-hubspot';
import NavbarComponent from "@/components/navbarComponent";

export default function Availability() {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    return (
        <HubspotProvider>
            <main className="flex min-h-screen flex-col items-center justify-between bg-white">
                <NavbarComponent pageName="availability" pagePath="/availability" />

                <section className="flex relative text-white justify-center w-full min-h-96 md:h-1/2 bg-canalRoyale">
                    <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XXL", " text-white z-10 absolute left-1/2 transform -translate-x-1/2 self-center text-center")}>
                        availability
                    </h1>
                </section>

                <section id="availability-section" className="relative w-full p-4 h-screen bg-white z-20">

                    <iframe
                        id="availability-iframe"
                        src="https://d285m6toqyb25u.cloudfront.net/iframe"
                        title="availability"
                        className="h-full w-full aspect-square"
                    />
                </section>

                <InquireComponent />

                <Footer />
            </main>
        </HubspotProvider>
    )
}