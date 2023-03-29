import { Checkbox, TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';
import { EnhancedTableBodyProps } from '../types/EnhancedTableBodyProps';

export function EnhancedTableBody({
  rows,
  emptyRows,
  isSelected,
  handleClick,
}: EnhancedTableBodyProps) {
  return (
    <TableBody>
      {rows.map((row, index) => {
        const isItemSelected = isSelected(row.id);
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
          <TableRow
            hover
            onClick={event => handleClick(event, row.id)}
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
              {row.id}
            </TableCell>
            <TableCell align="left">
              <img width="60px" src={row.thumbnail} alt={row.title} />
            </TableCell>
            <TableCell align="left">{row.title}</TableCell>
            <TableCell align="left">{row.description}</TableCell>
            <TableCell align="right">{row.price}</TableCell>
            <TableCell align="right">{row.rating}</TableCell>
            <TableCell align="right">{row.stock}</TableCell>
            <TableCell align="left">{row.category}</TableCell>
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
}
