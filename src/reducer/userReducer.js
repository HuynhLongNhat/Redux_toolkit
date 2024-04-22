import {
    FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR
    , CREATE_NEW_USER_REQUEST, CREATE_NEW_USER_SUCCESS, CREATE_NEW_USER_ERROR

} from '../action/types';


const INITIAL_STATE = {
    listUser: [],
    isLoading: false,
    isError: false,
    isCreating: false
};

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case FETCH_USER_REQUEST:
            console.log("FETCH_USER_REQUEST", action)
            return {

                ...state,
                isLoading: true,
                isError: false,

            };
        case FETCH_USER_SUCCESS:
            console.log("FETCH_USER_SUCCESS", action)
            return {
                ...state,
                listUser: action.dataUsers,
                isLoading: false,
                isError: false

            };
        case FETCH_USER_ERROR:

            return {
                ...state,
                isLoading: false,
                isError: true

            };
        case CREATE_NEW_USER_REQUEST:

            return {

                ...state,
                isCreating: true,
                isLoading: true
            };

        case CREATE_NEW_USER_SUCCESS:

            return {
                ...state,
                isCreating: false,
                isLoading: false
            };
        case CREATE_NEW_USER_ERROR:

            return {
                ...state,
                isCreating: false,
                isLoading: false

            };

        default: return state;

    }

};

export default userReducer;