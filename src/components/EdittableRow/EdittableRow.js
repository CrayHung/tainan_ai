/***
 * 此component處理編輯table
 */
import React from 'react'
import ShowImage from '../ShowImage/ShowImage'
import ShowVideo from '../ShowVideo/ShowVideo'


const EdittableRow = ({ car, editFormData, handleEditFormChange, handleCancelClick }) => {
    if(car.CarType===0||car.CarType==='行人') car.CarType='行人'
    else if(car.CarType===1||car.CarType==='汽車') car.CarType='汽車'
    else if(car.CarType===2||car.CarType==='機車') car.CarType='機車'
    else if(car.CarType===3||car.CarType==='公車') car.CarType='公車'
    else if(car.CarType===4||car.CarType==='卡車') car.CarType='卡車'
    else if(car.CarType===5||car.CarType==='腳踏車') car.CarType='腳踏車'
    else ;

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

    let camera_number = car.CameraName
/*
    function convertUTCDateToLocalDate(date) {
        var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);
        var offset = date.getTimezoneOffset() / 60;
        var hours = date.getHours();
        newDate.setHours(hours - offset);
        return newDate;   
    }
    var date = convertUTCDateToLocalDate(new Date(car.EventDatetime));
    //date.toLocaleString()
*/
    return (
        <tr>
            <td>{editFormData.ID}</td>
            <td>{editFormData.CameraName}</td>
            <td>{global_cameraname[camera_number]}</td>

            {/*<td>{editFormData.Event}</td>*/}
            <td>{editFormData.EventName}</td>
            <td>{editFormData.EventDatetime0} </td>
            <td><ShowImage props={car.ImgName4} /></td>
            <td><ShowImage props={car.ImgName5} /></td>
            <td><ShowVideo car={car} /></td>
            <td>
                <select name="CarType" value={editFormData.CarType} onChange={handleEditFormChange}>
                    <option value="0">行人</option>
                    <option value="1">汽車</option>
                    <option value="2">機車</option>
                    <option value="3">公車</option>
                    <option value="4">卡車</option>
                    <option value="5">腳踏車</option>
                </select>

            </td>

            <td>
                <input type="text"
                    placeholder="PlateNumber"
                    name="PlateNumber"
                    value={editFormData.PlateNumber}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button className="btn btn-secondary" type="submit">確認修改</button>
                <button className="btn btn-secondary" type="button" onClick={handleCancelClick}>取消</button>
            </td>
        </tr>
    )
}

export default EdittableRow