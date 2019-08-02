import { IProduct } from "../Interfaces/IProduct";

export class ProdutoModel implements IProduct
{
    productId: Number;    
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;

    calculateDiscount(percent: number): number
    {
        return this.price - (this.price * percent / 100)
    }
    
}