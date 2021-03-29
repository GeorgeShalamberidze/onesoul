import React, { useState } from 'react'
import "../cssContainer/Account.css"
import SecondNav from "./SecondNav"
import AccountOverview from "./AccountOverview"
import AccountSettings from "./AccountSettings"
import { MdAccountCircle } from "react-icons/md"


function Account() {
    const [overView, setOverView] = useState(true)
    const onClickOverview = () => setOverView(true)
    const onClickSettings = () => setOverView(false)
    return (
        <div>
            <SecondNav />
            <div className="account_container">
                <h2>User Profile</h2>
                <div className="account_wrapper">
                    <div className="account_size_adjust">
                        <section className="account_options">
                            <h3 onClick={() => onClickOverview()}>Overview</h3>
                            <h3 onClick={() => onClickSettings()}>Settings</h3>
                            <h3 onClick={() => window.location.href="/"}>Logout</h3>
                        </section>
                        <section className="account_option_display">
                            <div className="account_overview">
                                <div className="username_container">
                                    <MdAccountCircle />
                                    <h3>George Shalamberidze</h3>
                                    <span className="active-circle"></span>
                                </div>
                            </div>
                            <div className="invisible_account_line"></div>
                            <div className="option_container">
                                {overView ? <AccountOverview /> : <AccountSettings />}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
