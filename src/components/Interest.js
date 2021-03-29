import React, { useEffect } from 'react'
import "../cssContainer/Interest.css"
import Nav from './Nav'
import Hamburger from "./Hamburger"
import item from "../json objects/interestItems.json"

function Interest() {
    let html = document.querySelector('html')

    useEffect(() => {
        html.style.backgroundColor = "#ebe1e14f"
    }, [html.style])

    // Making json object 8x
    const items = []
    for (var i = 0; i < 8; i++) {
        items.push(item)
    }

    return (
        <div className="interest__container">
            <Nav />
            <div className="interest__hero_container">
                <Hamburger />
                <br></br>
                <br></br>
                <div className="interest__grid_container">
                    <h3>What's your interest</h3>
                    <div className="grid_items">
                        {items.map((itm, idx) => {
                            return <div
                                key={idx}
                                className={itm.divName}
                                onClick={(e) => e.target.classList.toggle('interest_selected')}
                            >
                                <img src={itm.src} alt={itm.alt} />
                                <p>{itm.p}</p>
                                <small>{itm.small}</small>
                            </div>
                        })}
                    </div>
                    <button
                        onClick={() => window.location.href = "/goals"}
                        className="submit__interest">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Interest