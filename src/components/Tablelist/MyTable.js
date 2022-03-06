import { Table, Pagination } from 'react-bootstrap';
import React, { useContext } from 'react';
import { ActiveContext } from '../../.';

import './MyTable.css'

export default function MyTable(props) {
	/* parameter */
	const tableData = props.tableData;
	const sizePerPage = props.sizePerPage;
	// 切割分頁
	const partTableData = [];
	for (let i = 0; i < tableData.length; i += sizePerPage) {
		partTableData.push(tableData.slice(i, i + sizePerPage));
	}

	/* function JSON column 對應*/
	function makeTableContent(value, index) {

		if (value.CarType === 1) value.CarType = '行人'
		else if (value.CarType === 2) value.CarType = '汽車'
		else if (value.CarType === 3) value.CarType = '機車'
		else if (value.CarType === 4) value.CarType = '公車'
		else if (value.CarType === 5) value.CarType = '卡車'
		else if (value.CarType === 6) value.CarType = '腳踏車'
		else ;


		const global_cameraname=["1號: 北區東豐路與林森路路口-東豐路往東快車道",
		"2號: 北區東豐路與林森路路口-東豐路往西路口",
		"3號: 北區東豐路與林森路路口-林森路往北路口",
		"4號: 北區東豐路與林森路路口-東豐路往東慢車道",
		"5號: 北區東豐路與林森路路口-東豐路往西快車道",
		"6號: 北區東豐路與林森路路口-林森路往北車道",
		"7號: 北區東豐路與林森路路口-林森路往北車道",
		"8號: 北區東豐路與林森路路口-林森路往北路口",
		"9號: 北區東豐路與林森路路口-東豐路往東快車道",
		"10號: 北區東豐路與林森路路口-東豐路往東路口",
		"11號: 北區東豐路與林森路路口-東豐路往西慢車道",
		"12號: 北區東豐路與林森路路口-東豐路往西快車道",
		"13號: 北區東豐路與林森路路口-林森路往北車道",
		"14號: 北區東豐路與林森路路口-林森路往南路口",
		"15號: 北區東豐路與林森路路口-東豐路往東路口",
		"16號: 北區東豐路與林森路路口-東豐路往西快車道",
		"17號: 北區東豐路與林森路路口-林森路往南車道",
		"18號: 北區東豐路與林森路路口-東豐路往東快車道",
		"19號: 北區東豐路與林森路路口-東豐路往西慢車道",
		"20號: 北區東豐路與林森路路口-東豐路往東慢車道",
		"21號: 北區東豐路與林森路路口-東豐路往西路口",
		"22號: 北區東豐路與林森路路口-林森路往南車道",
		"23號: 北區東豐路與林森路路口-林森路往南路口",
		"24號: 北區東豐路與林森路路口-林森路往北車道",
		"25號: 北區東豐路與林森路路口-林森路往南車道"]

		if (value.CameraName === 0) value.CameraName = global_cameraname[0]
		else if (value.CameraName === 1) value.CameraName = global_cameraname[1]
		else if (value.CameraName === 2) value.CameraName = global_cameraname[2]
		else if (value.CameraName === 3) value.CameraName = global_cameraname[3]
		else if (value.CameraName === 4) value.CameraName = global_cameraname[4]
		else if (value.CameraName === 5) value.CameraName = global_cameraname[5]
		else if (value.CameraName === 6) value.CameraName = global_cameraname[6]
		else if (value.CameraName === 7) value.CameraName = global_cameraname[7]
		else if (value.CameraName === 8) value.CameraName = global_cameraname[8]
		else if (value.CameraName === 9) value.CameraName = global_cameraname[9]
		else if (value.CameraName === 10) value.CameraName = global_cameraname[10]
		else if (value.CameraName === 11) value.CameraName = global_cameraname[11]
		else if (value.CameraName === 12) value.CameraName = global_cameraname[12]
		else if (value.CameraName === 13) value.CameraName = global_cameraname[13]
		else if (value.CameraName === 14) value.CameraName = global_cameraname[14]
		else if (value.CameraName === 15) value.CameraName = global_cameraname[15]
		else if (value.CameraName === 16) value.CameraName = global_cameraname[16]
		else if (value.CameraName === 17) value.CameraName = global_cameraname[17]
		else if (value.CameraName === 18) value.CameraName = global_cameraname[18]
		else if (value.CameraName === 19) value.CameraName = global_cameraname[19]
		else if (value.CameraName === 20) value.CameraName = global_cameraname[20]
		else if (value.CameraName === 21) value.CameraName = global_cameraname[21]
		else if (value.CameraName === 22) value.CameraName = global_cameraname[22]
		else if (value.CameraName === 23) value.CameraName = global_cameraname[23]
		else if (value.CameraName === 24) value.CameraName = global_cameraname[24]
		else ;

/*
		function convertUTCDateToLocalDate(date) {
			var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);
			var offset = date.getTimezoneOffset() / 60;
			var hours = date.getHours();
			newDate.setHours(hours - offset);
			return newDate;   
		}
		var date = convertUTCDateToLocalDate(new Date(value.EventDatetime0));
*/
		return (
			<tr key={index} >
				<td>{value.ID}</td>
				<td>{value.CameraName}</td>
				{/*<td>{value.Event}</td>*/}
				<td>{value.EventName}</td>
				<td>{value.EventDatetime0}</td>
				<td>{value.CarType}</td>
				<td>{value.ImgName4}</td>
				<td>{value.VideoName}</td>
				<td>{value.PlateNumber}</td>
				{/* <td>{value.checked}</td>
				<td>{value.printed}</td> */}
			</tr>
		);
	}

	/* component */
	function MakePartTable() {
		const { active } = useContext(ActiveContext);
		const index = active - 1;

		if (partTableData.length > 0) {
			return partTableData[index].map(makeTableContent);

		} else return '沒有資料'

		return <></>;
	}

	function MakePaginationItem(props) {
		// 一開始就選頁數 1
		const { active, setActive } = useContext(ActiveContext);
		const first = 1;
		const last = props.size;
		const size = props.size;

		let items = []

		items.push(
			<Pagination.Prev key={'prev'} onClick={() => setActive(active - 1 < 1 ? last : active - 1)} />
		);

		if (size < 8) {
			// size < 8
			for (let i = 1; i <= size; i++) {
				items.push(
					<Pagination.Item key={i} active={i === active} onClick={() => setActive(i)}>
						{i}
					</Pagination.Item>,
				);
			}
		} else {
			if (active - first < 4) {
				// size >= 8 && active - first < 4
				for (let i = 1; i <= 5; i++) {
					items.push(
						<Pagination.Item key={i} active={i === active} onClick={() => setActive(i)}>
							{i}
						</Pagination.Item>,
					);
				}
				items.push(<Pagination.Ellipsis key={'ell'} disabled />);
				items.push(
					<Pagination.Item key={last} active={last === active} onClick={() => setActive(last)}>
						{last}
					</Pagination.Item>,
				);
			} else {
				if (last - active < 4) {
					// size >= 8 && active - first >= 4 && last - active < 4
					items.push(
						<Pagination.Item key={first} active={first === active} onClick={() => setActive(first)}>
							{first}
						</Pagination.Item>,
					);
					items.push(<Pagination.Ellipsis key={'ell'} disabled />);
					for (let i = last - 4; i <= last; i++) {
						items.push(
							<Pagination.Item key={i} active={i === active} onClick={() => setActive(i)}>
								{i}
							</Pagination.Item>,
						);
					}
				} else {
					// size >= 8 && active - first >= 4 && last - active >= 4
					items.push(
						<Pagination.Item key={first} active={first === active} onClick={() => setActive(first)}>
							{first}
						</Pagination.Item>,
					);
					items.push(<Pagination.Ellipsis key={'ell-1'} disabled />);
					for (let i = active - 1; i <= active + 1; i++) {
						items.push(
							<Pagination.Item key={i} active={i === active} onClick={() => setActive(i)}>
								{i}
							</Pagination.Item>,
						);
					}
					items.push(<Pagination.Ellipsis key={'ell-2'} disabled />);
					items.push(
						<Pagination.Item key={last} active={last === active} onClick={() => setActive(last)}>
							{last}
						</Pagination.Item>,
					);
				}
			}
		}

		items.push(
			<Pagination.Next key={'next'} onClick={() => setActive(active + 1 > last ? first : active + 1)} />
		);

		return items;
	}


	return (
		<>
			{/*<Table striped bordered hover >*/}
			<Table responsive bordered hover text-normal >
				<thead>
					<tr>
						<th>ID</th>
						<th>攝影機</th>
						{/*<th>事件</th>*/}
						<th>事件名稱</th>
						<th>時間</th>
						<th>車種</th>
						<th>圖片名稱</th>
						<th>影片名稱</th>
						<th>車牌號碼</th>

					</tr>
				</thead>
				<tbody>
					<MakePartTable />
				</tbody>
			</Table>
			<Pagination>
				<MakePaginationItem size={
					tableData.length % sizePerPage === 0 ? tableData.length / sizePerPage : parseInt(tableData.length / sizePerPage) + 1
				} />
			</Pagination>
		</>
	);
}