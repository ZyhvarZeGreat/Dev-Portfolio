import React from "react";
import millify from "millify";
import { format, parseISO, subMonths } from "date-fns";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DynamicChart = () => {
  const data = [];
  for (let num = 11; num >= 0; num--) {
    data.push({
      date: subMonths(new Date(), num).toISOString().substring(5, 7),
      value: 400 * Math.random() * 6.3277,
    });
  }

  return (
    <ResponsiveContainer
      className="urcrypto_dashboard_statistics_charts_container"
      width="95%"
      height="95%"
    >
      <BarChart
        className="urcrypto_dashboard_statistics_charts_bar"
        width={"100%"}
        height={"100%"}
        data={data}
        
      >
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2725e7" stopOpacity={0.4}></stop>
            <stop offset="67%" stopColor="#2725e7" stopOpacity={0.02}></stop>
          </linearGradient>
        </defs>
        <Bar
          barSize={35}
          radius={[2, 2, 0, 0]}
          dataKey="value"
          fill="#2725e7"
          stroke="#fff"
          background={false}
        />
        <XAxis
          dataKey={"date"}
          tickLine={false}
          tickaxisLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getMonth() % 2 === 0) {
              return format(date, "MMM");
            }
          }}
          stroke="#2725e7"
        />
        <YAxis
          datakey="value"
          axisLine={false}
          tickLine={false}
          tickCount={5}
          tickFormatter={(number) => `$${millify(number.toFixed(2))}`}
        />
        <Tooltip cursor={false}
          viewBox={{ width: 0, height: 0 }}
          content={<CustomTooltip />}
        />
        <CartesianGrid  opacity={".3"} vertical={false} verticalFill="#e5e5e5" />
      </BarChart>
    </ResponsiveContainer>
  );

  function CustomTooltip({ active, payload, label }) {
    if (active) {
      return (
        <div className="urcrypto_dashboard_statistics_charts_bar_tooltip">
          <p> ${payload[0].value.toFixed(2)} USD </p>
        </div>
      );
    }
  }
};

export default DynamicChart;
