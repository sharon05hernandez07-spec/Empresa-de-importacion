export type ProductCategory = 'electronics' | 'apparel' | 'appliances' | 'tools';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  supplierId: string;
  hsCode: string;
  tariffPercent: number;
  unitPriceUsd: number;
  stock: number;
}