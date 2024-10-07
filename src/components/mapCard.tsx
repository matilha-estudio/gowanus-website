import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CardProps {
    title: string;
    description: string;
    address: string;
    mapImageUrl: string;
    cardImageUrl: string;
    altText: string;
    index: number;
    listSize: number;
    setCardIndex: Dispatch<SetStateAction<number | null>>
    cardIndex: number | null
    mdPosition: string
}

const cardStyles = [
    {
        container: 'bg-canalRoyale',
        title: 'subheader4 text-white leading-none',
        description: 'accent3 text-white',
        address: 'accent4-bold text-eggCream',
    },
    {
        container: 'bg-sand',
        title: 'subheader4 text-navy leading-none',
        description: 'accent3 text-navy',
        address: 'accent4-bold text-red',
    },
    {
        container: 'bg-navy',
        title: 'subheader4 text-white leading-none',
        description: 'accent3 text-white',
        address: 'accent4-bold text-teal',
    },
];

const MapCard: React.FC<CardProps> = ({ title, description, address, cardImageUrl, mapImageUrl, altText, index, listSize, cardIndex, setCardIndex, mdPosition }) => {

    function nextCard() {
        setCardIndex((prevIndex) => (prevIndex + 1) % listSize);
    }

    function prevCard() {
        setCardIndex((prevIndex) => (prevIndex - 1 + listSize) % listSize);
    }

    const styles = cardStyles[cardIndex % cardStyles.length];

    return (
        <>
            <div className={cn('relative w-full h-full md:hidden', cardIndex !== index && 'hidden')}>
                <Image
                    src={mapImageUrl}
                    alt="MapIntegration"
                    width={700}
                    height={500}
                    className="w-full h-full md:hidden object-cover"
                />
                <div className='absolute w-full top-1/2 -translate-y-1/2 flex justify-between px-2'>
                    <Button variant='marigold' icon={<ArrowLeft />} onClick={prevCard} />
                    <Button variant='marigold' icon={<ArrowRight />} onClick={nextCard} />
                </div>
            </div>
            <div className={cn(`w-full p-8 flex justify-between ${styles.container} md:absolute md:justify-center md:w-72 md:flex-wrap-reverse md:gap-4 md:p-4`,
                'transition-opacity duration-1000 ease-in-out', `${mdPosition}`,
                cardIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none sr-only')}>
                <div className='relative max-w-44 flex flex-col gap-4 md:max-w-full'>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.description}>{description}</span>
                    <span className={styles.address}>{address}</span>
                </div>
                <Image src={cardImageUrl} alt={altText} width={128} height={176} className='object-cover md:w-full' />
                {/* <div className='hidden absolute w-96 top-1/2 -translate-y-1/2 md:flex justify-between'>
                    <Button variant='marigold' icon={<ArrowLeft />} onClick={prevCard} />
                    <Button variant='marigold' icon={<ArrowRight />} onClick={nextCard} />
                </div> */}
            </div>
        </>
    );
};

export default MapCard;