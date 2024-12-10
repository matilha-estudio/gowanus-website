import { useWindowWidth } from "@/hooks/useWindowWidth"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { ArrowUpRight } from "lucide-react"
import HubspotInquireForm from "@/hubspot/HubspotInquireForm"
import Image from "next/image"

interface IInquireComponent {
    fontFamily?: "TWK" | "Freight"
}

export default function InquireComponent({ fontFamily = 'Freight' }: IInquireComponent) {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 769
    return (
        <section className="relative flex flex-col items-center justify-center w-full py-8 md:py-24 text-navy bg-navy px-8 md:px-16">

            <Image
                src="/backgrounds/GraphicTreatment.svg"
                alt="GraphicTreatment"
                className="object-cover w-full h-full max-h-[800px] hidden md:block absolute overflow-y-visible z-10 -mt-5"
                width={1440}
                height={566}
            />

            <Image
                src="/backgrounds/GraphicTreatment.svg"
                className="object-cover w-full h-full md:hidden absolute overflow-y-visible z-10 -mt-10"
                alt="GraphicTreatments_Mobile"
                width={1074}
                height={841.42}
            />
            <div className="flex flex-col text-center text-navy gap-8 bg-sand px-10 md:px-20 py-16 w-full h-full mt-10 md:mt-0 z-10">
                {/* {
                    fontFamily === 'TWK' ? (
                        <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD px-4" : "header2", "leading-none")}>Give The Wharf a wave</h1>
                    ) : (
                        <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header1MD px-4" : "header1 -mt-10", "leading-none")}>Give The Wharf a wave</h1>
                    )
                } */}
                <div className="hubspot-custom-container flex gap-4 text-navy">
                    <HubspotInquireForm />
                    <div className="flex gap-4 items-end justify-center w-full mb-[2px]">
                        <Button variant='navy' label="schedule a tour" size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} className={cn(SCREEN_WIDTH > MOBILE_BREAKPOINT && 'subheader5')} />
                    </div>
                </div>
            </div>
        </section>
    )
}