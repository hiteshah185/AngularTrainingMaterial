export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: Date;
    price: number;
    description: string;
    starRating: Rating;
    imageUrl: string;
}
export type Rating = 1 | 2 | 3 | 4 | 5;

export interface DoTiming {
    count: number;
    start(index: number): void;
    stop(): void;
}