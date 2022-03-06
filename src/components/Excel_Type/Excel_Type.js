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
        let dataValues = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
        ];
        let str=''
    let tmp_str=''
    let tmp_date=dataValues[2]
    let tmp_month=dataValues[1]

    if(tmp_month<10) tmp_month = '0'+dataValues[1]
    if(tmp_date<10) tmp_date = '0'+dataValues[2]
    tmp_str = dataValues[0] +'-'+ tmp_month +'-'+ tmp_date + 'T00:00:00'
    str = tmp_str.toString()
    setStart(str)

        setShowPie(false)
        setShowTable(false)
        setShowExcel(false)
    }

    function handleTimeChange2(date) {
        let dataValues = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
        ];
        let str=''
        let tmp_str=''
        let tmp_date=dataValues[2]
        let tmp_month=dataValues[1]

        if(tmp_month<10) tmp_month = '0'+dataValues[1]
        if(tmp_date<10) tmp_date = '0'+dataValues[2]
        tmp_str = dataValues[0] +'-'+ tmp_month +'-'+ tmp_date + 'T23:59:59'
        str = tmp_str.toString()
    setEnd(str)
    
        setShowPie(false)
        setShowTable(false)
        setShowExcel(false)

        const fetchData = async () => {

            const Body = {
                "EventDatetime0": start,
                "EventDatetime1": str
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
                        console.log(data);
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
                if (carList[i] === 0) { c0++; }
                else if (carList[i] === 1) { c1++; }
                else if (carList[i] === 2) { c2++; }
                else if (carList[i] === 3) { c3++; }
                else if (carList[i] === 4) { c4++; }
                else if (carList[i] === 5) { c5++; }
                else if (carList[i] === 6) { c6++; }
                else if (carList[i] === 7) { c7++; }
                else;
            }
            arr.push(c0, c1, c2, c3, c4, c5, c6, c7)
        }
        count()
        handlePie(arr)
        setArrData(arr)
        let fname = start + '_' + end
        setFname(fname)
    }

    useEffect(async () => {
        handleCount()
    }, [cars])



    function handlePie(data_type) {
        console.log(data_type)
        console.log(cars)
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
        setShowPie(true)
        setShowTable(true)
        setShowExcel(true)
    }

    const options={
        maintainAspectRatio: false,
        responsive: false,
        //responsive:true,
        //maintainAspectRatio: true,
        legend: { display: false }
    }
    return (
        <>
        <table>
            <td><h5>起始日期:(不可為當前日期)<DatePicker
                selected={startDate}
                onSelect={(date) => handleTimeChange(date)}
                onChange={(date) => setStartDate(date)}
            ></DatePicker></h5></td>
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

            {showExcel ? (<Excel fname={fname} />) : null}

            {showPie ? (
                <div>
                <Pie
                    data={pieData}
                    width={540} height={480} 
                     options={options}
                /></div>) : null}

        </>
    )
}