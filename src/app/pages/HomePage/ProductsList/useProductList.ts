import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductData } from 'types/ProductData';
import { useProductsSlice } from '../slice';
import { selectProducts } from '../slice/selectors';
import { getComparator, Order, stableSort } from './utils/helpers';

export const useProductList = () => {
  const { actions } = useProductsSlice();
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  const { loading, error, productListState } = products;

  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof ProductData>('category');
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(30);

  useEffect(() => {
    dispatch(actions.getProducts({}));
  }, []);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof ProductData,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map(n => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const rows = stableSort(
    productListState?.products || [],
    getComparator(order, orderBy),
  ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return {
    productTotal: productListState?.total || 0,
    loading,
    error,
    rows,
    order,
    orderBy,
    selected,
    page,
    rowsPerPage,
    emptyRows,
    isSelected,
    handleChangeRowsPerPage,
    handleClick,
    handleSelectAllClick,
    handleRequestSort,
  };
};
