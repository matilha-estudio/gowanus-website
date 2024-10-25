import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CardProps {
    title: string;
    description: string;
    address: string;
    mapImageUrl: string;
    cardImageUrl: string;
    backgroudImage: string;
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
        title: 'subheader3 text-white leading-none',
        description: 'body2 text-white',
        address: 'accent1 text-eggCream',
    },
    {
        container: 'bg-sand',
        title: 'subheader3 text-navy leading-none',
        description: 'body2 text-navy',
        address: 'accent1 text-navy',
    },
    {
        container: 'bg-navy',
        title: 'subheader3 text-white leading-none',
        description: 'body2 text-white',
        address: 'accent1 text-teal',
    },

    {
        container: "mb-8 bg-sand",
        title: 'subheader3 text-white leading-none',
        description: 'body1 text-white max-w-[150px]',
        address: 'body1 text-navy max-w-[270px] text-center',
    },
    {
        container: 'bg-navy',
        title: 'subheader3 text-white leading-none',
        description: 'body1 text-white max-w-[150px]',
        address: 'body1 text-navy max-w-[270px text-center]',
    },
    {
        container: 'bg-navy',
        title: 'subheader3 text-white leading-none',
        description: 'body1 text-white max-w-[150px]',
        address: 'body1 text-navy max-w-[270px] text-center',
    },
];

const MapCard: React.FC<CardProps> = ({ title, description, address, cardImageUrl, backgroudImage, mapImageUrl, altText, index, listSize, cardIndex, setCardIndex, mdPosition }) => {

    function nextCard() {
        setCardIndex((prevIndex: any) => (prevIndex + 1) % listSize);
    }

    function prevCard() {
        setCardIndex((prevIndex: any) => (prevIndex - 1 + listSize) % listSize);
    }

    const styles = cardStyles[cardIndex ?? 0 % cardStyles.length];

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

            <div className={cn(`relative w-full p-8 flex justify-between overflow-hidden md:absolute md:justify-center md:w-72 md:flex-wrap-reverse md:gap-4 md:p-4`,
                'transition-opacity duration-1000 ease-in-out', "md:right-0 md:top-0 md:h-full md:max-w-[33%] md:w-full", index < 3 && styles.container,
                cardIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none sr-only', index > 2 && "md:items-end md:pt-[70px]")}>

                {/* Background */}
                {
                    backgroudImage !== '' && (
                        <Image src={backgroudImage} alt={altText} width={540} height={810} className='absolute top-0 object-cover w-full md:h-full' />
                    )
                }
                {
                    backgroudImage !== '' && (
                        <div className="absolute top-0 w-full h-full pb-8 px-8">
                            <div className='bg-sand w-full h-full' />
                        </div>
                    )
                }

                <div className='relative max-w-44 flex flex-col gap-4 md:max-w-full'>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.description}>{description}</span>
                    <span className={styles.address}>{address}</span>
                </div>

                {
                    index > 2 && (
                        <div className='relative bg-navy h-52 w-full flex justify-center z-10 mx-4'>
                            <Image
                                src={cardImageUrl}
                                alt="douglass-port"
                                className="absolute left-1/2 transform -translate-x-1/2 self-center md:w-full py-14 px-20"
                                width={374}
                                height={84}
                            />
                        </div>
                    )
                }

                {
                    index < 3 &&
                    (
                        <Image src={cardImageUrl} alt={altText} width={508} height={570} className='object-cover md:max-h-[570px] md:w-full' />
                    )
                }


                {/* <div className='hidden absolute w-96 top-1/2 -translate-y-1/2 md:flex justify-between'>
                    <Button variant='marigold' icon={<ArrowLeft />} onClick={prevCard} />
                    <Button variant='marigold' icon={<ArrowRight />} onClick={nextCard} />
                </div> */}
            </div>
        </>
    );
};

export default MapCard;