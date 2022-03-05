//const { cars, setCars } = useContext(carContext)
//const [query, setQuery] = useState('');
//const [data, setData] = useState([]);
//const { register, handleSubmit, errors } = useForm();
/*

const test=[
{
"iD":"1",
"name":"2",
"firs":"3"
}, 
{
"iD":"2",
"name":"AAA",
"firs":"WWW"
},
]

function downloadtxt(test) {
  var blob = new Blob([data], { type: "text/plain;charset=utf-8" });
  FileSaver.saveAs(blob, "hello world.txt");
}

let date="2022-02-11T10:39:21"

function convertUTCDateToLocalDate(date) {
  var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);
  var offset = date.getTimezoneOffset() / 60;
  var hours = date.getHours();
  newDate.setHours(hours - offset);
  return newDate;   
}
let date2 = convertUTCDateToLocalDate(new Date(data));
console.log('date2='+date2)
console.log(date2.toLocaleDateString() )
 
*/

import React, { useState,useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


import DatePicker from 'react-datepicker';


function Test() {


  const [start, setStart] = useState('');

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [pieData ,setPieData]=useState([])

  const [cars, setCars] = useState([]);

const [showPie,setShowPie]=useState(false)

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
  }

  function handleTimeChange2(date) {
    let dataValues = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    ];
    let tmp_str = dataValues[0] + '-' + dataValues[1] + '-' + dataValues[2] + 'T23:59:59'
    let str = tmp_str.toString()


    const handlefetch = async () => {

      const Body = {
        "EventDatetime0": start,
        "EventDatetime1": str,
      }
      query(Body)
      function query(Body) {
        let str = "http://192.168.191.10:9098/querybook/"
        fetch(str, {
          method: "POST",
          body: JSON.stringify(Body)
        })
          .then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => setCars(response));
      }
    }
    handlefetch()
  }

  function handleCount() {
    //console.log('cars in count')
    //console.log(cars)
    const carList = cars.map(item => Object.values(item)[12])
    console.log('===carList===')
    console.log(carList)
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
  }

useEffect(async ()=>{
  handleCount()
}, [cars])



  function handlePie(data_type) {
    console.log(data_type)
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
    setShowPie(true)
  }
  console.log('pieData')
console.log(pieData)


  return (
    <>
    <h5>起始日期:</h5>
      <DatePicker
        selected={startDate}
        onSelect={(date) => handleTimeChange(date)}
        onChange={(date) => setStartDate(date)}
      ></DatePicker>

<h5>結束日期:</h5>
      <DatePicker
        selected={endDate}
        onSelect={(date) => handleTimeChange2(date)}
        onChange={(date) => setEndDate(date)}
      ></DatePicker>

{showPie?(
      <Pie
        data={pieData}
        options={{
          maintainAspectRatio: false
        }}
      />): null}

    </>
  )
}

export default Test
