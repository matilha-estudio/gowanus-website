"use client"
import "@/app/globals.css";
import NavBar from "@/components/navbar";
import { useScrollByVh } from "@/hooks/useScrollByVh";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { cn } from "../lib/utils";
import InquireComponent from "@/components/sections/inquire";
import Footer from "@/components/sections/footer";
import Grid from '../../../public/icons/Grid.svg'
import List from '../../../public/icons/List.svg'
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { DataTable } from "@/components/availabilityTable/dataTable";
import { AvailabilityColumns } from "@/components/availabilityTable/column";
import { Slider } from "@/components/ui/slider";
import { getAvailabilityPage } from "@/services/availability";
import { PropertiesResponse } from "@/services/models/availability";
import Reveal from "@/components/animations/reveal";
import { debounce } from 'lodash';
import { useRouter } from "next/navigation";
import { HubspotProvider } from 'next-hubspot';

type FilterOption = 'ALL' | 'studio' | '1-BR' | '2-BR' | '3-BR' | 'PENTHOUSE';

type ViewOption = 'grid' | 'list' | 'render';

interface ProductCardProps {
    imageUrl: string;
    promotionText?: string;
    unitName: string;
    unitType: string;
    price: string;
    availability: string;
}

type PriceRangeSliderProps = {
    defaultRange?: [number, number];
    maxValue?: number;
    minValue?: number;
};

