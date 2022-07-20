import React from "react";
import { Link } from "react-router-dom";
const Urcrypto_Card_Items = (props) => {
  return (
    <div className="urcrypto_dashboard_home_crypto_card_items">
    <button>
        <div className="urcrypto_dashboard_home_crypto_card_items_image">
          <img src={`../Images/${props.logo}`} style={{height:'4rem' , width:'auto'}} />
        </div>

        <div className="urcrypto_dashboard_home_crypto_card_items_description">
          <h3> {props.crypto} </h3>
          <p> {props.time} </p>
        </div>

        <div className="urcrypto_dashboard_home_crypto_card_items_cta">{props.arrow_img}</div>
      </button>
    </div>
  );
};

export default Urcrypto_Card_Items;
