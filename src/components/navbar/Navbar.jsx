import React from 'react'
import ROUTES from '../routes/ROUTES'
import { NavLink } from 'react-router-dom'

import './Navbar.scss'

export default function Navbar() {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink to={ROUTES.HOME}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.BLOG}>Blog</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.WORKS}>Works</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
