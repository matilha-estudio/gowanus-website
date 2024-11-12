import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import Reveal from "../animations/reveal";
import { useEffect, useState } from "react";
import { ApiResponseHomePage } from "@/services/models/home";
import { getHomePage } from "@/services/home";
import Image from "next/image";
import Link from "next/link";

interface IServices {
    fontFamily?: "Freight" | "TWK"
}

export default function Services({ fontFamily = "Freight" }: IServices) {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const [data, setData] = useState<ApiResponseHomePage | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    async function handleData() {
        try {
            const response = await getHomePage()
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
        <div className='w-screen h-screen bg-white' />
    )
    if (error) return <p>{error}</p>

    return (
        <section className="flex flex-col items-center justify-center w-full py-24 text-navy bg-sand">

            <Reveal className="grid md:grid-cols-2 grid-cols-1 px-4">
                <>
                    <div className="relative w-full overflow-hidden group max-w-[662px] max-h-[608px]">
                        <Image
                            src={data?.acf_medias.services_image_1 ?? ''}
                            alt="services"
                            className="w-full h-full max-w-[672px] max-h-[618px] object-cover"
                            width={672}
                            height={618}
                        />
                        <Image
                            src={data?.acf_medias.services_image_2 ?? ''}
                            width={672}
                            height={618}
                            alt="services"
                            className="w-full h-full max-w-[672px] max-h-[618px] object-cover absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />
                    </div>
                    <div className="flex flex-col text-center justify-center items-center gap-16">
                        {
                            fontFamily === "TWK" ? (
                                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2", "md:leading-none md:max-w-screen-sm")}>{data?.acf.services.title}</h1>
                            ) : (
                                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header1MD" : "header1", "md:leading-none md:max-w-screen-sm")}>{data?.acf.services.title}</h1>
                            )
                        }
                        <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                            {data?.acf.services.text}
                        </span>
                        <Link href='/venn-services'>
                            <Button label="explore" variant='navy' size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
                        </Link>
                    </div>
                </>
            </Reveal>

        </section>
    )
}