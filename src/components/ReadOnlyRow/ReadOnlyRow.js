import React ,{ useContext , Fragment , useMemo , useState }  from 'react'
import { ActiveContext } from '../..';
import ShowImage from '../ShowImage/ShowImage'
import ShowVideo from '../ShowVideo/ShowVideo'




export default function ReadOnlyRow({currentPage,setCurrentPage,length,index, car, handleEditclick, handleDeleteClick, handleConfirmClick }) {

        if (car.CarType === 0 ||car.CarType === "0" || car.CarType === 'person' || car.CarType === '行人') car.CarType = '行人'
        else if (car.CarType === 1 ||car.CarType === "1" || car.CarType === 'car' || car.CarType === '汽車') car.CarType = '汽車'
        else if (car.CarType === 2 ||car.CarType === "2" || car.CarType === 'motorbike' || car.CarType === '機車') car.CarType = '機車'
        else if (car.CarType === 3 ||car.CarType === "3" || car.CarType === 'bus' || car.CarType === '公車') car.CarType = '公車'
        else if (car.CarType === 4 ||car.CarType === "4" || car.CarType === 'truck' || car.CarType === '卡車') car.CarType = '卡車'
        else if (car.CarType === 5 ||car.CarType === "5" || car.CarType === 'bike' || car.CarType === '腳踏車') car.CarType = '腳踏車'
        else;


        let imagesrc5 = car.ImgName5
        let imagesrc4 = car.ImgName4
        let camera_number = car.CameraName


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


        return (
            <>

            <tr key={index} >
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
        );
}
    