import React from "react";
import './Security.css'
const Security = () => {
  return (
    <div className="urcrypto_dashboard_settings_security">
      <div className="urcrypto_dashboard_settings_security_container">
        <div className="urcrypto_dashboard_settings_security_header">
          <h1>Password</h1>
          <p> Please enter your current password to change your password</p>
        </div>

        <div className="urcrypto_dashboard_settings_security_inputs">
          <div className="urcrypto_dashboard_settings_security_current_password_input">
          <h4>Current password</h4>
          <input type="password" />
          </div>
          <div className="urcrypto_dashboard_settings_security_new_password_input">
          <h4>New password</h4>
          <input type="password" />
          <p>Your New Password</p>
          </div>
          <div className="urcrypto_dashboard_settings_security_confirm_password_input">
          <h4>Confirm new password</h4>
          <input type="password" />
          </div>
        </div>
        <div className="urcrypto_dashboard_settings_security_update_password_buttons">
          <button type="button" className=" urcrypto_dashboard_settings_security_cancel_password_button">
            Cancel
          </button>
          <button type="submit" className=" urcrypto_dashboard_settings_security_save_password_button">
            Update password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;
