'use client'
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Inquire() {
    return (
        <main>
            <NavBar variant="white" hasBackground={false} hasHomeButton={false} position="absolute" />
            <section className="relative flex flex-col items-center bg-navy w-full py-52 gap-16">
                <h1 className="header2XXL text-white z-10">
                    inquire
                </h1>
                <Image
                    src={"/medias/inquirebanner.png"}
                    alt={"inquirebanner"}
                    width={212.8}
                    height={146.06}
                    className="absolute left-1/2 transform -translate-x-1/2 self-center bottom-28 object-cover "
                />
            </section>
            <section className="flex flex-col items-center justify-center gap-10 w-full py-24 text-navy bg-white p-16">
                <h1 className="header1 leading-none">LEASING INTEREST</h1>

                <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
                    <InputWithLabel label="First Name" placeholder="First" />
                    <InputWithLabel label="Last Name" placeholder="Last" />
                    <InputWithLabel label="Email" placeholder="email@email.com" />
                    <InputWithLabel label="Zip Code" placeholder="XXXXX" />
                </div>
                <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">
                    <InputWithLabel label="Apartment Type" placeholder="Select preferred apartment type" />
                    <InputWithLabel label="Apartment Type" placeholder="Select preferred apartment type" />
                </div>
                <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
                    <InputWithLabel label="First Name" placeholder="First" />
                    <InputWithLabel label="Last Name" placeholder="Last" />
                </div>
                <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">
                    <InputWithLabel label="Last Name" placeholder="Last" />
                </div>
                <div className="flex gap-6">
                    <Button variant='navy' label="submit" size='default' icon={<ArrowUpRight />} className="h-10 w-fit" />
                    <Button variant='navy' label="schedule a tour" size='default' icon={<ArrowUpRight />} className="h-10 w-fit" />
                </div>
            </section>
            <section className="flex flex-col items-center justify-center gap-10 w-full py-24 text-navy bg-white p-16">
                <div className="grid grid-cols-2 gap-6 w-full max-w-4xl bg-sand p-16">
                    <div className="relative flex flex-col items-center gap-8">
                        <h2 className="subheader1">get in touch</h2>
                        <div className="relative flex flex-col items-center">
                            <a href="/" className="body1">555.555.5555</a>
                            <a href="/" className="body1">CONTACT@gowanuswharf.com</a>
                        </div>
                        <div className="relative flex items-center gap-4">
                            <Link href="">
                                <Image src={"/icons/Instagram-navy.svg"} alt={"Instagram"} width={30} height={30} />
                            </Link>
                            <Link href="">
                                <Image src={"/icons/Linkedin-navy.svg"} alt={"Instagram"} width={30} height={30} />
                            </Link>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center gap-8">
                        <h2 className="subheader1">find us</h2>
                        <a href="/" className="body1">585 Union St, Brooklyn, NY</a>
                        <div className="relative flex flex-col items-center">
                            <span className="body1">Mon-Fri (8am – 7pm)</span>
                            <span className="body1">Saturday (10am – 4pm)</span>
                            <span className="body1">Sunday (Closed)</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-between w-full py-24 pt-40 text-white bg-navy p-16">
                <div className="relative flex flex-col gap-8">
                    <Image src="/logos/gowanus-navy-marigold.svg" alt="gowanus-navy-marigold" width={216} height={10} />
                    <div className="flex w-full justify-between">
                        <div className="flex gap-16 ">
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
                                    <a href="/" className="accent3 hover:text-marigold">Legal Disclaimern</a>
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
                                    <Image src={"/icons/Instagram.svg"} alt={"Instagram"} width={24} height={24} />
                                </Link>
                                <Link href="">
                                    <Image src={"/icons/Linkedin.svg"} alt={"Instagram"} width={24} height={24} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}