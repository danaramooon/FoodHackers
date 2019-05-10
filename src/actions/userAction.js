import * as actionTypes from '../constants/actionTypes';
import * as userApi from '../api/userApi';

export const getUser = (url) => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_USER_STARTED
    })

    userApi
        .getUser(url)
        .then(
            response => {
                response
                    .text()
                    .then(
                        value => {
                            const user = JSON.parse(value);
                            dispatch({
                                type: actionTypes.ACTION_GET_USER_SUCCESS,
                                user,
                            });
                        }
                    );
            }
        )
}

export const userPostFetch = user => {
    return dispatch => {
        return userApi.register(user)
            .then(data => {
                if (data.message) {
                    console.log('reg error')
                } else {
                    localStorage.setItem("JWT", data.token)
                    dispatch(loginUser(data.user))
                }
            })
    }
}

export const userLoginFetch = user => {
    return dispatch => {
        return userApi.login(user)
            .then(data => {
                if (data.message) {
                    console.log(data.message)
                } else {
                    localStorage.setItem("JWT", data.token)
                    dispatch(loginUser(data.user))
                }
            })
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})