export default function Availability() {
    const scrollByVh = useScrollByVh();
    const windowWidth = useWindowWidth()
    const SCREEN_WIDTH = windowWidth
    const MOBILE_BREAKPOINT = 768

    const options = ['ALL', 'studio', '1-BR', '2-BR', '3-BR', 'PENTHOUSE'] as const;
    type OptionType = typeof options[number];

    const viewOptions = ['grid', 'list', 'render'] as const;

    const [availableOptions, setAvailableOptions] = useState<Set<OptionType>>(new Set());

    const [selected, setSelected] = useState<FilterOption>('ALL');
    const [selectedView, setSelectedView] = useState<ViewOption>('render');
    const [selectedAvailableNow, setSelectedAvailableNow] = useState<boolean>(false);

    const [data, setData] = useState<PropertiesResponse[] | null>(null)

    const [range, setRange] = useState<[number, number]>([0, 0]);
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(100);
    const rangeRef = useRef<[number, number]>([0, 0]);

    const route = useRouter()

    useEffect(() => {
        if (!data) return
        // Obtém os valores mínimo e máximo de `rent` em `data`
        const rents = data.map(item => item.rent);
        const minRent = Math.min(...rents);
        const maxRent = Math.max(...rents);

        setMinValue(minRent);
        setMaxValue(maxRent);
        setRange([minRent, maxRent]); // Define o range inicial
    }, [data]);

    const debouncedRangeChange = useRef(
        debounce((newRange: [number, number]) => {
            setRange(newRange);  // Set the state here
        }, 300)
    ).current;

    const handleRangeChange = (newRange: [number, number]) => {
        setRange(newRange); // Atualiza o estado do range
        debouncedRangeChange(newRange); // Chama o debounce para limitar a frequência de atualização
        // onRangeChange(newRange); // Caso queira propagar para outro componente
    };

    const handleSliderChange = (newRange: [number, number]) => {
        handleRangeChange(newRange);
    };

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const filteredData = useMemo(() => {
        if (!data) return null;
        const mappedType = selected !== 'ALL' ? mapSelectedToApartmentType(selected) : null;

        return data.filter((property) => {
            const matchesType = mappedType ? property.apartment_type === mappedType : true;
            const matchesRange = property.rent >= range[0] && property.rent <= range[1];
            const matchesAvailability = selectedAvailableNow ? property.availability === 'Available Now' : true;
            return matchesType && matchesRange && matchesAvailability;
        });
    }, [selected, data, range, selectedAvailableNow]);

    function mapSelectedToApartmentType(option: FilterOption): PropertiesResponse["apartment_type"] | null {
        switch (option) {
            case "studio":
                return "STUDIO";
            case "1-BR":
                return "1-BEDROOM";
            case "2-BR":
                return "2-BEDROOM";
            case "3-BR":
                return "3-BEDROOM";
            case "PENTHOUSE":
                return "PENTHOUSE";
            default:
                return null;
        }
    }

    useEffect(() => {
        if (data) {
            // Extraindo os tipos de apartamento únicos da resposta da API
            const typesFromApi = new Set<OptionType>(
                data && data.map((property) => {
                    switch (property.apartment_type) {
                        case "1-BEDROOM":
                            return "1-BR";
                        case "2-BEDROOM":
                            return "2-BR";
                        case "3-BEDROOM":
                            return "3-BR";
                        case "STUDIO":
                            return "studio";
                        case "PENTHOUSE":
                            return "PENTHOUSE";
                        default:
                            return "ALL";
                    }
                })
            );

            setAvailableOptions(typesFromApi);
        }
    }, [data]);

    async function handleData() {
        try {
            const response = await getAvailabilityPage()
            setData(response)
        } catch (err) {
            setError('Failed to fetch data')
        } finally {
            setLoading(false)
        }
    }

    const applyFilter = (filter: string, value: any) => {
        const iframe = document.querySelector('iframe');
        iframe?.contentWindow?.postMessage({
            event: 'apply_filter',
            metadata: { filter, value }
        }, '*');
    };

    // Listener para resetar filtros
    const resetFilter = (filter: string) => {
        const iframe = document.querySelector('iframe');
        iframe?.contentWindow?.postMessage({
            event: 'reset_filters',
            metadata: { filter }
        }, '*');
    };

    const resetAllFilters = () => {
        const iframe = document.querySelector('iframe');
        iframe?.contentWindow?.postMessage({
            event: 'reset_filters'
        }, '*');
    };

    useEffect(() => {
        let bedroom: number[] | string[] = ['all'];

        switch (selected) {
            case 'studio': bedroom = [0]; break;
            case '1-BR': bedroom = [1]; break;
            case '2-BR': bedroom = [2]; break;
            case '3-BR': bedroom = [3]; break;
            case 'ALL': bedroom = ['all']; break;
        }

        applyFilter('bedroom', bedroom);
    }, [selected]);

    useEffect(() => {
        applyFilter('price', [`min-${range[0]}`, `max-${range[1]}`]);
    }, [range]);

    useEffect(() => {
        applyFilter('status', [selectedAvailableNow ? 'available' : '']);
    }, [selectedAvailableNow]);

    useEffect(() => {
        handleData()
    }, [])

    if (loading) return (
        <div className='w-screen h-screen bg-navy' />
    )
    if (error) return <p>{error}</p>

    function FilterButton() {
        return (
            <div className="flex items-center justify-center gap-4 flex-wrap">
                {options.map((option) => (
                    <div
                        key={option}
                        onClick={() => {
                            if (!availableOptions.has(option) && option !== 'ALL') return
                            setSelected(option)
                        }}
                        className={`p-2 md:px-4 md:py-[10.5px] flex items-center justify-center cursor-pointer border transition-colors 
                            ${selected === option
                                ? 'bg-marigold border-marigold'
                                : 'bg-white text-navy border-navy hover:bg-marigold hover:border-marigold'
                            } 
                            ${!availableOptions.has(option) && option !== 'ALL' ? 'cursor-not-allowed bg-sand border-sand hover:bg-sand hover:border-sand' : ''}`}
                    >
                        <span className="accent4">{option}</span>
                    </div>
                ))}
            </div>
        );
    }

    const renderIcon = (option: ViewOption) => {
        switch (option) {
            case 'grid':
                return <Grid />;
            case 'list':
                return <List />;
            case 'render':
                return <List />;
            default:
                return null;
        }
    };

    const ProductCard: React.FC<ProductCardProps> = ({
        imageUrl,
        promotionText,
        unitName,
        unitType,
        price,
        availability,
    }) => {

        return (
            <div
                className="flex flex-col relative group px-4 pt-4 pb-8 bg-white max-w-[395px] h-full w-full gap-8 cursor-pointer"
                onClick={() => route.push(`availability/${unitName}`)}
            >
                <div className="relative flex flex-col items-center h-full max-h-[331px] overflow-hidden">
                    <div className="absolute w-full h-full z-10 group-hover:bg-marigold/70 transition-colors" />

                    {promotionText && (
                        <div className="absolute top-2 w-[95%] self-center flex justify-center z-20 leading-none bg-navy">
                            <div className="w-[95%] h-full bg-marigold text-navy flex justify-center text-center px-4 py-2">
                                <span className="subheader4">{promotionText}</span>
                            </div>
                        </div>
                    )}

                    <Image
                        src={imageUrl}
                        alt=""
                        width={363}
                        height={331}
                        className="w-full h-full min-h-[331px] object-cover"
                    />
                </div>

                <div className="relative flex flex-col gap-4 leading-none">
                    <div className="flex flex-col gap-4">
                        <span className="subheader5-bold text-canalRoyale leading-none">{unitName}</span>
                        <span className="subheader1 text-navy">{unitType}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="body2 text-navy">From ${price}+/month</span>
                        <span className="body2 text-navy">{availability}</span>
                    </div>
                </div>
            </div>
        );
    };

    const PriceRangeSlider = ({
        maxValue = 100,
        minValue = 1
    }: PriceRangeSliderProps) => {

        return (
            <div className="relative max-w-[260px] w-full flex items-center justify-center">
                <span className="accent4 text-navy">
                    Price Range:
                </span>

                <div className="w-full">
                    <Slider
                        value={range}
                        max={maxValue}
                        min={minValue}
                        step={100}
                        minStepsBetweenThumbs={1}
                        className="w-full text-navy max-w-[192px] h-4"
                        onValueChange={handleSliderChange}
                    />
                    <div className="flex w-full justify-between mt-2">
                        <span className="accent4 text-navy">
                            ${range[0]}/m
                        </span>
                        <span className="accent4 text-navy">
                            ${range[1]}/m
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <HubspotProvider>
            <main className="flex min-h-screen flex-col items-center justify-between bg-white">
                <NavBar variant="white" hasBackground={false} hasHomeButton={false} position="absolute" pageName="availability" pagePath="/availability" />

                <section className="flex relative text-white justify-center w-full min-h-96 md:h-1/2 bg-canalRoyale">
                    <h1 className={cn(SCREEN_WIDTH < MOBILE_BREAKPOINT ? "header2MD" : "header2XXL", " text-white z-10 absolute left-1/2 transform -translate-x-1/2 self-center text-center")}>
                        availability
                    </h1>
                </section>

                <Reveal>
                    <section id="availability-section" className="relative w-full bg-white z-10">
                        {/* <div className="bg-white py-[144px] px-[32px] md:px-[94px] flex items-center justify-center gap-20 flex-wrap">

                            <FilterButton />

                            <PriceRangeSlider defaultRange={range} minValue={minValue} maxValue={maxValue} />

                            <div
                                onClick={() => setSelectedAvailableNow(!selectedAvailableNow)}
                                className={`p-2 md:px-4 md:py-[10.5px] flex items-center text-center justify-center cursor-pointer border transition-colors ${selectedAvailableNow
                                    ? 'bg-marigold border-marigold'
                                    : 'bg-white text-navy border-navy hover:bg-marigold hover:border-marigold'
                                    }`}
                            >
                                <span className="accent4">
                                    AVAILABLE NOW
                                </span>
                            </div>

                            <div className="flex gap-4 flex-wrap">
                                {viewOptions.map((option) => (
                                    <div
                                        key={option}
                                        onClick={() => setSelectedView(option)}
                                        className={`flex items-center justify-center cursor-pointer transition-colors ${selectedView === option
                                            ? 'bg-marigold text-white'
                                            : 'bg-white text-navy hover:bg-marigold'
                                            }`}
                                    >
                                        {renderIcon(option)}
                                    </div>
                                ))}
                            </div>

                        </div> */}

                        <Reveal>
                            <div className="p-8 bg-white">

                                {
                                    selectedView === 'grid' && (
                                        <div className="w-full flex gap-8 gap-y-24 flex-wrap justify-center">
                                            {
                                                filteredData && filteredData.map((item, index) => (
                                                    <ProductCard
                                                        key={index}
                                                        imageUrl={item.image}
                                                        promotionText={item?.promo}
                                                        unitName={item.residence_group}
                                                        unitType={item.apartment_type}
                                                        price={String(item.rent)}
                                                        availability={item.availability}
                                                    />
                                                ))
                                            }
                                        </div>
                                    )
                                }
                                {
                                    selectedView === 'list' && (
                                        <div className="">
                                            <DataTable
                                                columns={AvailabilityColumns}
                                                data={filteredData ?? []}
                                            />
                                        </div>
                                    )
                                }
                                {
                                    selectedView === 'render' && (
                                        <iframe
                                            id="availability-iframe"
                                            src="https://d285m6toqyb25u.cloudfront.net/iframe"
                                            title="availability"
                                            className="h-full w-full aspect-video"
                                        />
                                    )
                                }
                            </div>
                        </Reveal>
                    </section>
                </Reveal>

                <InquireComponent />

                <Footer />
            </main>
        </HubspotProvider>
    )
}