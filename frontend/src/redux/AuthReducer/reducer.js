import * as types from "./actionType"

const initialState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    token: "",
    jobAplied: []
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case types.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: action.payload,
                isAuth: true
            }

        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        case types.APPLY_JOB:
            return {
                ...state,
                jobAplied:[...initialState.jobAplied ,action.payload]
            }


        default:
            return state
    }

}
