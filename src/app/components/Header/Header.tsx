import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TypographyLink from '@mui/material/Link';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

interface HeaderProps {
  searchValue?: string;
  onChangeSearchValue: (value) => void;
}

export default function Header({
  searchValue,
  onChangeSearchValue,
}: HeaderProps) {
  const handleInputChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = e => {
    onChangeSearchValue(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box flexGrow={1}>
            <TypographyLink
              variant="h6"
              noWrap
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                textDecoration: 'none',
              }}
              component={Link}
              to={'/'}
              color="#fff"
              //
            >
              Products
            </TypographyLink>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to={'/add-product'}
          >
            Add product
          </Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleInputChange}
              value={searchValue}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
