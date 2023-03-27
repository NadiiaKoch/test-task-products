import React from 'react';
import { IconButton, Toolbar, Tooltip } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { EnhancedTableToolbarProps } from '../types/EnhancedTableToolbarProps';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { useProductsSlice } from '../../slice';

export function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const dispatch = useDispatch();

  const { actions } = useProductsSlice();

  const { numSelected, selected } = props;

  const handleRemove = () => {
    dispatch(actions.removeProduct({ ids: selected }));
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: theme =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }),
      }}
    >
      <Tooltip title="Delete">
        <IconButton onClick={handleRemove}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}
