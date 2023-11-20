export interface StateSearch {
  search: string;
  filteredProducts: Product[]; // Replace any with the actual type of the products
}

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string;
}

export interface initialState {
  product: Product;
}
