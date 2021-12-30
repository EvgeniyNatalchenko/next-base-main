import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import {set} from 'lodash'

const initialState = {
    list: null,
    isLoading: false,
    hasError: null
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await axios.get('http://localhost:3000/api/users');
      return response.data
    },
  )

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, {payload}) => {
            return [...state, payload]
        },
        updateUserName: (state, {payload}) => {
          const {name, uid} = payload;
          const updatedUsers = state.list.map(user => {
            if (+user.id === +uid) {
              user.name = name
            }
            return user
          })
        },
        updateUserData: (state, {payload}) => {
          const {uid, name, username, email, phone, website, companyname} = payload;
          const updatedUsers = state.list.map(user => {
            if (+user.id === +uid) {
              user.name = name
              user.username = username
              user.email = email
              user.phone = phone
              user.website = website
              user.company.name = companyname
            }
            return user
          })
        }


      },
    extraReducers: (builder) => {
        builder
          .addCase(fetchUsers.pending, (state) => {
            state.isLoading = true
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.list = [...action.payload]
          })
      },
    }
)

export const { addUser, updateUserName, updateUserData } = userSlice.actions
export const selectUsers = (state) => state.users.list
export default userSlice.reducer


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