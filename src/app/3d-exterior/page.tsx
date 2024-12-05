"use client"
import "@/app/globals.css";
import InquireComponent from "@/components/sections/inquire";
import Footer from "@/components/sections/footer";
import { HubspotProvider } from 'next-hubspot';
import NavbarComponent from "@/components/navbarComponent";
import { useEffect } from "react";

export default function Exterior() {
    const applyFilter = (value: any) => {
        const iframe = document.querySelector('iframe');
        iframe?.contentWindow?.postMessage({
            event: 'set_stage',
            metadata: { value: value }
        }, '*');
    };

    useEffect(() => {
        setTimeout(() => {
            applyFilter('map');
        }, 1000);
    }, []);

    return (
        <HubspotProvider>
            <main className="flex min-h-screen flex-col items-center bg-white">
                <NavbarComponent pageName="3d exterior" pagePath="/3d-exterior" variantFirstNavbar="navyOutline" />

                <section id="availability-section" className="relative w-full pt-8 bg-white z-20">
                    <div className="h-screen p-4 bg-white">
                        <iframe
                            id="availability-iframe"
                            src="https://d285m6toqyb25u.cloudfront.net/iframe"
                            title="availability"
                            className="h-full w-full aspect-video"
                        />
                    </div>
                </section>

                <InquireComponent />

                <Footer />
            </main>
        </HubspotProvider>
    )
}