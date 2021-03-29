import React, { useEffect } from 'react'
import "../cssContainer/Goals.css"
import Nav from './Nav'
import Hamburger from "./Hamburger"
import goalsItems from '../json objects/goalsItems.json'

function Goals() {
    const html = document.querySelector('html')
    const items = []

    for (var i = 0; i < 8; i++) {
        items.push(goalsItems)
    }

    useEffect(() => {
        html.style.backgroundColor = "#ebe1e14f"
    }, [html.style])

    return (
        <div className="goals__container">
            <Nav />
            <div className="interest__hero_container">
                <Hamburger />
                <div className="goals__grid_container">
                    <h1>Choose your top goals!</h1>
                    <small>Persub is here to help you improve your financial health. Select your top goals from the list to the right and then hit Continue.</small>
                    <div className="grid_items">
                        {items.map((itm, idx) => {
                            return <div
                                value={idx}
                                key={idx}
                                id={itm.divIdName}
                                className={itm.divClassName}
                                onClick={(e) => e.target.classList.toggle('selected_goals')}
                            >
                                {itm.h3}
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <button
                onClick={() => window.location.href = "https://georgeshalamberidze.github.io/onesoul/#/feed"}
                className="submit__interest ">Submit</button>
        </div>
    )
}
export default Goals
