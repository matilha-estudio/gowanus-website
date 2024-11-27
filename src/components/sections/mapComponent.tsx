"use client";

import Image from "next/image";
import MapCard from "../mapCard";
import { Button } from "../ui/button";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { ArrowUpRight } from "lucide-react";
import { SetStateAction, useState } from "react";
import Link from "next/link";
import DynamicPin, { InterestPoint } from "../svg/dynamicPin";
import { InterestPintsList } from "./interestPointsList";
import { cn } from "@/lib/utils";

interface IMapComponent {
    showButton?: boolean
    showInterestPointsList?: boolean
}

export default function MapComponent(props: IMapComponent) {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const [cardIndex, setCardIndex] = useState<number | null>(0);
    const [mdPosition, setMdPosition] = useState("");

    function handleMDCard(cardIndex: SetStateAction<number | null>, position: SetStateAction<string>) {
        setCardIndex(cardIndex)
        setMdPosition(position)
    }

    return (
        <section className="relative overflow-hidden flex flex-col md:h-auto items-center w-full bg-navy text-navy">
            <div className="relative max-h-[810px] max-w-screen-2xl w-full h-full flex flex-col">
                <Image
                    src={cardIndex !== null && InterestPintsList[cardIndex] ? InterestPintsList[cardIndex].mapImageUrl : ''}
                    alt="MapIntegration"
                    width={1440}
                    height={810}
                    className="w-full h-full max-w-[1440px] object-cover hidden md:flex transition-all"
                    onClick={() => setCardIndex(null)}
                />

                <DynamicPin
                    interestPoint={InterestPintsList}
                    handleClick={(index) => handleMDCard(index, "md:bottom-[15%] md:right-[35%]")}
                    cardIndex={cardIndex}
                />

                {InterestPintsList.map((item, index) => (
                    <MapCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        address={item.address}
                        cardImageUrl={item.cardImageUrl}
                        mapImageUrl={item.mapImageUrl}
                        backgroudImage={item.backgroudImage}
                        altText={item.altText}
                        index={index}
                        listSize={InterestPintsList.length}
                        setCardIndex={setCardIndex}
                        cardIndex={cardIndex}
                        mdPosition={mdPosition}
                        type={item.type}
                    />
                ))}
            </div>

            {
                props.showInterestPointsList && (
                    <div className="grid grid-cols-2 md:grid-cols-3 p-8 md:py-24 lg:px-36">
                        {
                            InterestPintsList.map((item, index) => (
                                <span
                                    key={index}
                                    className={cn("body2 text-white hover:text-marigold cursor-pointer",
                                        cardIndex === index && "text-marigold"
                                    )}
                                    onClick={() => handleMDCard(index, "md:bottom-[15%] md:right-[35%]")}
                                >
                                    {item.title}
                                </span>
                            ))
                        }
                    </div>
                )
            }

            {
                props.showButton && (
                    <Link href={'/neighborhood'} className="w-full bg-navy py-4 md:py-8 flex justify-center">
                        <Button label="explore campus" variant='white' size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
                    </Link>
                )
            }
        </section>
    )
}