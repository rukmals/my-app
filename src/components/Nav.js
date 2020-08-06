import React, { Component } from 'react'

import './style.css';
export class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li className = "li"><a href="#home">Home</a></li>
                    <li className = "li"><a href="#news">News</a></li>
                    <li className = "li"><a href="#contact">Contact</a></li>
                    <li className = "li"><a class="active" href="#about">About</a></li>
                </ul>
            </div>
        )
    }
}
export default Nav;