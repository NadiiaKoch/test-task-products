import { ProductData } from 'types/ProductData';

export interface HeadCell {
  disablePadding: boolean;
  id: keyof ProductData;
  label: string;
  numeric?: boolean;
  disableSorting?: boolean;
}
