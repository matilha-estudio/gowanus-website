import { ArrowUpRight, X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { useWindowWidth } from "@/hooks/useWindowWidth";

interface INavBar extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    hasBackground: boolean
    hasHomeButton?: boolean
    position?: "fixed" | "absolute" | "sticky"
    variant: "navyOutline" | "white"
    pageName: string
    pagePath: string
}

export default function NavBar({ className, hasBackground, variant, hasHomeButton = true, position = "fixed", pageName, pagePath, ...props }: INavBar) {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 769

    return (
        <nav className={cn("py-4 flex h-[60px] gap-9 w-full md:px-16 justify-between items-center z-30",
            hasBackground ? "bg-sand/50" : "bg-transparent",
            position,
            className
        )} {...props}>

            <Drawer direction="left" handleOnly noBodyStyles>
                <div className="flex">
                    <DrawerTrigger asChild>
                        {
                            SCREEN_WIDTH < MOBILE_BREAKPOINT ?
                                <Image
                                    src={variant === 'navyOutline' ? "/icons/Hamburger-menu-navy.svg" : "/icons/Hamburger-menu.svg"}
                                    alt="Hamburger-menu"
                                    width={29}
                                    height={27}
                                    className="ml-3 w-[29px] h-[27px] object-contain"
                                />
                                :
                                <Button variant={variant} size='md' label="menu" className={cn("h-10 w-fit", variant === "navyOutline" && "hover:bg-sand hover:text-navy")} />
                        }
                    </DrawerTrigger>
                    {
                        hasHomeButton &&
                        // <Link href={pagePath}>
                        <Button variant={variant} size='md' label={pageName} className="h-10 w-fit bg-sand border-l-0 hover:bg-sand hover:text-navy hover:cursor-default" />
                        // </Link>
                    }
                </div>
                <div className="flex gap-2 md:gap-8 px-3">

                    <Link href='/inquire' className="w-full py-4 md:py-8 flex justify-center">
                        <Button variant={variant} size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'md'} label={SCREEN_WIDTH < MOBILE_BREAKPOINT ? "Inquire" : "Schedule a tour"} className="min-h-7 md:h-10 md:w-fit" />
                    </Link>
                    <Link href='/availability' className="w-full py-4 md:py-8 flex justify-center">
                        <Button variant={variant} size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'md'} label={SCREEN_WIDTH < MOBILE_BREAKPOINT ? "Apply" : "Apply now"} icon={<ArrowUpRight />} className="min-h-7  md:h-10 md:w-fit" />
                    </Link>
                </div>

                <DrawerContent className="w-full max-w-sm h-full rounded-none bg-sand" >
                    <DrawerHeader className="flex justify-end -mt-10 bg-sand">
                        <DrawerClose asChild>
                            <Button variant="icon" className="text-navy" icon={<X className="w-6 h-6" />} />
                        </DrawerClose>
                    </DrawerHeader>
                    <div className="mx-auto w-full max-w-sm h-full flex flex-col items-center body1 gap-4 text-navy">
                        <Link href="/">
                            <Image src="/logos/gowanus-favicon-navy.svg" alt="gowanus-favicon-navy" width={68} height={44} />
                        </Link>

                        <Accordion type="single" collapsible className="text-navy -mb-4">
                            <AccordionItem value={`item-${1}`} className="border-none">
                                <AccordionTrigger className="body1">Rental Properties</AccordionTrigger>
                                <AccordionContent className="body2 flex flex-col items-center gap-2">
                                    <a href="/union-channel" className="hover:cursor-pointer hover:text-canalRoyale">Union Channel</a>
                                    {/* <a href="/" className="hover:cursor-pointer hover:text-canalRoyale">Douglass Port</a>
                                    <a href="/" className="hover:cursor-pointer hover:text-canalRoyale">Nevins Landing</a> */}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Link href="/the-club" className="hover:text-canalRoyale">The Club</Link>
                        <Link href="/venn-services" className="hover:text-canalRoyale">Services</Link>
                        <Link href="/neighborhood" className="hover:text-canalRoyale">Explore Gowanus</Link>
                        <Link href="/the-wharf-dispatch" className="hover:text-canalRoyale">Wharf Happenings</Link>
                        <Link href="/availability" className="hover:text-canalRoyale">Availabilities</Link>
                        <Link href="/virtual-tours" className="hover:text-canalRoyale">Virtual Tours</Link>
                        <Link href="/inquire" className="hover:text-canalRoyale">Contact</Link>
                        {/* <Link href="" className="hover:text-canalRoyale">Resident Login</Link> */}
                    </div>
                </DrawerContent>
            </Drawer>

        </nav>
    )
}