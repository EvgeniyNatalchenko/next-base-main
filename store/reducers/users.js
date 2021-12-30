import { userTypes as types } from "../types"

const userReducer = (state = [], action) => {
    const {type, payload} = action
    switch (type) {
      case types.FETCH_USERS:
        return [...payload]
    
      default:
        state;
    }
    return state
  }

  export default userReducer