import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { ArrowUpRight } from "lucide-react";

export default function AvailableApartments() {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    return (
        <section className="flex flex-col items-center justify-center w-full pt-6 md:py-16 text-navy bg-white">
            <img src="/medias/Availabilities.png" alt="Availabilities" className="object-cover w-full h-full max-h-[455px] absolute" />
            <div className="flex flex-col text-center text-white gap-8 z-10 items-center">
                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD px-4 leading-none" : "header2")}>Available APARTMENTS</h1>
                <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg text-center")}>
                    1 to 3-Bedrooms Now Pre-leasing
                </span>
                <div>
                    <Button variant='marigold' label="view all" size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
                </div>
            </div>
            <div className='h-16 md:hidden' />
        </section>
    )
}