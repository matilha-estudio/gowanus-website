"use client";

import Image from "next/image";
import MapCard from "../mapCard";
import { Button } from "../ui/button";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { ArrowUpRight } from "lucide-react";
import { SetStateAction, useState } from "react";
import Pins from "../svg/pins";
import Link from "next/link";

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
            cardImageUrl: '/medias/PUBLICREC_35MM.png',
            mapImageUrl: '/medias/MapIntegration.png',
            backgroudImage: "",
            altText: 'PUBLICREC_35MM',
        },
        {
            title: 'Claro',
            description: 'Mexican spot with a patio specializing in Oaxacan plates, including house tortillas, and mezcals.',
            address: '284 3rd Ave, Brooklyn, NY 11215',
            cardImageUrl: '/medias/CLARO_35MM.png',
            mapImageUrl: '/medias/MapIntegration.png',
            backgroudImage: "",
            altText: 'CLARO_35MM',
        },
        {
            title: 'The Royal Palms Shuffleboard Club',
            description: 'Shuffleboard courts draw playful crowds to this big bar with food trucks & occasional live music.',
            address: '514 Union St, Brooklyn, NY 11215',
            cardImageUrl: '/medias/PALMSDIGITAL.png',
            mapImageUrl: '/medias/MapIntegration.png',
            backgroudImage: "",
            altText: 'PALMSDIGITAL',
        },


        {
            title: '',
            description: '',
            address: '585 Union Channel, Gowanus, Brooklyn',
            cardImageUrl: '/logos/union-channel-GA-logo-white.svg',
            mapImageUrl: '/medias/MapIntegrationUC.png',
            backgroudImage: "/medias/union_card_bg.png",
            altText: 'Union',
        },
        {
            title: '',
            description: '',
            address: '251 Douglass Port, Gowanus, Brooklyn',
            cardImageUrl: '/logos/douglass-port-GA-white.svg',
            mapImageUrl: '/medias/MapIntegrationDP.png',
            backgroudImage: "/medias/douglass_card_bg.png",
            altText: 'Douglass',
        },
        {
            title: '',
            description: '',
            address: '310 Nevins North, Gowanus, Brooklyn',
            cardImageUrl: '/logos/nevins-lading-GA.svg',
            mapImageUrl: '/medias/MapIntegrationNL.png',
            backgroudImage: "/medias/nevis_card_bg.png",
            altText: 'Nevins',
        },
    ];

    function handleMDCard(cardIndex: SetStateAction<number | null>, position: SetStateAction<string>) {
        setCardIndex(cardIndex)
        setMdPosition(position)
    }

    return (
        <section className="relative flex flex-col md:h-auto items-center w-full bg-navy text-navy">
            <div className="relative max-h-[810px] w-full h-full flex flex-col">
                <Image
                    src={cardIndex !== null && cardData[cardIndex] ? cardData[cardIndex].mapImageUrl : ''}
                    alt="MapIntegration"
                    width={1440}
                    height={810}
                    className="w-full h-full max-w-[1440px] object-cover hidden md:flex transition-all"
                    onClick={() => setCardIndex(null)}
                />

                {/* desktop */}
                <Pins
                    className="absolute hidden md:block xl:top-[27.41%] lg:top-[17%] md:top-[3%] left-[29.70%] w-[36.79vw] h-[57.41vh] max-w-[529.62px] max-h-[465px] z-10"
                    handleClick={(index) => handleMDCard(index, "md:bottom-[15%] md:right-[35%]")}
                />

                {/* mobile */}
                <Pins
                    className="absolute block md:hidden left-0 bottom-[31%] w-[99vw] h-[57.41vh] max-w-[529.62px] max-h-[465px] z-10"
                    handleClick={(index) => handleMDCard(index, "md:bottom-[15%] md:right-[35%]")}
                />

                {cardData.map((item, index) => (
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
                        listSize={cardData.length}
                        setCardIndex={setCardIndex}
                        cardIndex={cardIndex}
                        mdPosition={mdPosition}
                    />
                ))}
            </div>


            {/* <FlagTriangleRight className="absolute hidden md:flex text-sand hover:cursor-pointer top-[43%] right-[45%] size-10 fill-current" onClick={() => handleMDCard(0, "md:top-[27%] md:right-[30%]")} />
                <FlagTriangleRight className="absolute hidden md:flex text-teal hover:cursor-pointer bottom-[16%] left-[45%] size-10 fill-current" onClick={() => handleMDCard(2, "md:bottom-[22%] md:left-[30%]")} />
                <FlagTriangleRight className="absolute hidden md:flex text-red hover:cursor-pointer bottom-[9%] left-[50%] size-10 fill-current" onClick={() => handleMDCard(1, "md:bottom-[15%] md:right-[35%]")} /> */}

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