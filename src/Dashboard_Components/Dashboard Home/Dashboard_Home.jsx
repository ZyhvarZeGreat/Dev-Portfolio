import React ,{useState} from 'react'
import './Dashboard_Home.css'
import {UilMoneyWithdrawal,UilWallet,UilMinusCircle,UilUniversity,UilDollarAlt,UilPlusCircle } from '@iconscout/react-unicons'
import Home_statistics_cards from './Home_statistics_cards'
import { Bar} from 'react-chartjs-2';

import Dashboard_Home_Charts from './Dashboard_Home_Charts'
import Dashboard_Home_Transactions from './Dashboard_Home_Transactions'
const Dashboard_Home = () => {
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
  return (
    <div className='urcrypto_dashboard_home'>
    <div className='urcrypto_dashboard_home_container'>
    <div className='urcrypto_dashboard_home_statistics'>
    <div className='urcrypto_dashboard_home_statistics_cards'>
    {home_statistics_cards_item}
    </div>
  <div className='urcrypto_dashboard_home_statistics_charts'>


  </div>

  <div className='urcrypto_dashboard_home_statistics_transactions'>
    Transactions
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