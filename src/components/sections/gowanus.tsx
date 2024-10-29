import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { useEffect, useState } from "react";
import { ApiResponseHomePage } from "@/services/models/home";
import { getHomePage } from "@/services/home";

export default function GowanusWharf() {
    const windowWidth = useWindowWidth();
    const SCREEN_WIDTH = windowWidth;
    const MOBILE_BREAKPOINT = 768;

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
        <section className="flex w-full h-screen text-navy bg-white justify-center items-center overflow-hidden">
            <div className="relative flex flex-col items-center max-w-screen-2xl w-screen h-screen py-24 justify-center overflow-hidden">

                {/* Image 1 */}
                <div>
                    <Image
                        src={data?.acf_medias.gowanus_is_calling.images[0].image.url ?? ''}
                        width={322} height={420}
                        alt="Image1"
                        className="absolute size-48 top-8 left-8 md:w-[222px] md:h-[320px] lg:w-[322px] lg:h-[420px] md:left-28 md:-mt-4 object-cover transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <Image
                        src={data?.acf_medias.gowanus_is_calling.images[0].gif.url ?? ''}
                        width={322} height={420}
                        alt="Image1GIF"
                        className="absolute size-48 top-8 left-8 md:w-[222px] md:h-[320px] lg:w-[322px] lg:h-[420px] md:left-28 md:-mt-4 object-cover transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"
                    />
                </div>

                {/* Image 2 */}
                <div>
                    <Image
                        src={data?.acf_medias.gowanus_is_calling.images[1].image.url ?? ''}
                        width={343} height={228}
                        alt="Image2"
                        className="absolute h-28 w-48 top-[136px] right-8 md:left-8 md:mt-96 object-cover md:z-10 md:w-[243px] md:h-[128px] lg:w-[343px] lg:h-[228px] transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <Image
                        src={data?.acf_medias.gowanus_is_calling.images[1].gif.url ?? ''}
                        width={343} height={228}
                        alt="Image2GIF"
                        className="absolute h-28 w-48 top-[136px] right-8 md:left-8 md:mt-96 object-cover md:z-10 md:w-[243px] md:h-[128px] lg:w-[343px] lg:h-[228px] transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"
                    />
                </div>

                {/* Image 3 */}
                <div>
                    <Image
                        src={data?.acf_medias.gowanus_is_calling.images[2].image.url ?? ''}
                        width={156} height={104.71}
                        alt="Image3"
                        className="absolute h-12 w-[71px] top-[296px] right-20 object-cover lg:right-[428px] md:right-[80px] md:top-[120px] lg:top-[180px] md:z-10 md:w-[156px] md:h-[104px] transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <Image
                        src={data?.acf_medias.gowanus_is_calling.images[2].gif.url ?? ''}
                        width={156} height={104.71}
                        alt="Image3GIF"
                        className="absolute h-12 w-[71px] top-[296px] right-20 object-cover lg:right-[428px] md:right-[80px] md:top-[120px] lg:top-[180px] md:z-10 md:w-[156px] md:h-[104px] transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"
                    />
                </div>

                {/* Image 4 */}
                <div>
                    <Image
                        src={data?.acf_medias.gowanus_is_calling.images[3].image.url ?? ''}
                        width={276} height={276}
                        alt="Image4"
                        className="absolute h-[156px] w-[103px] bottom-[69px] right-16 md:right-20 md:top-[160px] md:w-[276px] md:h-[276px] object-cover transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <Image
                        src={data?.acf_medias.gowanus_is_calling.images[3].gif.url ?? ''}
                        width={276} height={276}
                        alt="Image4GIF"
                        className="absolute h-[156px] w-[103px] bottom-[69px] right-16 md:right-20 md:top-[160px] md:w-[276px] md:h-[276px] object-cover transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"
                    />
                </div>

                {/* Image 5 */}
                <div>
                    <Image
                        src={data?.acf_medias.gowanus_is_calling.images[4].image.url ?? ''}
                        width={367.46} height={244}
                        alt="Image5"
                        className="absolute h-[126px] w-[190px] bottom-[27px] left-16 md:left-[70%] lg:bottom-[10%] md:w-[267.46px] md:h-[144px] lg:w-[367.46px] lg:h-[244px] object-cover transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <Image
                        src={data?.acf_medias.gowanus_is_calling.images[4].gif.url ?? ''}
                        width={367.46} height={244}
                        alt="Image5GIF"
                        className="absolute h-[126px] w-[190px] bottom-[27px] left-16 md:left-[70%] lg:bottom-[10%] md:w-[267.46px] md:h-[144px] lg:w-[367.46px] lg:h-[244px] object-cover transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"
                    />
                </div>

                {/* Text and Button */}
                <div className="flex flex-col text-center gap-16">
                    <div className="flex flex-col z-20">
                        <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XL")}>gowanus</h1>
                        <h1 className={cn("leading-none", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XL")}>is</h1>
                        <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XL")}>calling</h1>
                    </div>
                    <span className={cn("md:max-w-lg max-w-xs z-20", SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent3" : "body1")}>
                        {data?.acf_medias.gowanus_is_calling.text}
                    </span>
                    <div className="z-10">
                        <Button variant='marigold' label="learn more" icon={<ArrowUpRight />} size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? "mobile" : "default"} />
                    </div>
                </div>
            </div>
        </section>
    );
}
