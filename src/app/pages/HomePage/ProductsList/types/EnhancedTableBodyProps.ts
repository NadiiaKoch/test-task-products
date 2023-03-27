import { ProductData } from 'types/ProductData';

export interface EnhancedTableBodyProps {
  rows: ProductData[];
  emptyRows: number;
  isSelected: (name: string) => boolean;
  handleClick: (event: React.MouseEvent<unknown>, name: string) => void;
}
