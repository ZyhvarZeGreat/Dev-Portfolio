import React,{useState} from "react";
import "./Personal_Information.css";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
const Personal_Information = () => {
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
    <div className="urcrypto_personal_information">
      <div className="urcrypto_personal_information_header">
        <h1> Personal Information</h1>
      </div>
      <div className="urcrypto_personal_information_container">
        <div className="urcrypto_personal_information_content">
          <div className="urcrypto_personal_information_content_header">
            <h3>Profile</h3>
            <p>
              The information here will determine how your credentials are
              displayed
            </p>
          </div>

          <div className="urcrypto_personal_information_content_inputs">
            <div className="urcrypto_personal_information_content_name_inputs">
              <div className="urcrypto_personal_information_content_first_name_input">
                <h4> First Name</h4>
                <input type="text" />
              </div>
              <div className="urcrypto_personal_information_content_last_name_input">
                <h4> Last Name</h4>
                <input type="text" />
              </div>
            </div>

            <div className="urcrypto_personal_information_content_email_input">
              <h4> Email </h4>
              <input type="email" />
            </div>

            <div className="urcrypto_personal_information_content_description_input">
              <h4>About</h4>
              <input type="text" />
              <p>Brief Description of Your Profile</p>
            </div>
          </div>
        </div>
        <div className="urcrypto_personal_information_content_personal_information_input">
          <div className="urcrypto_personal_information_personal_information_header">
            <h3> Personal Information</h3>
            <p>This Information is what we will use to notify you</p>
          </div>

          <div className="urcrypto_personal_information_personal_information_input_container">
            <div className="urcrypto_personal_information_content_email_input">
              <h4> Email Address </h4>
              <input type="email" />
            </div>

            <div className="urcrypto_personal_information_content_number_input">
              <h4> Phone Number </h4>
              <input type="text" inputMode="numeric" />
            </div>

            <div className="urcrypto_personal_information_content_country_input">
              <h4> Country </h4>
    <select value={selectedCountry} onChange={(e) => selectCountryHandler(e.target.value)} name="country" id="country">
{!!countryArr?.length && countryArr.map(({ label, value}) => (
  <option key={value} value={value}>
    {label}
  </option>
))} 
    </select>
            </div>

            <div className="urcrypto_personal_information_content_language_input">
              <h4> Language </h4>
              <input type="email" />
            </div>
          </div>
        </div>
        <div className="urcrypto_personal_information_save_buttons">
          <div className="urcrypto_personal_information_save_buttons_container">
            <button
              className="urcrypto_personal_information_save_btn"
              type="submit"
              placeholder="Save"
            >
              Save
            </button>
            <button
              className="urcrypto_personal_information_cancel_btn"
              type="submit"
            >
              {" "}
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal_Information;
