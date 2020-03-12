import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navigations extends Component {
    render() {
        return (
            <div>
                <ul className="nav flex-column navbar-dark">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">locales</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Link</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Link</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Link</Link>
                    </li>
                   
                </ul>
            </div>
        )
    }
}
