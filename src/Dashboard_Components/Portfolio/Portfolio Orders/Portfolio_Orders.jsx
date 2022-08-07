import React from 'react'
import Portfolio_Orders_Balance_List from './Portfolio_Orders_List'
import crypto_table_data from './Table_Data'
import './Portfolio_Orders.css'
const Portfolio_Orders = () => {
  const order_table_items = crypto_table_data.map(({heading,first_row,second_row,third_row,fourth_row,fifth_row,sixth_row,seventh_row,eighth_row,ninth_row,tenth_row}) => {
    return (
      <Portfolio_Orders_Balance_List heading = {heading} first_row = {first_row} second_row = {second_row} third_row = {third_row} fourth_row = {fourth_row} fifth_row = {fifth_row} sixth_row = {sixth_row}   seventh_row={seventh_row}      eighth_row={eighth_row} ninth_row={ninth_row} tenth_row={tenth_row}   />
    )
  })
  return (
    <div className="urcrypto_dashboard_portfolio_orders">
    {order_table_items}
    </div>
  )
}

export default Portfolio_Orders
