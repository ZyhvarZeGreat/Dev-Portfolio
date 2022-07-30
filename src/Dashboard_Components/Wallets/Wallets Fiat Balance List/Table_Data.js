import Wallets_Balance_List_Action_Buttons from "./Wallets_Balance_List_Action_Buttons";
import Fiat_desc from "./Fiat_desc";
let btcAmount = 1.1 * Math.random ()  * 2.3232
let btcPrice = 19342.1 
let usdToBtcPrice =   btcAmount * btcPrice
let spotbtcAmount = 0.1  * Math.random() * btcAmount
let fiatbtcAmount = btcAmount - spotbtcAmount
let fiatbtcPrice = fiatbtcAmount * btcPrice
let spotbtcPrice = spotbtcAmount * btcPrice
let totalBalance = fiatbtcPrice 
let euroBalance = totalBalance / 1.6;
let poundsBalance = totalBalance / 1.2;
let BTCValue = totalBalance / btcPrice
let euroBTCValue = euroBalance / btcPrice
let poundsBTCValue = poundsBalance / btcPrice

let availableBalance = spotbtcPrice
let euroavailableBalance = spotbtcPrice / 1.2
let poundsavailableBalance = spotbtcPrice / 1.6
const table_data = [
  {
    heading: "Fiat Balance",
    first_row: <Fiat_desc icon="icon" fiatCurrencySymbol = "USD" fiatCurrency = "US Dollars" />,
    second_row: <Fiat_desc icon="icon" fiatCurrencySymbol = "EUR" fiatCurrency = "Euros" />,
    third_row: <Fiat_desc icon="icon" fiatCurrencySymbol = "GBP" fiatCurrency = "British Pounds" />,
  },
  {
    heading: "Total",
    first_row: `$${totalBalance.toFixed(2)}`,
    second_row: `${euroBalance.toFixed(2)}`,
    third_row: `${poundsBalance.toFixed(2)}`,
  },

  {
    heading: "Available",
    first_row: `$${availableBalance.toFixed(2) }`,
    second_row: `${euroavailableBalance.toFixed(2) }`,
    third_row: `${poundsavailableBalance.toFixed(2)}`,
  },

  {
    heading: "In Order",
    first_row: `$${(totalBalance - availableBalance).toFixed(2)}`,
    second_row: `${(euroBalance - euroavailableBalance).toFixed(2) }`,
    third_row: `${(poundsBalance - poundsavailableBalance).toFixed(2)}`
  },
  {
    heading: " BTC Value",
    first_row: `${BTCValue.toFixed(4)}`,
    second_row: `${BTCValue.toFixed(4)}`,
    third_row: `${BTCValue.toFixed(4)}`,
  },
  {
    heading: "Action",
   first_row: <Wallets_Balance_List_Action_Buttons/>,
   second_row: <Wallets_Balance_List_Action_Buttons/>,
   third_row: <Wallets_Balance_List_Action_Buttons/>
  },
];

export default table_data;

console.log (table_data);

function itemloop (item) {
  for (let i = 0; i <= 16;  i.length++) {
return{
i
}
  }
} 
console.log (itemloop());