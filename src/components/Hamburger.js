import React from 'react'

function Hamburger() {
    return (
        <div className="hamburger__overlay">
            <div className="interest__link_container">
                <a href="/interest">Interest</a>
                <a href="/interest/goals">Goals</a>
                <a href="/interest/feed">Feed</a>
            </div>
        </div>
    )
}

export default Hamburger
