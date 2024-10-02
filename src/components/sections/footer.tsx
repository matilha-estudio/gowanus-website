import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <section className="flex flex-col justify-between w-full py-24 md:pt-40 text-white bg-navy p-16">
            <div className="relative flex flex-col gap-8">
                <div className="flex w-full justify-between">
                    <div className="hidden md:flex gap-16">
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
                            <a href="/inquire" className="subheader4 hover:text-marigold">contact</a>
                            {/* <a href="/" className="subheader4 hover:text-marigold">resident login</a> */}
                            <a href="/" className="subheader4 hover:text-marigold">Building Brochure</a>
                            <div className="flex-1" />
                            <div className="flex flex-col gap-2">
                                <a href="/" className="accent3 hover:text-marigold">Team</a>
                                <a href="/" className="accent3 hover:text-marigold">Legal Disclaimer</a>
                                <a href="/" className="accent3 hover:text-marigold">Fair Housing</a>
                                <span className="accent3 ">Copyright 2024 Gowanus Wharf</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:items-end md:justify-end gap-8">
                        <div className="flex flex-col gap-2 md:text-end md:items-end">
                            <a href="/" className="hidden md:flex">
                                <img src="/logos/gowanus-favicon-white.svg" alt="gowanus-favicon-white" width={67} height={43} className="mb-8" />
                            </a>
                            <a
                                href="https://www.google.com/maps?q=100+1st+St,+Brooklyn,+NY+11231"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="subheader4 hover:text-marigold"
                            >
                                100 1st St, Brooklyn, NY 11231
                            </a>
                            <a
                                href="tel:+15555555555"
                                className="subheader4 hover:text-marigold"
                            >
                                555.555.5555
                            </a>
                            <a
                                href="mailto:contact@gowanuswharf.com"
                                className="subheader4 hover:text-marigold"
                            >
                                CONTACT@gowanuswharf.com
                            </a>
                        </div>
                        <div className="flex gap-4">
                            <Link href="https://www.instagram.com/gowanuswharf/" target="_blank">
                                <Image src="/icons/Instagram.svg" alt="Instagram" width={24} height={24} />
                            </Link>
                            <Link href="">
                                <Image src="/icons/Linkedin.svg" alt="Facebook" width={24} height={24} />
                            </Link>
                        </div>
                        <div className="flex md:hidden flex-col gap-2">
                            <a href="/" className="accent3-xs hover:text-marigold">Team</a>
                            <a href="/" className="accent3-xs hover:text-marigold">Legal Disclaimer</a>
                            <a href="/" className="accent3-xs hover:text-marigold">Fair Housing</a>
                            <a href="/" className="accent3-xs hover:text-marigold">Copyright 2024 Gowanus Wharf</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}