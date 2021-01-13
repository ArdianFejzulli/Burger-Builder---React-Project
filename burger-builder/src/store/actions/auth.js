import axios from 'axios';
import * as actionTypes from './actionTypes';

//sync
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

//sync
export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

//sync
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

//sync
export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

//Async
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
}

//Async
export const auth = (email, password, isSignup, ) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbUNvR3D-mRartA7QuIo-VVb44ekh2sXE';
        if(!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbUNvR3D-mRartA7QuIo-VVb44ekh2sXE';
        }
        
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            })
    }
}