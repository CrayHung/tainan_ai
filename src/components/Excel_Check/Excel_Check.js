import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './Excel_Check.css'
import Excel from '../Excel/Excel';
import DatePicker from 'react-datepicker';
import { serverUrl } from '../../auth/cfg';


export default function Excel_Check() {

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
    
        //setShowPie(false)
        //setShowTable(false)
        //setShowExcel(false)

        const fetchData = async () => {

            const Body = {
                "EventDatetime0": start,
                "EventDatetime1": str,
                "Event":0,
                "Checked":2
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
                      console.log('data before reduce NULL')
                        console.log(response)
                        const data = response.filter(function (item) {
                          return item.PlateNumber !== "NULL"
                        });
                        // setTmpCars(response)
                        console.log('data after reduce NULL')
                        console.log(data)
                        for (let i = 0; i < data.length; i++) {
                          const eTime0 = data[i]["EventDatetime0"].replace("T", " ");
                          data[i]["EventDatetime0"] = eTime0;
                        }
                        console.log('data after change Datetime')
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
        const carList = cars.map(item => Object.values(item)[21])
        //const carList2 = cars.map(item => Object.keys(item)[21])
        console.log('===carList===')
        console.log(carList)
        //console.log(carList2)


        let c0 = 0
        let c1 = 0


        let arr = []

        function count() {
            for (var i = 0; i < carList.length; i++) {
                if (carList[i] === 0) { c0++; }
                else if (carList[i] === 1) { c1++; }
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
            arr.push(c0, c1)
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


        let tmp_fname = start1 + '_' + end1 +'審查狀態統計表'
        let fname = tmp_fname.replace(/-/gi, "")
        console.log(fname)
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
            labels: ['未審查', '已人工審查'],
            datasets: [
                {
                    data: [data_type[0], data_type[1]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)'
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
                            <th>未審查</th>
                            <th>已人工審查</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{arrData[0]}</td>
                            <td>{arrData[1]}</td>

                        </tr>
                    </tbody>

                </table>
            ): null}

            {/*{showExcel ? (<Excel fname={fname} />) : null}*/}
            {showExcel && (<Excel fname={fname} />)}

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