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
import Excel from '../Excel/Excel';


function Test() {
  const [toggle, setToggle] = useState(false)

  function handle(date){
    setToggle(true)
  }
  return (
      <>
       <DatePicker onChange={(date) => handle(date)} />
      {toggle && (
        <Excel />
      )}
        </>
        )
}
        export default Test
