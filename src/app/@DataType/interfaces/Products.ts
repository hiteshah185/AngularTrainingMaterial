export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: Date;
    price: number;
    description: string;
    starRating?: Rating;
    imageUrl: string;
}
export type Rating = 1 | 2 | 3 | 4 | 5;

export interface DoTiming {
    count: number;
    start(index: number): void;
    stop(): void;
}

export interface TeraMallProduct {
    id: number;
    productName: string;
    productCode?: string;
    description?: string;
    price?: number;
    categoryId?: number;
    category?: string;
    quantityInStock?: number;
    searchKey?: string[];
    supplierIds?: number[];
}

export class TProductClass {
    id: number = 0;
    productName: string = '';
    productCode?: string;
    description?: string;
    price?: number;
    category?: string;
    quantityInStock?: number;
    searchKey?: string[];
    inventoryValuation?: number;
    supplierIds?: number[];
    suppliers?: SupplierClass[];

    calculateValuation(): number {
        const price = this.price ? this.price : 0;
        const quantity = this.quantityInStock ? this.quantityInStock : 0;
        return price * quantity;
    }
}

export interface ProductCategory {
    id: number;
    name: string;
    description?: string;
  }  

export interface ProductWithSupplier {
    id: number;
    productName: string;
    productCode?: string;
    description?: string;
    categoryId?: number;
    category?: string;
    supplier?: string;
}

export interface Supplier {
    id: number;
    name: string;
    cost: number;
    minQuantity: number;
}

export class SupplierClass {
    id: number = 0;
    name: string = '';
    cost?: number;
    minQuantity?: number;

    upliftCost(): void {
        this.cost = this.cost ? this.cost * 1.1 : 0;
    }
}

type ActionType = 'add' | 'update' | 'delete' | 'none';

export interface Action<T> {
    item: T;
    action: ActionType;
}
