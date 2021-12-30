// COUNTER REDUCER
import { counterTypes as types } from "../types"
const initState = 0

const counterReducer = (state = initState, action) => {
    const {type, payload} = action
    
    switch (type) {
      case types.INCREMENT:
        return state + 1
      case types.DECREMENT:
        return state - 1
      case types.RESET:
        return 0
      default:
        return state
    }
  }

  export default counterReducer