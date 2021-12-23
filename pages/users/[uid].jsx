import axios from 'axios'
import React from 'react'
import Layout from '../../components/layout'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';

export const getServerSideProps = async (context) => {
    const uid = context.params.uid
    const req = await axios.get(`http://localhost:3000/api/user?uid=${uid}`)

    // Проверяем статус ответа от сервера
    if (req.status >= 400) {
        return { notFound: true }
    }
    // Фильтрация данных (при необходимости)
    const newUserData = { ...req.data, password: "" }
    return {
        props: {
            user: newUserData
        }
    }
}

export default function User(props) {
    const { name, username, email, phone, website, company } = props.user

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
                
                    <TextField defaultValue={name} label="Name" variant="outlined" disabled />
                    <TextField defaultValue={username} label="Nick name" variant="outlined" disabled />
                    <TextField defaultValue={email} label="Email" variant="outlined" disabled />
                
                
                    <TextField defaultValue={phone} label="Phone" variant="outlined" disabled />
                    <TextField defaultValue={website} label="Website" variant="outlined" disabled />
                    <TextField defaultValue={company.name} label="Company" variant="outlined" disabled />
                

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
