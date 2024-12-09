'use client'
import NavBar from "@/components/navbar";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../lib/utils";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import HubspotApplyNowForm from '@/hubspot/HubspotApplyNowForm'
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import NavbarComponent from "@/components/navbarComponent";
import { useEffect, useState } from "react";
import { getLinks } from "@/services/links";
import { acf } from "@/services/models/links";

export default function Inquire() {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const [data, setData] = useState<acf | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    async function handleData() {
        try {
            const response = await getLinks()
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
        <main>
            <NavbarComponent pageName="inquire" pagePath="/inquire" />

            <section className="relative flex flex-col items-center bg-navy w-full py-52 gap-16">
                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XXL", " text-white z-10")}>
                    inquire
                </h1>
                {/* <Image
                    src={"/medias/inquirebanner.png"}
                    alt={"inquirebanner"}
                    width={212.8}
                    height={146.06}
                    className="absolute left-1/2 transform -translate-x-1/2 self-center bottom-32 md:bottom-28 object-cover w-[138px] md:w-[213px] "
                /> */}
            </section>

            <section className="hubspot-custom-container flex flex-col items-center justify-center gap-10 w-full md:py-24 py-12 text-navy bg-white px-8 md:px-16">
                <h1 className="header1 leading-none text-center">LEASING INTEREST</h1>
                <div className="hubspot-custom-container flex gap-4 text-navy w-full max-w-4xl self-center">
                    <HubspotApplyNowForm />
                    <div className="flex gap-4 items-end mb-[2px] w-full justify-center">
                        <Button
                            variant='navy'
                            label="schedule a tour"
                            size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'}
                            icon={<ArrowUpRight />}
                            className={cn(SCREEN_WIDTH > MOBILE_BREAKPOINT && 'subheader5')}
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center gap-10 w-full md:py-24 py-12 text-navy bg-white px-8 md:px-16">
                <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl bg-sand py-16 md:p-16">
                    <div className="relative flex flex-col items-center gap-8">
                        <h2 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader2" : "subheader1", "text-center")}>get in touch</h2>
                        <div className="relative flex flex-col items-center">
                            <a href={`tel:+1${data?.phone_number}`} className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>
                                {String(data?.phone_number)?.slice(0, 3)}.
                                {String(data?.phone_number)?.slice(3, 6)}.
                                {String(data?.phone_number)?.slice(6, 10)}
                            </a>
                            <a
                                href={`mailto:${data?.email}`}
                                className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}
                            >
                                {data?.email}
                            </a>
                        </div>
                        <div className="relative flex items-center gap-4">
                            <Link href={data?.instagram ?? ""}>
                                <Image src={"/icons/Instagram-navy.svg"} alt={"Instagram"} width={30} height={30} />
                            </Link>
                            {/* <Link href={data?.facebook ?? ""}>
                                <Image src={"/icons/Linkedin-navy.svg"} alt={"Instagram"} width={30} height={30} />
                            </Link> */}
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center gap-8">
                        <h2 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader2" : "subheader1", "text-center")}>find us</h2>
                        <a
                            href={data?.google_maps_url}
                            target="_blank"
                            className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>
                            {data?.address}
                        </a>
                        <div className="relative flex flex-col items-center">
                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>Mon-Fri (8am - 7pm)</span>
                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>Saturday (10am - 4pm)</span>
                            <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "body2" : "body1")}>Sunday (Closed)</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}