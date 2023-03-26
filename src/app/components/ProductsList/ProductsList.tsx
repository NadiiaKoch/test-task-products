import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { EnhancedTableToolbar } from './EnhancedTableToolbar/EnhancedTableToolbar';
import { EnhancedTableHead } from './EnhancedTableHead/EnhancedTableHead';
import { ProductData } from 'types/ProductData';
import { useProductList } from './useProductList';

interface EnhancedTableBodyProps {
  rows: ProductData[];
  emptyRows: number;
  isSelected: (name: string) => boolean;
  handleClick: (event: React.MouseEvent<unknown>, name: string) => void;
}
const EnhancedTableBody = ({
  rows,
  emptyRows,
  isSelected,
  handleClick,
}: EnhancedTableBodyProps) => {
  return (
    <TableBody>
      {rows.map((row, index) => {
        const isItemSelected = isSelected(row.title);
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
          <TableRow
            hover
            onClick={event => handleClick(event, row.title)}
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={row.id}
            selected={isItemSelected}
            sx={{ cursor: 'pointer' }}
          >
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                checked={isItemSelected}
                inputProps={{
                  'aria-labelledby': labelId,
                }}
              />
            </TableCell>
            <TableCell component="th" id={labelId} scope="row" padding="none">
              <img width="60px" src={row.thumbnail} alt={row.title} />
            </TableCell>
            <TableCell align="right">{row.id}</TableCell>
            <TableCell align="right">{row.title}</TableCell>
            <TableCell align="right">{row.description}</TableCell>
            <TableCell align="right">{row.price}</TableCell>
            <TableCell align="right">{row.rating}</TableCell>
            <TableCell align="right">{row.stock}</TableCell>
            <TableCell align="right">{row.category}</TableCell>
          </TableRow>
        );
      })}
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: 53 * emptyRows,
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default function ProductsList() {
  const {
    selected,
    rows,
    order,
    orderBy,
    page,
    rowsPerPage,
    emptyRows,
    isSelected,
    handleChangePage,
    handleChangeRowsPerPage,
    handleClick,
    handleSelectAllClick,
    handleRequestSort,
  } = useProductList();
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <EnhancedTableHead
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
        <TablePagination
          rowsPerPageOptions={[25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
