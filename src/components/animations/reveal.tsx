"use client"
import { cn } from '@/lib/utils';
import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react';

interface IReveal {
    children: JSX.Element;
    className?: string;
}

export default function Reveal({ children, className }: IReveal) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <motion.div
            ref={ref}
            className={cn(className, "w-full relative")}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
        >
            {children}
        </motion.div>
    )
}