import React from "react";
import "./Dashboard_Home_Transactions.css";
import Avatar_Carousel from "./Avatar_Carousel";
import Urcrypto_Card_Items from "./Urcrypto_Card_Items";
import bitcoin from "../../assets/bitcoin.png";
import ethereum from "../../assets/ethereum.png";
import { motion } from "framer-motion";
import {
  UilPlus,
  UilArrowRight,
  UilSync,
  UilAngleDown,
} from "@iconscout/react-unicons";
const Dashboard_Home_Transactions = () => {
  const avatar_data = [
    {
      img: "Avatar.jpg",
      alt: "Avatar",
    },
    {
      img: "Avatar.jpg",
      alt: "Avatar",
    },
    {
      img: "Avatar.jpg",
      alt: "Avatar",
    },
    {
      img: "Avatar.jpg",
      alt: "Avatar",
    },
    {
      img: "Avatar.jpg",
      alt: "Avatar",
    },
  ];
  const crypto_card_data = [
    {
      crypto: "Bitcoin",
      to: "#",
      logo: "bitcoin.png",
      time: "added 2days ago",
      arrow_img: <UilArrowRight />,
    },
    {
      crypto: "Ethereum",
      to: "#",
      logo: "ethereum.png",
      time: "added 2days ago",
      arrow_img: <UilArrowRight />,
    },
    {
      crypto: "Tron",
      to: "#",
      logo: "tron.png",
      time: "added 2days ago",
      arrow_img: <UilArrowRight />,
    },
    {
      crypto: "Terra",
      to: "#",
      logo: "terra.png",
      time: "added 1day ago",
      arrow_img: <UilArrowRight />,
    },
    {
      crypto: "Avalance",
      to: "#",
      logo: "avalanche.png",
      time: "added 1day ago",
      arrow_img: <UilArrowRight />,
    },
    {
      crypto: "Polygon",
      to: "#",
      logo: "polygon.png",
      time: "added 2days ago",
      arrow_img: <UilArrowRight />,
    },
    {
      crypto: "Aave",
      to: "#",
      logo: "aave.png",
      time: "added 2days ago",
      arrow_img: <UilArrowRight />,
    },
    {
      crypto: "Swipe",
      to: "#",
      logo: "swipe.png",
      time: "added 2days ago",
      arrow_img: <UilArrowRight />,
    },
  ];
  const crypto_card_items = crypto_card_data.map(
    ({ crypto, logo, time, arrow_img, to }) => {
      return (
        <Urcrypto_Card_Items
          crypto={crypto}
          logo={logo}
          time={time}
          arrow_img={arrow_img}
          to={to}
        />
      );
    }
  );
  const avatar_items = avatar_data.map(({ img, alt, index }) => {
    return <Avatar_Carousel img={img} alt={alt} index={index} />;
  });
  return (
    <div className="urcrypto_dashboard_home_transactions_wrapper">
    <div className="urcrypto_dashboard_home_transactions_header">
      <h1> kanknkemk</h1>
    </div>
      <div className="urcrypto_dashboard_home_transactions_container">
      
        <div className="urcrypto_dashboard_home_transactions_trade_card">

       
          <div className="urcrypto_dashboard_home_transactions_trade_card_header">
            <button className="urcrypto_dashboard_home_transactions_trade_card_header_buy">
              <p> Buy</p>
            </button>

            <button className="urcrypto_dashboard_home_transactions_trade_card_header_sell">
              <p> Sell</p>
            </button>
          </div>
          <div className="urcrypto_dashboard_home_transactions_trade_card_crypto_info">
            <p>Ethereum Price</p>
            <p> $3,110.31</p>
          </div>

          <div className="urcrypto_dashboard_home_transactions_trade_card_crypto_trade">
            <form className="urcrypto_dashboard_home_transactions_trade_card_crypto_trade_form">
              <input type="text" inputMode="numeric" placeholder="Bitcoin Price" />
              <button>
                <img src={bitcoin} alt="bitcoin" />
                <p> BTC </p>
                <UilAngleDown />
              </button>
            </form>

            {/* <button className="urcrypto_dashboard_home_transactions_trade_card_crypto_trade_switch_button">
            <UilSync/>
          </button> */}

            <form className="urcrypto_dashboard_home_transactions_trade_card_crypto_trade_form">
              <input type="text" inputMode="numeric" placeholder="Ethereum Price" />
              <button>
                <img src={ethereum} alt="ethereum" />
                <p> ETH </p>
                <UilAngleDown />
              </button>
            </form>
          </div>

          <div className="urcrypto_dashboard_home_transactions_trade_card_crypto_trade_button">
            <button>
              <p>Buy ETH</p>
            </button>
          </div>
        </div>

        <div className="urcrypto_dashboard_home_transactions_transfer_card">
        <div className="urcrypto_dashboard_home_transactions_transfer_card_container">
        <h2>Quick Transfer</h2>
        <div className="urcrypto_dashboard_home_transactions_transfer_card_crypto_transfer_avatar_images">
            {avatar_items}

            <div>
              <button>
                <UilPlus />
              </button>
            </div>
          </div>
          <div className="urcrypto_dashboard_home_transactions_transfer_card_form">
          <div className="urcrypto_dashboard_home_transactions_transfer_card_form_header">
          <p>Amount</p>
          </div>
    
            <div className="urcrypto_dashboard_home_transactions_transfer_card_form_input">
            <form>
            <input type="text" inputMode="numeric" />
            </form>
              
            </div>
          </div>
          <div className="urcrypto_dashboard_home_transactions_transfer_card_button">
            <button>
         <p> Transfer</p>
              <UilArrowRight />
            </button>
          </div>
          </div>
      
         
        </div>

        <div className="urcrypto_dashboard_home_transactions_new_crypto_card">
        <div className="urcrypto_dashboard_home_transactions_new_crypto_card_header">
            <h1>New Cryptocurrency</h1>
            <button>
              <p>See all </p>
            </button>
          </div>
        <div className="urcrypto_dashboard_home_transactions_new_crypto_card_container">
          <div className="urcrypto_dashboard_home_transactions_new_crypto_card_content">
            {crypto_card_items}
          </div>
        </div>
         
        </div>
      </div>
    </div>
  );
};

export default Dashboard_Home_Transactions;
