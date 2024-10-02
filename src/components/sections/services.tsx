import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import Reveal from "../animations/reveal";

export default function Services() {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    return (
        <section className="flex flex-col items-center justify-center w-full py-24 text-navy bg-sand">

            <Reveal className="grid md:grid-cols-2 grid-cols-1 px-4">
                <>
                    <div className="relative w-full overflow-hidden group">
                        <img
                            src="/medias/services-1.png"
                            alt="services"
                            className="w-full"
                        />
                        <img
                            src="/medias/services-2.png"
                            alt="services"
                            className="w-full absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform translate-x-full group-hover:translate-x-0"
                        />
                    </div>
                    <div className="flex flex-col text-center justify-center items-center gap-16">
                        <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header1MD" : "header1")}>services</h1>
                        <span className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "accent2 px-4" : "body1 max-w-lg")}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo quis interdum ornare. Maecenas at convallis lacus.
                        </span>
                        <div>
                            <Button label="explore" variant='marigold' size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
                        </div>
                    </div>
                </>
            </Reveal>

        </section>
    )
}