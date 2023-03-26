import React, { useEffect, useState } from 'react';
import { ProductData } from 'types/ProductData';
import { getComparator, Order, stableSort } from './utils/helpers';

const rowsMock: ProductData[] = [
  {
    id: '1',
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: '549',
    rating: '4.69',
    stock: '94',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  },
  {
    id: '2',
    title: 'iPhone 10',
    description: 'An apple mobile which is nothing like apple',
    price: '549',
    rating: '4.69',
    stock: '94',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  },
];

export const useProductList = () => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof ProductData>('category');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const [rowData, setRowData] = useState<ProductData[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        setRowData(res.products);
      });
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
      const newSelected = rows.map(n => n.title);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

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

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const rows = stableSort(rowData, getComparator(order, orderBy)).slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return {
    rows,
    order,
    orderBy,
    selected,
    page,
    rowsPerPage,
    emptyRows,
    isSelected,
    handleChangeRowsPerPage,
    handleChangePage,
    handleClick,
    handleSelectAllClick,
    handleRequestSort,
  };
};
