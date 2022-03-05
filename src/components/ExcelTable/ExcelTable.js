import React, { useState} from 'react'
//import Excel_Type from '../Excel_Type/Excel_Type';
//import Excel_Car from '../Excel_Car/Excel_Car'

import { useNavigate } from "react-router-dom";

export default function ExcelTable() {

    //const [showCar, setShowCar] = useState(false)
    //const [showType, setShowType] = useState(false)

    /******************************************************* */

    let navigate = useNavigate();

    return (
        <div>
            {/*<button onClick={()=>setShowType(!showType)}>違規類型件數</button>
            <button onClick={()=>setShowCar(!showCar)}>違規車種件數</button>
            */}
            <button onClick={() => {navigate("/exceltype")}}>違規類型件數</button>
            <button onClick={() => {navigate("/excelcar")}}>違規車種件數</button>
{/*
            {showType ? (
                <Excel_Car />
            ) : null}

            {showCar ? (
                <Excel_Type />
            ) : null}
*/}

        </div>
    )
}
