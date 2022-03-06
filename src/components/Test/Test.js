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
import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';



function Test() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

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
    tmp_str = dataValues[0] + '-' + tmp_month + '-' + tmp_date + 'T00:00:00'
    str = tmp_str.toString()
    setStart(str)

  }

  function handleTimeChange2(date) {
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
    tmp_str = dataValues[0] + '-' + tmp_month + '-' + tmp_date + 'T23:59:59'
    str = tmp_str.toString()

    setEnd(str)
  }

  return (
      <>
      <table>
        <tr>
          <td>
            <h5>起始日期:(不可為當前日期)</h5>
            <DatePicker
              selected={startDate}
              onSelect={(date) => handleTimeChange(date)}
              onChange={(date) => setStartDate(date)}
            ></DatePicker>
          </td>
          <td>
            <h5>結束日期:(不可為當前日期)</h5>
            <DatePicker
              selected={endDate}
              onSelect={(date) => handleTimeChange2(date)}
              onChange={(date) => setEndDate(date)}
            ></DatePicker>
          </td>
        </tr>
        </table>
        </>
        )
}
        export default Test
