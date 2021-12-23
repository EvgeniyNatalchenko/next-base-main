import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '../components/layout/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';


function HomePage() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Next base
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/signin"
              sx={{ my: 1, mx: 1.5 }}
            >
              Sign In
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/signup"
              sx={{ my: 1, mx: 1.5 }}
            >
              Registration
            </Link>


            <Link
              variant="button"
              color="text.primary"
              href="/profile"
              sx={{ my: 1, mx: 1.5 }}
            >
              Profile
            </Link>

          </nav>
        </Toolbar>
      </AppBar>

      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
         Main home page
        </Typography>
      </Container>
     
    </React.Fragment>
  );
}

export default function rootPage() {
  return <HomePage />;
}