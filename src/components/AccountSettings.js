import React from 'react'

function AccountSettings() {
    return (
        <div className="settings_container">
            <div className="settings_input_container">
                <input type="text" className="account_settings_input" placeholder="Name"></input>
                <input type="text" className="account_settings_input" placeholder="Surname"></input>
                <input type="text" className="account_settings_input" placeholder="Email"></input>
                <input type="text" className="account_settings_input" placeholder="Phone Number"></input>
                <input type="text" className="account_settings_input" placeholder="Birth Date"></input>
                <input type="text" className="account_settings_input" placeholder="Location"></input>
                <input type="text" className="account_settings_input" placeholder="Password"></input>
                <input type="text" className="account_settings_input" placeholder="Repeat Password"></input>
            </div>
            <div className="account__btn_container">
                <button className="account_save_btn">SAVE</button>
            </div>
        </div>
    )
}

export default AccountSettings
