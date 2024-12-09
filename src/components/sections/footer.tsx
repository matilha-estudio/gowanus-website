import { getLinks } from "@/services/links";
import { acf } from "@/services/models/links";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
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
        <section className="flex flex-col justify-between w-full py-24 md:pt-40 text-white bg-navy p-8 md:p-16 flex-wrap">
            <div className="relative flex flex-col gap-8">
                <div className="flex w-full justify-between">
                    <div className="hidden relative md:flex gap-16 h-full">
                        <div className="flex flex-col gap-2">
                            <a href="/union-channel" className="subheader4 hover:text-marigold">Union Channel</a>
                            {/* <a href="/" className="subheader4 hover:text-marigold">Douglass Port</a>
                            <a href="/" className="subheader4 hover:text-marigold">NEVINS LANDING</a> */}
                            <a href="/the-club" className="subheader4 hover:text-marigold">the club</a>
                            <a href="/venn-services" className="subheader4 hover:text-marigold">services</a>
                            <a href="/neighborhood" className="subheader4 hover:text-marigold">explore gowanus</a>
                            <a href="/the-wharf-dispatch" className="subheader4 hover:text-marigold">wharf happenings</a>
                            <a href="/availability" className="subheader4 hover:text-marigold">availabilities</a>
                            <a href="/virtual-tours" className="subheader4 hover:text-marigold">Virtual Tours</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2">
                                <a href="/inquire" className="subheader4 hover:text-marigold">contact</a>
                                {/* <a href="/" className="subheader4 hover:text-marigold">resident login</a> */}
                                <a href={data?.brochure} className="subheader4 hover:text-marigold">Building Brochure</a>
                            </div>
                            <div className="flex-1" />
                            <div className="flex flex-col gap-2">
                                {/* <a href={data?.team} className="accent3 hover:text-marigold">Team</a> */}
                                <a href={data?.legal_disclaimer} className="accent3 hover:text-marigold">Legal Disclaimer</a>
                                <a href={data?.fair_housing} className="accent3 hover:text-marigold">Fair Housing</a>
                                <span className="accent3 ">Copyright 2024 Gowanus Wharf</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:items-end md:justify-end gap-8">
                        <div className="flex flex-col gap-2 md:text-end md:items-end flex-wrap">
                            <a href="/" className="hidden md:flex">
                                <img src="/logos/gowanus-favicon-white.svg" alt="gowanus-favicon-white" width={67} height={43} className="mb-8" />
                            </a>
                            <a
                                href={data?.google_maps_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="subheader4 hover:text-marigold flex-wrap"
                            >
                                {data?.address}
                            </a>
                            {
                                data?.phone_number && (
                                    <a
                                        href={`tel:+1${data?.phone_number}`}
                                        className="subheader4 hover:text-marigold"
                                    >
                                        {String(data?.phone_number)?.slice(0, 3)}.
                                        {String(data?.phone_number)?.slice(3, 6)}.
                                        {String(data?.phone_number)?.slice(6, 10)}
                                    </a>
                                )
                            }
                            <a
                                href={`mailto:${data?.email}`}
                                className="subheader4 hover:text-marigold"
                            >
                                {data?.email}
                            </a>
                        </div>
                        <div className="flex gap-4">
                            <Link href={data?.instagram ?? ''} target="_blank">
                                <Image src="/icons/Instagram.svg" alt="Instagram" width={24} height={24} />
                            </Link>
                            {/* <Link href={data?.facebook ?? ''}>
                                <Image src="/icons/Linkedin.svg" alt="Facebook" width={24} height={24} />
                            </Link> */}
                        </div>
                        <div className="flex md:hidden flex-col gap-2">
                            {/* <a href={data?.team} className="accent3-xs hover:text-marigold">Team</a> */}
                            <a href={data?.legal_disclaimer} className="accent3-xs hover:text-marigold">Legal Disclaimer</a>
                            <a href={data?.fair_housing} className="accent3-xs hover:text-marigold">Fair Housing</a>
                            <span className="accent3-xs hover:text-marigold">Copyright 2024 Gowanus Wharf</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}