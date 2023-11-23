export interface ProductModelServer {
    id: number;
    supplier:string;
    name: string;
    category: string;
    vendor: string,
    hasVendor: boolean;
    image: string;
    hasImage: boolean;
    amount: number,
    price: number
  }
  export interface serverResponse  {
    products: ProductModelServer[]
  };
  