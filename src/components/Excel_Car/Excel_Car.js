import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './Excel_Car.css'
import Excel from '../Excel/Excel';
import DatePicker from 'react-datepicker';
import { serverUrl } from '../../auth/cfg';


export default function Excel_Car() {

  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [fname, setFname] = useState('');

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [pieData, setPieData] = useState([])
  const [arrData, setArrData] = useState([])

  const [cars, setCars] = useState([]);
  const [tmpcars, setTmpCars] = useState([]);

  const [showPie, setShowPie] = useState(false)
  const [showTable, setShowTable] = useState(false)
  const [showExcel, setShowExcel] = useState(false)

  function handleTimeChange(date) {
    let dataValues = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    ];
    let tmp_str = dataValues[0] + '-' + dataValues[1] + '-' + dataValues[2] + 'T00:00:00'
    let str = tmp_str.toString()
    setStart(str)
    setShowPie(false)
    setShowTable(false)
    setShowExcel(false)
  }

  function handleTimeChange2(date) {
    let dataValues = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    ];
    let tmp_str = dataValues[0] + '-' + dataValues[1] + '-' + dataValues[2] + 'T23:59:59'
    let str = tmp_str.toString()
    setEnd(str)
    setShowPie(false)
    setShowTable(false)
    setShowExcel(false)

    const handlefetch = async () => {

      const Body = {
        "EventDatetime0": start,
        "EventDatetime1": str
      }
      console.log('Body')
      console.log(Body)
      query(Body)
      function query(Body) {
        // let str = "http://192.168.191.10:9098/querybook/"
        const str = serverUrl + "/querybook/"
        fetch(str, {
          method: "POST",
          body: JSON.stringify(Body)
        })
          .then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => setTmpCars(response));
      }
    }
    handlefetch()
    handlefilter()
		
	}
	const handlefilter= async ()=> {
		let arr = tmpcars.filter(function (item) {
				return item.PlateNumber !== "NULL"
			});
			setCars(arr)
            console.log(cars)
	}

	useEffect(()=>{
		handlefilter()
	},[tmpcars])


  function handleCount() {
    //console.log('cars in count')
    //console.log(cars)
    const carList = cars.map(item => Object.values(item)[12])
    //const carList2 = cars.map(item => Object.keys(item)[12])
    //console.log('===carList===')
    //console.log(carList)
    // console.log(carList2)
    let cnt_0 = 0
    let cnt_1 = 0
    let cnt_2 = 0
    let cnt_3 = 0
    let cnt_4 = 0
    let cnt_5 = 0
    let arr = []

    function count() {
      for (var i = 0; i < carList.length; i++) {
        if (carList[i] === 0) { cnt_0++; }
        else if (carList[i] === 1) { cnt_1++; }
        else if (carList[i] === 2) { cnt_2++; }
        else if (carList[i] === 3) { cnt_3++; }
        else if (carList[i] === 4) { cnt_4++; }
        else if (carList[i] === 5) { cnt_5++; }
        else;
      }
      arr.push(cnt_0, cnt_1, cnt_2, cnt_3, cnt_4, cnt_5)
    }
    count()
    handlePie(arr)
    setArrData(arr)
    let fname = start + '_' + end
    setFname(fname)
  }

  useEffect(async () => {
    handleCount()
  }, [cars])



  function handlePie(data_type) {
    console.log(data_type)
    console.log(cars)
    ChartJS.register(ArcElement, Tooltip, Legend);
    const piedata = {
      labels: ['行人', '汽車', '機車', '公車', '卡車', '腳踏車'],
      datasets: [
        {
          data: [data_type[0], data_type[1], data_type[2], data_type[3], data_type[4], data_type[5]],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }
    setPieData(piedata)
    handleshow()
  }
  //console.log('pieData')
  //console.log(pieData)
  function handleshow() {
    setShowPie(true)
    setShowTable(true)
    setShowExcel(true)
  }

  return (
    <>
      <table>
            <td><h5>起始日期:(不可為當前日期)<DatePicker
                selected={startDate}
                onSelect={(date) => handleTimeChange(date)}
                onChange={(date) => setStartDate(date)}
            ></DatePicker></h5></td>
            <td><h5>結束日期:(不可為當前日期) <DatePicker
                selected={endDate}
                onSelect={(date) => handleTimeChange2(date)}
                onChange={(date) => setEndDate(date)}
            ></DatePicker></h5></td>
        </table>

      {showTable ? (
        <table id="tblExport" >
          <thead>
            <tr>
              <th>行人</th>
              <th>汽車</th>
              <th>機車</th>
              <th>公車</th>
              <th>卡車</th>
              <th>腳踏車</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{arrData[0]}</td>
              <td>{arrData[1]}</td>
              <td>{arrData[2]}</td>
              <td>{arrData[3]}</td>
              <td>{arrData[4]}</td>
              <td>{arrData[5]}</td>
            </tr>
          </tbody>

        </table>
      ) : null}

      {showExcel ? (<Excel fname={fname} />) : null}

      {showPie ?(
      <Pie
          data={pieData}
          width={100} height={100} 
          options={{
            legend: { display: false },
            maintainAspectRatio: true
        }}
        />
      ) : null}
    </>
  )
}