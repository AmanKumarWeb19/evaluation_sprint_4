import React, { useState } from "react";

export const AuthContext = React.createContext();

// 1. create auth context and auth context provider for the entire application to have auth related data;

// 2. maintain loading,error, auth status and token in the state; it goes without saying; you are expected to use useReducer as state management tool; (hint : different actions that you are expected to have can be login - loading, success, failure ..)

// 3. send both state and dispatch values so that entire application has access to the state and dispatch function;

const AuthContextProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuth: false,
    token: null,
  });
  const loginUSer=(token)=>{
    setState({
      ...state,
      isAuth:true,
      token
    })
  }
    const logOutUSer=(token)=>{
      setState({
        ...state,
        isAuth:false,
        token:null
      })
  }

  return(
      <AuthContext.Provider value={{authState:state,logOutUSer,loginUSer}}>{children}</AuthContext.Provider>
      
  ) 
};

export default AuthContextProvider;
