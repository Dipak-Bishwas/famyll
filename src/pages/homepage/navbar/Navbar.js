import React, { useState } from 'react';
import { Box, AppBar, Typography, Toolbar, IconButton, Drawer, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './navbarStyle.css'
import img from '../../../images/group.png';
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color="goldenrod" variant="h6" component="div" sx={{ flexGrow: 1, my:2 }}>>
      </Typography>
      <img src={img} alt="logo"></img>
      <Divider/>
      <ul className="mobile-navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">About Us</Link>
        </li>
        <li>
          <Link to="/about">Sevices</Link>
        </li>
        <li>
          <Link to="/contact">Contact US</Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "white" }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: "none" } }} onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography color="goldenrod" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={img} alt="logo"></img>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/about">Sevices</Link>
                </li>
                <li>
                  <Link to="/contact">Contact US</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: "block", sm: "none"},
          "& .MuiDrawer-paper": {
            boxSizing: "border",width: "200px"
          }
          }}>
            {drawer}
          </Drawer>
        </Box>
        <Box>

        <Toolbar/>
        </Box>
      </Box>
    </>
  );
};

export default Header;
