import React from 'react'
import { Link } from 'react-router'

const Header = () => {
    return (
        <div>
            <Link to="/">Главная</Link>
            <br />
            <Link to="/about">О нас</Link>
            <br />
            <Link to="/service">Сервис</Link>
        </div>
    )
}

export default Header