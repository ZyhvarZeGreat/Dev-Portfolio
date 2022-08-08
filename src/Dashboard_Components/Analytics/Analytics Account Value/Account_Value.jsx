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
      <h4>Account Value</h4>
  
      <select>
<option> 2022</option>
<option> 2021</option>
<option> 2020</option>
<option> 2019</option>
<option> 2018</option>
<option> 2017 </option>
<option> 2016</option>

      </select>
    </div>
<div className = "urcrypto_dashboard_analytics_charts">
<ResponsiveContainer height="80%" width="100%"  className="urcrypto_dashboard_analytics_charts_container" >
<BarChart   width={"100%"}
        height={"100%"} data={data}>
  <XAxis dataKey={"date"}
   tickLine={false}
          tickaxisLine={false}
          axisLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getMonth() % 6 === 0) {
              return format(date, "MMM");
            }
          }}
          stroke="#2725e7"
   />

  <Tooltip cursor={false}   viewBox={{ width: 0, height: 0 }}
          content={<CustomTooltip />} />
  <Bar  className='urcrypto_dashboard_analytics_account_value_charts_bar_bar'   barSize={30}
          radius={[20, 20, 0, 0]}
          dataKey="value"
          fill="#2725e7"
          stroke="#fff"
          background={false} 
            
          />
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
      <div className="urcrypto_dashboard_analytics_account_value_charts_bar_tooltip">
        <p> ${millify(payload[0].value.toFixed(2))} USD </p>
      </div>
    );
  }
}