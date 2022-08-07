import Crypto_desc from "./Crypto_desc";
import {millify} from 'millify'
let btcAmount = 1.1 * Math.random ()  * 2.3232
let btcPrice = 19342.1 
let ethereumPrice = 1342
let binancePrice = 210
let litecoinPrice =  65
let ripplePrice = .3
let stellarPrice = .12
let chainlinkPrice = 13.2
let cardanoPrice = .7
let dogecoinPrice = .05
let bittorentPrice = .00572
let maticPrice = .8
let aavePrice = 120
let dashPrice = 79
let tronPrice = 0.07
let usdToBtcPrice =   btcAmount * btcPrice
let spotbtcAmount = 0.1  * Math.random() * btcAmount
let fiatbtcAmount = btcAmount - spotbtcAmount
let fiatbtcPrice = fiatbtcAmount * btcPrice
let spotbtcPrice = spotbtcAmount * btcPrice
let totalBalance = fiatbtcPrice 
let euroBalance = totalBalance / 1.6;
let poundsBalance = totalBalance / 1.2;
let BTCValue = usdToBtcPrice / btcPrice
let euroBTCValue = euroBalance / btcPrice
let poundsBTCValue = poundsBalance / btcPrice
let availableBalance = spotbtcPrice
let euroavailableBalance = spotbtcPrice / 1.2
let poundsavailableBalance = spotbtcPrice / 1.6

function priceCalculator(usdToBtcPrice,crypto_price ) {
return usdToBtcPrice / crypto_price 
}
function availableBalanceCalculator(usdToBtcPrice,crypto_price) {
return (usdToBtcPrice/crypto_price) - (usdToBtcPrice/  crypto_price) * .35
}
function inOrderBalanceCalculator(usdToBtcPrice,crypto_price) {

return  priceCalculator(usdToBtcPrice,crypto_price) - availableBalanceCalculator(usdToBtcPrice,crypto_price) 
}
console.log(inOrderBalanceCalculator(usdToBtcPrice,ethereumPrice))
 const crypto_table_data = [
  {
   heading: "Orders",
   first_row:<Crypto_desc icon="bitcoin" cryptoCurrencySymbol="BTC"  cryptoCurrency="Bitcoin" />,
   second_row:<Crypto_desc icon="ethereum" cryptoCurrencySymbol="ETH"  cryptoCurrency="Ethereum" />,
   third_row:<Crypto_desc icon="tether" cryptoCurrencySymbol="USDT"  cryptoCurrency="Tether" />,
   fourth_row:<Crypto_desc icon="binance" cryptoCurrencySymbol="BNB"  cryptoCurrency="Binance coin" />,
   fifth_row:<Crypto_desc icon="litecoin" cryptoCurrencySymbol="LTC"  cryptoCurrency="Litecoin" />,
   sixth_row:<Crypto_desc icon="xrp" cryptoCurrencySymbol="XRP"  cryptoCurrency="Ripple" />,
   seventh_row:<Crypto_desc icon="stellar" cryptoCurrencySymbol="XLM"  cryptoCurrency="Stellar" />,
   eigth_row:<Crypto_desc icon="chainlink" cryptoCurrencySymbol="LINK"  cryptoCurrency="Chainlink" />,
   ninth_row:<Crypto_desc icon="cardano" cryptoCurrencySymbol="ADA"  cryptoCurrency="Cardano" />,
   tenth_row:<Crypto_desc icon="dogecoin" cryptoCurrencySymbol="DOGE"  cryptoCurrency="Doge" />, 
  },

  {
    heading: "Open Orders",
   first_row:`${millify((priceCalculator(usdToBtcPrice,btcPrice).toFixed(2)))}`,
   second_row:`${millify(priceCalculator(usdToBtcPrice,ethereumPrice).toFixed(2))}`,
   third_row:`${millify(priceCalculator(usdToBtcPrice,1).toFixed(2))}`,
   fourth_row:`${millify(priceCalculator(usdToBtcPrice,binancePrice).toFixed(2))}`,
   fifth_row:`${millify(priceCalculator(usdToBtcPrice,litecoinPrice).toFixed(2))}`,
   sixth_row:`${millify(priceCalculator(usdToBtcPrice,ripplePrice).toFixed(2))}`,
   seventh_row:`${millify(priceCalculator(usdToBtcPrice,stellarPrice).toFixed(2))}`,
   eigth_row:`${millify(priceCalculator(usdToBtcPrice,chainlinkPrice).toFixed(2))}`,
   ninth_row:`${millify(priceCalculator(usdToBtcPrice,cardanoPrice).toFixed(2))}`,
   tenth_row:`${millify(priceCalculator(usdToBtcPrice,dogecoinPrice).toFixed(2))}`,
  },

  {
    heading: "Order History",
    first_row:`${millify(inOrderBalanceCalculator(usdToBtcPrice,btcPrice).toFixed(2))}`,
    second_row:`${millify(inOrderBalanceCalculator(usdToBtcPrice,ethereumPrice).toFixed(2))}`,
    third_row:`${millify(inOrderBalanceCalculator(usdToBtcPrice,1).toFixed(2))}`,
    fourth_row:`${millify(inOrderBalanceCalculator(usdToBtcPrice,binancePrice).toFixed(2))}`,
    fifth_row:`${millify(inOrderBalanceCalculator(usdToBtcPrice,litecoinPrice).toFixed(2))}`,
    sixth_row:`${millify(inOrderBalanceCalculator(usdToBtcPrice,ripplePrice).toFixed(2))}`,
    seventh_row:`${millify(inOrderBalanceCalculator(usdToBtcPrice,stellarPrice).toFixed(2))}`,
    eigth_row:`${millify(inOrderBalanceCalculator(usdToBtcPrice,chainlinkPrice).toFixed(2))}`,
    ninth_row:`${millify(inOrderBalanceCalculator(usdToBtcPrice,cardanoPrice).toFixed(2))}`,
    tenth_row:`${millify(inOrderBalanceCalculator(usdToBtcPrice,dogecoinPrice).toFixed(2))}`,
  
  },
  {
    heading: " Trade History",
    first_row:`${millify(BTCValue.toFixed(4))}`,
    second_row:`${millify(BTCValue.toFixed(4))}`,
    third_row:`${millify(BTCValue.toFixed(4))}`,
    fourth_row:`${millify(BTCValue.toFixed(4))}`,
    fifth_row:`${millify(BTCValue.toFixed(4))}`,
    sixth_row:`${millify(BTCValue.toFixed(4))}`,
    seventh_row:`${millify(BTCValue.toFixed(4))}`,
    eigth_row:`${millify(BTCValue.toFixed(4))}`,
    ninth_row:`${millify(BTCValue.toFixed(4))}`,
    tenth_row:`${millify(BTCValue.toFixed(4))}`,
  },

];

export default crypto_table_data

console.log (crypto_table_data);
