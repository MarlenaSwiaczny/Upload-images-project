import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PermMediaIcon from '@mui/icons-material/PermMedia';

const pages = ['Upload', 'Gallery', 'Login'];

import { Link } from 'react-router-dom';export default function AppNavBar() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (<>
   
    <AppBar position="fixed">
      <Toolbar>
      <Typography 
          color="white"
          component={Link}
          to="/"
          variant="h2"
          sx={{ flexGrow: 1, display: { xs: 'flex' }}}>
          <PermMediaIcon />
        </Typography>
        

       
        {isMobile ? (
             /* urządzenia mobilne*/
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                      component={Link}
                      to={`/${page.toLowerCase()}`} 
                      textAlign="right">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          /* większe ekrany */
          <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: "row", justifyContent: "flex-end"}}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
    </>
  );
}
