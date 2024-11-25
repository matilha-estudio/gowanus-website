import { useWindowWidth } from "@/hooks/useWindowWidth"
import { Button } from "../ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import { HTMLAttributes, useEffect, useState } from "react"
import Reveal from "../animations/reveal"
import { getWalkThroughPage } from "@/services/walkThrough"
import { ApiResponseWalkThrough } from "@/services/models/walkThrough"
import Link from "next/link"

interface IWalkThrough {
    className?: string
    videoSide?: "left" | "right";
    fontFamily?: "TWK" | "Freight"
}

export default function WalkThrough({ className, videoSide = "left", fontFamily = 'Freight' }: IWalkThrough) {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const [data, setData] = useState<ApiResponseWalkThrough | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    async function handleData() {
        try {
            const response = await getWalkThroughPage()
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
        <section className={cn("flex flex-col items-center justify-center w-full py-12 md:py-24 text-navy", className)}>
            <div className="grid md:grid-cols-2 grid-cols-1 w-full items-center max-w-screen-xl">
                <video
                    src={data?.acf_medias.video_url}
                    height={482}
                    width={592}
                    autoPlay muted loop disablePictureInPicture disableRemotePlayback playsInline
                    className="aspect-square p-4 flex md:hidden object-contain"
                >
                    walk-through
                </video>

                {
                    videoSide === 'left' && (
                        <div className="flex w-full items-center justify-center px-4">

                            <video
                                src={data?.acf_medias.video_url}
                                height={482}
                                width={592}
                                autoPlay muted loop disablePictureInPicture disableRemotePlayback playsInline
                                className="aspect-square hidden md:flex object-cover w-full h-[482px]"
                            >walk-through</video>
                        </div>
                    )
                }

                <Reveal className="flex flex-col text-center justify-center items-center gap-8 md:gap-16">
                    <>
                        {
                            fontFamily === 'TWK' ?
                                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2 max-w-[350px] text-center", "leading-none")}>WALK THROUGH</h1>
                                :
                                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header1MD" : "header1 max-w-[350px] text-center", "leading-none")}>WALK THROUGH</h1>
                        }
                        <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                            {data?.acf_medias.description}
                        </span>
                        <Link href='/virtual-tours'>
                            <Button label="explore" variant='navy' size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
                        </Link>
                    </>
                </Reveal>

                {
                    videoSide === 'right' && (
                        <div className="flex w-full items-center justify-center px-4">

                            <video
                                src={data?.acf_medias.video_url}
                                height={482}
                                width={592}
                                autoPlay muted loop disablePictureInPicture disableRemotePlayback playsInline
                                className="aspect-square hidden md:flex object-cover w-full h-[482px]"
                            >walk-through</video>
                        </div>
                    )
                }

            </div>
        </section>
    )
}