import { useEffect, useState } from "react";
import NavBar from "./navbar";
import { cn } from "@/lib/utils";
import { useWindowWidth } from "@/hooks/useWindowWidth";

interface INav {
    pageName: string
    pagePath: string
    classNameFirstNavbar?: string
    variantFirstNavbar?: "navyOutline" | "white"
}

export default function NavbarComponent({ pageName, pagePath, classNameFirstNavbar, variantFirstNavbar = "white" }: INav) {
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 769

    const [isScrolled, setIsScrolled] = useState(false);
    const [variant, setVariant] = useState(variantFirstNavbar);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            if (window.scrollY > 20) {
                setVariant("navyOutline")
            } else {
                setVariant(variantFirstNavbar)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <NavBar
            variant={variant}
            hasBackground={isScrolled}
            hasHomeButton={!isScrolled || SCREEN_WIDTH < MOBILE_BREAKPOINT ? false : true}
            className={cn(
                `transition-all duration-500 w-full`,
                isScrolled ? "opacity-100 sticky top-0" : `${classNameFirstNavbar} top-0`
            )}
            pageName={pageName}
            pagePath={pagePath}
        />
    )
}