import Wallets_Balance_List_Action_Buttons from "./Wallets_Balance_List_Action_Buttons";
import Crypto_desc from "./Crypto_desc";
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
   heading: "Crypto Balance",
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
   eleventh_row:<Crypto_desc icon="btt" cryptoCurrencySymbol="BTT"  cryptoCurrency="Bittorrent" />,
   twelveth_row:<Crypto_desc icon="aave" cryptoCurrencySymbol="AAVE"  cryptoCurrency="Aave" />,
   thirteenth_row:<Crypto_desc icon="polygon" cryptoCurrencySymbol="MATIC"  cryptoCurrency="Matic" />,
   fourteenth_row:<Crypto_desc icon="dash" cryptoCurrencySymbol="DASH"  cryptoCurrency="Dash" />,
   fifteenth_row:<Crypto_desc icon="tron" cryptoCurrencySymbol="TRX"  cryptoCurrency="Tron" />,
   
  },

  {
    heading: "Total",
  first_row:`${priceCalculator(usdToBtcPrice,btcPrice).toFixed(2)}`,
   second_row:`${priceCalculator(usdToBtcPrice,ethereumPrice).toFixed(2)}`,
   third_row:`${priceCalculator(usdToBtcPrice,1).toFixed(2)}`,
   fourth_row:`${priceCalculator(usdToBtcPrice,binancePrice).toFixed(2)}`,
   fifth_row:`${priceCalculator(usdToBtcPrice,litecoinPrice).toFixed(2)}`,
   sixth_row:`${priceCalculator(usdToBtcPrice,ripplePrice).toFixed(2)}`,
   seventh_row:`${priceCalculator(usdToBtcPrice,stellarPrice).toFixed(2)}`,
   eigth_row:`${priceCalculator(usdToBtcPrice,chainlinkPrice).toFixed(2)}`,
   ninth_row:`${priceCalculator(usdToBtcPrice,cardanoPrice).toFixed(2)}`,
   tenth_row:`${priceCalculator(usdToBtcPrice,dogecoinPrice).toFixed(2)}`,
   eleventh_row:`${priceCalculator(usdToBtcPrice,bittorentPrice).toFixed(2)}`,
   twelveth_row:`${priceCalculator(usdToBtcPrice,aavePrice).toFixed(2)}`,
   thirteenth_row:`${priceCalculator(usdToBtcPrice,maticPrice).toFixed(2)}`,
   fourteenth_row:`${priceCalculator(usdToBtcPrice,dashPrice).toFixed(2)}`,
   fifteenth_row:`${priceCalculator(usdToBtcPrice,tronPrice).toFixed(2)}`
   


  },

  {
    heading: "Available",
    first_row:`${availableBalanceCalculator(usdToBtcPrice,btcPrice).toFixed(2)}`,
    second_row:`${availableBalanceCalculator(usdToBtcPrice,ethereumPrice).toFixed(2)}`,
    third_row:`${availableBalanceCalculator(usdToBtcPrice,1).toFixed(2) }`,
    fourth_row:`${availableBalanceCalculator(usdToBtcPrice,binancePrice).toFixed(2) }`,
    fifth_row:`${availableBalanceCalculator(usdToBtcPrice,litecoinPrice).toFixed(2) }`,
    sixth_row:`${availableBalanceCalculator(usdToBtcPrice,ripplePrice).toFixed(2) }`,
    seventh_row:`${availableBalanceCalculator(usdToBtcPrice,stellarPrice).toFixed(2) }`,
    eigth_row:`${availableBalanceCalculator(usdToBtcPrice,chainlinkPrice).toFixed(2) }`,
    ninth_row:`${availableBalanceCalculator(usdToBtcPrice,cardanoPrice).toFixed(2)}`,
    tenth_row:`${availableBalanceCalculator(usdToBtcPrice,dogecoinPrice).toFixed(2) }`,
    eleventh_row:`${availableBalanceCalculator(usdToBtcPrice,bittorentPrice).toFixed(2)}`,
    twelveth_row:`${availableBalanceCalculator(usdToBtcPrice,aavePrice).toFixed(2) }`,
    thirteenth_row:`${availableBalanceCalculator(usdToBtcPrice,maticPrice).toFixed(2)}`,
    fourteenth_row:`${availableBalanceCalculator(usdToBtcPrice,dashPrice).toFixed(2)}`,
    fifteenth_row:`${availableBalanceCalculator(usdToBtcPrice,tronPrice).toFixed(2) }`
  },

  {
    heading: "In Order",
    first_row:`${inOrderBalanceCalculator(usdToBtcPrice,btcPrice).toFixed(2)}`,
    second_row:`${inOrderBalanceCalculator(usdToBtcPrice,ethereumPrice).toFixed(2)}`,
    third_row:`${inOrderBalanceCalculator(usdToBtcPrice,1).toFixed(2)}`,
    fourth_row:`${inOrderBalanceCalculator(usdToBtcPrice,binancePrice).toFixed(2)}`,
    fifth_row:`${inOrderBalanceCalculator(usdToBtcPrice,litecoinPrice).toFixed(2)}`,
    sixth_row:`${inOrderBalanceCalculator(usdToBtcPrice,ripplePrice).toFixed(2)}`,
    seventh_row:`${inOrderBalanceCalculator(usdToBtcPrice,stellarPrice).toFixed(2)}`,
    eigth_row:`${inOrderBalanceCalculator(usdToBtcPrice,chainlinkPrice).toFixed(2)}`,
    ninth_row:`${inOrderBalanceCalculator(usdToBtcPrice,cardanoPrice).toFixed(2)}`,
    tenth_row:`${inOrderBalanceCalculator(usdToBtcPrice,dogecoinPrice).toFixed(2)}`,
    eleventh_row:`${inOrderBalanceCalculator(usdToBtcPrice,bittorentPrice).toFixed(2)}`,
    twelveth_row:`${inOrderBalanceCalculator(usdToBtcPrice,aavePrice).toFixed(2)}`,
    thirteenth_row:`${inOrderBalanceCalculator(usdToBtcPrice,maticPrice).toFixed(2)}`,
    fourteenth_row:`${inOrderBalanceCalculator(usdToBtcPrice,dashPrice).toFixed(2)}`,
    fifteenth_row:`${inOrderBalanceCalculator(usdToBtcPrice,tronPrice).toFixed(2)}`
    
  },
  {
    heading: " BTC Value",
    first_row:`${(BTCValue).toFixed(4)}`,
    second_row:`${BTCValue.toFixed(4)}`,
    third_row:`${BTCValue.toFixed(4)}`,
    fourth_row:`${BTCValue.toFixed(4)}`,
    fifth_row:`${BTCValue.toFixed(4)}`,
    sixth_row:`${BTCValue.toFixed(4)}`,
    seventh_row:`${BTCValue.toFixed(4)}`,
    eigth_row:`${BTCValue.toFixed(4)}`,
    ninth_row:`${BTCValue.toFixed(4)}`,
    tenth_row:`${BTCValue.toFixed(4)}`,
    eleventh_row:`${BTCValue.toFixed(4)}`,
    twelveth_row:`${BTCValue.toFixed(4)}`,
    thirteenth_row:`${BTCValue.toFixed(4)}`,
    fourteenth_row:`${BTCValue.toFixed(4)}`,
    fifteenth_row:`${BTCValue.toFixed(4)}`
  },
  {
    heading: "Action",
    item:<Wallets_Balance_List_Action_Buttons/>,
    first_row:<Wallets_Balance_List_Action_Buttons/>,
    second_row:<Wallets_Balance_List_Action_Buttons/>,
    third_row:<Wallets_Balance_List_Action_Buttons/>,
    fourth_row:<Wallets_Balance_List_Action_Buttons/>,
    fifth_row:<Wallets_Balance_List_Action_Buttons/>,
    sixth_row:<Wallets_Balance_List_Action_Buttons/>,
    seventh_row:<Wallets_Balance_List_Action_Buttons/>,
    eigth_row:<Wallets_Balance_List_Action_Buttons/>,
    ninth_row:<Wallets_Balance_List_Action_Buttons/>,
    tenth_row:<Wallets_Balance_List_Action_Buttons/>,
    eleventh_row:<Wallets_Balance_List_Action_Buttons/>,
    twelveth_row:<Wallets_Balance_List_Action_Buttons/>,
    thirteenth_row:<Wallets_Balance_List_Action_Buttons/>,
    fourteenth_row:<Wallets_Balance_List_Action_Buttons/>,
    fifteenth_row:<Wallets_Balance_List_Action_Buttons/>
  },
];

export default crypto_table_data

console.log (crypto_table_data);
