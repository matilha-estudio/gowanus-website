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
    const MOBILE_BREAKPOINT = 768

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Ativar a transição após 50px de scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <NavBar
                variant={variantFirstNavbar}
                hasBackground={false}
                hasHomeButton={false}
                position="absolute"
                className={cn(
                    "opacity-0 animate-show absolute w-full",
                    `transition-opacity duration-500 ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`,
                    classNameFirstNavbar
                )}
                style={{ animationDelay: "10s" }}
                pageName={pageName}
                pagePath={pagePath}
            />

            {/* NavBar secundária */}
            <NavBar
                variant="navyOutline"
                hasBackground={true}
                hasHomeButton={SCREEN_WIDTH < MOBILE_BREAKPOINT ? false : true}
                className={cn(
                    `transition-all duration-500 w-full`,
                    isScrolled ? "opacity-100 sticky top-0" : "opacity-0 absolute"
                )}
                pageName={pageName}
                pagePath={pagePath}
            />
        </>
    )
}