/*
網頁的Header
頁面跳轉放這
*/

import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";
// import "./Header.css"

function Header() {
	let navigate = useNavigate();
	return (

		<div>
			<h3>台南市政府警察局</h3>
			<h2>交通警察大隊</h2>

			{/* <Button variant="light" href="/" onClick={ }>Light</Button> */}
			<Button
				onClick={() => {
					navigate("/");
				}}>尚未確認</Button>

			<Button
				onClick={() => {
					navigate("/searchtable");
				}}>查詢&開單</Button>

			<Button
				onClick={() => {
					navigate("/login");
				}}>登出</Button>

			<hr color="black" />
		</div>
	)
}


export default Header