import React from 'react'
import XLSX from 'xlsx'


const htmlExportExcel = (fileExtension, fileName) => {
	var elt = document.getElementById("tblExport");
	var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
	return XLSX.writeFile(wb, fileName + "." + fileExtension || ('MySheetName.' + (fileExtension || 'xlsx')));
}


export default function Excel(props) {
const { fname } = props
	return (
				<button onClick={() => htmlExportExcel('csv', fname)}>下載excel</button>

	)
}


