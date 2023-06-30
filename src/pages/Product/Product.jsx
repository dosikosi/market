import React, { useState } from "react";
import "./Product.scss";
import { AddShoppingCart, FavoriteBorder } from "@mui/icons-material";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [amount, setAmount] = useState(1);

  const images = ["/image/Dress.svg", "/image/Dress2.svg"];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>супер крутая вещь</h1>
        <span>200$</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          tempore reprehenderit fuga voluptatibus ipsam maiores, optio iusto
          ducimus, nemo illo fugit minima, accusamus quos eius explicabo sunt
          maxime pariatur nostrum?
        </p>
        <div className="amount">
          <button
            onClick={() => setAmount((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {amount}
          <button onClick={() => setAmount((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCart /> Добавить в корзину 
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorder/> Добавить в избранное
          </div>
        </div>
        <div className="info">
          <span>Размер: какой хотите</span>
          <span>Материал: высшее качество</span>
          <span>Дополнительная информация: не стирать на 40 градусах</span>
        </div>
        <hr />
        <div className="info">
          <span>ОПИСАНИЕ</span>
          <hr />
          <span>КОНТРОЛЬ КАЧЕСТВА</span>
          <hr />
          <span>ВОПРОСЫ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
