import React, { useState } from 'react'
import SecondNav from "./SecondNav"
import "../cssContainer/ServicePage1.css"
import Modal from 'react-modal'

//JSON Objects
import Subscription from "../json objects/Subscription.json"
import ssp1 from "../json objects/ServiceSingleP1.json"
import sspModalObj from "../json objects/sspModalObject.json"
import sspModalObj2 from "../json objects/sspModalObject2.json"

function ServiceSinglePage() {
    const subs = []
    const [modal, setModal] = useState(false)

    for (var i = 0; i < 5; i++) {
        subs.push(Subscription)
    }

    const modalStyle = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.3)"
        }
    }

    return (
        <div className="ssp_container">
            <SecondNav />
            <div className="fee_container">
                {ssp1.map((item, idx) => {
                    return (
                        <div className={item.wrapper} key={idx}>
                            <div className={item.box} />
                            <div className={item.price}>
                                <h2>{item.h2}</h2>
                                <small>{item.small}</small>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h1>Subscriptions</h1>

            <div className="subscription_wrapper">
                <div className="category_container">
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Frequency</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subs.map((item, idx) => {
                                return (
                                    <tr key={idx} onClick={() => setModal(true)}>
                                        <td>{item.name}</td>
                                        <td>{item.category}</td>
                                        <td>{item.date}</td>
                                        <td>{item.frequency}</td>
                                        <td>{item.amount}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal
                className="ssp_modal"
                isOpen={modal}
                onRequestClose={() => setModal(false)}
                style={modalStyle}
            >
                <div className="ssp_modal_container">
                    <div className="top-section">
                        <div className="circle_terminal_wrapper">
                            <div className="modal_circle"></div>
                            <div className="terminal_co">
                                <h3>Terminal Co-Working</h3>
                                <small>Monthly Subscription</small>
                            </div>
                        </div>

                        <div className="unsubscribe">
                            <p>Unsubscribe</p>
                            <small>Unsubscription Policy</small>
                        </div>
                    </div>
                    <div className="invisible_modal_line">
                    </div>
                    <div className="bottom-section">
                        <div className="transaction_history">
                            <h2>Transaction History</h2>
                            <div className="ssp_modal_date_amount">
                                <p>Date</p>
                                <p>Amount</p>
                            </div>

                            {sspModalObj.map((item, idx) => {
                                return (
                                    <div className="transhistory" key={idx}>
                                        <p>{item.date}</p>
                                        <p>{item.amount}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="delivery_history">
                            <h2>delivery</h2>
                            <div className="ssp_modal_date_delivery">
                                <p>Date</p>
                                <p>Delivered By</p>
                            </div>

                            {sspModalObj2.map((item, idx) => {
                                return (
                                    <div className="delivery_wrapper" key={idx}>
                                        <p>{item.date}</p>
                                        <p>{item.delivery}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <button className="modal_close_btn" onClick={() => setModal(false)}>
                        X
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default ServiceSinglePage