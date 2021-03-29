import React, { useEffect } from 'react'
import "../cssContainer/Feed.css"
import { AiOutlineHome } from "react-icons/ai"
import { FaRegCalendarAlt } from "react-icons/fa"
import { MdAccountCircle } from "react-icons/md"

function SecondNav() {
    let html = document.querySelector('html')
    useEffect(() => {
        html.style.backgroundColor = "#ebe1e14f"
    }, [html.style])

    return (
        <div className="feed__nav__container">
            <nav id="feed__nav" className="feed__nav">
                <h2 
                    className="secondNav_h3"
                    onClick={() => window.location.href="/interest"}
                >Persub</h2>
                <div className="icon_container">
                    <a href="/feed"><AiOutlineHome /></a>
                    <a href="/service"><FaRegCalendarAlt /></a>

                </div>
                <div className="username_container" onClick={() => window.location.href="/account"}>
                    <MdAccountCircle />
                    <h3>George Shalamberidze</h3>
                    <span className="active-circle"></span>
                </div>
            </nav>
        </div>
    )
}

export default SecondNav