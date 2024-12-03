"use client"
import "@/app/globals.css";
import InquireComponent from "@/components/sections/inquire";
import Footer from "@/components/sections/footer";
import Reveal from "@/components/animations/reveal";
import { HubspotProvider } from 'next-hubspot';
import NavbarComponent from "@/components/navbarComponent";
import { useEffect } from "react";

export default function Exterior() {
    const applyFilter = (filter: string, value: any) => {
        const iframe = document.querySelector('iframe');
        iframe?.contentWindow?.postMessage({
            event: 'apply_filter',
            metadata: { filter, value }
        }, '*');
    };

    useEffect(() => {
        applyFilter('view', ['map']);
    }, []);

    return (
        <HubspotProvider>
            <main className="flex min-h-screen flex-col items-center justify-between  bg-white">
                <NavbarComponent pageName="3d exterior" pagePath="/3d-exterior" variantFirstNavbar="navyOutline" />

                <Reveal>
                    <section id="availability-section" className="relative w-full pt-8 bg-white z-20">

                        <Reveal>
                            <div className="h-screen bg-white">
                                <iframe
                                    id="availability-iframe"
                                    src="https://d285m6toqyb25u.cloudfront.net/iframe"
                                    title="availability"
                                    className="h-full w-full aspect-video"
                                />
                            </div>
                        </Reveal>
                    </section>
                </Reveal>

                <InquireComponent />

                <Footer />
            </main>
        </HubspotProvider>
    )
}