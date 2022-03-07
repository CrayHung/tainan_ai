import React, { useState, useContext } from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// import LoadJson from '../LoadJson/LoadJson';

export default function Main(value) {

	const navigate = useNavigate();
	// const [query, setQuery] = useState('');
	// const [cars, setCars] = useState([]);
	// const [tmpcars, setTmpCars] = useState([]);

	const [showLoadjson, setshowLoadjson] = useState(false);

	return (
		<>
			{/* <div width={500} >
				<button className="btn btn-secondary" style={{ margin: '2px' }} onClick={() =>{setshowLoadjson(false); navigate("/")}}>未審查案件</button>
				<button className="btn btn-secondary" style={{ margin: '2px' }} onClick={() =>{setshowLoadjson(false); navigate("/search")}}>違規查詢</button>
				<button className="btn btn-secondary" style={{ margin: '2px' }} onClick={() =>{setshowLoadjson(false) ;navigate("/exceltable")}}>統計報表</button>
			</div> */}
			<div className='header-submenu'>
				<ul className="header-menu nav nav-pills">
					<li className="nav-item ">
						<a className="nav-link link-light" href="/" role="button" aria-expanded="false" onClick={() => { setshowLoadjson(false); }}> 未審查案件</a>
					</li>
					<li className="nav-item ">
						<a className="nav-link link-light" href="/search" role="button" aria-expanded="false" onClick={() => { setshowLoadjson(false); }}>違規查詢</a>
					</li>
					<li className="nav-item ">
						<a className="nav-link link-light" href="/exceltable" role="button" aria-expanded="false" onClick={() => { setshowLoadjson(false); }}>統計報表</a>
					</li>
				</ul>
			</div>
		</>
	)
}
