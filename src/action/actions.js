import {
    INCREMENT, DECREMENT, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR,
    CREATE_NEW_USER_REQUEST, CREATE_NEW_USER_SUCCESS, CREATE_NEW_USER_ERROR
} from './types';
import axios from 'axios';

export const increaseCounter = () => {

    return {

        type: INCREMENT,

    };

};

export const decreaseCounter = () => {

    return {

        type: DECREMENT,

    };

};
export const fetchAllUser = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUserRequest())
        try {
            const res = await axios.get("http://localhost:8080/users/all");
            const data = res && res.data ? res.data : [];
            dispatch(fetchUserSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchUserError())
        }
    }
}

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        dataUsers: data
    }
}
const fetchUserError = () => {
    return {
        type: FETCH_USER_ERROR
    }
}


export const createNewUser = (email, password, username) => {
    return async (dispatch, getState) => {
        dispatch(createNewUserRequest())
        try {
            let res = await axios.post("http://localhost:8080/users/create", { email, password, username });
            if (res && res.data.errCode === 0) {
                dispatch(createNewUserSuccess())
                dispatch(fetchAllUser())
            }
        } catch (error) {
            console.log(error)
            dispatch(createNewUserError())
        }
    }
}


const createNewUserRequest = () => {
    return {
        type: CREATE_NEW_USER_REQUEST
    }
}

const createNewUserSuccess = () => {
    return {
        type: CREATE_NEW_USER_SUCCESS,

    }
}
const createNewUserError = () => {
    return {
        type: CREATE_NEW_USER_ERROR
    }
}