import React from "react";
import "./Action.css";
import { Link } from "react-router-dom";
import bitcoin from "../../assets/bitcoin.png";
import ethereum from "../../assets/ethereum.png";
import terra from "../../assets/terra.png";
import {motion} from 'framer-motion'
const Action = () => {
  return (
    <div className="urcrypto_action">
      <div className="urcrypto_action_container">
        <div className="urcrypto_action_text_area">
        <div className="urcrypto_action_text_area_container">
        <h1>
            Join a new generation of <br /> investors
          </h1>
          <Link to="/Sign-up">Get Started</Link>
        </div>
         
        </div>
        <div className="urcrypto_action_image_area">
          <motion.img initial={{y:50}} whileInView={{y:0}} transition={{duration:2,type:'spring',bounce:'.5',repeat:Infinity,repeatDelay:.4,repeatType:'reverse'}} src={bitcoin} alt="CTA img" />
          <motion.img initial={{y:50}} whileInView={{y:0}} transition={{duration:2,type:'spring',bounce:'.5',repeat:Infinity,repeatDelay:.45,repeatType:'reverse'}} src={ethereum} alt="CTA img" />
          <motion.img initial={{y:50}} whileInView={{y:0}} transition={{duration:2,type:'spring',bounce:'.5',repeat:Infinity,repeatDelay:.5,repeatType:'reverse'}} src={terra} alt="CTA img" />
        </div>
      </div>
    </div>
  );
};

export default Action;
