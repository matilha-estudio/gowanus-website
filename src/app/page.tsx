'use client'

import 'leaflet/dist/leaflet.css';
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { CustomCarousel } from "@/components/ui/customCarousel";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TextReveal from '@/components/textReveal';
import { cn } from './lib/utils';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import MapCard from '@/components/mapCard';
import GowanusWharf from '@/components/sections/gowanus';
import Footer from '@/components/sections/footer';
import AvailableApartments from '@/components/sections/availableApartments';
import InquireComponent from '@/components/sections/inquire';
import MainHeader from '@/components/sections/mainHeader';
import Services from '@/components/sections/services';
import MapComponent from '@/components/sections/mapComponent';
import Reveal from '@/components/animations/reveal';
import { getHomePage } from '@/services/home';
import { useEffect, useState } from 'react';
import { ApiResponseHomePage } from '@/services/models/home';
import NavbarComponent from '@/components/navbarComponent';

export default function Home() {
  const windowWidth = useWindowWidth()
  const SCREEN_WIDTH = windowWidth
  const MOBILE_BREAKPOINT = 768

  const [data, setData] = useState<ApiResponseHomePage | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function handleData() {
    try {
      const response = await getHomePage()
      setData(response)
    } catch (err) {
      setError('Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleData()
  }, [])

  if (loading) return (
    <div className='w-screen h-screen bg-navy' />
  )
  if (error) return <p>{error}</p>

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-sand">

      <NavbarComponent
        pageName={"home"}
        pagePath={"/"}
      />

      <MainHeader />
      <section className="relative flex flex-col items-center bg-sand w-full pb-24">
        <Image
          src="/logos/waveicon-navy.svg"
          alt="waveicon-navy"
          width={242}
          height={12}
          className="pt-24"
        />
        <Reveal className='flex flex-col items-center w-full'>
          <div className="flex flex-col text-center items-center text-navy mt-16 md:mt-0 gap-8 md:gap-16">
            {
              SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                <TextReveal text='Wake up at The Wharf' />
              )
            }

            <h1 className={'header1MD md:hidden leading-none'}>
              Wake up at The Wharf
            </h1>

            <span className="body1 max-w-3xl px-5 hidden md:block">
              Three residential experiences. Endless connected amenities. A multimodal homebase built for the ebb and flow of urban living. Be one with the local lifestyle in a place of arts and creation.
            </span>
            <span className="body2 max-w-3xl px-5 block md:hidden">
              Three residential experiences. Endless connected amenities. A multimodal homebase built for the ebb and flow of urban living. Be one with the local lifestyle in a place of arts and creation.
            </span>

            <span className="body1 max-w-3xl hidden md:block">
              Gowanus, Brooklyn. 2025.
            </span>
            <span className="body2 max-w-3xl md:hidden block">
              Gowanus, Brooklyn. 2025.
            </span>

          </div>
        </Reveal>
        <div className="px-8 aspect-video max-h-screen mt-24 -mb-56 z-10">
          <video src="/medias/2024_GW_MVP_1_TwinklingWater.webm" autoPlay muted loop playsInline>
            2024_GW_MVP_1_TwinklingWater
          </video>
        </div>
      </section>

      <section className="relative pt-40 md:pt-56 flex flex-col items-center w-full py-12 md:py-24 bg-sand md:bg-white">
        <Reveal className="flex flex-col text-center text-navy gap-8">
          <>
            {
              SCREEN_WIDTH > MOBILE_BREAKPOINT && (
                <TextReveal text='Rental properties' />
              )
            }

            <h1 className={'header1MD md:hidden leading-none'}>
              Rental properties
            </h1>

            <span className="body1 max-w-3xl px-8 mt-8 hidden md:block">
              {data?.acf.rental_properties.text}
            </span>
            <span className="body2 max-w-3xl px-8 md:mt-8 md:hidden block">
              {data?.acf.rental_properties.text}
            </span>

          </>
        </Reveal>
        <div className="flex flex-col mt-16 gap-16 md:gap-3 justify-center items-center px-8 md:max-w-[1376px] w-full max-md:bg-white">
          <div className="relative group flex md:flex-col flex-row gap-10 items-center md:max-w-[1376px] md:w-full max-md:-mt-5">
            <Link href="/union-channel" className="relative flex md:max-w-[1376px] md:w-full">
              <Image
                src={data?.acf_medias.union_channel_image_url ?? ''}
                alt="UnionChannelBanner"
                className="object-cover h-[205px] w-[175px] md:h-[514px]  md:max-w-[1376px] md:w-full"
                height={514}
                width={1376}
              />
              <div className="absolute inset-0 group-hover:bg-marigold/80 transition-colors z-10" />
              <Image
                src={SCREEN_WIDTH < MOBILE_BREAKPOINT ? '/logos/union-channel-short-white.svg' : '/logos/union-channel-logo-white.svg'}
                alt="union-channel-logo-white"
                className="absolute left-1/2 transform -translate-x-1/2 self-center w-[114px] md:w-[374px] md:z-10 group-hover:hidden"
                width={374}
                height={84}
              />
              <Image
                src={SCREEN_WIDTH < MOBILE_BREAKPOINT ? '/logos/union-channel-logo-navy.svg' : '/logos/union-channel-logo-navy.svg'}
                alt="union-channel-logo-navy"
                className="absolute left-1/2 transform -translate-x-1/2 self-center w-[114px] md:w-[374px] md:z-10 hidden group-hover:flex"
                width={374}
                height={84}
              />
              <span className="body1 text-white absolute md:group-hover:block hidden left-1/2 transform z-10 -translate-x-1/2 self-end mb-28 group-hover:text-navy text-center">Explore living at The Wharf's anchor residence.</span>

              <span className="body1 text-white absolute md:group-hover:block hidden left-1/2 transform z-10 -translate-x-1/2 self-end mb-8 group-hover:text-navy">Pre-leasing now</span>

              <span className="body1 text-white absolute md:group-hover:hidden md:block hidden left-1/2 transform z-10 -translate-x-1/2 self-end mb-8 group-hover:text-navy">Pre-leasing now</span>
            </Link>

            <div className="md:hidden flex flex-col items-center gap-3">
              <span className="accent3 max-w-[151px] text-center leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</span>
              <Button variant="marigold" label="explore" icon={<ArrowUpRight />} size="mobile" />
            </div>
          </div>

          {/* DESKTOP */}
          <div className='relative w-full gap-8 hidden md:flex '>
            <div className='relative bg-navy h-52 w-full flex justify-center'>
              <Image
                src="/logos/douglass-port.svg"
                alt="douglass-port"
                className="absolute left-1/2 transform -translate-x-1/2 self-center -mt-8 md:max-w-[374px] md:w-full md:px-8"
                width={374}
                height={84}
              />
              <span className='subheader4 text-white self-end mb-8'>coming soon</span>
            </div>
            <div className='relative bg-navy h-52 w-full flex justify-center'>
              <Image
                src="/logos/nevins-lading.svg"
                alt="nevins-lading"
                className="absolute left-1/2 transform -translate-x-1/2 self-center -mt-8 md:max-w-[374px] md:w-full md:px-8"
                width={374}
                height={84}
              />
              <span className='subheader4 text-white self-end mb-8'>coming soon</span>
            </div>
          </div>

          {/* MOBILE */}
          <div className="relative md:flex-col flex-row gap-10 items-center flex md:hidden">
            <div className="md:hidden flex flex-col items-center gap-6">
              <span className="accent3 max-w-[151px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</span>
              <span className="accent4 max-w-[151px] text-center">Coming Soon</span>
            </div>
            <Link href="/union-channel" className="relative flex">
              <Image
                src="/medias/douglass_banner_home.png"
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

          <div className="relative w-full md:flex-col flex-row gap-10 items-center flex md:hidden z-10">
            <Link href="/union-channel" className="relative flex">
              <Image
                src="/medias/nevis_banner_home.png"
                alt="nevis"
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
            <div className="md:hidden flex flex-col items-center gap-6 text-white">
              <span className="accent3 max-w-[151px] text-center leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</span>
              <span className="accent4 max-w-[151px] text-center">Coming Soon</span>
            </div>
          </div>
          <div className='absolute bg-navy h-[19%] bottom-0 w-full md:hidden' />
        </div>
      </section>

      <GowanusWharf fontFamily='Freight' />

      <MapComponent showButton />

      <section className="flex relative flex-col items-center justify-center w-full py-5 md:py-24 text-navy bg-white">
        <Reveal className='z-10'>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <video src={data?.acf_medias.the_club_video_url} autoPlay muted loop playsInline className="aspect-square p-4 flex md:hidden object-contain">{data?.acf.the_club.title}</video>
            <div className="flex flex-col text-center items-center gap-8 md:gap-16 pt-10">

              <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header1MD" : "header1", "leading-none")}>{data?.acf.the_club.title}</h1>

              <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2 px-4" : "body1 max-w-lg")}>
                {data?.acf.the_club.text}
              </span>

              <Link href='/the-club'>
                <Button
                  label="explore"
                  variant='navy'
                  size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'}
                  icon={<ArrowUpRight />}
                />
              </Link>
              <div className='absolute bg-sand bottom-0 h-[65%] w-full -z-10 md:hidden' />
            </div>

            <div className='h-[618px] max-w-[672px] hidden md:flex '>
              <video
                src={data?.acf_medias.the_club_video_url}
                autoPlay muted loop playsInline
                width={672}
                height={618}
                className="h-full hidden md:flex object-cover">
                the-club
              </video>
            </div>
          </div>
        </Reveal>
        <div className='absolute bottom-0 w-full md:h-36 bg-sand' />
      </section>

      <Services />

      <section className="flex flex-col items-center justify-center w-full py-24 text-navy bg-white">
        <div className="flex flex-col text-center text-navy gap-8 items-center">
          <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header1MD px-4 leading-none" : "header1", "leading-none")}>the drift</h1>
          <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-2xl", "leading-none")}>
            Keep adrift of the latest happenings, openings, and offerings at and around the Wharf.
          </span>
        </div>
        <div className="w-full flex justify-center py-16 max-w-screen-2xl">
          <CustomCarousel />
        </div>
        <Link href='the-wharf-dispatch'>
          <Button variant='marigold' label="read more" size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
        </Link>
        <div className='h-16 md:hidden' />
      </section>

      <AvailableApartments />

      <InquireComponent />

      <Footer />
    </main>
  );
}