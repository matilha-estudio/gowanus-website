import { useWindowWidth } from "@/hooks/useWindowWidth"
import { cn } from "@/lib/utils"
import HubspotNewsLetterForm from "@/hubspot/HubspotNewsLetterForm"
import { useEffect, useState } from "react"
import { getLinks } from "@/services/links"
import { acf } from "@/services/models/links"

interface IInquireComponent {
    fontFamily?: "TWK" | "Freight"
}

export default function NewsletterComponent({ fontFamily = 'Freight' }: IInquireComponent) {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const [data, setData] = useState<acf | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    async function handleData() {
        try {
            const response = await getLinks()
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
        <section className="relative flex flex-col items-center justify-center w-full py-24 text-navy bg-navy px-8 md:px-16">

            <img src="/backgrounds/GraphicTreatment.svg" alt="GraphicTreatment" className="object-cover w-full h-full max-h-[800px]  absolute overflow-y-visible" />

            <div className="flex flex-col text-center text-navy gap-8 bg-sand px-10 md:px-14 py-16 w-full h-full mt-10 md:mt-0 z-10">
                {/* {
                    fontFamily === 'TWK' ? (
                        <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD px-4" : "header2", "leading-none")}>SUBSCRIBE TO OUR NEWSLETTER</h1>
                    ) : (
                        <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header1MD px-4" : "header1 -mt-10", "leading-none")}>SUBSCRIBE TO OUR NEWSLETTER</h1>
                        )
                        } */}
                <div className="hubspot-custom-container flex gap-4 text-navy">
                    <HubspotNewsLetterForm />
                </div>

                <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "subheader5 px-4" : "subheader3 mt-5", "leading-none")}>
                    For all press inquiries, contact us: {String(data?.phone_number)?.slice(0, 3)}.
                    {String(data?.phone_number)?.slice(3, 6)}.
                    {String(data?.phone_number)?.slice(6, 10)} | {data?.press_email}
                </h1>
            </div>
        </section>
    )
}