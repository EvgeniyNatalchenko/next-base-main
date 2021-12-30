import { userTypes as types } from "../types"
import axios from "axios"


export function fetchUsers(){
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3000/api/users')
        dispatch({type: types.FETCH_USERS, payload: response.data})
    }
}