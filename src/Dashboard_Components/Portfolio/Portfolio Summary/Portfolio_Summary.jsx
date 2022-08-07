import React from "react";
import { PieChart, Pie } from "recharts";
import "./Portfolio_Summary.css";
import {millify} from 'millify'
import crypto_account_details from './crypto_account_details_data'
import Portfolio_Summary_Account from "./Portfolio_Summary_Account";
import { UilSearchPlus, UilEllipsisV } from "@iconscout/react-unicons";

const Portfolio_Summary = () => {
  const Portfolio_Summary_Account_items = crypto_account_details.map(({circle,image,crypto_desc,crypto_amount})=> {
    return (
      <Portfolio_Summary_Account circle={circle} image={image} crypto_desc={crypto_desc} crypto_amount={crypto_amount}/>
    )
  })
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
              <h1> { 2.03505500.toFixed(5)} BTC </h1>
            </div>

            <div>
              <h5> Estimated Value</h5>
              <h1>${millify(38000) }</h1>
            </div>
          </div>
          <div className="urcrypto_dashboard_portfolio_summary_content_charts">
            <PieChart>
              <Pie data={[12, 12, 12]} />
            </PieChart>
          </div>
          <div className="urcrypto_dashboard_portfolio_summary_content_charts_account">
          {Portfolio_Summary_Account_items}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio_Summary;
