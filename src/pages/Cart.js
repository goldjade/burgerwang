import { Helmet } from "react-helmet-async";
import ActiveButton from "../components/base/ActiveButton";
import ActiveBlackButton from "../components/base/ActiveBlackButton";
import CartList from "../components/cart/CartList";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <Helmet>
        <title>카트</title>
        <style>{"body {background:#f2ebe6;"}</style>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <h2 className="pb-4 font-JUA text-4xl">딜리버리 카트</h2>
        <CartList />
        <div className="px-16 py-8 bg-white drop-shadow">
          <p className="flex justify-between">
            <span className="text-3xl font-black">총 주문금액</span>
            <span className="text-3xl text-bgwred font-black">결제금액</span>
          </p>
        </div>
        <div className="flex justify-between items-center mt-8">
          <ul className="list-disc ml-4">
            <li>주문서를 작성하기 전에 선택하신 상품명, 수량 및 가격이 정확한지 확인해주세요.</li>
            <li> 해당매장의 주문배달 최소금액은 13,000원 입니다.</li>
          </ul>
          <div>
            <ActiveBlackButton name="메뉴 추가" />
            <Link to="/order">
              <ActiveButton name="주문하기" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
