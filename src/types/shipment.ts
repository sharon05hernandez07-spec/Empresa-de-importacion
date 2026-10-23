export type ShipmentStatus =
  | 'ordered'
  | 'in_transit'
  | 'in_customs'
  | 'cleared'
  | 'delivered';

export interface Shipment {
  id: string;
  reference: string;
  supplier: string;
  product: string;
  quantity: number;
  originCountry: string;
  originFlagUrl: string;
  destinationPort: string;
  status: ShipmentStatus;
  eta: string;
}