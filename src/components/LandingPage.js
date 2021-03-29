import React, { useState } from 'react'
import "../cssContainer/Landing.css"
import Modal from 'react-modal'

Modal.setAppElement('#root')
const modalStyle = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.8)"
    }
}

function LandingPage() {
    const [modal, setModal] = useState(false)

    return (
        <div className="landing__container">
            <div className="landing-container">
                <div className="title-container">
                    <h2>Persub</h2>
                    <h1>Subscribe your daily needs</h1>
                    <p>Subscription Marketplace</p>
                </div>

                <div className="signin-container">
                    <h1>Sign in</h1>
                    <form>
                        <div className="form-control">
                            <input type="text" required className="input" placeholder="Email or Phone Number"></input>
                        </div>

                        <div className="form-control">
                            <input type="text" required className="input" placeholder="Password"></input>
                        </div>

                        <button
                            className="login-btn"
                            onClick={() => window.location.href="https://georgeshalamberidze.github.io/onesoul/#/interest"}
                        >LOG IN</button>

                        {/* MODAL */}
                        <Modal
                            className="modal"
                            isOpen={modal}
                            onRequestClose={() => setModal(false)}
                            style={modalStyle}
                        >
                            <div className="modal-container">
                                <div className="title">
                                    <h2>Sign Up</h2>
                                    <small>It's quick and easy</small>
                                </div>
                                <div className="input-container">
                                    <div className="name-surname">
                                        <div className="modal-name-container">
                                            <input type="text" className="input name" placeholder="Name"></input>
                                        </div>

                                        <div className="modal-surname-container">
                                            <input type="text" className="input surname" placeholder="Surname"></input>
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <input type="text" className="input mobile-number" placeholder="Mobile number or Email"></input>
                                    </div>
                                    <div className="form-control">
                                        <input type="text" className="input new-password" placeholder="Create new password"></input>
                                    </div>
                                </div>
                                <button className="modal-btn" onClick={() => window.location.href="https://georgeshalamberidze.github.io/onesoul/#/interest"}>SIGN UP</button>
                            </div>
                        </Modal>
                        <a href="#" 
                            onClick={() => setModal(true)}
                        >
                            <p>CREATE NEW ACCOUNT</p></a>
                    </form>
                </div>
            </div>
            <div className="footer-container">
                <footer>
                    <p>&#169; 2021 Persub Inc, All Rights Reserved <a href="/">Privacy Policy</a> & <a href="/">Terms&Conditions</a></p>
                    <p className="author">Crafted by <a href="https://onesoul.io/" target="_blank">Onesoul</a></p>
                </footer>
            </div>
        </div>
    )
}

export default LandingPage
