import React, { useState, useEffect } from 'react'
import { carContext } from './createContext.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Search from './components/Search/Search.js';
import Select from './components/Select/Select'

import ExcelTable from './components/ExcelTable/ExcelTable'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import LoadJson from './components/LoadJson/LoadJson.js';

import Test from './components/Test/Test.js';
import ExcelCar from './components/Excel_Car/Excel_Car'
import Excel_Type from './components/Excel_Type/Excel_Type.js';
import Main from './components/Main/Main'


function App() {
	let navigate = useNavigate();

	return (
		<>


			<Main />
				<Routes>
					<Route path="/select" element={<Select />} />
					<Route path="/search" element={<Search />} />
					<Route path="/exceltable" element={<ExcelTable />} />
					<Route path="/excelcar" element={<ExcelCar />} />
					<Route path="/exceltype" element={<Excel_Type />} />
					<Route path="/test" element={<Test />} />
				</Routes>

		</>
	)

}
export default App;
