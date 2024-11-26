import React, { useEffect, useRef, useState } from "react";
import config from "../../../tailwind.config";
import { cn } from "@/lib/utils";
import { CustomShape } from "./customShape";
import { DouglassShape, NevisShape, UnionShape } from "./buildingsShape";

interface IPins {
    interestPoint: InterestPoint[];
    handleClick: (index: number) => void;
}

export interface InterestPoint {
    title: string;
    description: string;
    address: string;
    cardImageUrl: string;
    mapImageUrl: string;
    backgroudImage: string;
    altText: string;
    cx: number | string;
    cy: number | string;
    type: "douglass" | "union" | "nevis" | "point";
}

const DynamicPin: React.FC<IPins & React.SVGProps<SVGSVGElement>> = (props) => {
    const { handleClick, ...svgProps } = props;
    const svgRef = useRef<SVGSVGElement>(null); // Referência ao elemento SVG
    const [indexState, setIndexState] = useState(0);
    const [svgSize, setSvgSize] = useState({ width: 1440, height: 810 }); // Dimensões padrão

    function onClick(index: number) {
        handleClick(index);
        setIndexState(index);
    }

    useEffect(() => {
        function updateSvgSize() {
            if (svgRef.current) {
                const rect = svgRef.current.getBoundingClientRect(); // Tamanho real do SVG
                setSvgSize({
                    width: rect.width,
                    height: rect.height,
                });
            }
        }
        updateSvgSize();
        window.addEventListener("resize", updateSvgSize);
        return () => window.removeEventListener("resize", updateSvgSize);
    }, []);

    return (
        <svg
            ref={svgRef}
            fill="none"
            {...svgProps}
            className={cn(
                "w-full h-full absolute z-10 max-w-[768px] max-h-[535px] md:max-w-[1440px] md:max-h-[810px]"
            )}
        >
            {props.interestPoint.map(({ cx, cy, title, type }, index) => {
                // Convertendo valores percentuais para numéricos
                const numericCx = typeof cx === "string" && cx.includes("%")
                    ? (parseFloat(cx) / 100) * 1440
                    : Number(cx);

                const numericCy = typeof cy === "string" && cy.includes("%")
                    ? (parseFloat(cy) / 100) * 810
                    : Number(cy);

                // Ajustando coordenadas com base no tamanho renderizado
                const scaledCx = (numericCx / 1440) * svgSize.width;
                const scaledCy = (numericCy / 810) * svgSize.height;

                return (
                    <g
                        key={index}
                        clipPath={`url(#${index})`}
                        className={cn("cursor-pointer")}
                        onClick={() => onClick(index)}
                    >
                        <circle
                            cx={scaledCx}
                            cy={scaledCy}
                            r={type === "point" ? 10 : 15}
                            fill={
                                indexState === index
                                    ? config.theme.extend.colors.red
                                    : config.theme.extend.colors.white
                            }
                        />
                        {type === "point" && (
                            <CustomShape cx={scaledCx} cy={scaledCy} />
                        )}
                        {type === "douglass" && (
                            <DouglassShape
                                cx={scaledCx}
                                cy={scaledCy}
                                indexState={indexState}
                                index={index}
                            />
                        )}
                        {type === "union" && (
                            <UnionShape
                                cx={scaledCx}
                                cy={scaledCy}
                                indexState={indexState}
                                index={index}
                            />
                        )}
                        {type === "nevis" && (
                            <NevisShape
                                cx={scaledCx}
                                cy={scaledCy}
                                indexState={indexState}
                                index={index}
                            />
                        )}
                    </g>
                );
            })}
        </svg>
    );
};

export default DynamicPin;