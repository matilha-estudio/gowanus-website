'use client'
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import GowanusWharf from "@/components/sections/gowanus";
import Footer from "@/components/sections/footer";
import AvailableApartments from "@/components/sections/availableApartments";
import InquireComponent from "@/components/sections/inquire";
import Services from "@/components/sections/services";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { cn } from "../lib/utils";
import { useScrollByVh } from "@/hooks/useScrollByVh";
import WalkThrough from "@/components/sections/walkThrough";

export default function UnionChannel() {
    const scrollByVh = useScrollByVh();

    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    return (
        <main>
            <NavBar variant="white" hasBackground={false} hasHomeButton={false} position="absolute" />
            <section className="flex">
                {
                    SCREEN_WIDTH < MOBILE_BREAKPOINT ?
                        <Image
                            src={"/logos/union-channel-short-white-GA.svg"}
                            alt={"union-channel-logo-white"}
                            width={585}
                            height={171}
                            className="w-full object-contain absolute max-w-[142px] left-1/2 transform -translate-x-1/2 self-center"
                        />
                        :
                        <Image
                            src={"/logos/union-channel-logo-white.svg"}
                            alt={"union-channel-logo-white"}
                            width={585}
                            height={171}
                            className="w-full object-contain absolute max-w-[585px] left-1/2 transform -translate-x-1/2 self-center"
                        />
                }
                <Image src={"/medias/UnionChannelHero.png"} alt={"UnionChannelHero"} width={1440} height={810} className="w-full h-screen object-cover" />
                <Button
                    variant="icon"
                    icon={<ArrowDown className='text-marigold' />}
                    className='absolute bottom-2 z-20 left-1/2 transform -translate-x-1/2 self-center'
                    onClick={scrollByVh}
                />
            </section>
            <section className="flex flex-col items-center bg-sand w-full py-24 gap-16">
                <Image src="/logos/waveicon-canalroyale.svg" alt="waveicon-navy" width={242} height={12} />
                <span className={cn("max-w-64 md:max-w-4xl text-center", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
                </span>
                <div className="w-full md:py-8 flex justify-center">
                    <Button label="3d exterior" variant='navy' size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
                </div>
            </section>
            <section className="flex flex-col items-center justify-center bg-sand w-full pb-8 px-8">
                <video src="/medias/the-club.webm" autoPlay playsInline muted loop controls disablePictureInPicture disableRemotePlayback className="aspect-square md:aspect-video object-cover w-full">the-club</video>
            </section>

            <section className="flex flex-col items-center justify-center w-full py-24 text-navy">
                <div className="grid md:grid-cols-2 grid-cols-1 px-4">
                    <div className="relative w-full overflow-hidden group">
                        <img
                            src="/medias/services-1.png"
                            alt="services"
                            className="w-full"
                        />
                        <img
                            src="/medias/services-2.png"
                            alt="services"
                            className="w-full absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />
                    </div>
                    <div className="flex flex-col text-center justify-center items-center pt-3 gap-8 md:gap-16">
                        <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2")}>apartments</h1>
                        <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center md:py-16">
                <Carousel className="w-full" opts={{ loop: true, align: 'center' }}>
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="max-w-[1000px]">
                                <div className="md:p-1">
                                    <Card className="rounded-none">
                                        <CardContent className="flex aspect-square md:aspect-video items-center justify-center max-h-[600px] p-0">
                                            <Image src={"/medias/MasterBrandFilm.png"} alt={"MasterBrandFilm"} width={1088} height={608} className="w-full h-full object-cover" />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-navy active:bg-marigold rounded-none md:bg-transparent" />
                    <CarouselNext className="bg-navy active:bg-marigold rounded-none md:bg-transparent -mr-3" />
                </Carousel>
            </section>

            <section className="w-full flex justify-center p-8 md:p-16 text-navy">
                <Accordion type="single" collapsible className="w-full max-w-5xl">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`} className="w-full">
                            <AccordionTrigger className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'subheader4' : 'subheader2')}>Residence Feature Category {index + 1}</AccordionTrigger>
                            <AccordionContent className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body2")}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            <WalkThrough className="bg-sand" />

            <section className="w-full flex flex-col justify-center items-center py-16 gap-8 md:gap-16 bg-teal text-white">
                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2")}>The club</h1>
                <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg", 'text-center')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                </span>
                <div className="w-full md:py-8 flex justify-center">
                    <Button label="explore" variant='marigold' size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
                </div>
                <Carousel className="w-full" opts={{ loop: true, align: 'center' }}>
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="max-w-[1000px]">
                                <div className="md:p-1">
                                    <Card className="rounded-none border-none">
                                        <CardContent className="flex aspect-square md:aspect-video items-center justify-center max-h-[600px] p-0">
                                            <Image src={"/medias/MasterBrandFilm2.png"} alt={"MasterBrandFilm"} width={1088} height={608} className="w-full h-full object-cover" />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-navy active:bg-marigold rounded-none md:bg-transparent" />
                    <CarouselNext className="bg-navy active:bg-marigold rounded-none md:bg-transparent -mr-3" />
                </Carousel>
            </section>
            <Services />
            <GowanusWharf />
            <div className="h-20" />
            <AvailableApartments />
            <InquireComponent />
            <Footer />
        </main>
    )
}