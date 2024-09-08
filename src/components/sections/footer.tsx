import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <section className="flex flex-col justify-between w-full py-24 md:pt-40 text-white bg-navy p-16">
            <div className="relative flex flex-col gap-8">
                <Image src="/logos/gowanus-navy-marigold.svg" alt="gowanus-navy-marigold" width={216} height={10} />
                <div className="flex w-full justify-between">
                    <div className="hidden md:flex gap-16">
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
                    <div className="flex flex-col md:items-end md:justify-end gap-8">
                        <div className="flex flex-col gap-2 md:text-end md:items-end">
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