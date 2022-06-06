import { faPerson, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"

const Header = ({ CartItem }) => {
    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    })

    return (
        <>
            <section className='search'>
                <div className='container c_flex'>

                    <div className='icon f_flex width'>
                        <i className='icon-circle'><FontAwesomeIcon icon={faPerson} /> </i>
                        <div className='cart'>
                            <Link to='/cart'>
                                <i className='icon-circle'><FontAwesomeIcon icon={faCartShopping} /></i>
                                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
