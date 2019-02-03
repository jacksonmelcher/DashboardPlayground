import React from 'react'
import {Line} from 'react-chartjs-2'

const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Twitter',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [6.5, 5, 8, 8, 6, 5, 4]
    },
    {
      label: 'Google',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(100,102,192,0.4)',
      borderColor: 'rgba(100,102,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(100,102,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(100,102,192,1)',
      pointHoverBorderColor: 'rgba(100,102,192,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [9, 4, 10, 4, 5, 2, 4]
    },
    {
      label: 'Alchemy',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(226,226,90,0.4)',
      borderColor: 'rgba(226,226,90,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(226,226,90,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(226,226,90,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1, 2, 1, 4, 3, 2, 0]
    }
  ]
};

const MyStats = () => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Time Worked</span>
        <div>
        <Line
          data={data}
          width={20}
          height={20}
          options={{
            maintainAspectRatio: true
          }}
        />
      </div>
      </div>
    </div>
  )

}

export default MyStats;
