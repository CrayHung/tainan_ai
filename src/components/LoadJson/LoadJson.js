import React, { useState, Fragment, useContext } from 'react'
import { carContext } from '../../createContext';

import ReadOnlyRow from '../ReadOnlyRow/ReadOnlyRow';
import EdittableRow from '../EdittableRow/EdittableRow';


import FileSaver from 'file-saver'
import { serverUrl } from '../../auth/cfg';
import './LoadJson.css'
import { set } from 'react-hook-form';


export default function LoadJson({ cars, setCars }) {

	/*

		const golbal_carevent = ["","違規紅燈直行、右轉及左轉偵測","不依行向專用車道行駛偵測",
		"機車行駛於禁行機慢車道偵測","未保持路口淨空違規偵測",
		"跨越禁止變換車道線偵測","車輛未禮讓行人偵測","違規(臨時)停車偵測"]
	*/
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


	const global_cartype = ["行人", "汽車", "機車", "公車", "卡車", "腳踏車"]


	console.log('cars in LoadJson')
	console.log(cars)


	//用來保存按下edit按鈕時 的那排row的car_ID
	const [editCarNumber, seteditCarNumber] = useState(null)

	//如果edit有輸入,則將輸入存入seteditFormData
	const [editFormData, seteditFormData] = useState({
		ID: '',
		CreateAt: '',
		UpdateAt: '',
		DeleteAt: '',
		CameraName: '',
		RoadName: '',
		Event: '',
		EventName: '',
		EventDatetime0: '',
		EventDatetime1: '',
		EventDatetime2: '',
		EventDatetime3: '',
		CarType: '',
		ImgName0: '',
		ImgName1: '',
		ImgName2: '',
		ImgName3: '',
		ImgName4: '',
		ImgName5: '',
		//ImgName4: cars.ImgName,
		VideoName: '',
		PlateNumber: '',
		Checked: '',
		BBx: '',
		BBy: '',
		BBwidth: '',
		BBheight: ''
	})


	////////////////////////////////////////////////////////////////////////////
	/***
	 * 儲存
	 * 將該row的所有car物件存在formValues中
	 * 並更改formValues的key:0->1
	 */
	const handleConfirmClick = (event, car, carNumber) => {
		event.preventDefault()


		//用formValues去接所有car的value
		//並更改formValues的checked 0->1 
		const formValues = {
			ID: car.ID,
			CreateAt: car.CreateAt,
			UpdateAt: car.UpdateAt,
			DeleteAt: car.DeleteAt,
			CameraName: car.CameraName,
			RoadName: car.RoadName,
			Event: car.Event,
			EventName: car.EventName,
			EventDatetime0: car.EventDatetime0,
			EventDatetime1: car.EventDatetime1,
			EventDatetime2: car.EventDatetime2,
			EventDatetime3: car.EventDatetime3,
			CarType: car.CarType,			
			ImgName0: car.ImgName0,
			ImgName1: car.ImgName1,
			ImgName2: car.ImgName2,
			ImgName3: car.ImgName3,
			ImgName4: car.ImgName4,
			ImgName5: car.ImgName5,
			VideoName: car.VideoName,
			PlateNumber: car.PlateNumber,
			Checked: 1,
			BBx: car.BBx,
			BBy: car.BBy,
			BBwidth: car.BBwidth,
			BBheight: car.BBheight
		}

		/*
				if (car.CameraName === 0) car.CameraName = global_cameraname[0]
				else if (car.CameraName === 1) car.CameraName = global_cameraname[1]
				else if (car.CameraName === 2) car.CameraName = global_cameraname[2]
				else if (car.CameraName === 3) car.CameraName = global_cameraname[3]
				else if (car.CameraName === 4) car.CameraName = global_cameraname[4]
				else if (car.CameraName === 5) car.CameraName = global_cameraname[5]
				else if (car.CameraName === 6) car.CameraName = global_cameraname[6]
				else if (car.CameraName === 7) car.CameraName = global_cameraname[7]
				else if (car.CameraName === 8) car.CameraName = global_cameraname[8]
				else if (car.CameraName === 9) car.CameraName = global_cameraname[9]
				else if (car.CameraName === 10) car.CameraName = global_cameraname[10]
				else if (car.CameraName === 11) car.CameraName = global_cameraname[11]
				else if (car.CameraName === 12) car.CameraName = global_cameraname[12]
				else if (car.CameraName === 13) car.CameraName = global_cameraname[13]
				else if (car.CameraName === 14) car.CameraName = global_cameraname[14]
				else if (car.CameraName === 15) car.CameraName = global_cameraname[15]
				else if (car.CameraName === 16) car.CameraName = global_cameraname[16]
				else if (car.CameraName === 17) car.CameraName = global_cameraname[17]
				else if (car.CameraName === 18) car.CameraName = global_cameraname[18]
				else if (car.CameraName === 19) car.CameraName = global_cameraname[19]
				else if (car.CameraName === 20) car.CameraName = global_cameraname[20]
				else if (car.CameraName === 21) car.CameraName = global_cameraname[21]
				else if (car.CameraName === 22) car.CameraName = global_cameraname[22]
				else if (car.CameraName === 23) car.CameraName = global_cameraname[23]
				else if (car.CameraName === 24) car.CameraName = global_cameraname[24]
				else;
		*/

	//要儲存在txt中的內容
	let camera_number = car.CameraName
	const saveValues = {
		"攝影機": car.CameraName,
		"攝影機行向": global_cameraname[camera_number],
		"違規事件": car.EventName,
		"違規時間": car.EventDatetime0,
		"車種": car.CarType,
		"車號": car.PlateNumber
	}
	//console.log('儲存txt的saveValues內容')
	//console.log(saveValues)




	if (car.CarType === 0 || car.CarType === "行人") car.CarType = 0
		else if (car.CarType === 1 || car.CarType === "汽車") car.CarType = 1
		else if (car.CarType === 2 || car.CarType === "機車") car.CarType = 2
		else if (car.CarType === 3 || car.CarType === "公車") car.CarType = 3
		else if (car.CarType === 4 || car.CarType === "卡車") car.CarType = 4
		else if (car.CarType === 5 || car.CarType === "腳踏車") car.CarType = 5
		else;

		//用來放回存DB的資料
		const saveBackDBValues = {
			//"Event": car.Event,
			"CarType": car.CarType,
			"PlateNumber": car.PlateNumber,
			"Checked": 1
		};
		console.log('回存DB的saveBackDBValues內容')
		console.log(saveBackDBValues)		
		console.log('回存DB的saveBackDBValues的Checked內容')
		console.log('saveBackDBValues.Checked')
		console.log(saveBackDBValues.Checked)
		console.log('type of Checked')
		console.log(typeof(saveBackDBValues.Checked))


		

	


		//創建一個confirmedCars陣列 , 複製原始cars物件陣列 , 
		//並將按下確認按鈕的那排index的內容更新到confimedCars

		const index = cars.findIndex((car) => car.ID === carNumber)
		const confirmedCars = [...cars]

		//創一個專門用來放txt內容的陣列savevalue
		const savevalue = [...cars]


		confirmedCars[index] = formValues
		console.log('更新完checked後的confirmedCars[index]')
		console.log(confirmedCars[index])
		//更新
		setCars(confirmedCars)

		console.log('更新完checked後的cars')
		console.log(cars[0])

		//txt內容用正則替換
		savevalue[index] = saveValues
		const obj = JSON.stringify(savevalue[index])
		var temp_result1 = obj.replace("{", "")
		var temp_result2 = temp_result1.replace("}", "")
		const regex = /,/ig
		var result = temp_result2.replace(regex, '\n')

		//downloadtxt(data, filename, type)
		downloadtxt(result, savevalue[index].EventDatetime0 + '_' + savevalue[index].PlateNumber, 'txt')


		//下載照片
		downloadImage(confirmedCars[index])



		//將PlateNumber,CarType,Checked值POST回DB
		//savebackDB(confirmedCars[index].ID.toString())
		savebackDB(saveBackDBValues, confirmedCars[index].ID)
		//savebackDB(confirmedCars[index].ID)
		//將確認後的物件移出陣列中
		confirmedCars.splice(index, 1)
		setCars(confirmedCars)
		console.log('更新完且移除該筆checked後的cars')
		console.log(cars[0])

	}

	//function savebackDB(data,id) {
	function savebackDB(data, id) {
		const str = serverUrl + '/updatebook/' + id;

		fetch(str, {
			method: 'POST',
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.catch(error => console.error('Error:', error))
			//.then(response => console.log('Success:', response));
			.then(response => console.log('Success:', response));

	}


	//要改存的jpg檔名改這邊   confirmedCars.EventDatetime0 + '_' + confirmedCars.PlateNumber+'.bmp'
	//FileSaver.saveAs(data , filename)
	//上限時要將CreateAt改為EventDatetime0
	function downloadImage(confirmedCars) {
		FileSaver.saveAs("./image/" + confirmedCars.ImgName4, confirmedCars.EventDatetime0 + '_' + confirmedCars.PlateNumber + '.jpg')
	}



	//將JSON.stringify存成指定的data type(txt)
	//downloadtxt(data, filename, type)
	function downloadtxt(data, filename, type) {
		var file = new Blob([data], { type: type });

		var a = document.createElement("a"),
			url = URL.createObjectURL(file);
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		setTimeout(function () {
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);
		}, 0);

	}


	/******************************************
	 * 修改
	 * 要知道按下的是哪個row(car.number)並存到state中
	 * 將此car.number的value存到formValues
	 * 再將formValues更新seteditFormData
	 ******************************************/
	const handleEditclick = (event, car) => {
		event.preventDefault()

		//將要更新的car.number存在state中
		seteditCarNumber(car.ID)
		//用formValues去接所有car的value
		const formValues = {
			ID: car.ID,
			CreateAt: car.CreateAt,
			UpdateAt: car.UpdateAt,
			DeleteAt: car.DeleteAt,
			CameraName: car.CameraName,
			RoadName: car.RoadName,
			Event: car.Event,
			EventName: car.EventName,
			EventDatetime0: car.EventDatetime0,
			EventDatetime1: car.EventDatetime1,
			EventDatetime2: car.EventDatetime2,
			EventDatetime3: car.EventDatetime3,
			CarType: car.CarType,
			ImgName0: car.ImgName0,
			ImgName1: car.ImgName1,
			ImgName2: car.ImgName2,
			ImgName3: car.ImgName3,
			ImgName4: car.ImgName4,
			ImgName5: car.ImgName5,
			VideoName: car.VideoName,
			PlateNumber: car.PlateNumber,
			Checked: car.Checked,
			BBx: car.BBx,
			BBy: car.BBy,
			BBwidth: car.BBwidth,
			BBheight: car.BBheight
		}
		//將formValues更新至seteditFormData , 避免直接更改[cars,setCars]
		seteditFormData(formValues)
	}

	/******************************************
	 * 當表單有變更時 呼叫handleEditFormData
	 * 取得被變更的那個cell的value(存在newFormData)
	 * 並將原始的editFormData 合併 新更改的newFormData
	 ******************************************/
	const handleEditFormChange = (event) => {
		event.preventDefault()

		const fieldName = event.target.getAttribute('name')
		const fieldValue = event.target.value

		const newFormData = { ...editFormData }
		newFormData[fieldName] = fieldValue

		console.log('handleEditFormChange變動的newFormData表單')
		console.log(newFormData)
		//將合併後的data更新至seteditFormData
		seteditFormData(newFormData)
	}

	/******************************************
	 * 當表單更改完畢並按下確認時 呼叫handleEditFormSubmit
	 * 取得被變更cell的value(newFormData)
	 * 並將原始的editFormData和newFormData合併
	 ******************************************/
	const handleEditFormSubmit = (event) => {
		event.preventDefault()

		//用editedCar去接所有editFormData中的car object
		const editedCar = {
			ID: editFormData.ID,
			CreateAt: editFormData.CreateAt,
			UpdateAt: editFormData.UpdateAt,
			DeleteAt: editFormData.DeleteAt,
			CameraName: editFormData.CameraName,
			RoadName: editFormData.RoadName,
			Event: editFormData.Event,
			EventName: editFormData.EventName,
			EventDatetime0: editFormData.EventDatetime0,
			EventDatetime1: editFormData.EventDatetime1,
			EventDatetime2: editFormData.EventDatetime2,
			EventDatetime3: editFormData.EventDatetime3,
			CarType: editFormData.CarType,
			ImgName0: editFormData.ImgName0,
			ImgName1: editFormData.ImgName1,
			ImgName2: editFormData.ImgName2,
			ImgName3: editFormData.ImgName3,
			ImgName4: editFormData.ImgName4,
			ImgName5: editFormData.ImgName5,
			VideoName: editFormData.VideoName,
			PlateNumber: editFormData.PlateNumber,
			Checked: editFormData.Checked,
			BBx: editFormData.BBx,
			BBy: editFormData.BBy,
			BBwidth: editFormData.BBwidth,
			BBheight: editFormData.BBheight

		}

		const newCars = [...cars]

		const index = cars.findIndex((car) => car.ID === editCarNumber)

		newCars[index] = editedCar

		setCars(newCars)
		//更新完畢 將seteditCarNumber設回null
		seteditCarNumber(null)
	}

	////////////////////////////////////////////////////////////////////////////
	//修改時發現不要更改 返回初始值
	const handleCancelClick = () => {
		seteditCarNumber(null)
	}
	////////////////////////////////////////////////////////////////////////////
	//刪除
	//接收的參數為該車號的index 並將該row的[car]中移除
	const handleDeleteClick = (carNumber) => {

		let yes = window.confirm('確定刪除？');
		if (yes) {
			const newCars = [...cars]
			const index = cars.findIndex((car) => car.ID === carNumber)
			let url = serverUrl + '/deletebook/' + carNumber.toString()	//將int轉string

			newCars.splice(index, 1)
			//////**************************/////
			//將newCars[index]這car.ID從資料庫刪掉
			fetch(url, { method: 'GET' })
				.then(response => (response.json()))
				.then(res => console.log(res))
				.catch(err => console.log(err))
			//更新完畢
			setCars(newCars)
		}
	}

	////////////////////////////////////////////////////////////////////////////
	/******************** 
	 * 讀取object keys
	 ********************/
	/*
	const tableHeader = () => {
	 let header = Object.keys(cars[0])
	 return header.map((key, index) => {
		return <th key={index}> {key} </th>
	 })
	}
	*/

	////////////////////////////////////////////////////////////////////////////
	return (
		<div>
			<form onSubmit={handleEditFormSubmit}>
				<div className="able-responsive">
					<table border="1" >
						<thead>
							<tr>
								<th>ID</th>
								<th>攝影機</th>
								<th>攝影機行向</th>
								{/*<th>事件</th>*/}
								<th>事件名稱</th>
								<th>時間</th>
								<th>縮圖1</th>
								<th>縮圖2</th>
								<th>影片</th>
								<th>車種</th>
								<th>車牌號碼</th>
								<th>處理狀態</th>
							</tr>
						</thead>

						<tbody>
							{cars.map((car) => (
								<Fragment>
									{editCarNumber === car.ID ? (
										<EdittableRow
											car={car}
											editFormData={editFormData}
											handleEditFormChange={handleEditFormChange}
											handleCancelClick={handleCancelClick}
										/>
									) : (
										<ReadOnlyRow
											car={car}
											handleEditclick={handleEditclick}
											handleDeleteClick={handleDeleteClick}
											handleConfirmClick={handleConfirmClick}

										/>
									)}
								</Fragment>

							))}
						</tbody>
					</table>
				</div>
			</form>

		</div>
	)
}