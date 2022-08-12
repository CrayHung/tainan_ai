import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import LoadJson from '../LoadJson/LoadJson';
import { serverUrl } from '../../auth/cfg';
import DatePicker from 'react-datepicker'


import testjson from '../../test_cray.json'




export default function Select() {

  const [query, setQuery] = useState('');
  const [cars, setCars] = useState([]);
  //const [cars, setCars] = useState(testjson);
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
            const fetchData = async () => {
              let data = {
                "Eventdatetime0": "2022-03-01T00:00:00",
                "Eventdatetime1": "2122-03-01T23:59:59",
                "Event": str,
                "Checked": 0
              }
              console.log('data')
              console.log(data)
              query(data)
              function query(Body) {
                // let str = "http://192.168.191.10:9098/querybook/";
                const str = serverUrl + "/querybook/";
                fetch(str, {
                  method: "POST",
                  body: JSON.stringify(Body)
                })
                  .then(res => res.json())
                  .catch(error => console.error('Error:', error))
                  /**顯示所有資料 */
                  // .then(data => {
        
                  //null資料不顯示
                    .then(response => {
                    const data = response.filter(function (item) {
                      return item.PlateNumber !== "NULL"
                    });
        
        
                    // setTmpCars(response)
        
                    for (let i = 0; i < data.length; i++) {
                      const eTime0 = data[i]["EventDatetime0"].replace("T", " ");
                      data[i]["EventDatetime0"] = eTime0;
                    }
        
                    //倒序排列
                    const tmp_arr = []
                    for (let i = 0; i < data.length; i++) {
                      tmp_arr[i] = data.pop()
                    }
                    /***********將特定的Event排除************* */            /************************ */
                    /*
                    const eventList = tmp_arr.map(item => Object.values(item)[6]);
                    const eventList2 = tmp_arr.map(item => Object.keys(item)[6]); //Event
        
        
                    console.log('排除前的陣列值=')
                    console.log(eventList)
        
        
                    for (let i = 0; i < eventList.length; i++) {
                      if (eventList[i] === 4) {
                        tmp_arr.splice(i, 1);
                        i--;
                      }
                    }
                    console.log('排除的event=4')
                    const eventList3 = tmp_arr.map(item => Object.values(item)[6]);
                    console.log('排除後的陣列值=')
                    console.log(eventList3)
        
                    */
                    /************************ */            /************************ */
        
                    setCars(tmp_arr);
                  });
              }
            }
            fetchData();
            // handlefilter()
            // timeChange();
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


  {/*********************  DatePicker *****************/}
  const [startDate, setStartDate] = useState(new Date());
  const [start, setStart] = useState('');
  
  function handleTimeChange(date) {

    let dataValues = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
    ];
    let str = ''
    let tmp_str = ''
    let tmp_date = dataValues[2]
    let tmp_month = dataValues[1]


    if (tmp_month < 10) tmp_month = '0' + dataValues[1]
    if (tmp_date < 10) tmp_date = '0' + dataValues[2]
    let tmp_str0 = dataValues[0] + '-' + tmp_month + '-' + tmp_date
    str = tmp_str0.toString()     // 選的日期 2022-08-10

    let count=0;
    let original_data = cars
    console.log('original_data')
    console.log(original_data)
    const selectdata=[]
    for(var i=0;i<cars.length;i++){
        if(cars[i].EventDatetime0.substring(0,10) === str){   //將cars內的每筆EnventDatetime0 和 選的日期比對 , 如果相同就將此筆cars[]資料存到陣列中更新
          //console.log('第'+i+'筆資料和選的日期相同') 
          selectdata.push(cars[i])
          count++;
        }else ;
      }
      if(count!=0){
         setCars(selectdata)
    }else{
      setCars(original_data)
    }


}


  
{/*********************  DatePicker *****************/}

  return (
    <div className='form-select select-dropdown'>

      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid container-select">
          <span class="navbar-brand mb-0 h1">請選擇違規項目</span>


          <div >
            <span class="navbar-brand mb-0 h1">日期</span>
          <DatePicker
                            selected={startDate}
                            onSelect={(date) => handleTimeChange(date)}
                            onChange={(date) => setStartDate(date)}
          />
          </div>
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
