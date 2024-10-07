"use client";

import Image from "next/image";
import MapCard from "../mapCard";
import { Button } from "../ui/button";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { ArrowUpRight, Flag, FlagTriangleRight, MapPin, Pin } from "lucide-react";
import { SetStateAction, useState } from "react";

interface IMapComponent {
    showButton?: boolean
}

export default function MapComponent(props: IMapComponent) {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const [cardIndex, setCardIndex] = useState<number | null>(0);
    const [mdPosition, setMdPosition] = useState("");

    const cardData = [
        {
            title: 'Public Records',
            description: 'Hi-fi record bar with food & drink offerings plus an intimate performance space & vegan cafe.',
            address: '233 Butler St, Brooklyn, NY 11217',
            cardImageUrl: '/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg',
            mapImageUrl: '/medias/MapIntegration.png',
            altText: '2024_GW_MVP_12_Moonkata',
        },
        {
            title: 'Claro',
            description: 'Mexican spot with a patio specializing in Oaxacan plates, including house tortillas, and mezcals.',
            address: '284 3rd Ave, Brooklyn, NY 11215',
            cardImageUrl: '/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg',
            mapImageUrl: '/medias/MapIntegration.png',
            altText: '2024_GW_MVP_12_Moonkata',
        },
        {
            title: 'The Royal Palms Shuffleboard Club',
            description: 'Shuffleboard courts draw playful crowds to this big bar with food trucks & occasional live music.',
            address: '514 Union St, Brooklyn, NY 11215',
            cardImageUrl: '/medias/cardExemple/2024_GW_MVP_12_Moonkata.jpg',
            mapImageUrl: '/medias/MapIntegration.png',
            altText: '2024_GW_MVP_12_Moonkata',
        }
    ];

    function handleMDCard(cardIndex: SetStateAction<number | null>, position: SetStateAction<string>) {
        setCardIndex(cardIndex)
        setMdPosition(position)
    }

    return (
        <section className="relative flex flex-col md:h-auto items-center w-full bg-navy text-navy">
            <div className="relative md:h-auto items-center w-full flex flex-col">

                <Image
                    src="/medias/MapIntegration.png"
                    alt="MapIntegration"
                    width={1440}
                    height={810}
                    className="w-full h-full md:max-h-[810px] md:flex md:w-[1440px] hidden object-center"
                    onClick={() => setCardIndex(null)}
                />

                <FlagTriangleRight className="absolute hidden md:flex text-sand hover:cursor-pointer top-[43%] right-[45%] size-10 fill-current" onClick={() => handleMDCard(0, "md:top-[27%] md:right-[30%]")} />
                <FlagTriangleRight className="absolute hidden md:flex text-teal hover:cursor-pointer bottom-[16%] left-[45%] size-10 fill-current" onClick={() => handleMDCard(2, "md:bottom-[22%] md:left-[30%]")} />
                <FlagTriangleRight className="absolute hidden md:flex text-red hover:cursor-pointer bottom-[9%] left-[50%] size-10 fill-current" onClick={() => handleMDCard(1, "md:bottom-[15%] md:right-[35%]")} />
            </div>

            {cardData.map((item, index) => (
                <MapCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    address={item.address}
                    cardImageUrl={item.cardImageUrl}
                    mapImageUrl={item.mapImageUrl}
                    altText={item.altText}
                    index={index}
                    listSize={cardData.length}
                    setCardIndex={setCardIndex}
                    cardIndex={cardIndex}
                    mdPosition={mdPosition}
                />
            ))}

            {
                props.showButton && (
                    <div className="w-full bg-navy py-4 md:py-8 flex justify-center">
                        <Button label="explore campus" variant='white' size={SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'mobile' : 'default'} icon={<ArrowUpRight />} />
                    </div>
                )
            }
        </section>
    )
}