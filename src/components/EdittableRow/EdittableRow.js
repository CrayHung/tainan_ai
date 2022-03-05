/***
 * 此component處理編輯table
 */
import React from 'react'
import ShowImage from '../ShowImage/ShowImage'
import ShowVideo from '../ShowVideo/ShowVideo'


const EdittableRow = ({ car, editFormData, handleEditFormChange, handleCancelClick }) => {
    if(car.CarType===1||car.CarType==='行人') car.CarType='行人'
    else if(car.CarType===2||car.CarType==='汽車') car.CarType='汽車'
    else if(car.CarType===3||car.CarType==='機車') car.CarType='機車'
    else if(car.CarType===4||car.CarType==='公車') car.CarType='公車'
    else if(car.CarType===5||car.CarType==='卡車') car.CarType='卡車'
    else if(car.CarType===6||car.CarType==='腳踏車') car.CarType='腳踏車'
    else ;

    function convertUTCDateToLocalDate(date) {
        var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);
        var offset = date.getTimezoneOffset() / 60;
        var hours = date.getHours();
        newDate.setHours(hours - offset);
        return newDate;   
    }
    var date = convertUTCDateToLocalDate(new Date(car.EventDatetime));
    //date.toLocaleString()

    return (
        <tr>
            <td>{editFormData.ID}</td>
            {/*<td>{editFormData.CameraName}</td>*/}
            <td>{editFormData.EventName}</td>
            <td>{date.toLocaleString()} </td>
            <td><ShowImage props={car.ImgName4} /></td>
            <td><ShowImage props={car.ImgName5} /></td>
            <td><ShowVideo car={car} /></td>
            <td>
                <select name="CarType" value={editFormData.CarType} onChange={handleEditFormChange}>
                    <option value="行人">行人</option>
                    <option value="汽車">汽車</option>
                    <option value="機車">機車</option>
                    <option value="公車">公車</option>
                    <option value="卡車">卡車</option>
                    <option value="腳踏車">腳踏車</option>
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