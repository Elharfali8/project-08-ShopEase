import { frame33, frame34, frame38, image10, image7, image8, image9, tShirt } from "@/assets/images";
import { StaticImageData } from "next/image";

type Props = {
    id: number;
    img: StaticImageData;
    desc: string;
    rate: string;
    price: number;
    oldPrice?: number;
    promo?: number
}


export const newArrivals: Props[] = [
    {
        id: 1,
        img: tShirt,
        desc: 'T-SHIRT WITH TAPE DETAILS',
        rate: '4.5/5',
        price: 120
    },
    {
        id: 2,
        img: frame33,
        desc: 'SKINNY FIT JEANS',
        rate: '3.5/5',
        price: 240,
        oldPrice: 260,
        promo: 20
    },
    {
        id: 3,
        img: frame34,
        desc: 'CHECKERED SHIRT',
        rate: '4.5/5',
        price: 180,

    },
    {
        id: 4,
        img: frame38,
        desc: 'SLEEVE STRIPED T-SHIRT',
        rate: '4.5/5',
        price: 130,
        oldPrice: 160,
        promo: 20
    },
]

export const topSelling: Props[] = [
    {
        id: 1,
        img: image7,
        desc: 'VERTICAL STRIPED SHIRT',
        rate: '5.0/5',
        price: 212,
        oldPrice: 232,
        promo: 20
    },
    {
        id: 2,
        img: image8,
        desc: 'COURAGE GRAPHIC T-SHIRT',
        rate: '4.0/5',
        price: 124,
    },
    {
        id: 3,
        img: image9,
        desc: 'LOOSE FIT BERMUDA SHORTS',
        rate: '3.0/5',
        price: 80,
    },
    {
        id: 4,
        img: image10,
        desc: 'FADED SKINNY JEANS',
        rate: '4.5/5',
        price: 210,
    },
]