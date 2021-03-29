import React from 'react'
import jujuna from "../images/jujuna.png"
import smallJujuna from "../images/smallJujuna.png"
import jujunaItem from "../json objects/jujuna.json"

function JujunaClosed({buttonState}) {

    const jujunaItems = []
    for (var i = 0; i < 6; i++) {
        jujunaItems.push(jujunaItem)
    }

    return (
        <div className="jujuna">
            <img src={jujuna} alt="jujuna_image" />
            <div className="feed__btn_container">
                <button className="weekly img-btn">Weekly</button>
                <button className="monthly img-btn">Monthly</button>
                <button className="early img-btn">Early</button>
            </div>
            <div className="rightSec">
                <div className="head">
                    <img
                        src={smallJujuna}
                        alt="jujuna_small"
                    />
                    <div className="jujuna_text">
                        <p>Jujuna</p>
                        <small>Sparkle Wine</small>
                    </div>
                </div>
                <div className="bottom">
                    <div className="feed__bottom-container">
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
                                        <p>{item.price}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <button
                        className="details-btn_closed"
                        onClick={() => buttonState()}
                    >
                        დეტალების ნახვა
                    </button>
                </div>
                <div className="location"
                        >
                    <p>Business located in Tbilisi, Georgia</p>
                </div>
            </div>
        </div>
    )
}

export default JujunaClosed