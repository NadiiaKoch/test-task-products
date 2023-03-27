import { ProductData } from 'types/ProductData';
import { Order } from '../utils/helpers';

export interface EnhancedTableProps {
  numSelected: number;
  selected: string[];
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof ProductData,
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
