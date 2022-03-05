//https://react-chartjs-2.netlify.app/examples

import React, { useState, useContext } from "react"
import { carContext } from "../../createContext";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * 
(1)	違規類型件數統計表(每週、每月)
(2)	違規類型車種件數統計表(每週、每月)
(3)	違規類型車輛明細表。

 */
export default function Test2() {
  const { cars, setCars } = useContext(carContext)
  console.log(cars)
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

	return (

		<div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;">

			<div className="b-example-divider"></div>
			<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">

				<span className="fs-4">Sidebar</span>
			</a>
			<hr />
			<ul className="nav nav-pills flex-column mb-auto">
				<li className="nav-item">
					<a href="#" className="nav-link active" aria-current="page">

						Home
					</a>
				</li>
			</ul>

		</div>
	)
}
