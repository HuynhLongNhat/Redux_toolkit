import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from '../action/types';


const INITIAL_STATE = {
    listUser: []
};

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case FETCH_USER_REQUEST:
            // console.log("FETCH_USER_REQUEST", action)
            return {

                ...state, listUser: action.payload
            };

        case FETCH_USER_SUCCESS:
            // console.log("FETCH_USER_SUCCESS", action)
            return {
                ...state,

            };
        case FETCH_USER_ERROR:

            return {
                ...state,

            };

        default: return state;

    }

};

export default userReducer;