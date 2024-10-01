"use client";

import Image from "next/image";
import MapCard from "../mapCard";
import { Button } from "../ui/button";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface IMapComponent {
    showButton?: boolean
}

export default function MapComponent(props: IMapComponent) {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const [cardIndex, setCardIndex] = useState(0);

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

    return (
        <section className="relative flex flex-col h-screen md:h-auto items-center w-full text-navy">
            <Image
                src="/medias/MapIntegration.png"
                alt="MapIntegration"
                width={1440}
                height={810}
                className="w-full h-full md:max-h-[810px] md:flex hidden object-cover"
            />
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