import React from "react";
import { PieChart, Pie } from "recharts";
import "./Portfolio_Summary.css";
import Portfolio_Summary_Account from "./Portfolio_Summary_Account";
import { UilSearchPlus, UilEllipsisV } from "@iconscout/react-unicons";
const Portfolio_Summary = () => {
  return (
    <div className="urcrypto_dashboard_portfolio_summary">
      <div className="urcrypto_dashboard_portfolio_summary_container">
        <div className="urcrypto_dashboard_portfolio_summary_header">
          <h4> Buy with Your Credit Card</h4>
          <div className="urcrypto_dashboard_portfolio_summary_header_icons">
            <UilSearchPlus />
            <UilEllipsisV />
          </div>
        </div>

        <div className="urcrypto_dashboard_portfolio_summary_content">
          <div className="urcrypto_dashboard_portfolio_summary_content_description">
            <div>
              <h5> Account Balance</h5>
              <h1> 2.03505500 BTC </h1>
            </div>

            <div>
              <h5> Estimated Value</h5>
              <h1> $38000 </h1>
            </div>
          </div>
          <div className="urcrypto_dashboard_portfolio_summary_content_charts">
            <PieChart>
              <Pie data={[12, 12, 12]} />
            </PieChart>
          </div>
          <div className="urcrypto_dashboard_portfolio_summary_content_charts_account">
            <Portfolio_Summary_Account />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio_Summary;
