import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import MyTable from '../Tablelist/MyTable';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { serverUrl } from '../../auth/cfg';
import JsonToExcel from '../JsonToExcel/JsonToExcel';


function Search() {

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [cars, setCars] = useState([]);
    const [tmpcars, setTmpCars] = useState([]);
    const { register, handleSubmit } = useForm();

    const [showExcel, setShowExcel] = useState(false)


    /*******************************************************/
    /*
    const getRequest = useCallback(() => {
    
        const getData = async () => {
        
            let data={
                "EventDatetime0":start,
                "EventDatetime1":end,
                "Event":eventquery,
                "Checked":checkquery
                }
                console.log(data)
          const res = await fetch("http://192.168.191.10:9098/querybook/",{
              method: 'POST',
                body: JSON.stringify(data)
                })
          const results = await res.json();
          console.log('===results===')
          console.log(results)
          setCars(results);
        }
        getData();
      },[start,end,eventquery,checkquery]);
      */
    /*****************************************************/


    function handleTimeChange(date) {
        let dataValues = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
        ];
        let str = ''
        let tmp_str = ''
        let tmp_date = dataValues[2]
        let tmp_month = dataValues[1]

        if (tmp_month < 10) tmp_month = '0' + dataValues[1]
        if (tmp_date < 10) tmp_date = '0' + dataValues[2]
        tmp_str = dataValues[0] + '-' + tmp_month + '-' + tmp_date + 'T00:00:00'
        str = tmp_str.toString()
        setStart(str)

    }

    function handleTimeChange2(date) {
        let dataValues = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
        ];
        let str = ''
        let tmp_str = ''
        let tmp_date = dataValues[2]
        let tmp_month = dataValues[1]

        if (tmp_month < 10) tmp_month = '0' + dataValues[1]
        if (tmp_date < 10) tmp_date = '0' + dataValues[2]
        tmp_str = dataValues[0] + '-' + tmp_month + '-' + tmp_date + 'T23:59:59'
        str = tmp_str.toString()

        setEnd(str)
    }



    const onSubmit = (formData) => {
        let value = Object.keys(formData).map(key => {
            return formData[key]
        })

        let eventNo = parseInt(value[0])
        let checkNo = parseInt(value[1])

        if (eventNo == 0) eventNo = 0
        else if (eventNo == 1) eventNo = 2
        else if (eventNo == 2) eventNo = 4
        else if (eventNo == 3) eventNo = 7
        else if (eventNo == 4) eventNo = 8
        else if (eventNo == 5) eventNo = 10
        else if (eventNo == 6) eventNo = 11
        else if (eventNo == 7) eventNo = 9
        else if (eventNo == 8) eventNo = 3
        else;
        /*
        let eventNo = parseInt(value[0])
                if (eventNo === '0') str = 0
                else if (eventNo === '1') str = 1
                else if (value === '2') str = 4
                else if (value === '3') str = 7
                else if (value === '4') str = 2
                else if (value === '5') str = 10
                else if (value === '6') str = 11
                else if (value === '7') str = 9
                else if (value === '8') str = 3
                else;
        */


        const fetchData = async () => {
            const Body = {
                "Event": eventNo,
                "Checked": checkNo,
                "EventDatetime0": start,
                "EventDatetime1": end
            }
            console.log(Body)
            query(Body)
            function query(Body) {
                // let str = "http://192.168.191.10:9098/querybook/"
                const str = serverUrl + "/querybook/";
                fetch(str, {
                    method: "POST",
                    body: JSON.stringify(Body)
                })
                    .then(res => res.json())
                    .catch(error => console.error('Error:', error))
                    .then(response => {

                        const data = response.filter(function (item) {
                            return item.PlateNumber !== "NULL"
                        });


                        for (let i = 0; i < data.length; i++) {
                            const eTime0 = data[i]["EventDatetime0"].replace("T", " ");
                            data[i]["EventDatetime0"] = eTime0;
                        }


                        const tmp_arr = []
                        for (let i = 0; i < data.length; i++) {
                            tmp_arr[i] = data.pop()
                        }
                        setCars(tmp_arr);
                        setShowExcel(true)
                    });

            }
        }
        fetchData();
    }


    return (
        <>
            <table>
                <tr>

                    <td>
                        <h5>起始日期:(不可為當前日期)</h5>
                        <DatePicker
                            selected={startDate}
                            onSelect={(date) => handleTimeChange(date)}
                            onChange={(date) => setStartDate(date)}
                        ></DatePicker>
                    </td>
                    <td>
                        <h5>結束日期:(不可為當前日期)</h5>
                        <DatePicker
                            selected={endDate}
                            onSelect={(date) => handleTimeChange2(date)}
                            onChange={(date) => setEndDate(date)}
                        ></DatePicker>
                    </td>
                    <td>
                        <h5>違規事件</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <select id="event" {...register('event')}>
                                <option value="0">ALL</option>
                                <option value="1">1.違規紅燈直行、右轉及左轉偵測</option>
                                <option value="2">2.不依行向專用車道行駛偵測</option>
                                <option value="3">3.機車行駛於禁行機慢車道偵測</option>
                                <option value="4">4.機慢車停等區車輛違規停放偵測</option>
                                <option value="5">5.未保持路口淨空違規偵測</option>
                                <option value="6">6.跨越禁止變換車道線偵測</option>
                                <option value="7">7.車輛未禮讓行人偵測</option>
                                <option value="8">8.違規(臨時)停車偵測</option>
                            </select>

                            <h4>確認狀況</h4>
                            <select id="checked" {...register('checked')}>
                                <option value="2">ALL</option>
                                <option value="0">1.未確認</option>
                                <option value="1">2.已確認</option>
                            </select>
                            <input type="submit" />

                        </form>
                    </td>
                </tr>
            </table>



            {showExcel&&(<JsonToExcel
                cars={cars}
                setShowExcel={setShowExcel}
                start={start}
                end={end}
                />)}
            <MyTable tableData={cars} sizePerPage={10}></MyTable>

        </>
    );
}

export default Search
