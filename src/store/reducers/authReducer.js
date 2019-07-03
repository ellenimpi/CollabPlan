const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  console.log("type:", action.type);
  switch(action.type){
    case 'LOGIN_ERR':
      console.log("error");
      return{
        ...state,
        authError: "Login failed"
      }
    case 'LOGIN':
      console.log("success");
      return{
        ...state, 
        authError: null
      }
    case 'SIGNOUT':
      console.log("signout");
      return state; 
    case 'SIGNUP':
    return{
      ...state,
      authError: null
    }
    case 'SIGNUP_ERR':
    return{
      ...state,
      authError: action.err.message
    }
    default:
    return state;
}
}

export default authReducer;