import React from 'react'
import './Account_Value.css'
import millify from 'millify'
import { parseISO,format,subMonths } from 'date-fns'
import { BarChart,Bar,Tooltip,CartesianAxis,ResponsiveContainer,XAxis,YAxis,CartesianGrid } from 'recharts'
const Account_Value = () => {
  const data = [];
  for (let num = 11; num >= 0; num--) {
    data.push({
      date: subMonths(new Date(), num).toISOString().substring(5, 7),
      value: 400 * Math.random() * 6.3277,
    });
  }

  return (
    <div className='urcrypto_dashboard_analytics_account_value'>
    <div className='urcrypto_dashboard_analytics_account_value_header'>
      <h2>Account Value</h2>
  
      <select>
<option> January</option>
<option> February</option>
<option> March</option>
<option> April</option>
<option> May</option>
<option> June </option>
<option> July</option>
<option> August</option>
<option> September</option>
<option> October</option>
<option> November</option>
<option> December</option>
      </select>
    </div>
<div className = "urcrypto_dashboard_analytics_charts">
<ResponsiveContainer>
<BarChart width="100%" height='100%' data={data}
  margin={{ top: 10, right: 30, left: 0,  bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey={"date"}
   tickLine={false}
          tickaxisLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getMonth() % 3 === 0) {
              return format(date, "MMM");
            }
          }}
          stroke="#2725e7"
   />

  <Tooltip cursor={false}   viewBox={{ width: 0, height: 0 }}
          content={<CustomTooltip />} />
  <Bar    barSize={35}
          radius={[2, 2, 0, 0]}
          dataKey="value"
          fill="#2725e7"
          stroke="#fff"
          background={false} />
</BarChart>
</ResponsiveContainer>
</div>
    </div>
  )
}

export default Account_Value

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="urcrypto_dashboard_statistics_charts_bar_tooltip">
        <p> ${payload[0].value.toFixed(2)} USD </p>
      </div>
    );
  }
}