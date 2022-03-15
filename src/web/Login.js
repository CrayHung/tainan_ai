import React, { useState, useRef, useEffect, useContext } from "react"
// 驗證表單
// npm i react-validation
import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button"
import { loginApi } from "../auth/request"
import { AuthContext } from '../auth/reducer'
import './Login.css';
// import MainPage from "../MainPage"
import { useNavigate, useLocation } from "react-router-dom";

// 驗證輸入欄位
const Login = (props) => {
  const { state, dispatch } = useContext(AuthContext);
  const form = useRef();
  const checkBtn = useRef();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 使用者帳號輸入
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  // 使用者密碼輸入
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 登入logo開始轉動
    setLoading(true);

    // 檢查表單輸入
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      console.log("get username password:", username, password)
      // 登入api
      loginApi({
        username,
        password
      }).then(res => {
        // 若登入成功
        if (res.Code === "Success") {
          // server端傳回Code及Token (大寫開頭)
          console.log("登入成功 Token =", res.Token)
          // 調派 LOGIN動作, 更新global state
          dispatch({
            type: "LOGIN",
            newState: {
              user: username,
              token: res.Token
            }
          })
          // 登入成功, 跳轉 main page
          console.log("跳轉 main page")
          
          const from = location.state?.from?.pathname || "/";
          navigate(from , { replace: true });
          // props.history.push("/main");
        }
      }).catch(err => {
        console.log("登入錯誤:", err)
      })
      // 登入logo不轉動
      setLoading(false);
    } else {
      // 登入logo不轉動
      setLoading(false);
    }
  };

  // useEffect(() => {
    // console.log("hello Login~~~~")
    // if (state.isAuthenticated) {
    //     props.history.push("/main")
    //     console.log("Login => main page")
    // }
  // }, [])

  return (
    // 從 bezkoder(github) copy來的bootstrap樣式
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="./image2/Taiwan_Police_Logo.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleSubmit} ref={form}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {/* "載入中" 的圖樣 */}
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
        {/* {console.log("return Login page")} */}
      </div>
    </div>
  )
}

export default Login