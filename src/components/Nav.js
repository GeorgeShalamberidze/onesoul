import React from 'react'

function Nav() {
    const hamToggle = () => {
        const btn = document.querySelector('#hamburger')
        const overlay = document.querySelector('.hamburger__overlay')
        btn.classList.toggle('open')

        if (btn.classList.contains('open')) {
            overlay.style.display = "block"
        }
        else {
            overlay.style.display = "none"
        }
    }

    return (
        <div className="navbar-container">
            <nav id="nav">
                <h2 className="interest_h3">Persub</h2>
                <ul className="nav-items">
                    <li><a href="https://georgeshalamberidze.github.io/onesoul/#/interest">Interest</a></li>
                    <li><a href="https://georgeshalamberidze.github.io/onesoul/#/goals">Goals</a></li>
                    <li><a href="https://georgeshalamberidze.github.io/onesoul/#/feed">Feed</a></li>
                </ul>

                <a
                    href="#"
                    id="hamburger"
                    className="interest__hamburger hamburger_menu"
                    onClick={() => hamToggle()}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </nav>
        </div>
    )
}

export default Nav
