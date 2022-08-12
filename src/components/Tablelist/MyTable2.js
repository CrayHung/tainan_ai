import { Table, Pagination } from 'react-bootstrap';
import React, { useContext } from 'react';
import { ActiveContext } from '../../.';
import SaveVideo from '../SaveVideo/SaveVideo';

import './MyTable.css'

export default function MyTable2(props) {

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

		if (value.CarType === 0) value.CarType = '行人'
		else if (value.CarType === 1) value.CarType = '汽車'
		else if (value.CarType === 2) value.CarType = '機車'
		else if (value.CarType === 3) value.CarType = '公車'
		else if (value.CarType === 4) value.CarType = '卡車'
		else if (value.CarType === 5) value.CarType = '腳踏車'
		else ;


		const global_cameraname = ["北區東豐路與林森路路口-東豐路往東快車道",
		"北區東豐路與林森路路口-東豐路往西路口",
		"北區東豐路與林森路路口-林森路往北路口",
		"北區東豐路與林森路路口-東豐路往東慢車道",
		"北區東豐路與林森路路口-東豐路往西快車道",
		"北區東豐路與林森路路口-林森路往北車道",
		"北區東豐路與林森路路口-林森路往北車道",
		"北區東豐路與林森路路口-林森路往北路口",
		"北區東豐路與林森路路口-東豐路往東快車道",
		"北區東豐路與林森路路口-東豐路往東路口",
		"北區東豐路與林森路路口-東豐路往西慢車道",
		"北區東豐路與林森路路口-東豐路往西快車道",
		"北區東豐路與林森路路口-林森路往北車道",
		"北區東豐路與林森路路口-林森路往南路口",
		"北區東豐路與林森路路口-東豐路往東路口",
		"北區東豐路與林森路路口-東豐路往西快車道",
		"北區東豐路與林森路路口-林森路往南車道",
		"北區東豐路與林森路路口-東豐路往東快車道",
		"北區東豐路與林森路路口-東豐路往西慢車道",
		"北區東豐路與林森路路口-東豐路往東慢車道",
		"北區東豐路與林森路路口-東豐路往西路口",
		"北區東豐路與林森路路口-林森路往南車道",
		"北區東豐路與林森路路口-林森路往南路口",
		"北區東豐路與林森路路口-林森路往北車道",
		"北區東豐路與林森路路口-林森路往南車道"]

		return (
			<>
			<tr key={index} >
				<td>{value.ID}</td>
				<td>{value.CameraName}</td>
				<td>{global_cameraname[value.CameraName]}</td>
				{/*<td>{value.Event}</td>*/}
				<td>{value.EventName}</td>
				<td>{value.EventDatetime0}</td>
				<td>{value.CarType}</td>
				{/*<td>{value.ImgName4}</td>*/}
				{/*<td>{value.VideoName}</td>*/}
				<td>{value.PlateNumber}</td>
				{/* <td>{value.checked}</td>
				<td>{value.printed}</td> */}
			</tr>
			</>
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
						<th>攝影機行向</th>
						{/*<th>事件</th>*/}
						<th>事件名稱</th>
						<th>時間</th>
						<th>車種</th>
						{/*<th>圖片名稱</th>*/}
						{/*<th>影片名稱</th>*/}
						<th>車牌號碼</th>
						<th>影片</th>

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