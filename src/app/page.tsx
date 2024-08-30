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

export default function Home() {
  const scrollByVh = useScrollByVh();
  const windowWidth = useWindowWidth()
  const SCREEN_WIDTH = windowWidth
  const MOBILE_BREAKPOINT = 768

  const cardData = [
    {
      title: 'Public Records',
      description: 'Hi-fi record bar with food & drink offerings plus an intimate performance space & vegan cafe.',
      address: '233 Butler St, Brooklyn, NY 11217',
      imageUrl: '/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg',
      altText: '2024_GW_MVP_12_Moonkata',
    },
    {
      title: 'Claro',
      description: 'Mexican spot with a patio specializing in Oaxacan plates, including house tortillas, and mezcals.',
      address: '284 3rd Ave, Brooklyn, NY 11215',
      imageUrl: '/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg',
      altText: '2024_GW_MVP_12_Moonkata',
    },
    {
      title: 'The Royal Palms Shuffleboard Club',
      description: 'Shuffleboard courts draw playful crowds to this big bar with food trucks & occasional live music.',
      address: '514 Union St, Brooklyn, NY 11215',
      imageUrl: '/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg',
      altText: '2024_GW_MVP_12_Moonkata',
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-sand">
      <section className="relative flex flex-col items-center bg-navy w-full h-screen">
        <div className="absolute inset-0 bg-navy/40 transition-colors z-10" />
        <NavBar
          variant="white"
          hasBackground={false}
          showLogoIcon={false}
          hasHomeButton={false}
          position="absolute"
          className="opacity-0 animate-show"
          style={{ animationDelay: '10s' }}
        />
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
        <Image
          src="/medias/MasterBrandFilm3.png"
          alt="MasterBrandFilm3"
          width={1511}
          height={810}
          className="absolute object-cover w-full h-full opacity-0 animate-zoomIn"
          style={{ animationDelay: '4s' }}
        />
        <Image
          src="/logos/gowanus-white.svg"
          alt="gowanus-white"
          width={270}
          height={103}
          className="w-full object-contain absolute max-w-[270px] z-10 -mt-6 top-1/2 -translate-y-1/2 opacity-0 animate-zoomIn"
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

      <NavBar
        variant="navyOutline"
        hasBackground={true}
        showLogoIcon={SCREEN_WIDTH < MOBILE_BREAKPOINT ? false : true}
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
          <video src="/medias/2024_GW_MVP_1_TwinklingWater.webm" autoPlay muted loop>
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
              {/* <Button variant='marigold' label="explore" icon={<ArrowUpRight />} size="mobile" /> */}
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
            <div className="md:hidden flex flex-col items-center gap-6">
              <span className="accent3 max-w-[151px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</span>
              <Button variant="marigold" label="explore" icon={<ArrowUpRight />} size="mobile" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center w-full h-screen py-24 text-navy bg-white justify-center">
        <Image src="/medias/Explore/Image_1.png" width={322} height={420} alt="Image1" className="absolute size-48 top-8 left-8 m:w-full m:h-full md:left-28 md:-mt-4 object-cover" />
        <Image src="/medias/Explore/Image_2.png" width={343} height={228} alt="Image2" className="absolute h-28 w-48 top-[136px] right-8 md:left-8 md:mt-96 object-cover md:z-10" />
        <Image src="/medias/Explore/Image_3.png" width={156} height={104.71} alt="Image3" className="absolute h-12 w-[71px] top-[296px] right-20 md:right-[438px] md:mt-4 object-cover md:-z-10" />
        <Image src="/medias/Explore/Image_4.png" width={276} height={276} alt="Image4" className="absolute h-[156px] w-[103px] bottom-[69px] right-16 md:right-24 md:mt-4 object-cover" />
        <Image src="/medias/Explore/Image_5.png" width={367.46} height={244} alt="Image5" className="absolute h-[126px] w-[190px] bottom-[27px] left-16 md:right-32 md:mt-80 object-cover md:-z-10" />
        <Image src="/logos/waveicon-marigold.svg" width={242} height={12} alt="waveicon" className="absolute h-[7px] w-[144px] top-[120px] right-28 md:right-32 md:mt-80 object-cover md:-z-10" />
        <Image src="/logos/waveicon-marigold.svg" width={242} height={12} alt="waveicon" className="absolute h-[7px] w-[144px] bottom-[84px] -right-4 md:right-32 md:mt-80 object-cover md:-z-10" />
        <div className="flex flex-col text-center gap-16">
          <div className="flex flex-col z-20">
            <h1 className={cn("leading-none", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header1MD" : "header1XXL")}>gowanus</h1>
            <h1 className={cn("leading-none", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header1MD" : "header1XXL")}>is</h1>
            <h1 className={cn("leading-none", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header1MD" : "header1XXL")}>calling</h1>
          </div>
          <span className={cn("md:max-w-lg max-w-xs z-20", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
          </span>
          <div>
            <Button variant='marigold' label="learn more" icon={<ArrowUpRight />} size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? "mobile" : "default"} />
          </div>
        </div>
      </section>

      <section className="flex flex-col h-screen md:h-auto items-center w-full text-navy">
        <Image
          src="/medias/MapIntegration.png"
          alt="MapIntegration"
          width={700}
          height={500}
          className="w-full h-full md:max-h-[720px] object-cover"
        />
        {cardData.map((item, index) => (
          <MapCard
            key={index}
            title={item.title}
            description={item.description}
            address={item.address}
            imageUrl={item.imageUrl}
            altText={item.altText}
            index={index}
          />
        ))}
        <div className="w-full bg-navy py-4 md:py-8 flex justify-center">
          <Button label="explore campus" variant='white' size="mobile" icon={<ArrowUpRight />} />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full py-24 text-navy bg-white">
        <div className="grid grid-cols-2">
          <div className="flex flex-col text-center justify-center items-center gap-16">
            <h1 className="header1">the club</h1>
            <span className="body1 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
            </span>
            <div>
              <Button label="explore" variant='navy' icon={<ArrowUpRight />} />
            </div>
          </div>
          <video src="/medias/the-club.webm" autoPlay muted loop className="aspect-video object-contain">the-club</video>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full py-24 text-navy bg-sand">
        <div className="grid grid-cols-2">
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
          <div className="flex flex-col text-center justify-center items-center gap-16">
            <h1 className="header1">services</h1>
            <span className="body1 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
            </span>
            <div>
              <Button label="explore" variant="navy" icon={<ArrowUpRight />} />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full py-24 text-navy bg-white">
        <div className="flex flex-col text-center text-navy gap-8">
          <h1 className="header1">the wharf dispatch</h1>
          <span className="body1 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
          </span>
        </div>
        <div className="w-full flex justify-center py-16">
          <CustomCarousel />
        </div>
        <div>
          <Button variant='marigold' label="read more" size='default' icon={<ArrowUpRight />} />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full py-24 text-navy bg-white">
        <img src="/medias/Availabilities.png" alt="Availabilities" className="object-cover w-full absolute" />
        <div className="flex flex-col text-center text-white gap-8 z-10">
          <h1 className="header1">Available APARTMENTS</h1>
          <span className="body1 max-w-3xl">
            1 to 3-Bedrooms Now Pre-leasing
          </span>
          <div>
            <Button variant='marigold' label="view all" size='default' icon={<ArrowUpRight />} />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full py-24 text-navy bg-navy p-16">
        <img src="/medias/GW-eblast-sketches.png" alt="GW-eblast-sketches" className="object-fill w-full h-full max-h-[700px] absolute" />
        <div className="flex flex-col text-center text-navy gap-8 bg-sand px-20 py-16 w-full h-full z-10">
          <h1 className="header1 leading-none">inquire</h1>
          <div className="flex flex-wrap gap-4">
            <InputWithLabel label="First Name" placeholder="First" />
            <InputWithLabel label="Last Name" placeholder="Last" />
            <InputWithLabel label="Email" placeholder="email@email.com" />
            <InputWithLabel label="Zip Code" placeholder="XXXXX" />
            <InputWithLabel label="Apartment Type" placeholder="Select preferred apartment type" />
            <div className="flex gap-4">
              <Button variant='navy' label="submit" size='default' icon={<ArrowUpRight />} className="h-10 w-fit" />
              <Button variant='navy' label="schedule a tour" size='default' icon={<ArrowUpRight />} className="h-10 w-fit" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-between w-full py-24 pt-40 text-white bg-navy p-16">
        <div className="relative flex flex-col gap-8">
          <Image src="/logos/gowanus-navy-marigold.svg" alt="gowanus-navy-marigold" width={216} height={10} />
          <div className="flex w-full justify-between">
            <div className="flex gap-16">
              <div className="flex flex-col gap-2">
                <a href="/" className="subheader4 hover:text-marigold">Union Channel</a>
                <a href="/" className="subheader4 hover:text-marigold">Douglass Port</a>
                <a href="/" className="subheader4 hover:text-marigold">NEVINS LANDING</a>
                <a href="/" className="subheader4 hover:text-marigold">the club</a>
                <a href="/" className="subheader4 hover:text-marigold">services</a>
                <a href="/" className="subheader4 hover:text-marigold">explore gowanus</a>
                <a href="/" className="subheader4 hover:text-marigold">wharf happenings</a>
                <a href="/" className="subheader4 hover:text-marigold">availabilities</a>
                <a href="/" className="subheader4 hover:text-marigold">Virtual Tours</a>
              </div>
              <div className="flex flex-col gap-2">
                <a href="/" className="subheader4 hover:text-marigold">contact</a>
                <a href="/" className="subheader4 hover:text-marigold">resident login</a>
                <a href="/" className="subheader4 hover:text-marigold">Building Brochure</a>
                <div className="flex-1" />
                <div className="flex flex-col gap-2">
                  <a href="/" className="accent3 hover:text-marigold">Team</a>
                  <a href="/" className="accent3 hover:text-marigold">Legal Disclaimer</a>
                  <a href="/" className="accent3 hover:text-marigold">Fair Housing</a>
                  <a href="/" className="accent3 hover:text-marigold">Copyright 2024 Gowanus Wharf</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-end gap-8">
              <div className="flex flex-col gap-2 text-end items-end">
                <a href="/">
                  <img src="/logos/gowanus-favicon-white.svg" alt="gowanus-favicon-white" width={67} height={43} className="mb-8" />
                </a>
                <a href="/" className="subheader4 hover:text-marigold">100 1st St, Brooklyn, NY 11231</a>
                <a href="/" className="subheader4 hover:text-marigold">555.555.5555</a>
                <a href="/" className="subheader4 hover:text-marigold">CONTACT@gowanuswharf.com</a>
              </div>
              <div className="flex gap-4">
                <Link href="">
                  <Image src="/icons/Instagram.svg" alt="Instagram" width={24} height={24} />
                </Link>
                <Link href="">
                  <Image src="/icons/Linkedin.svg" alt="LinkedIn" width={24} height={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}