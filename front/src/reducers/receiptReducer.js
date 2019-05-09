import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const receipts = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_RECEIPTS_SUCCESS:
      return action.receipts;
    case actionTypes.ACTION_CREATE_RECEIPT_SUCCESS:
      return [...action.receipts, action.receipt];
    case actionTypes.ACTION_GET_RECEIPTS_STARTED:
    case actionTypes.ACTION_GET_RECEIPTS_FAILED:
      return [];
    default:
      return state;
  }
};

const firstReceipt = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_RECEIPTS_SUCCESS:
      return action.receipts[0];
    default:
      return state;
  }
}


const receipt = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ACTION_CREATE_RECEIPT_SUCCESS:
      return action.receipt;
    case actionTypes.ACTION_CREATE_RECEIPT_STARTED:
      return {};
    default:
      return state;
  }
};





const receiptReducer = combineReducers({
  receipts,
  firstReceipt,
  receipt
});

export default receiptReducer;