import millify from 'millify';
import {Bitcoin,
    Tether,
    Binance,
    Polygon,
    Doge,
    Cardano,} from '../imageIndex'
const crypto_account_details = [
    {
        circle:"circle",
        image: "bitcoin.png",
        crypto_desc:"BTC",
        crypto_amount:2.0972722.toFixed(3)
    },
    {
        circle:"circle",
        image: "ethereum.png",
        crypto_desc:"ETH",
        crypto_amount: millify((2.0972722 * 23).toFixed(3))
    },{
        circle:"circle",
        image: "polygon.png",
        crypto_desc:"MATIC",
        crypto_amount: millify((2.0972722 * 13023).toFixed(3))
    },{
        circle:"circle",
        image: "dogecoin.png",
        crypto_desc:"Doge",
        crypto_amount: millify((2.0972722 * 213023).toFixed(3))
    },{
        circle:"circle",
        image: "cardano.png",
        crypto_desc:"ADA",
        crypto_amount: millify((6.0972722 * 23023).toFixed(3))
    },{
        circle:"circle",
        image: "binance.png",
        crypto_desc:"BNB",
        crypto_amount: millify((2.0972722 * 330).toFixed(3))
    },
];

export default crypto_account_details