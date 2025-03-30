import { frame33, frame34, frame38, image10, image7, image8, image9, tShirt } from "@/assets/images";
import { StaticImageData } from "next/image";
import { v4 as uuidv4 } from 'uuid';

export type Testimonial = {
  id: string;
  name: string;
  title: string;
  description: string;
  rate: string;
};

type Props = {
    id: number;
    img: StaticImageData;
    desc: string;
    rate: string;
    price: number;
    oldPrice?: number;
    promo?: number
}


// https://ibb.co/Zzf0N4F9
// https://ibb.co/qvY4ZyR
// https://ibb.co/gb4wfmbK
// https://ibb.co/FkXVPGCL
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

// https://ibb.co/TqHD1cxx
// https://ibb.co/FqqNYdQH
// https://ibb.co/Z119wDgQ
// https://ibb.co/RGXRJwwx
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



export const testimonials: Testimonial[] = [
  {
    id: uuidv4(),
    name: "Sarah",
    title: "Web Developer",
    description: "Sarah is an experienced web developer specializing in React and Next.js.",
    rate: '4.8',
  },
  {
    id: uuidv4(),
    name: "Michael",
    title: "UI/UX Designer",
    description: "Michael has a strong background in creating intuitive and user-friendly designs.",
    rate: '4.7',
  },
  {
    id: uuidv4(),
    name: "Emily",
    title: "Full-Stack Engineer",
    description: "Emily is a full-stack engineer with expertise in Node.js, Express, and MongoDB.",
    rate: '4.9',
  },
  {
    id: uuidv4(),
    name: "David",
    title: "Software Engineer",
    description: "David has a passion for writing clean and efficient code in TypeScript.",
    rate: '4.6',
  },
  {
    id: uuidv4(),
    name: "Sophia",
    title: "Project Manager",
    description: "Sophia ensures projects are completed on time with effective team collaboration.",
    rate: '4.9',
  },
  {
    id: uuidv4(),
    name: "James",
    title: "Cybersecurity Expert",
    description: "James specializes in securing applications and networks against cyber threats.",
    rate: '4.8',
  },
];
