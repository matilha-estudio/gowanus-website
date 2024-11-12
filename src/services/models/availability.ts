export type PropertiesResponse = {
    apartment_type: "1-BEDROOM" | "2-BEDROOM" | "STUDIO" | "PENTHOUSE" | "3-BEDROOM";
    residence_group: string;
    rent: number;
    availability: "Available Now" | "Unavailable" | "Coming Soon";
    floor_plan: string;
    image: string;
    promo?: string;
    images_carousel: ImagesCarousel[]
    description: string
    details: Details[]
    amenities: Amenities[]
};

type ImagesCarousel = {
    image: string;
    label: string;
}

type Details = {
    detail: string;
}

type Amenities = {
    amenity: string;
}
