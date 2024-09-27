import { useWindowWidth } from "@/hooks/useWindowWidth"
import { Button } from "../ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import { HTMLAttributes } from "react"

interface IWalkThrough {
    className?: string
}

export default function WalkThrough({ className }: IWalkThrough) {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    return (
        <section className={cn("flex flex-col items-center justify-center w-full py-12 md:py-24 text-navy", className)}>
            <div className="grid md:grid-cols-2 grid-cols-1">
                <video
                    src="/medias/walkthrough.mov"
                    height={482}
                    width={592}
                    autoPlay muted loop disablePictureInPicture disableRemotePlayback
                    className="aspect-square p-4 flex md:hidden object-contain"
                >
                    walk-through
                </video>
                <div className="flex flex-col text-center justify-center items-center gap-8 md:gap-16 ">
                    <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2")}>WALK THROUGH</h1>
                    <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                    </span>
                    <div>
                        <Button label="explore" variant='marigold' size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
                    </div>
                </div>
                <video
                    src="/medias/walkthrough.mov"
                    height={482}
                    width={592}
                    autoPlay muted loop disablePictureInPicture disableRemotePlayback
                    className="aspect-video hidden md:flex object-contain h-[482px] ml-10"
                ></video>
            </div>
        </section>
    )
}