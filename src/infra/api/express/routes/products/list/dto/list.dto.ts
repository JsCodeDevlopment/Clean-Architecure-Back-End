export type ListProductResponseDto = {
  products: {
    id: string;
    name: string;
    price: number;
  }[];
};
