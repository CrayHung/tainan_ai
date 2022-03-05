import React, { useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import MyTable from '../Tablelist/MyTable';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


function Search() {

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [cars, setCars] = useState([]);
    const [tmpcars, setTmpCars] = useState([]);
    const { register, handleSubmit } = useForm();


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
        let tmp_str=''
        if(dataValues[1]<10)
        tmp_str = dataValues[0] + '-0' + dataValues[1] + '-' + dataValues[2] + 'T00:00:00'
        else
        tmp_str = dataValues[0] + '-' + dataValues[1] + '-' + dataValues[2] + 'T00:00:00'
        let str = tmp_str.toString()
        setStart(str)

    }

    function handleTimeChange2(date) {
        let dataValues = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
        ];
        let tmp_str=''
        if(dataValues[1]<10)
        tmp_str = dataValues[0] + '-0' + dataValues[1] + '-' + dataValues[2] + 'T23:59:59'
        else
        tmp_str = dataValues[0] + '-' + dataValues[1] + '-' + dataValues[2] + 'T23:59:59'
        let str = tmp_str.toString()
        setEnd(str)
    }



    const onSubmit = (formData) => {
        let value = Object.keys(formData).map(key => {
            return formData[key]
        })
        let eventNo = parseInt(value[0])
        let checkNo = parseInt(value[1])

        const handlefetch = async () => {

            const Body = {
                "Event" : eventNo,
                "Checked" : checkNo,
                "EventDatetime0" : start,
                "EventDatetime1" : end
            }
            console.log(Body)
            query(Body)
            function query(Body) {
                let str = "http://192.168.191.10:9098/querybook/"
                fetch(str, {
                    method: "POST",
                    body: JSON.stringify(Body)
                })
                    .then(res => res.json())
                    .catch(error => console.error('Error:', error))
                    .then(response => setTmpCars(response));
            }
        }

        handlefetch()
        handlefilter()
		
	}
	const handlefilter=()=> {
		let arr = tmpcars.filter(function (item) {
				return item.PlateNumber !== "NULL"
			});
			setCars(arr)
	}

	useEffect(()=>{
		handlefilter()
	},[tmpcars])
    console.log(cars)
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




            <MyTable tableData={cars} sizePerPage={10}></MyTable>
        </>
    );
}

export default Search
