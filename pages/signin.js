import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '../components/layout/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useRouter} from 'next/router';

///export const UserContext = createContext();

//import userSlice from '../store/slice/userSlice'
//import currentuserSlice from '../store/slice/currentuserSlice'

import { useSelector, useDispatch } from 'react-redux';
import { addUser, updateUserName } from '../store/slice/userSlice';
import { setCurrentUser,exit } from '../store/slice/currentuserSlice';
import { selectUsers, fetchUsers } from '../store/slice/userSlice';


export default function SignIn() {

  const users = useSelector(selectUsers)
  const dispatch = useDispatch();

  const router = useRouter()
  
  React.useEffect(() => {
    if (!users) dispatch(fetchUsers())
}, [])

const [email, setemail] = useState(null);
const [password, setpassword] = useState(null);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const password = data.get('password')
    if (email === password)
    {
      setemail(email);
      setpassword(password);
      const user = users.find(user => user.email === email)
      if(user) dispatch(setCurrentUser(user.id))
      else     dispatch(exit)
      router.push('/')
    }
    else
    {
      dispatch(exit)
    }
  };

  function registerClick() {
    const user = users.find(user => user.email === email)
    console.log("==ee=" +email)
    if(user) return dispatch(setCurrentUser(user.id))
    else     return dispatch(exit)
  }

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item >
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}