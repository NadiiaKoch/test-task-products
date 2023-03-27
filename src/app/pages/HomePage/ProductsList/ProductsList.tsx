import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { EnhancedTableToolbar } from './EnhancedTableToolbar/EnhancedTableToolbar';
import { EnhancedTableHead } from './EnhancedTableHead/EnhancedTableHead';
import { useProductList } from './useProductList';
import Info from 'app/components/Info/Info';
import { EnhancedTableBody } from './EnhancedTableBody/EnhancedTableBody';

export default function ProductsList() {
  const {
    selected,
    rows,
    order,
    orderBy,
    emptyRows,
    isSelected,
    handleClick,
    handleSelectAllClick,
    handleRequestSort,
  } = useProductList();
  return (
    <Box sx={{ width: '100%' }}>
      {!rows.length ? (
        <Info />
      ) : (
        <Paper sx={{ width: '100%', mb: 2 }}>
          <EnhancedTableToolbar
            selected={selected}
            numSelected={selected.length}
          />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={'medium'}
            >
              <EnhancedTableHead
                selected={selected}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <EnhancedTableBody
                isSelected={isSelected}
                emptyRows={emptyRows}
                rows={rows}
                handleClick={handleClick}
              />
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Box>
  );
}
