import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="/image/Dress.svg" alt="" />
                <button>
                    <Link className='Link' to= "/products/1">Костюмы</Link>
                </button>
                </div>
                 <div className="row">
                    <img src="/image/Dress2.svg" alt="" />
                <button>
                    <Link className='Link' to= "/products/1">Юбки</Link>
                </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="/image/Dress3.svg" alt="" />
                <button>
                    <Link className='Link' to= "/products/1">Блузы</Link>
                </button>
                </div>
            </div>
            <div className="col l-col">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="/image/Dress4.svg" alt="" />
                        <button>
                            <Link className='Link' to= "/products/1">Платья</Link>
                        </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="/image/Dress5.svg" alt="" />
                        <button>
                            <Link className='Link' to= "/products/1">Брюки</Link>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="/image/Dress6.svg" alt="" />
                    <button>
                        <Link className='Link' to= "/products/1">Смокинги</Link>
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Categories