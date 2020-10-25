import axios from "axios"

const { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } = require("./userType")

export const fetchUserRequest = ()=>{
    return{
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = users => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = users =>{
    return {
        type: FETCH_USER_FAILURE,
        payload: users
    }
}

export const fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users = response.data
            dispatch(fetchUserSuccess(users))
        })
        .catch(error=>{
            var errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
        })
    }
}