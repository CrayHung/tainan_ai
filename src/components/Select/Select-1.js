import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import LoadJson from '../LoadJson/LoadJson';
import { serverUrl } from '../../auth/cfg';


import testjson from '../../test_cray.json'




export default function Select() {

  const [query, setQuery] = useState('');
  //const [cars, setCars] = useState([]);
  const [cars, setCars] = useState(testjson);
  const [tmpcars, setTmpCars] = useState([]);




  function handle_type_selector(value) {

    let str = ''
    if (value === '0') str = 0
    else if (value === '1') str = 2
    else if (value === '2') str = 4
    else if (value === '3') str = 7
    else if (value === '4') str = 8
    else if (value === '5') str = 10
    else if (value === '6') str = 11
    else if (value === '7') str = 9
    else if (value === '8') str = 3
    else;

    /*
            let str = ''
            if (value === '0') str = 0
            else if (value === '1') str = 1
            else if (value === '2') str = 2
            else if (value === '3') str = 3
            else if (value === '4') str = 4
            else if (value === '5') str = 5
            else if (value === '6') str = 6
            else if (value === '7') str = 7
            else if (value === '8') str = 8
            else;
    
    */
    setQuery(str)
  }
  // function timeChange() {
  //   console.log('tmpcars')
  //   console.log(tmpcars)
  // for(let i=0;i<tmpcars.length;i++){
  //     tmpcars[i].Eventdatetime0=tmpcars[i].Eventdatetime0.replace("T", " ")
  // }
  // handlefilter()
  // }

  // const handlefilter = async () => {
  //   let arr = tmpcars.filter(function (item) {
  //     return item.PlateNumber !== "NULL"
  //   });

  //   setCars(arr)

  // }

  // useEffect(() => {
  //     handlefilter()
  // }, [tmpcars])

  //if(cars==[]) return '沒有資料'

	// setCars(testjson);
  // console.log('cars in select')
  // console.log(cars)



  return (
    <div className='form-select select-dropdown'>

      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid container-select">
          <span class="navbar-brand mb-0 h1">請選擇違規項目</span>
          <p>未審查案件共{cars.length}件</p>
          <div class="container-fluid container-select">
            <select id="type_selector"
              //onClick={() => navigate("/select")}
              onChange={(val) => handle_type_selector(val.target.value)}>
              {/*</select></div>onChange={(val) => handle(val.target.value)}>*/}

              <option value="0">ALL</option>
              <option value="1">1.違規紅燈直行、右轉及左轉偵測</option>
              <option value="2">2.不依行向專用車道行駛偵測</option>
              <option value="3">3.車行駛於禁行機慢車道偵測</option>
              <option value="4">4.機慢車停等區車輛違規停放偵測</option>
              <option value="5">5.未保持路口淨空違規偵測</option>
              <option value="6">6.跨越禁止變換車道線偵測</option>
              <option value="7">7.車輛未禮讓行人偵測</option>
              <option value="8">8.違規(臨時)停車偵測</option>
            </select>
          </div>

        </div>

      </nav>
      <a></a>
      <LoadJson cars={cars} setCars={setCars} />
    </div>
  )
}
