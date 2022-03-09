//https://stackoverflow.com/questions/66918023/how-to-convert-and-download-csv-to-xlsx-on-front-end-ts-react
import React, { useState, useContext } from "react"
import data from '../../test.json'
import XLSX from 'xlsx';


 
export default function Test2 (){

  const handleExcelData=(data)=>{
    console.log(data)
    const key = Object.keys(data[0])
    const value = Object.values(data[0])



   
}



const downloadxls = (data)=>{
  let ws = XLSX.utils.json_to_sheet(data);
  let wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "sheet");
  XLSX.writeFile(wb, `myfilename.csv`);
}

  
	return (
<button onClick={()=>handleExcelData(data)}>轉換</button>
	
	)
}
