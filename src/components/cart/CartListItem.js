import React, { useState } from "react";
import CartListItemOption from "./CartListItemOptions";
import DefaultImage from "../../assets/images/logo.png";
import CartListItemOptionOne from "./CartListItemOptionOne";

const CartListItem = ({ cart }) => {
  const { drink, drink2, event, ingredient, menu, menuCount, price, side } = cart;
  const [orderCount, setOrderCount] = useState(menuCount);
  const plusOrderCount = () => setOrderCount(orderCount + 1);
  const minusOrderCount = () => orderCount > 1 && setOrderCount(orderCount - 1);
  return (
    <li className="my-6 px-16 pt-14 pb-8 bg-white drop-shadow ">
      <div className="pb-10 flex justify-between items-center border-b border-ededed">
        <label>
          <div className="relative grow mr-12">
            <p className="text-4xl font-black">{menu}</p>
            {/* <p className="text-xl mt-3 text-8d8d8d font-black">구성품 리스트 없으면 안 보임</p> */}
            <p className="text-3xl mt-3 font-black">{price}</p>
          </div>
        </label>
        <img src={DefaultImage} alt="상품 이미지" className="h-28" />
      </div>
      <ul className="py-8 border-b border-ededed border-dashed">
        {ingredient && ingredient.length > 0 && (
          <CartListItemOption kind="재료추가" option={ingredient} />
        )}
        {side && (
          <CartListItemOptionOne kind="사이드" name={side.sideName} price={side.sidePrice} />
        )}
        {drink && (
          <CartListItemOptionOne
            kind={drink ? "음료1" : "음료"}
            name={drink.drinkName}
            price={drink.drinkPrice}
          />
        )}
        {drink2 && (
          <CartListItemOptionOne kind="음료2" name={drink2.drinkName} price={drink2.drink2Price} />
        )}
        {event && (
          <CartListItemOptionOne kind="이벤트" name={event.eventName} price={event.eventPrice} />
        )}
      </ul>
      <div className="py-8 flex items-center">
        <div className="w-3/6 flex items-center">
          <span className="w-32 text-xl font-black">수량</span>
          <div className="drop-shadow-md">
            <button
              onClick={() => minusOrderCount()}
              className="w-10 h-10 text-xl font-black bg-d9d9d9 rounded-l"
            >
              -
            </button>
            <input
              type="text"
              className="w-12 h-10 text-xl font-black text-center bg-white outline-none"
              value={orderCount}
              readOnly
            />
            <button
              onClick={() => plusOrderCount()}
              className="w-10 h-10 text-xl font-black bg-d9d9d9 rounded-r"
            >
              +
            </button>
          </div>
        </div>
        <div className="w-3/6 flex justify-between items-center">
          <span className="text-xl font-black">합계금액</span>
          <span className="text-3xl text-bgwred font-black">{price * orderCount}</span>
        </div>
      </div>
    </li>
  );
};

export default CartListItem;