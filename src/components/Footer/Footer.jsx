import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="side1">
            <div className="item">
                <h1>ВАЖНОЕ</h1>
                <span>Доставка </span>
                <span>Оплата</span>
                <span>Возврат</span>
                <span>Примерка</span>
                <span>Контакты</span>
            </div>
            <div className="item">
                <h1>ССЫЛКИ</h1>
                <span>Магазины </span>
                <span>Адреса</span>
                <span>FAQ</span>
                <span>Печеньки</span>
                <span>Еще чета</span>
            </div>            
            <div className="item">
                <h1>КОНТАКТЫ</h1>
                <span>ТЕЛ.: 8 (495) 150-14-77</span>
                <span> WHATSAPP: +7 (977) 728-27-38</span>
                <span>EMAIL: info@eleanboutique.ru</span>
            </div>
            <div className="item">
                <h1>О НАС</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia recusandae molestiae blanditiis quasi tempora iste culpa minus similique sapiente, voluptas a quos ipsa repellat sint possimus ipsam. Odit, quod! </span>
            </div>
        </div>
        <div className="side2">
        <div className="left">
          <span className="logo">ELEAN</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/image/Group_1529.svg" alt="" />
        </div>
        </div>
    </div>
  )
}

export default Footer