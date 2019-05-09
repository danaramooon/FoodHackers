import { combineReducers } from 'redux';
import receiptReducer from './receiptReducer';

const rootReducer = combineReducers({
  receipt: receiptReducer
})

export default rootReducer;