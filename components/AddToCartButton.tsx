import { SignedOut, SignInButton, useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { toast } from "sonner"
import { useAppDispatch } from "@/hooks";
import { addProductToCart } from "@/features/cart/cartSlice";



export const AddToCartButton = ({id, amount, size}: {id:string, amount:number, size: string}) => {
  const { user } = useUser();
  const dispatch = useAppDispatch()

  const handleClick = () => {
   dispatch(addProductToCart({id, amount, size}))
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
