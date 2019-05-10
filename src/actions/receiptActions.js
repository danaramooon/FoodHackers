import * as actionTypes from '../constants/actionTypes';
import * as receiptApi from '../api/receiptApi';

export const getReceipts = () => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_GET_RECEIPTS_STARTED
  })

  receiptApi
    .getReceipts()
    .then(
      response => {
        response
          .text()
          .then(
            value => {
              const receipts = JSON.parse(value);
              console.log("omgcsd csdlc skd clk slkdncnsdlcn");
              console.log(receipts[0]);
              dispatch({
                type: actionTypes.ACTION_GET_RECEIPTS_SUCCESS,
                receipts
              });
            }
          );
      }
    )

}

export const createReceipt = (data) => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_CREATE_RECEIPT_STARTED
  })

  receiptApi
    .createReceipt(data)
    .then(
      response => {
        response
          .text()
          .then(
            value => {
              const responseObject = JSON.parse(value);
              console.log(responseObject);
              dispatch({
                type: actionTypes.ACTION_CREATE_RECEIPT_SUCCESS,
                receipt: responseObject,
                receipts: getState().receipt.receipts
              });
            }
          );
      }
    )

}