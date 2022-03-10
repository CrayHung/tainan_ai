import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './Excel_Type.css'
import Excel from '../Excel/Excel';
import DatePicker from 'react-datepicker';
import { serverUrl } from '../../auth/cfg';


export default function Excel_Type() {

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [fname, setFname] = useState('');
    const [check,setCheck] = useState(0)

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [pieData, setPieData] = useState([])
    const [arrData, setArrData] = useState([])


    const [cars, setCars] = useState([]);
    const [tmpcars, setTmpCars] = useState([]);

    const [showPie, setShowPie] = useState(false)
    const [showTable, setShowTable] = useState(false)
    const [showExcel, setShowExcel] = useState(false)


    function handleTimeChange(date) {
        handleshow()
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


        //setShowPie(false)
        //setShowTable(false)
        //setShowExcel(false)
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

        //setShowPie(false)
        //setShowTable(false)
        //setShowExcel(false)

        const fetchData = async () => {

            const Body = {
                "EventDatetime0": start,
                "EventDatetime1": str,
                "Event": 0,
                "Checked": check
            }
            console.log('Body')
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
                        // setTmpCars(response)

                        for (let i = 0; i < data.length; i++) {
                            const eTime0 = data[i]["EventDatetime0"].replace("T", " ");
                            data[i]["EventDatetime0"] = eTime0;
                        }
                        //console.log(data);
                        setCars(data);
                    });

            }
        }
        fetchData();
        //handlefetch()
        //handlefilter()

    }


    /*
    const handlefilter= async ()=> {
        let arr = tmpcars.filter(function (item) {
                return item.PlateNumber !== "NULL"
            });
            setCars(arr)
            console.log(cars)
    }

    useEffect(()=>{
        handlefilter()
    },[tmpcars])

*/
    function handleCount() {
        //console.log('cars in count')
        //console.log(cars)
        const carList = cars.map(item => Object.values(item)[6])
        //const carList2 = cars.map(item => Object.keys(item)[6])
        //console.log('===carList===')
        //console.log(carList)
        //console.log(carList2)


        let c0 = 0
        let c1 = 0
        let c2 = 0
        let c3 = 0
        let c4 = 0
        let c5 = 0
        let c6 = 0
        let c7 = 0
        let arr = []

        function count() {
            for (var i = 0; i < carList.length; i++) {
                if (carList[i] === 2) { c0++; }
                else if (carList[i] === 4) { c1++; }
                else if (carList[i] === 7) { c2++; }
                else if (carList[i] === 8) { c3++; }
                else if (carList[i] === 10) { c4++; }
                else if (carList[i] === 11) { c5++; }
                else if (carList[i] === 9) { c6++; }
                else if (carList[i] === 3) { c7++; }
                else;
            }
            /*
            console.log('事件一共'+c0+'件')
            console.log('事件二共'+c1+'件')
            console.log('事件三共'+c2+'件')
            console.log('事件四共'+c3+'件')
            console.log('事件五共'+c4+'件')
            console.log('事件六共'+c5+'件')
            console.log('事件七共'+c6+'件')
            console.log('事件八共'+c7+'件')
            */
            arr.push(c0, c1, c2, c3, c4, c5, c6, c7)
        }

        count()
        handlePie(arr)
        setArrData(arr)

        const start0 = start.replace("T", "")
        const start1 = start0.replace("00:00:00", "")
        const end0 = end.replace("T", "")
        const end1 = end0.replace("23:59:59", "")
        //console.log('start1')
        //console.log(start1)


        let tmp_fname = start1 + '_' + end1 + '違規類型統計表'
        let fname = tmp_fname.replace(/-/gi, "")
        //console.log(fname)
        setFname(fname)
    }

    useEffect(async () => {
        handleCount()
    }, [cars])



    function handlePie(data_type) {
        //console.log(data_type)
        //console.log(cars)
        ChartJS.register(ArcElement, Tooltip, Legend);
        const piedata = {
            labels: ['違規紅燈直行、右轉及左轉', '不依行向專用車道行駛', '車行駛於禁行機慢車道', '機慢車停等區車輛違規停放', '未保持路口淨空違規偵測', '跨越禁止變換車道線', '車輛未禮讓行人', '違規(臨時)停車'],
            datasets: [
                {
                    data: [data_type[0], data_type[1], data_type[2], data_type[3], data_type[4], data_type[5], data_type[6], data_type[7]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(25, 59, 43, 0.2)',
                        'rgba(55, 219, 60, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(25, 59, 43, 0.2)',
                        'rgba(55, 219, 60, 0.2)',
                    ],
                    borderWidth: 1,
                },
            ],
        }
        setPieData(piedata)
        handleshow()

    }

    function handleshow() {
        setShowPie(!showPie)
        setShowTable(!showTable)
        setShowExcel(!showExcel)
    }


    const options = {
        maintainAspectRatio: false,
        responsive: false,
        //responsive:true,
        //maintainAspectRatio: true,
        legend: { display: false }
    }

    function handle_type_selector(value) {

        let str = ''
        if (value === '0') str = 0
        else if (value === '1') str = 1
        else if (value === '2') str = 2
        else;
    setCheck(str)
}

    return (
        <>
            <table>
                <td><h5>起始日期:(不可為當前日期)<DatePicker
                    selected={startDate}
                    onSelect={(date) => handleTimeChange(date)}
                    onChange={(date) => setStartDate(date)}

                ></DatePicker></h5></td>

                <td>
                    <form onChange={(val) => handle_type_selector(val.target.value)}>
                        <h4>審查狀態</h4>
                        <select id="checked" >
                            <option value="2">ALL</option>
                            <option value="0">1.未審查</option>
                            <option value="1">2.已審查</option>
                        </select>
                    </form>
                </td>
                <td><h5>結束日期:(不可為當前日期) <DatePicker
                    selected={endDate}
                    onSelect={(date) => handleTimeChange2(date)}
                    onChange={(date) => setEndDate(date)}
                ></DatePicker></h5></td>


                
            </table>



            {showTable ? (
                <table id="tblExport"  >
                    <thead>
                        <tr>
                            <th>違規紅燈直行、右左轉</th>
                            <th>不依行向專用車道行駛</th>
                            <th>車行駛於禁行機慢車道</th>
                            <th>機慢車停等區車輛違規停放</th>
                            <th>未保持路口淨空違規偵測</th>
                            <th>跨越禁止變換車道線</th>
                            <th>車輛未禮讓行人</th>
                            <th>違規(臨時)停車</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{arrData[0]}</td>
                            <td>{arrData[1]}</td>
                            <td>{arrData[2]}</td>
                            <td>{arrData[3]}</td>
                            <td>{arrData[4]}</td>
                            <td>{arrData[5]}</td>
                            <td>{arrData[6]}</td>
                            <td>{arrData[7]}</td>
                        </tr>
                    </tbody>

                </table>
            ) : null}

            {/*{showExcel ? (<Excel fname={fname} />) : null}*/}
            {showExcel && (<Excel fname={fname} />)}

            {showPie && (
                <div>
                    <Pie
                        data={pieData}
                        width={540} height={480}
                        options={options}
                    /></div>)}

        </>
    )
}