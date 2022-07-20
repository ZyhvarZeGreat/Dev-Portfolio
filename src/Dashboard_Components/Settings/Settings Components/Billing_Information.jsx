import React, { useState} from 'react'
import './Billing_Information.css'
import {UilPlus} from '@iconscout/react-unicons'

import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";





const Billing_Information = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
const selectCountryHandler = (value) => setSelectedCountry(value);
const countryObj = countries.getNames("en", { select: "official" });

countries.registerLocale(enLocale);
const countryArr = Object.entries(countryObj).map(([key, value]) => {
  return {
    label: value,
    value: key,
  };
});
  return (
    <div className='urcrypto_dashboard_settings_billing_information'>
  <div className='urcrypto_dashboard_settings_billing_information_header'>
<h1>Payment method</h1>
<p>Update Your billing details and addresses</p>
</div>
    <div className='urcrypto_dashboard_settings_billing_information_container'>
  
<div className='urcrypto_dashboard_settings_billing_information_card_number_input'>
  <div className='urcrypto_dashboard_settings_billing_information_card_number_container'>
    <p>Card Details</p>

    <div className='urcrypto_dashboard_settings_billing_information_details'>
  <div className='urcrypto_dashboard_settings_billing_information_details_input'>
   <div className='urcrypto_dashboard_settings_billing_information_card_left_side'>
   <div className='urcrypto_dashboard_settings_billing_information_card_name_input'>
      <p>Name on Card</p>
      <input type='text' autoComplete='cc-name' placeholder='Name'/>
    </div>
    <div className='urcrypto_dashboard_settings_billing_information_card_name_input'>
      <p>Card Number</p>
      <input type='text' inputMode='numeric' autoComplete='cc-number' placeholder='Card Number'/>
    </div>
   </div>

   <div className='urcrypto_dashboard_settings_billing_information_card_right_side'>
   <div className='urcrypto_dashboard_settings_billing_information_card_name_input'>
      <p>Expiry</p>
      <input type='text' inputMode='numeric' autoComplete='cc-exp-month' placeholder="MM/YY"/>
    </div>

    <div className='urcrypto_dashboard_settings_billing_information_card_name_input'>
      <p>CVV</p>
      <input type='password' placeholder='CVV'/>
    </div>
   </div>
    
  </div>
    </div>
  </div>
</div>

<div className='urcrypto_dashboard_settings_billing_information_email_input'>
<div className='urcrypto_dashboard_settings_billing_information_email_input_header'>
<p>Email Address</p>
</div>

    <div className='urcrypto_dashboard_settings_billing_information_email_input_input'>
    <input type='text' placeholder='Email Address'/>
   <button className='urcrypto_dashboard_settings_billing_information_email_input-btn'>  
    <UilPlus/> 
    <p>
      Add Another
    </p>
    </button>
   
    </div>
</div>


<div className='urcrypto_dashboard_settings_billing_information_address_input'>
  <div className='urcrypto_dashboard_settings_billing_information_street_input'>
  <p>Street Address</p>
  <input type="text" placeholder="Street Address"/>
  </div>


  <div className='urcrypto_dashboard_settings_billing_information_address_city_input'>
    <p>City</p>
    <input type="text" placeholder="City"/>
  </div>

  <div className='urcrypto_dashboard_settings_billing_information_address_state_input'>
    <p>State/Province</p>
    <input type="text" placeholder="State"/>
    <input type="text"  placeholder="Zip Code"/>
  </div>

  <div className='urcrypto_dashboard_settings_billing_information_address_country_input'>
    <p>Country</p>
    <select value={selectedCountry} onChange={(e) => selectCountryHandler(e.target.value)} name="country" id="country">
{!!countryArr?.length && countryArr.map(({ label, value}) => (
  <option key={value} value={value}>
    {label}
  </option>
))} 
    </select>
  </div>
  
</div>    
    </div>

  </div>
  )
}

export default Billing_Information