import { createContext, useReducer, useContext, } from "react";
import { setStoreUser, setStoreToken, clearStore, getAuth, setAuth, getStoreUser, getStoreToken } from './localstore';
import React from 'react';
import { Navigate, useLocation  } from "react-router-dom";

// **global variable
// 全域變數: maintain一份variables (認證, 使用者, token 等狀態), 讓所有子組件可以使用
const initialState = {
    isAuthenticated: getAuth() || false,
    user: getStoreUser() || null,
    token: getStoreToken() || null
};


// 定義操作global variable的action
const actions = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT"
};

// reducer是一個純函數, 返回新的狀態值
const reducer = (state, action) => {
    // 先解構取出
    const { type, newState } = action

    // switch, implement action func
    switch (type) {
        case actions.LOGIN:
            console.log("Action LOGIN:", newState)
            // setStoreUser(JSON.stringify(newState.user));
            // setStoreToken(JSON.stringify(newState.token));
            setStoreUser(newState.user);
            setStoreToken(newState.token);
            setAuth(true)
            return {
                ...state,
                isAuthenticated: true,
                user: newState.user,
                token: newState.token
            };
        case actions.LOGOUT:
            clearStore()
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null
            };
        default:
            return state;
    }
};


// 要export
const AuthContext = createContext();

// 要export
const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);    // 回傳現在的 state 及其配套的 dispatch 方法
    const value = {
        state: state,
        dispatch,
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export {
    AuthContext,
    AuthProvider,
}

export function RequireAuth({ children }) {
  let auth = useContext(AuthContext);
  let location = useLocation();

  if (!auth.state.isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}