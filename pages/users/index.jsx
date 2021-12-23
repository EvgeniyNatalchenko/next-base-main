import React, {useState} from 'react'
import { List, ListItem, Avatar, ListItemAvatar, ListItemText } from '@mui/material'
import axios from 'axios';
import {useRouter} from 'next/router'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';

export const getStaticProps = async () => {
    const req =  await axios.get('http://localhost:3000/api/users')
    
    if (req.status >= 400 || !req.data) {
        return {notFound: true}
    }

    return {
        props: {
            users: req.data
        }
    }
}

export default function (data) {
     const [users, setUsers] = useState(data.users)
     const router = useRouter()

    const handleClickUser = (uid) => {
        router.push(`http://localhost:3000/users/${uid}`)
    }

    return (
        
       // <Layout title="User list">
            <div>
            { !!users &&
                <List sx={{ width: '100%', maxWidth: '50%', bgcolor: 'background.paper' }}>
                    {users.map(user => (
                    <>
                    <ListItem
                        key={`user-${user.id}`}
                        secondaryAction={
                            <IconButton onClick={() => handleClickUser(user.id)}>
                             <ArrowForward />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                        <Avatar spacing={2}>
                            {`${user.name.split(' ')[0][0]}${user.name.split(' ')[1][0]}`}
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={user.name} secondary={user.email} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    </>
                    ))}

                </List>
            }
            </div>
      //  </Layout>

    )
}
