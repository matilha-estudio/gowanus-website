import Image from 'next/image';

interface CardProps {
    title: string;
    description: string;
    address: string;
    imageUrl: string;
    altText: string;
    index: number;
}

const cardStyles = [
    {
        container: 'bg-canalRoyale',
        title: 'subheader4 text-white',
        description: 'accent3 text-white',
        address: 'accent4-bold text-eggCream',
    },
    {
        container: 'bg-sand',
        title: 'subheader4 text-navy',
        description: 'accent3 text-navy',
        address: 'accent4-bold text-red',
    },
    {
        container: 'bg-navy',
        title: 'subheader4 text-white',
        description: 'accent3 text-white',
        address: 'accent4-bold text-teal',
    },
];

const MapCard: React.FC<CardProps> = ({ title, description, address, imageUrl, altText, index }) => {
    const styles = cardStyles[index];

    return (
        <div className={`w-full p-8 flex justify-between ${styles.container}`}>
            <div className='relative max-w-44 flex flex-col gap-4'>
                <span className={styles.title}>{title}</span>
                <span className={styles.description}>{description}</span>
                <span className={styles.address}>{address}</span>
            </div>
            <Image src={imageUrl} alt={altText} width={128} height={176} className='object-cover' />
        </div>
    );
};

export default MapCard;