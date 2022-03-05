import React, { useCallback, useState } from 'react';
import MyTable from './MyTable';

// import DBJson from "http://192.168.191.10:9098/book/";

const newJson = []; // loading local JSON

// for (let i = 0; i < { myJson.length }; i++) {
//   newJson.push(myJson[0]);
// }


function TableApp() {

  //const { cars, setCars } = useContext(carContext)
  
  
  const [data, setData] = useState([]);

  const getRequest = useCallback(() => {
    const getData = async () => {
      const res = await fetch("http://192.168.191.10:9098/book");
      const results = await res.json();
      setData(results);
    }
    getData();
  });
 console.log(data)
  return (
    <>
      <button onClick={getRequest}>條件查詢</button>
      <MyTable tableData={data} sizePerPage={10}></MyTable>
    </>
  );
}

export default TableApp;