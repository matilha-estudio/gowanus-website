import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export default function GowanusWharf() {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    return (
        <section className="relative flex flex-col items-center w-screen h-screen py-24 text-navy bg-white justify-center overflow-hidden">
            <Image
                src="/medias/Explore/Image_1.png"
                width={322} height={420}
                alt="Image1"
                className="absolute size-48 top-8 left-8 md:w-[222px] md:h-[320px] lg:w-[322px] lg:h-[420px] md:left-28 md:-mt-4 object-cover"
            />
            <Image
                src="/medias/Explore/Image_2.png"
                width={343} height={228}
                alt="Image2"
                className="absolute h-28 w-48 top-[136px] right-8 md:left-8 md:mt-96 object-cover md:z-10 md:w-[243px] md:h-[128px] lg:w-[343px] lg:h-[228px]"
            />
            <Image
                src="/medias/Explore/Image_3.png"
                width={156} height={104.71}
                alt="Image3"
                className="absolute h-12 w-[71px] top-[296px] right-20 object-cover lg:right-[428px] md:right-[80px] md:top-[120px] lg:top-[180px] md:z-10 md:w-[156px] md:h-[104px]"
            />
            <Image
                src="/medias/Explore/Image_4.png"
                width={276} height={276}
                alt="Image4"
                className="absolute h-[156px] w-[103px] bottom-[69px] right-16 md:right-20 md:top-[160px] md:w-[276px] md:h-[276px] object-cover"
            />
            <Image
                src="/medias/Explore/Image_5.png"
                width={367.46} height={244}
                alt="Image5"
                className="absolute h-[126px] w-[190px] bottom-[27px] left-16 md:left-[70%] lg:bottom-[10%] md:w-[267.46px] md:h-[144px] lg:w-[367.46px] lg:h-[244px] object-cover"
            />
            <Image
                src="/logos/waveicon-marigold.svg"
                width={242} height={12}
                alt="waveicon"
                className="absolute h-[7px] w-[144px] top-[120px] right-28 md:right-32 md:mt-80 object-cover md:-z-10"
            />
            <Image
                src="/logos/waveicon-marigold.svg"
                width={242} height={12}
                alt="waveicon"
                className="absolute h-[7px] w-[144px] bottom-[84px] -right-4 md:right-32 md:mt-80 object-cover md:-z-10"
            />
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
    )
}