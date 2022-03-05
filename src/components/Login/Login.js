import React from 'react'
import './Login.css'
import { BrowserRouter as Route, useNavigate } from 'react-router-dom';


function Login() {

  let username = React.createRef();
  let password = React.createRef();
  const navigate = useNavigate();

  function handleSubmit(e) {
    console.log(username.current.value);
    console.log(password.current.value);
    if (username.current.value === "user" && password.current.value === "1234") {
      return navigate('/loadjson')
    } else if
      (username.current.value === "" && password.current.value === "") {
      alert("帳號密碼請勿留白")
    } else {
      alert("帳號密碼有誤");
    }

    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <div className='grid-container'>
      <div className='blank-container'>
        <h2>請登入系統</h2>
      </div>
      <div className='login-container'>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">使用者名稱</label>
            <input ref={username} type="text" className="form-control" id="exampleInputUser" aria-describedby="loginlHelp" />
            <div id="loginlHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">密碼</label>
            <input ref={password} type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <a className="btn btn-secondary" onClick={handleSubmit} role="button">登入</a>
        </form>
      </div>

    </div>

  )
}

export default Login
