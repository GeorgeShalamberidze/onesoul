import React, { useState } from 'react'
import jujunaBig from "../images/jujunaBig.png"
import "../cssContainer/JujunaOpened.css"
import { AiFillStar } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"
import jujunaItem from "../json objects/jujuna.json"
import { MdAccountCircle } from "react-icons/md"

function JujunaOpened({ buttonState, JujunaOpened }) {
    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        if (counter >= 100) {
            setCounter(counter)
        }
        else {
            setCounter(counter => counter + 1)
        }
    }

    const decrementCounter = () => {
        if (counter <= 0) {
            setCounter(counter)
        }
        else {
            setCounter(counter => counter - 1)
        }
    }

    const jujunaItems = []
    for (var i = 0; i < 6; i++) {
        jujunaItems.push(jujunaItem)
    }

    return (
        <div className="jujuna_opened">
            <div className="image-container">
                <div className="image-text-container">
                    <button
                        className="details-btn_opened"
                        onClick={() => buttonState()}
                    >
                        {JujunaOpened ? "დეტალების ნახვა" : "X"}
                    </button>
                    <img src={jujunaBig} alt="jujuna_big_image" />

                    <div className="top-wrapper">
                        <h1>ჟუჟუნა</h1>
                        <div className="jujuna_alcohol">
                            <p>ალკოჰოლური სასმელი</p>
                            <p>გამოწერილი აქვს 23 ადამიანს</p>
                        </div>
                        <span className="invisible-line"></span>
                    </div>
                    <div className="bottom-wrapper">
                        <div className="stars-container">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>22 კომენტარი</p>
                    </div>
                </div>
            </div>

            <div className="feed__bottom-container">
                <h1>შერჩეული პროდუქტრი</h1>
                <div className="feed__jujuna-items">
                    {jujunaItems.map((item, idx) => {
                        return (
                            <div className="jujuna-item" key={idx}>
                                <div className="img_description_price">
                                    <img
                                        src={item.src}
                                        alt="jujuna_image"
                                    />
                                    <div className="description_container">
                                        <p>{item.description}</p>
                                        <small>{item.quantity}</small>
                                    </div>
                                </div>
                                <div className="counter_price" onClick={(e) => console.log(e.target)}>
                                    <div className="counter">
                                        <button className="minus"
                                            onClick={() => decrementCounter()}
                                        >-</button>
                                        <p>{counter}</p>
                                        <button className="plus"
                                            onClick={() => incrementCounter()}
                                        >+</button>
                                    </div>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="service_provider">
                <h1>სერვის მომწოდებელი</h1>
                <div className="wrapper">
                    <div className="username_container">
                        <div>
                            <MdAccountCircle />
                            <span className="active-circle"></span>
                        </div>
                        <div className="userName" onClick={() => window.location.href="https://georgeshalamberidze.github.io/onesoul/#/account"}>
                            <h3>George Shalamberidze</h3>
                            <small><em>Tbilisi, Georgia</em></small>
                        </div>
                    </div>
                    <div className="review">
                        <p className="expert">Expert</p>
                        <p>4 reviews</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default JujunaOpened
