import React, { useContext } from 'react';
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Search from './components/Search/Search.js';
import Select from './components/Select/Select';
import ExcelTable from './components/ExcelTable/ExcelTable';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Test from './components/Test/Test.js';
import ExcelCar from './components/Excel_Car/Excel_Car'
import Excel_Type from './components/Excel_Type/Excel_Type.js';
import Main from './components/Main/Main';
import Login from './web/Login';
import { AuthContext, RequireAuth } from './auth/reducer';


function App() {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(AuthContext);

  // 若按下Logout
  const logout = () => {
    dispatch({
      type: "LOGOUT"
    })
  }

  return (
    <>
      <div className='grid-container'>
        <div className='header'>
          <div className='header-container'>
            <div className='header-title' ><img width={65} src='./image/Taiwan_Police_Logo.png' onClick={() => navigate("/")} />台南市警察局 科技執法管理系統</div>

            {/* <div className='header-logout'>登出</div> */}

            {state.isAuthenticated && (
              <Link className='header-logout' to="/login" onClick={logout}>登出</Link>
            )}
          </div>
        </div>

        <div className='main'>
          {state.isAuthenticated && (
            <Main />
          )}
          <Routes>
            <Route path="/" element={
              <RequireAuth>
                <Select />
              </RequireAuth>
            } />
            {/* <Route path="/select" element={<Select />} /> */}
            <Route path="/search" element={
            <RequireAuth>
              <Search />
            </RequireAuth>
            } />
            <Route path="/exceltable" element={
            <RequireAuth>
                <ExcelTable />
            </RequireAuth>
            } />
            <Route path="/excelcar" element={
            <RequireAuth>
                <ExcelCar />
            </RequireAuth>
            } />
            <Route path="/exceltype" element={
            <RequireAuth>
              <Excel_Type />
            </RequireAuth>
            } />
            <Route path="/test" element={
            <RequireAuth>
              <Test />
            </RequireAuth>
            } />

            {/* Login 允許未認證觀看 */}
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
export default App;
