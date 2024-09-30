'use client'
import 'leaflet/dist/leaflet.css';
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CustomCarousel } from "@/components/ui/customCarousel";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useScrollByVh } from '@/hooks/useScrollByVh';
import TextReveal from '@/components/textReveal';
import { cn } from './lib/utils';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import MapCard from '@/components/mapCard';
import { useState } from 'react';
import GowanusWharf from '@/components/sections/gowanus';
import Footer from '@/components/sections/footer';
import AvailableApartments from '@/components/sections/availableApartments';
import Inquire from './inquire/page';
import InquireComponent from '@/components/sections/inquire';
import MainHeader from '@/components/sections/mainHeader';
import Services from '@/components/sections/services';

export default function Home() {
  const scrollByVh = useScrollByVh();
  const windowWidth = useWindowWidth()
  const SCREEN_WIDTH = windowWidth
  const MOBILE_BREAKPOINT = 768

  const [cardIndex, setCardIndex] = useState(0);

  const cardData = [
    {
      title: 'Public Records',
      description: 'Hi-fi record bar with food & drink offerings plus an intimate performance space & vegan cafe.',
      address: '233 Butler St, Brooklyn, NY 11217',
      cardImageUrl: '/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg',
      mapImageUrl: '/medias/MapIntegration.png',
      altText: '2024_GW_MVP_12_Moonkata',
    },
    {
      title: 'Claro',
      description: 'Mexican spot with a patio specializing in Oaxacan plates, including house tortillas, and mezcals.',
      address: '284 3rd Ave, Brooklyn, NY 11215',
      cardImageUrl: '/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg',
      mapImageUrl: '/medias/MapIntegration.png',
      altText: '2024_GW_MVP_12_Moonkata',
    },
    {
      title: 'The Royal Palms Shuffleboard Club',
      description: 'Shuffleboard courts draw playful crowds to this big bar with food trucks & occasional live music.',
      address: '514 Union St, Brooklyn, NY 11215',
      cardImageUrl: '/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg',
      mapImageUrl: '/medias/MapIntegration.png',
      altText: '2024_GW_MVP_12_Moonkata',
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-sand">
      <MainHeader />

      <NavBar
        variant="navyOutline"
        hasBackground={true}
        hasHomeButton={SCREEN_WIDTH < MOBILE_BREAKPOINT ? false : true}
        position="sticky"
        className="top-0"
      />

      <section className="relative flex flex-col items-center bg-sand w-full pb-24">
        <Image
          src="/logos/waveicon-navy.svg"
          alt="waveicon-navy"
          width={242}
          height={12}
          className="pt-24"
        />
        <div className="flex flex-col text-center text-navy gap-16">
          <TextReveal text="Wake up at The Wharf" />
          <span className="body1 max-w-3xl px-8">
            Three residential experiences. Endless connected amenities. A multimodal homebase built for the ebb and flow of urban living. Be one with the local lifestyle in a place of arts and creation.
          </span>
          <span className="body1 max-w-3xl">
            Gowanus, Brooklyn. 2025.
          </span>
        </div>
        <div className="px-8 aspect-video max-h-screen mt-24 -mb-56 z-10">
          <video src="/medias/2024_GW_MVP_1_TwinklingWater.webm" autoPlay muted loop playsInline>
            2024_GW_MVP_1_TwinklingWater
          </video>
        </div>
      </section>

      <section className="relative pt-56 flex flex-col items-center w-full py-24 bg-white">
        <div className="flex flex-col text-center text-navy gap-8">
          <TextReveal text="Rental properties" />
          <span className="body1 max-w-3xl px-8 mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
          </span>
        </div>
        <div className="flex flex-col mt-16 gap-16 md:gap-3 justify-center items-center px-8">
          <div className="relative flex md:flex-col flex-row gap-10 items-center">
            <Link href="/union-channel" className="relative flex">
              <Image
                src="/medias/UnionChannelBanner.png"
                alt="UnionChannelBanner"
                className="object-cover h-[205px] w-[175px] md:h-[514px] md:w-full"
                height={514}
                width={1376}
              />
              <div className="absolute inset-0 hover:bg-marigold/80 transition-colors z-20" />
              <Image
                src={SCREEN_WIDTH < MOBILE_BREAKPOINT ? '/logos/union-channel-short-white.svg' : '/logos/union-channel-logo-white.svg'}
                alt="union-channel-logo-white"
                className="absolute left-1/2 transform -translate-x-1/2 self-center w-[114px] md:w-[374px]"
                width={374}
                height={84}
              />
              <span className="subheader4 text-white absolute md:block hidden left-1/2 transform -translate-x-1/2 self-end mb-8">Now pre-leasing</span>
            </Link>
            <div className="md:hidden flex flex-col items-center gap-6">
              <span className="accent3 max-w-[151px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</span>
              <Button variant="marigold" label="explore" icon={<ArrowUpRight />} size="mobile" />
            </div>
          </div>

          <div className="relative md:flex-col flex-row gap-10 items-center flex md:hidden">
            <div className="md:hidden flex flex-col items-center gap-6">
              <span className="accent3 max-w-[151px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</span>
              <span className="accent4 max-w-[151px] text-center">Coming Soon</span>
            </div>
            <Link href="/union-channel" className="relative flex">
              <Image
                src="/medias/cardExemple/2024_GW_MVP_4_Yoga.jpg"
                alt="douglass-port"
                className="object-cover h-[205px] w-[175px] md:h-[514px] md:w-full"
                height={514}
                width={1376}
              />
              <div className="absolute inset-0 hover:bg-marigold/80 transition-colors z-20" />
              <Image
                src="/logos/douglass-port-short-white.svg"
                alt="douglass-port-short-white"
                className="absolute left-1/2 transform -translate-x-1/2 self-center w-[114px] md:w-[374px]"
                width={374}
                height={84}
              />
              <span className="subheader4 text-white absolute md:block hidden left-1/2 transform -translate-x-1/2 self-end mb-8">Now pre-leasing</span>
            </Link>
          </div>

          <div className="relative w-full md:flex-col flex-row gap-10 items-center flex md:hidden">
            <Link href="/union-channel" className="relative flex">
              <Image
                src="/medias/MasterBrandFilm2.png"
                alt="douglass-port"
                className="object-cover h-[205px] w-[175px] md:h-[514px] md:w-full"
                height={514}
                width={1376}
              />
              <div className="absolute inset-0 hover:bg-marigold/80 transition-colors z-20" />
              <Image
                src="/logos/nevins-lading-short-white.svg"
                alt="nevins-lading-short-white"
                className="absolute left-1/2 transform -translate-x-1/2 self-center w-[114px] md:w-[374px]"
                width={374}
                height={84}
              />
              <span className="subheader4 text-white absolute md:block hidden left-1/2 transform -translate-x-1/2 self-end mb-8">Now pre-leasing</span>
            </Link>
            <div className="md:hidden flex flex-col items-center gap-6">
              <span className="accent3 max-w-[151px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</span>
              <span className="accent4 max-w-[151px] text-center">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      <GowanusWharf />

      <section className="relative flex flex-col h-screen md:h-auto items-center w-full text-navy">
        <Image
          src="/medias/MapIntegration.png"
          alt="MapIntegration"
          width={700}
          height={500}
          className="w-full h-full md:max-h-[720px] md:flex hidden object-cover"
        />
        {cardData.map((item, index) => (
          <MapCard
            key={index}
            title={item.title}
            description={item.description}
            address={item.address}
            cardImageUrl={item.cardImageUrl}
            mapImageUrl={item.mapImageUrl}
            altText={item.altText}
            index={index}
            listSize={cardData.length}
            setCardIndex={setCardIndex}
            cardIndex={cardIndex}
          />
        ))}

        <div className="w-full bg-navy py-4 md:py-8 flex justify-center">
          <Button label="explore campus" variant='white' size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full py-24 text-navy bg-sand">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <video src="/medias/the-club.webm" autoPlay muted loop playsInline className="aspect-square p-4 flex md:hidden object-contain">the-club</video>
          <div className="flex flex-col text-center justify-center items-center gap-16 ">
            <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header1MD" : "header1")}>the club</h1>
            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
            </span>
            <div>
              <Button label="explore" variant='marigold' size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
            </div>
          </div>
          <video src="/medias/the-club.webm" autoPlay muted loop playsInline className="aspect-video hidden md:flex object-contain">the-club</video>
        </div>
      </section>

      <Services />

      <section className="flex flex-col items-center justify-center w-full py-24 text-navy bg-white">
        <div className="flex flex-col text-center text-navy gap-8">
          <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header1MD px-4 leading-none" : "header1")}>the wharf dispatch</h1>
          <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
          </span>
        </div>
        <div className="w-full flex justify-center py-16">
          <CustomCarousel />
        </div>
        <div>
          <Button variant='marigold' label="read more" size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
        </div>
      </section>

      <AvailableApartments />

      <InquireComponent />

      <Footer />
    </main>
  );
}