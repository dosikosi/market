import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className="cards">
        <div className="card">
            <Link className="link" to={`/product/:id`}>
                <div className="item">
                    <div className="image">
                        <img src="/image/Dress.svg" alt="" />
                    </div>
                    <h2>БЛУЗА</h2>
                    <div className="prices">
                        <h3>56$</h3>
                        <h3>34$</h3>
                    </div>
                </div>
            </Link>
            <Link className="link" to={`/product/:id`}>
                <div className="item">
                    <div className="image">
                        <img src="/image/Dress7.svg" alt="" />
                    </div>
                    <h2>ПЛАТЬЕ</h2>
                    <div className="prices">
                        <h3>100$</h3>
                        <h3>56$</h3>
                    </div>
                </div>
            </Link>
            <Link className="link" to={`/product/:id`}>
                <div className="item">
                    <div className="image">
                        <img src="/image/Dress2.svg" alt="" />
                    </div>
                    <h2>КОСТЮМ</h2>
                    <div className="prices">
                        <h3>566$</h3>
                        <h3>324$</h3>
                    </div>
                </div>
            </Link>
            <Link className="link" to={`/product/:id`}>    
                <div className="item">
                    <div className="image">
                        <img src="/image/Dress3.svg" alt="" />
                    </div>
                    <h2>СМОКИНГ</h2>
                    <div className="prices">
                        <h3>123$</h3>
                        <h3>56$</h3>
                    </div>
                </div>
            </Link>
            <Link className="link" to={`/product/:id`}>    
                <div className="item">
                    <div className="image">
                        <img src="/image/Dress4.svg" alt="" />
                    </div>
                    <h2>ШТАНЫ</h2>
                    <div className="prices">
                        <h3>54$</h3>
                        <h3>20$</h3>
                    </div>
                </div>
            </Link>
            <Link className="link" to={`/product/:id`}>
                <div className="item">
                    <div className="image">
                        <img src="/image/Dress5.svg" alt="" />
                    </div>
                    <h2>ТОПЫ</h2>
                    <div className="prices">
                        <h3>53$</h3>
                        <h3>23$</h3>
                    </div>
                </div>
            </Link>
            <Link className="link" to={`/product/:id`}>
                <div className="item">
                    <div className="image">
                        <img src="/image/Dress6.svg" alt="" />
                    </div>
                    <h2>ЖИЛЕТКИ</h2>
                    <div className="prices">
                        <h3>232$</h3>
                        <h3>89$</h3>
                    </div>
                </div>
            </Link>
            <Link className="link" to={`/product/:id`}>
                <div className="item">
                    <div className="image">
                        <img src="/image/Dress7.svg" alt="" />
                    </div>
                    <h2>ЮБКИ</h2>
                    <div className="prices">
                        <h3>231$</h3>
                        <h3>156$</h3>
                    </div>
                </div>
            </Link>    
        </div>
    </div>
  )
}

export default Card