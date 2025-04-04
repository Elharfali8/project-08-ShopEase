import { SignedOut, SignInButton, useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { StaticImageData } from "next/image";
import { toast } from "sonner"


type Product = {
  id: string;
  img: StaticImageData;
  desc: string;
  rate: string;
  price: number;
  oldPrice?: number;
  promo?: number;
};

type Props = {
  product: Product;
  addToCart: (product: Product) => void;
};

export const AddToCartButton = ({ product, addToCart }: Props) => {
  const { user } = useUser();

  const handleClick = () => {
    addToCart(product);
    toast.success('Product added successfully')
  };

  return (
    <>
      {user ? (
        <Button
          onClick={handleClick}
          className="w-full text-lg lg:text-xl cursor-pointer"
          size="lg"
        >
          Add To Cart
        </Button>
      ) : (
        <SignedOut>
          <SignInButton mode="modal">
            <Button className="w-full text-lg lg:text-xl cursor-pointer" size="lg">
              Sign In to Add
            </Button>
          </SignInButton>
        </SignedOut>
      )}
    </>
  );
};
