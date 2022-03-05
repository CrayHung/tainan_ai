import React from 'react'
import ShowImage from '../ShowImage/ShowImage'
import ShowVideo from '../ShowVideo/ShowVideo'




export default function ReadOnlyRow({ car, handleEditclick, handleDeleteClick, handleConfirmClick }) {
    if(car.CarType===0) car.CarType='行人'
    else if(car.CarType===1) car.CarType='汽車'
    else if(car.CarType===2) car.CarType='機車'
    else if(car.CarType===3) car.CarType='公車'
    else if(car.CarType===4) car.CarType='卡車'
    else if(car.CarType===5) car.CarType='腳踏車'
    else ;
    /*
    if(car.CarType===0||car.CarType==='行人') car.CarType='行人'
    else if(car.CarType===1||car.CarType==='汽車') car.CarType='汽車'
    else if(car.CarType===2||car.CarType==='機車') car.CarType='機車'
    else if(car.CarType===3||car.CarType==='公車') car.CarType='公車'
    else if(car.CarType===4||car.CarType==='卡車') car.CarType='卡車'
    else if(car.CarType===5||car.CarType==='腳踏車') car.CarType='腳踏車'
    else ;
*/

function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);
    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();
    newDate.setHours(hours - offset);
    return newDate;   
}
var date = convertUTCDateToLocalDate(new Date(car.EventDatetime0));

let imagesrc5 = car.ImgName5
let imagesrc4 = car.ImgName4

    return (
        <>
            <tr>
                <td>{car.ID}</td>
                {/*<td>{car.CameraName}</td>*/}
                <td>{car.EventName}</td>
                <td>{date.toLocaleString()}</td>
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