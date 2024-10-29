import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useWindowWidth } from '@/hooks/useWindowWidth';

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


const MapCard: React.FC<CardProps> = ({ title, description, address, cardImageUrl, backgroudImage, mapImageUrl, altText, index, listSize, cardIndex, setCardIndex, mdPosition }) => {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const cardStyles = [
        {
            container: 'bg-canalRoyale',
            title: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'subheader5' : 'subheader3'} text-white leading-none flex-wrap break-words`,
            description: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'accent3' : 'body2'} text-white`,
            address: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'accent4-bold' : 'accent1'} text-white`,
        },
        {
            container: 'bg-sand',
            title: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'subheader5' : 'subheader3'} text-navy leading-none flex-wrap break-words`,
            description: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'accent3' : 'body2'} text-navy`,
            address: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'accent4-bold' : 'accent1'} text-navy`,
        },
        {
            container: 'bg-red',
            title: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'subheader5' : 'subheader3'} text-white leading-none flex-wrap break-words`,
            description: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'accent3' : 'body2'} text-white`,
            address: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'accent4-bold' : 'accent1'} text-white`,
        },



        {
            container: "bg-sand",
            title: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'subheader5' : 'subheader3'} text-navy leading-none flex-wrap break-words`,
            description: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'accent3' : 'body2'} text-white max-w-[150px]`,
            address: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'accent4-bold' : 'body1'} text-navy text-center max-w-[150px]`,
        },
        {
            container: 'bg-navy',
            title: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'subheader5' : 'subheader3'} text-navy leading-none flex-wrap break-words`,
            description: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'accent3' : 'body2'} text-white max-w-[150px]`,
            address: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'accent4-bold' : 'body1'} text-navy text-center max-w-[150px]`,
        },
        {
            container: 'bg-navy',
            title: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'subheader5' : 'subheader3'} text-navy leading-none flex-wrap break-words`,
            description: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'accent3' : 'body2'} text-white max-w-[150px]`,
            address: `${SCREEN_WIDTH < MOBILE_BREAKPOINT ? 'accent4-bold' : 'body1'} text-navy text-center max-w-[150px]`,
        },
    ];

    function nextCard() {
        setCardIndex((prevIndex: any) => (prevIndex + 1) % listSize);
    }

    function prevCard() {
        setCardIndex((prevIndex: any) => (prevIndex - 1 + listSize) % listSize);
    }

    const styles = cardStyles[cardIndex ?? 0 % cardStyles.length];

    return (
        cardIndex === index ? (

            <>
                <div className={cn('relative w-full h-[535px] md:hidden', cardIndex !== index && 'hidden')}>
                    <Image
                        src={mapImageUrl}
                        alt="MapIntegration"
                        width={700}
                        height={535}
                        className="w-full md:hidden h-[535px] object-cover"
                    />
                </div>


                <div className={cn(`relative w-full z-10 flex overflow-hidden md:absolute justify-center md:w-72 md:flex-wrap-reverse md:gap-4 md:p-4`,
                    'transition-opacity duration-1000 ease-in-out', "md:right-0 md:top-0 md:h-full md:max-w-[33%] md:w-full", index < 3 && styles.container,
                    cardIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none sr-only', index > 2 && "md:items-end md:pt-[70px]")}>


                    {/* Background */}
                    {
                        backgroudImage !== '' && (
                            <Image src={backgroudImage} alt={altText} width={540} height={810} className='absolute top-0 object-cover w-full hidden md:block md:h-full' />
                        )
                    }
                    {
                        SCREEN_WIDTH > MOBILE_BREAKPOINT && backgroudImage !== '' && (
                            <div className="absolute top-0 w-full h-full pb-8 px-8">
                                <div className='bg-sand w-full h-full' />
                            </div>
                        )
                    }

                    <div className={cn('relative flex flex-col gap-4 py-8 md:max-w-full w-[139px]', index < 3 && 'md:w-full')}>
                        <span className={styles.title}>{title}</span>
                        <span className={styles.description}>{description}</span>
                        <span className={styles.address}>{address}</span>
                    </div>

                    {
                        index > 2 && (
                            <div className='md:relative bg-navy h-[200px] w-full flex justify-center z-10 mx-4 p-8'>
                                <Image
                                    src={cardImageUrl}
                                    alt="cardImageUrl"
                                    className="absolute left-1/2 transform -translate-x-1/2 self-center w-[259px] md:w-full py-14 px-8"
                                    width={374}
                                    height={84}
                                />
                            </div>
                        )
                    }

                    {
                        index < 3 &&
                        (
                            <Image
                                src={cardImageUrl}
                                alt={altText}
                                width={508}
                                height={570}
                                className='object-cover md:object-contain w-[128px] h-[211px] self-center md:max-h-[570px] md:w-full md:h-full m-4 md:m-0'
                            />
                        )
                    }

                    <div className='absolute w-full top-1/2 -translate-y-1/2 flex md:hidden justify-between z-10 px-3 -ml-4'>
                        <Button variant={index < 3 ? 'marigold' : 'navy'} className='h-7 w-7' icon={<ArrowLeft className={cn('h-3 w-3', index < 3 ? 'text-marigold' : 'text-navy')} />} onClick={prevCard} />
                        <Button variant={index < 3 ? 'marigold' : 'navy'} className='h-7 w-7' icon={<ArrowRight className={cn('h-3 w-3', index < 3 ? 'text-marigold' : 'text-navy')} />} onClick={nextCard} />
                    </div>
                </div>
            </>
        ) : null
    );
};

export default MapCard;