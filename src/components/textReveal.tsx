import { CSSProperties, useEffect, useRef, useState } from 'react';

interface ITextReveal {
    text: string
    style?: CSSProperties
}

const TextReveal = ({ text, style }: ITextReveal) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsRevealed(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 1, // Trigger when 20% of the element is visible
            }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <h1
            ref={textRef}
            style={style}
            className={`header1 leading-none transform transition-transform duration-[2000ms] ease-in-out ${isRevealed ? 'translate-y-8 opacity-1' : 'translate-y-16 opacity-0'
                }`}
        >
            {text}
        </h1>
    );
};

export default TextReveal;