import React from "react";
import { UilEllipsisV } from "@iconscout/react-unicons";
import { parseISO, format, subMonths, subDays } from "date-fns";
import { millify } from "millify";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Tooltip,
  CartesianGrid,
} from "recharts";
import "./Profits.css";
const Profits = () => {
  const data = [];
  for (let num = 7; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substring(8,10),
      value1: 400 * Math.random() * 6.3277,
      value2: 320 * Math.random() * 6.3277,
    });
  }
  console.log(data)

  return (
    <div className="urcrypto_dashboard_analytics_profits">
      <div className="urcrypto_dashboard_analytics_profits_header">
        <div className="urcrypto_dashboard_analytics_profits_header_desc">
          <p>Profits</p>
          <h2>$13.2</h2>
        </div>
        <div className="urcrypto_dashboard_analytics_profits_header_icon">
          <UilEllipsisV />
        </div>
      </div>

      <div className="urcrypto_dashboard_analytics_profits_charts">
        <ResponsiveContainer
          width="100%"
          height="90%"
          className="urcrypto_dashboard_analytics_profits_charts_container"
        >
          <BarChart width="100%" height="90%" data={data}>
            <defs>
              <linearGradient id="chart1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="20%" stopColor="#5782db" stopOpacity={0.8} />
                <stop offset="80%" stopColor="#5130ff" stopOpacity={0.3} />
              </linearGradient>
              <linearGradient id="chart2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="20%" stopColor="#2d179c" stopOpacity={0.8} />
                <stop offset="80%" stopColor="#5767db" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <Bar />
            <Tooltip
              viewBox={{ width: 0, height: 0 }}
              cursor={false}
              id={0}
              content={<CustomTooltip />}
            />
            
            <XAxis tickLine={false}  dataKey="date"
              tickFormatter={(str) => {
                  const date = parseISO(str);
                  if (date.getDay()  === 4) {
                    return format(date, "eeee");
                  }
                }}
             />
            <YAxis tickLine={false}                 tickFormatter={(number) => `$${millify(number.toFixed(2))}`}  dataKey="value1" />
            <CartesianGrid vertical={false} strokeDasharray={"2"} />
            <Bar
              barSize={20}
              radius={[20, 20, 0, 0]}
              background={false}
              dataKey="value1"
              fill="#601edc9b"
            />
            <Bar
              dataKey="value2"
              barSize={20}
              radius={[20, 20, 0, 0]}
              background={false}
              fill="#2725e7"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Profits;

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="urcrypto_dashboard_analytics_account_value_charts_bar_tooltip">
        <p> ${millify(payload[0].value.toFixed(2))} USD </p>
      </div>
    );
  }
}
