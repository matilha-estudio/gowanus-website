"use client"
import Image from "next/image";
import NavBar from "../navbar";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";
import { useScrollByVh } from "@/hooks/useScrollByVh";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function MainHeader() {
    const scrollByVh = useScrollByVh();
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Ativar a transição após 50px de scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <section className="relative flex flex-col items-center bg-navy w-full h-screen">
            <div className="absolute inset-0 bg-navy/40 transition-colors z-10" />

            <div
                className="flex flex-col items-center w-full h-full justify-center text-marigold z-10 opacity-1 animate-zoomOut"
                style={{ animationDelay: '6s' }}
            >
                <span
                    className={cn(
                        'header1 md:header1XXXL text-center leading-none opacity-0 animate-show',
                        SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'header1' : 'header1XXXL'
                    )}
                    style={{ animationDelay: '1s' }}
                >
                    TO THE
                </span>
                <span
                    className={cn(
                        'header1 md:header1XXXL text-center leading-none opacity-0 animate-show',
                        SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'header1' : 'header1XXXL'
                    )}
                    style={{ animationDelay: '2s' }}
                >
                    ENDURING SPIRIT
                </span>
                <span
                    className={cn(
                        'header1 md:header1XXXL text-center leading-none opacity-0 animate-show',
                        SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'header1' : 'header1XXXL'
                    )}
                    style={{ animationDelay: '3s' }}
                >
                    OF BROOKLYN
                </span>
            </div>
            <video
                src="/medias/WebsiteCanal_V4_BW.webm"
                autoPlay playsInline muted loop disablePictureInPicture disableRemotePlayback
                controls={false}
                width={1511}
                height={810}
                className="absolute object-cover w-full h-full opacity-0 animate-mainVideoZoomIn"
                style={{ animationDelay: '4s' }}
            >banner</video>
            <Image
                src="/logos/gowanus-white.svg"
                alt="gowanus-white"
                width={270}
                height={103}
                className="w-full object-contain absolute max-md:max-h-[87.77px] max-w-[270px] z-10 -mt-10 top-1/2 -translate-y-1/2 opacity-0 animate-zoomIn"
                style={{ animationDelay: '8s' }}
            />
            <div className="absolute bottom-14 flex flex-col md:flex-row gap-8 lg:gap-36 md:gap-20 opacity-0 animate-show z-10" style={{ animationDelay: '10s' }}>
                <Image
                    src="/logos/union-channel-logo-white.svg"
                    alt="union-channel-logo-white"
                    width={192}
                    height={43}
                    className="w-full object-contain max-w-[192px]"
                />
                <Image
                    src="/logos/douglass-port.svg"
                    alt="douglass-port"
                    width={192}
                    height={43}
                    className="w-full object-contain max-w-[192px]"
                />
                <Image
                    src="/logos/nevins-lading.svg"
                    alt="nevins-lading"
                    width={192}
                    height={43}
                    className="w-full object-contain max-w-[192px]"
                />
            </div>
            <Button
                variant="icon"
                icon={<ArrowDown className="text-marigold" />}
                className="absolute bottom-2 opacity-0 animate-show z-20"
                style={{ animationDelay: '10s' }}
                onClick={scrollByVh}
            />
        </section>
    )
}