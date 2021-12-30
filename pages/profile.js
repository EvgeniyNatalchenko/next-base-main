import React from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';
;
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, fetchUsers, updateUserName, updateUserData } from '../store/slice/userSlice';
import { setCurrentUser,exit } from '../store/slice/currentuserSlice';


export default function Profile() {

    const [FormName, setFormName] = React.useState('')
    const [FormUName, setFormUName] = React.useState('')
    const [FormEmail, setFormEmail] = React.useState('')
    const [FormPhome, setFormPhone] = React.useState('')
    const [FormWebsite, setFormWebsite] = React.useState('')
    const [FormCompanyname, setFormCompanyname] = React.useState('')

    const router = useRouter()
    const users = useSelector(selectUsers)
    const currentuser = useSelector(store => store.currentuser)
    const dispatch = useDispatch()
   const  uid = currentuser
  
    React.useEffect(() => {
        if (!users) dispatch(fetchUsers())
    }, [])
  
    if(!users) return null;
    if(!uid) return (<div>Нужна регистрация</div>);
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
                <TextField defaultValue={name} onChange={event => setFormName(event.target.value)} label="Name" variant="outlined" />
                <TextField defaultValue={username} onChange={event => setFormUName(event.target.value)} label="Nick name" variant="outlined"  />
                <TextField defaultValue={email} onChange={event => setFormEmail(event.target.value)} label="Email" variant="outlined"  />
            
            
                <TextField defaultValue={phone} onChange={event => setFormPhone(event.target.value)} label="Phone" variant="outlined"  />
                <TextField defaultValue={website} onChange={event => setFormWebsite(event.target.value)} label="Website" variant="outlined"  />
                <TextField defaultValue={company.name} onChange={event => setFormCompanyname(event.target.value)}   label="Company" variant="outlined"  />
            
                <Button onClick={() => dispatch(
                                       updateUserData({uid, name: FormName,
                                                       username: FormUName, email: FormEmail,
                                                       phone: FormPhome,  website: FormWebsite, companyname: FormCompanyname}))}>Submit</Button>
        </Box>
        </Paper>
)
}