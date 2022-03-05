import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import LoadJson from '../LoadJson/LoadJson';


export default function Main(value) {

	let navigate = useNavigate();
	const [query, setQuery] = useState('');
	const [cars, setCars] = useState([]);
	const [tmpcars, setTmpCars] = useState([]);

	const [showLoadjson, setshowLoadjson] = useState(false)

{/*
	function handle_type_selector(value) {
		setshowLoadjson(false)

		let str = ''
		if (value === '99') str = 99
		else if (value === '1') str = 0
		else if (value === '2') str = 4
		else if (value === '3') str = 7
		else if (value === '4') str = 8
		else if (value === '5') str = 10
		else if (value === '6') str = 11
		else if (value === '7') str = 9
		else if (value === '8') str = 3
		else;
		setQuery(str)
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
				let str = "http://192.168.191.10:9098/querybook/"
				fetch(str, {
					method: "POST",
					body: JSON.stringify(Body)
				})
					.then(res => res.json())
					.catch(error => console.error('Error:', error))
					.then(response => setTmpCars(response));
			}
		}
		fetchData();
		handlefilter()
		
	}
	const handlefilter= async ()=> {
		let arr = tmpcars.filter(function (item) {
				return item.PlateNumber !== "NULL"
			});
			setCars(arr)
			setshowLoadjson(true)
	}

	useEffect(()=>{
		handlefilter()
	},[tmpcars])
*/}

	return (
		<>
			<div width={500} >
				{/*
				<select id="type_selector"
					onClick={() => navigate("/main")}
					onChange={(val) => handle_type_selector(val.target.value)}>/*}
					{/*</select></div>onChange={(val) => handle(val.target.value)}>*/}
{/*
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
	*/}
				<button className="btn btn-secondary" style={{ margin: '2px' }} onClick={() =>{setshowLoadjson(false); navigate("/select")}}>未審查案件</button>
				<button className="btn btn-secondary" style={{ margin: '2px' }} onClick={() =>{setshowLoadjson(false); navigate("/search")}}>違規查詢</button>
				<button className="btn btn-secondary" style={{ margin: '2px' }} onClick={() =>{setshowLoadjson(false) ;navigate("/exceltable")}}>統計報表</button>
			</div>
			{/*{showLoadjson?(<LoadJson cars={cars} setCars={setCars} />):null}*/}
		</>
	)
}
