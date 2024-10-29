import { useWindowWidth } from "@/hooks/useWindowWidth"
import { InputWithLabel } from "../ui/inputWithLabel"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { ArrowUpRight } from "lucide-react"

export default function InquireComponent() {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768
    return (
        <section className="flex flex-col items-center justify-center w-full py-24 text-navy bg-navy px-8 md:px-16">

            <img src="/backgrounds/GraphicTreatment.svg" alt="GraphicTreatment" className="object-cover w-full h-full mt-20 md:mt-0 max-h-[800px] md:max-h-[700px] absolute" />

            <div className="flex flex-col text-center text-navy gap-8 bg-sand px-10 md:px-20 py-16 w-full h-full mt-10 md:mt-0 z-10">
                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD px-4" : "header2", "leading-none")}>Give The Wharf a wave</h1>
                <div className="flex flex-wrap gap-4">
                    <InputWithLabel label="First Name" placeholder="First" />
                    <InputWithLabel label="Last Name" placeholder="Last" />
                    <InputWithLabel label="Email" placeholder="email@email.com" />
                    <InputWithLabel label="Zip Code" placeholder="XXXXX" />
                    <InputWithLabel label="Apartment Type" placeholder="Select preferred apartment type" />
                    <div className="flex gap-4 items-end">
                        <Button variant='navy' label="submit" size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} className={cn("max-h-[38px]", SCREEN_WIDTH > MOBILE_BREAKPOINT && 'subheader5 py-3')} />
                        <Button variant='navy' label="schedule a tour" size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} className={cn("max-h-[38px] md:h-full", SCREEN_WIDTH > MOBILE_BREAKPOINT && 'subheader5')} />
                    </div>
                </div>
            </div>
        </section>
    )
}