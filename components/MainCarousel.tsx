

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image, { StaticImageData } from "next/image";
import StarRating from "./StarRating";
import Link from "next/link";


type Props = {
    id: string;
    img: StaticImageData;
    desc: string;
    rate: string;
    price: number;
  oldPrice?: number;
    promo?: number
}


export function MainCarousel(
    {data}: {data: Props[]}
) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-sm sm:max-w-[400px] md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px] "
    >
      <CarouselContent>
              {data.map((item) => {
                  const { id, desc, img, price, rate, oldPrice, promo } = item
                  return (
                    <Link key={id} href={`/products/${id}`}>
                      <CarouselItem  className="md:basis-1/3 lg:basis-1/4  grid place-items-center ">
                    <div>
                      <Card >
                        <CardContent>
                                      <Image
                                          src={img}
                              alt="desc"
                                      />
                          </CardContent>
                          <CardFooter className="grid">
                            <h3 className="font-bold mb-1">{desc}</h3>
                            <div className="flex items-center gap-2">
                              <StarRating rate={rate} />
                              <span className="text-yellow-500 font-bold">{rate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-lg lg:text-xl">${price}</p>
                              {oldPrice && <p className="font-bold text-lg lg:text-xl line-through text-muted-foreground">${oldPrice}</p>}
                              {promo && <span className="px-2 rounded text-red-500 border border-red-500">-{promo}%</span>}
                            </div>
                          </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                    </Link>
                  )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
