import React from "react";
import "./Cashflow.css";
import { parseISO, format, subMonths } from "date-fns";
import { millify } from "millify";
import {UilCircle} from '@iconscout/react-unicons'
import {
  LineChart,
  Line,
  Tooltip,
  CartesianAxis,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
const Cashflow = () => {
  const data = [];
  for (let num = 11; num >= 0; num--) {
    data.push({
      date: subMonths(new Date(), num).toISOString().substring(5, 7),
      value: 400 * Math.random() * 6.3277,
      value2: 260 * Math.random() * 5.3277,
    });
  }
  return (
    <div className="urcrypto_dashboard_analytics_cashflow">
      <div className="urcrypto_dashboard_analytics_cashflow_header">
        <h4>Total Cashflow</h4>

        <div className="urcrypto_dashboard_analytics_cashflow_indicator">
          <p> Cash in </p>
          <svg height="20px" fill="#2725e7" viewBox="0 0  100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50"/>
</svg>

        <p> Cash out</p>
        <svg height="20px" fill="#bfbeeea0" viewBox="0 0  100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50"/>
</svg>
      </div>
      </div>

      <div className="urcrypto_dashboard_analytics_cashflow_chart">
        <div className="urcrypto_dashboard_analytics_cashflow_charts_container">
          <ResponsiveContainer
            height="80%"
            width="100%"
            className="urcrypto_dashboard_analytics_charts_container"
          >
            <LineChart width={"100%"} height={"100%"} data={data}>
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
              <CartesianGrid opacity={".3"} vertical={false} verticalFill="#e5e5e5" strokeDasharray="3 3"/>
              <XAxis
                id="0"
                dataKey={"date"}
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

              <YAxis
                tickLine={false}
                tickCount={5}
                tickaxisLine={false}
                axisLine={false}
                tickFormatter={(number) => `$${millify(number.toFixed(2))}`}
                strokeDasharray="4"
              />
              <Tooltip
                cursor={false}
                viewBox={{ width: 0, height: 0 }}
                content={<CustomTooltip />}
              />
                 <Tooltip
                cursor={false}
                viewBox={{ width: 0, height: 0 }}
                content={<CustomTooltip />}
              />
              <Line
                className="urcrypto_dashboard_analytics_charts_area"
              type="monotone"
                dataKey="value"
                stroke="url(#chart1)"
                strokeWidth="2"
    
              />
              <Line
   className="urcrypto_dashboard_analytics_charts_area"
                type="monotone"
                dataKey="value2"
                stroke="#2725e7"
                strokeWidth="2"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="urcrypto_dashboard_analytics_account_value_charts_bar_tooltip">
        <p> ${millify(payload[0].value.toFixed(2))} USD </p>
      </div>
    );
  }
}
export default Cashflow;
