import React, { useState } from 'react'
import SecondNav from "./SecondNav"
import feedItems from '../json objects/feedItems.json'
import chosenGoods from "../json objects/chosenGoods.json"
import JujunaOpened from './JujunaOpened'
import JujunaClosed from './JujunaClosed'


function Feed() {
    const [jujunaOpened, setJujunaOpened] = useState(false)

    const onClick = () => setJujunaOpened(prev => !prev)

    const items = []

    for (var i = 0; i < 4; i++) {
        items.push(feedItems)
    }

    return (
        <>
            <SecondNav />
            <div className="feed__container">
                <section className="left_section">
                    <div className="feed__left_container">
                        {items.map((item, idx) => {
                            return (
                                <div className={item.divName} key={idx}>
                                    <img src={item.src} alt={item.alt} />
                                    <div className="text_container">
                                        <p>{item.p}</p>
                                        <small>{item.small}</small>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

                <section className="middle_section">
                    <div className="feed__middle_container">
                        {jujunaOpened ?
                            <JujunaOpened
                                buttonState={onClick}
                                jujunaOpened={jujunaOpened}
                            />
                            :
                            <JujunaClosed
                                buttonState={onClick}
                                jujunaOpened={jujunaOpened}
                            />}
                    </div>
                </section>

                <section className="right_section">
                    <div className="feed__right_container">
                        <div className="chosen_goods">
                            <h3>შერჩეული პროდუქტები</h3>
                            <div className="product">

                                {chosenGoods.map((item, idx) => {
                                    return (
                                        <div className="chosen_item" key={idx}>
                                            <div className="img_description_price">
                                                <img
                                                    src={item.src}
                                                    alt="jujuna_image"
                                                />
                                                <div className="description_container">
                                                    <p>{item.name}</p>
                                                    <small>{item.weight}</small>
                                                </div>
                                            </div>
                                            <p>{item.price}</p>
                                            <div className="X">x</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="delivery">
                            <h3>ვის მოვატანინო</h3>
                            <div className="delivery_container">
                                <button className="delivery_button">Wolt</button>
                                <button className="delivery_button">Glovo</button>
                                <button className="delivery_button">Elvis</button>
                            </div>
                        </div>

                        <div className="frequency">
                            <h3>რა სიხშირით</h3>
                            <div className="frequency_container">
                                <button className="week">Weekly</button>
                                <button className="day">Daily</button>
                                <button className="month">Monthly</button>
                                <button className="Quarter">Quarterly</button>
                            </div>
                        </div>

                        <div className="subscription">
                            <h3>გამოწერა</h3>
                            <div className="subscription_container">
                                <p>Bill Monthly</p>
                                <p>$39<small>/month</small></p>
                            </div>

                            <div className="subscription_container">
                                <p>Bill Yearly</p>
                                <p>$390<small>/year</small></p>
                            </div>
                        </div>
                        <button className="subscribe-now">Subscribe Now</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Feed