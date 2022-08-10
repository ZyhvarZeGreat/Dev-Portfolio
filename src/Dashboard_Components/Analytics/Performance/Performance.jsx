import React from 'react'
import './Performance.css'
import millify from 'millify'
import { parseISO,format,subMonths } from 'date-fns'
import { ResponsiveContainer,XAxis,Bar,BarChart,Tooltip, } from 'recharts'
const Performance = () => {
  const data = [];
  for (let num = 11; num >= 0; num--) {
    data.push({
      date: subMonths(new Date(), num).toISOString().substring(5, 7),
      value: 400 * Math.random() * 6.3277,
    });
  }
  return (
    <div className='urcrypto_dashboard_analytics_performance'>
    
<div className='urcrypto_dashboard_analytics_performance_header'>
<h4>Portfolio Performance</h4>
    
</div>

<div className='urcrypto_dashboard_analytics_performance_charts_container'>
<div className = "urcrypto_dashboard_analytics_performance_charts">
<ResponsiveContainer height="80%" width="100%"  className="urcrypto_dashboard_analytics_performance_charts_container" >
<BarChart   width={"100%"}
        height={"100%"} data={data}>
  <XAxis dataKey={"date"}
   tickLine={false}
          tickaxisLine={false}
          axisLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getMonth() % 2 === 0) {
              return format(date, "MM");
            }
          }}
          stroke="#2725e7"
   />

  <Tooltip cursor={false}   viewBox={{ width: 0, height: 0 }}
          content={<CustomTooltip />} />
  <Bar   barSize={10}
          radius={[20, 20, 0, 0]}
          dataKey="value"
          fill="#2725e7"
          stroke="#fff"
          background={false} />
</BarChart>
</ResponsiveContainer>
</div>

<div className = "urcrypto_dashboard_analytics_performance_charts">
<ResponsiveContainer height="80%" width="100%"  className="urcrypto_dashboard_analytics_charts_container" >
<BarChart   width={"100%"}
        height={"100%"} data={data}>
  <XAxis dataKey={"date"}
   tickLine={false}
          tickaxisLine={false}
          axisLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDay() === 1 ) {
              return format(date, "MMM");
            }
          }}
          stroke="#2725e7"
   />

  <Tooltip cursor={false}   viewBox={{ width: 0, height: 0 }}
          content={<CustomTooltip />} />
  <Bar barSize={10}
          radius={[20, 20, 0, 0]}
          dataKey="value"
          fill="#2725e7"
          stroke="#fff"
          background={false} />
</BarChart>
</ResponsiveContainer>
</div>

</div>
    </div>
  )
}

export default Performance

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="urcrypto_dashboard_analytics_account_value_charts_bar_tooltip">
        <p> ${millify(payload[0].value.toFixed(2))} USD </p>
      </div>
    );
  }
}