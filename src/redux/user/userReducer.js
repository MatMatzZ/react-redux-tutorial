const { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } = require("./userType")

const initialState = {
    loading: false,
    data:[],
    error:''
}

const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST: return{
            ...state,
            loading: true
        }
        case FETCH_USER_SUCCESS: return{
            loading:false,
            users: action.payload,
            error:''
        }
        case FETCH_USER_FAILURE: return{
            loading:false,
            users:[],
            error:action.payload
        }
        default: return state
    }
}

export default userReducer