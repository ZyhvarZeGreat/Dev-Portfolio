import React ,{useState} from 'react'
import './Dashboard_Home.css'
import {Link} from 'react-router-dom'
import {UilMoneyWithdrawal,UilWallet,UilMinusCircle,UilUniversity,UilDollarAlt,UilPlusCircle } from '@iconscout/react-unicons'
import Home_statistics_cards from './Home_statistics_cards'
import Dashboard_Home_Transactions from './Dashboard_Home_Transactions'
import { format, parseISO, subMonths, subYears } from "date-fns";
import DynamicChart from './DynamicChart';
const Dashboard_Home = () => {
  const [selectedyear,setSelectedYears] = useState("");
  const SelectedYearsHandler = data => setSelectedYears(data)
  const [chartData, setChartData] = useState({});
    const home_statistics_cards_data = [
        {
            id:1,
            icon:<UilWallet/>,
            description:"Balance",
            amount:"$40,000",
            bottom_icon:<UilPlusCircle/>,
            percentage:"+35.74%"

        },
        {
            id:2,
            icon:<UilMoneyWithdrawal/>,
            description:"Spending",
            amount:"$103,000",
            bottom_icon:<UilMinusCircle/>,
            percentage:"-10.39%"

        },
        {
            id:3,
            icon:<UilUniversity/>,
            description:"Saved",
            amount:"$15,284",
            bottom_icon:<UilPlusCircle/>,
            percentage:"+17.22%"

        },
        
    ]
    const home_statistics_cards_item = home_statistics_cards_data.map(({id,icon,description,amount,bottom_icon,percentage})=>{
        return(
            <Home_statistics_cards id={id} icon={icon} description={description} amount={amount} bottom_icon={bottom_icon} percentage={percentage}/>
        )
    })
    const data = [];
    for (let num = 5; num >= 0; num--) {
      data.push({
        date: subYears(new Date(), num).toISOString().substring(0,4),
        value:  400 * Math.random() * 6.3277
      });
    }
    console.log(data)
  
  return (
  
    <div className='urcrypto_dashboard_home'>
    <div className='urcrypto_dashboard_home_container'>
    <div className='urcrypto_dashboard_home_statistics'>
    <div className='urcrypto_dashboard_home_statistics_cards'>
    {home_statistics_cards_item}
    </div>
  <div className='urcrypto_dashboard_home_statistics_charts'>
  <div className='urcrypto_dashboard_home_statistics_charts_header'>
    <h3>Statistics</h3>

    <div className='urcrypto_dashboard_home_statistics_charts_dropdown'>
    <form>
      <select placeholder="Expenditure" name= "Expenditure">
<option className='urcrypto_dashboard_home_statistics_charts_dropdown_option' value = "Expenditure">Expenditure</option>
<option className='urcrypto_dashboard_home_statistics_charts_dropdown_option' value = "Expenditure">Income</option>
<option className='urcrypto_dashboard_home_statistics_charts_dropdown_option' value = "Expenditure">Saved</option>
      </select>
    </form>
    <form>
      <select value={selectedyear} onChange={(e) => SelectedYearsHandler(e.target.value)} placeholder='Year' name = 'Year'>
      <option className='urcrypto_dashboard_home_statistics_charts_dropdown_option' value = "Year">Year</option>
{!!data.date?.length && data.map(({date,index})=>{
  <option key={date} value={date}>
{date}
  </option>
})}
      </select>
    </form>
    </div>
    
  </div>
<DynamicChart/>
  </div>

  <div className='urcrypto_dashboard_home_statistics_transactions'>
  <div className='urcrypto_dashboard_home_statistics_transactions_header'>
    <h4>Trending Markets</h4>
    <Link to = '#'>
      View More Markets
    </Link>
  </div>
    <div className='urcrypto_dashboard_home_statistics_transactions_container'>

    </div>
  </div>
</div>

<div className='urcrypto_dashboard_home_transactions'>

<Dashboard_Home_Transactions/>
</div>
    </div>


    
    </div>
  )
}

export default Dashboard_Home