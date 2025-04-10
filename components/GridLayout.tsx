import { StaticImageData } from "next/image";
import ProductCard from "./ProductCard";

type ProductsProps = {
    id: string;
    img: string;  
    desc: string;
    rate: string;  
    price: number;
    oldPrice?: number;
    promo?: number;
};

const GridLayout = ({products}: {products: ProductsProps[]}) => {
  return (
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 my-6 lg:my-12">
          {products.map((product) => {
              return <ProductCard key={product.id} {...product} />
          })}
    </div>
  )
}

export default GridLayout