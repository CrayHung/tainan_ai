import React, { useState, useEffect } from 'react';
import data from '../../test.json'
import XLSX from 'xlsx';

export default function JsonToExcel({ cars, setShowExcel,start,end }) {

	//for excel filename
	const start0 = start.replace("T", "")
	const start1 = start0.replace("00:00:00", "")
	const end0 = end.replace("T", "")
	const end1 = end0.replace("23:59:59", "")
	let tmp_fname = start1 + '_' + end1 +'查詢表'
	let fname = tmp_fname.replace(/-/gi, "")

	//時間處理
	for (let i = 0; i < cars.length; i++) {
		const eTime0 = cars[i]["EventDatetime0"].replace("T", " ");
		cars[i]["EventDatetime0"] = eTime0.replace(/-/gi, "")
	}

	//車種處理
	for (let i = 0; i < cars.length; i++) {
		if (cars[i].CarType === 0) cars[i].CarType = '行人'
		else if (cars[i].CarType === 1) cars[i].CarType = '汽車'
		else if (cars[i].CarType === 2) cars[i].CarType = '機車'
		else if (cars[i].CarType === 3) cars[i].CarType = '公車'
		else if (cars[i].CarType === 4) cars[i].CarType = '卡車'
		else if (cars[i].CarType === 5) cars[i].CarType = '腳踏車'
		else ;
	}

	//行向處理
	const global_cameraname = ["北區東豐路與林森路路口-東豐路往東快車道",
		"北區東豐路與林森路路口-東豐路往西路口",
		"北區東豐路與林森路路口-林森路往北路口",
		"北區東豐路與林森路路口-東豐路往東慢車道",
		"北區東豐路與林森路路口-東豐路往西快車道",
		"北區東豐路與林森路路口-林森路往北車道",
		"北區東豐路與林森路路口-林森路往北車道",
		"北區東豐路與林森路路口-林森路往北路口",
		"北區東豐路與林森路路口-東豐路往東快車道",
		"北區東豐路與林森路路口-東豐路往東路口",
		"北區東豐路與林森路路口-東豐路往西慢車道",
		"北區東豐路與林森路路口-東豐路往西快車道",
		"北區東豐路與林森路路口-林森路往北車道",
		"北區東豐路與林森路路口-林森路往南路口",
		"北區東豐路與林森路路口-東豐路往東路口",
		"北區東豐路與林森路路口-東豐路往西快車道",
		"北區東豐路與林森路路口-林森路往南車道",
		"北區東豐路與林森路路口-東豐路往東快車道",
		"北區東豐路與林森路路口-東豐路往西慢車道",
		"北區東豐路與林森路路口-東豐路往東慢車道",
		"北區東豐路與林森路路口-東豐路往西路口",
		"北區東豐路與林森路路口-林森路往南車道",
		"北區東豐路與林森路路口-林森路往南路口",
		"北區東豐路與林森路路口-林森路往北車道",
		"北區東豐路與林森路路口-林森路往南車道"]


	const [data, setData] = useState([])

	function selectItem() {
		const carItem = []
			for (let p in cars) {
				carItem.push( {
					"ID": cars[p].ID,
					"車號": cars[p].PlateNumber,
					"攝影機": cars[p].CameraName,
					"行向":global_cameraname[cars[p].CameraName],
					"事件": cars[p].EventName,
					"時間": cars[p].EventDatetime0,
					"車種": cars[p].CarType
				})
			}

		setData(carItem)
		downloadxls(carItem)
	}



	const downloadxls = (data) => {
		let ws = XLSX.utils.json_to_sheet(data);
		let wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, "sheet1");
		XLSX.writeFile(wb, fname + ".csv");
		//XLSX.writeFile(wb, `myfilename.csv`);
		setShowExcel(false)
	}

	return (
		<button onClick={() => selectItem()}>下載excel</button>
	)
}
