import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navigator from './Navigator'
import Box from '@mui/material/Box';

export default function Layout({children, title}) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const drawerWidth = 256;

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    return (
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header onDrawerToggle={handleDrawerToggle} title={title} />
          <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
          {children}
          </Box>
          <Footer />
        </Box>
      </Box>


    )
}
