/**
 * 此component未用到
 * 此種寫法為可map所有json的key value , 並更新到table
 * 以後使用
 */

import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK from './MOCK.json'
import { COLUMNS } from '../Columns/Columns'
import './table.css'
/*
此頁面為json讀入表單主code, 並連結Columns.js來設定json的格式 
*/

export const BasicTable = () => {
	const columns = useMemo(() => COLUMNS, [])
	const data = useMemo(() => MOCK, [])

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({
		columns,
		data
	})


	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map(column => (
							<th {...column.getHeaderProps()}>{column.render('Header')}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map(row => {
						prepareRow(row)
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
								})}

							</tr>
						)
					})
				}
				<tr>
					<td></td>
				</tr>
			</tbody>
		</table>
	)
}
