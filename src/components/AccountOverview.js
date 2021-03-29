import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { AiFillStar } from "react-icons/ai"
import { BiCreditCard } from "react-icons/bi"

function AccountOverview() {
    return (
        <div className="overview_container">
            <div className="cart">
                <FaShoppingCart />
                <div className="overview_individual_wrapper">
                    <small>Food Delivered</small>
                    <p>26.450</p>
                </div>
            </div>
            <div className="star">
                <AiFillStar />
                <div className="overview_individual_wrapper">
                    <small>Satisfaction Rating</small>
                    <p>95%</p>
                </div>
            </div>
            <div className="card">
                <BiCreditCard />
                <div className="overview_individual_wrapper">
                    <small>Your Balance</small>
                    <p>$ 999.999</p>
                </div>
            </div>
        </div>
    )
}

export default AccountOverview
