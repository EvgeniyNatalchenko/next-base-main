import axios from 'axios'
import React from 'react'
import Layout from '../../components/layout'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';
;
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, fetchUsers, updateUserName } from '../../store/slice/userSlice';
import { NearMe } from '@mui/icons-material';

export default function User() {
 
  const [userName, setUserName] = React.useState('')
  const router = useRouter()
  const users = useSelector(selectUsers)
  const dispatch = useDispatch()
  const { uid } = router.query

  React.useEffect(() => {
      if (!users) dispatch(fetchUsers())
  }, [])

  if(!users) return null;
  const user = users.find(user => parseInt(user.id) === parseInt(uid))
  const { name, username, email, phone, website, company } = user

  
    return (
            <Paper>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 3, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                    <TextField defaultValue={name} onChange={event => setUserName(event.target.value)} label="Name" variant="outlined" />
                    <TextField defaultValue={username} label="Nick name" variant="outlined" disabled />
                    <TextField defaultValue={email} label="Email" variant="outlined" disabled />
                
                
                    <TextField defaultValue={phone} label="Phone" variant="outlined" disabled />
                    <TextField defaultValue={website} label="Website" variant="outlined" disabled />
                    <TextField defaultValue={company.name} label="Company" variant="outlined" disabled />
                
                    <Button onClick={() => dispatch(updateUserName({uid, name: userName}))}>Submit</Button>
            </Box>
            </Paper>
    )
}

// id: 1,
// name: 'Leanne Graham',
// username: 'Bret',
// email: 'Sincere@april.biz',
// password: '',
// address: {
//   street: 'Kulas Light',
//   suite: 'Apt. 556',
//   city: 'Gwenborough',
//   zipcode: '92998-3874',
//   geo: [Object]
// },
// phone: '1-770-736-8031 x56442',
// website: 'hildegard.org',
// company: {
//   name: 'Romaguera-Crona',
//   catchPhrase: 'Multi-layered client-server neural-net',
//   bs: 'harness real-time e-markets'
// }
// }
