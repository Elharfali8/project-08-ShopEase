
  
export type LocalCartProduct = {
    id: string;
    img: string;
    desc: string;
    rate: string;
    price: number;
    oldPrice?: number;
    size?: string;
    promo?: number
    amount?: number; // Add this
    productId?: string;
    cartAmount?: number;
}