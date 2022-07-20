import millify from 'millify'
import { UilEllipsisH } from '@iconscout/react-unicons'
let btcAmount = 1.1 * Math.random ()  * 2.3232
let btcPrice = 19342.1 
let usdToBtcPrice =   btcAmount * btcPrice
let spotbtcAmount = 0.1  * Math.random() * btcAmount
let fiatbtcAmount = btcAmount - spotbtcAmount
let fiatbtcPrice = fiatbtcAmount * btcPrice
let spotbtcPrice = spotbtcAmount * btcPrice
let percentageIncrease =  0.01 * Math.random() *  usdToBtcPrice - spotbtcPrice /   fiatbtcPrice - spotbtcPrice / 100 
let percentageProfit =  (percentageIncrease)  /123
let Wallets_Balance_Cards_Data = [
  {
    heading:"Fiat and Spot Balance",
    btcAmount: `${ btcAmount.toPrecision(8) } BTC`,
    fiatAmount: `${ millify(  usdToBtcPrice)  } USD`,
    icon: <UilEllipsisH/>
  },
  {
    heading:"Fiat Balance",
    btcAmount: `${ fiatbtcAmount.toPrecision(8)  } BTC`,
    fiatAmount: `${ millify( fiatbtcPrice )  } USD`,
    icon: <UilEllipsisH/>
  },
  {
    heading:"Spot Balance",
    btcAmount: `${ spotbtcAmount.toPrecision(8)  } BTC`,
    fiatAmount: `${ millify( spotbtcPrice)  } USD`,
    icon: <UilEllipsisH/>
  },
  {
    heading:"24 Hour Changes",
    btcAmount: `${ millify(percentageIncrease ) } USD`,
    fiatAmount: `${ percentageProfit.toFixed(2)}  %`,
    icon: <UilEllipsisH/>
  },

]

console.log(Wallets_Balance_Cards_Data)
console.log(percentageIncrease)
export default Wallets_Balance_Cards_Data