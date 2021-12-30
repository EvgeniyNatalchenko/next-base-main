import { combineReducers } from 'redux'
import userReducer from './users'
import counterReducer from './counter'


// COMBINED REDUCERS
const reducers = {
    users: userReducer,
    counter: counterReducer,
  }
  
export default combineReducers(reducers)