import React, { useState } from 'react'
import "./Products.scss"
import { useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'

const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxPrice,setMaxPrice] = useState(1000);


  return (
    <div className="products">
      <div className="left">
        <div className="filter">
          <h2>Категории</h2>
          <div className="inputFilter">
            <input type="checkbox" id="1" value={1}/>
            <label htmlFor='1'>Новинки</label>
          </div>
          <div className="inputFilter">
            <input type="checkbox" id="2" value={2}/>
            <label htmlFor='2'>Акции</label>
          </div>
          <div className="inputFilter">
            <input type="checkbox" id="3" value={3}/>
            <label htmlFor='3'>Скидки</label>
          </div>
        </div>
        <div className="filter">
          <h2>Фильтровать по цене</h2>
          <div className="inputFilter">
            <span>0</span>
            <input type='range' min={0} max={10000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filter">
          <h2>Сортировать</h2>
          <div className="inputFilter">
            <input type='radio' id="asc" value="asc" name='price'/>
            <label htmlFor="asc">Актуальность</label>
          </div>
          <div className="inputFilter">
            <input type='radio' id="dfc" value="dfc" name='price'/>
            <label htmlFor="dfc">Цена</label>
          </div>
          <div className="inputFilter">
            <input type='radio' id="hjk" value="hjk" name='price'/>
            <label htmlFor="hjk">Дата</label>
          </div>
        </div>
      </div>
      <div className="right">
      </div>
      <Card/>
    </div>
  )
}

export default Products