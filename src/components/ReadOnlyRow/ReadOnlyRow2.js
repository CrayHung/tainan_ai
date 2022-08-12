import React from 'react'
import ShowImage from '../ShowImage/ShowImage'
import ShowVideo from '../ShowVideo/ShowVideo'

import MyTable2 from '../Tablelist/MyTable2'





export default function ReadOnlyRow({index, car, handleEditclick, handleDeleteClick, handleConfirmClick }) {
    const global_cameraname=["北區東豐路與林森路路口-東豐路往東快車道",
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
    
    if (car.CarType === 0 ||car.CarType === "0" || car.CarType === 'person' || car.CarType === '行人') car.CarType = '行人'
    else if (car.CarType === 1 ||car.CarType === "1" || car.CarType === 'car' || car.CarType === '汽車') car.CarType = '汽車'
    else if (car.CarType === 2 ||car.CarType === "2" || car.CarType === 'motorbike' || car.CarType === '機車') car.CarType = '機車'
    else if (car.CarType === 3 ||car.CarType === "3" || car.CarType === 'bus' || car.CarType === '公車') car.CarType = '公車'
    else if (car.CarType === 4 ||car.CarType === "4" || car.CarType === 'truck' || car.CarType === '卡車') car.CarType = '卡車'
    else if (car.CarType === 5 ||car.CarType === "5" || car.CarType === 'bike' || car.CarType === '腳踏車') car.CarType = '腳踏車'
    else;


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
    else ;
*/

    /*
    if(car.CarType===0||car.CarType==='行人') car.CarType='行人'
    else if(car.CarType===1||car.CarType==='汽車') car.CarType='汽車'
    else if(car.CarType===2||car.CarType==='機車') car.CarType='機車'
    else if(car.CarType===3||car.CarType==='公車') car.CarType='公車'
    else if(car.CarType===4||car.CarType==='卡車') car.CarType='卡車'
    else if(car.CarType===5||car.CarType==='腳踏車') car.CarType='腳踏車'
    else ;
*/
/*
function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);
    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();
    newDate.setHours(hours - offset);
    return newDate;   
}
var date = convertUTCDateToLocalDate(new Date(car.EventDatetime0));
*/
let imagesrc5 = car.ImgName5
let imagesrc4 = car.ImgName4
let camera_number = car.CameraName

    return (
        <>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{car.ID}</td>
                <td>{car.CameraName}</td>
                <td>{global_cameraname[camera_number]}</td>

                {/*<td>{car.Event}</td>*/}
                <td>{car.EventName}</td>
                <td>{car.EventDatetime0}</td>
                <td ><ShowImage props={imagesrc4}/></td>
                <td ><ShowImage props={imagesrc5}/></td>
                {/*<td><ShowImage car={car}/></td>*/}
                <td><ShowVideo car={car} /></td>
                <td>{car.CarType}</td>

                <td>{car.PlateNumber}</td>
                <td>
                    <button
                    className="btn btn-secondary"
                        type="button"
                        onClick={(event) => handleEditclick(event, car)}>修改
                    </button>
                    <button
                    className="btn btn-secondary"
                        type="button"
                        onClick={(event) => handleDeleteClick(car.ID)}>刪除
                    </button>
                    <button
                    className="btn btn-secondary"
                        type="button"
                        onClick={(event) =>
                            handleConfirmClick(event, car, car.ID)
                        }>儲存
                    </button>

                </td>
            </tr>

        </>

    )
}