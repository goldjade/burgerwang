import { useState } from "react";
import { useDispatch } from "react-redux";
import { modifyAdress } from "../../../reducer/addressReducer";
import { getStore } from "../../../api/commonApi";
import { modifyStoreInfo } from "../../../reducer/storeInfoReducer";
const ModalCheckAddress = ({ closeModal }) => {
  const [addressRoad, setAddressRoad] = useState("대구 중구 중앙대로 394");
  const [addressJibun, setAddressJibun] = useState("대구 중구 남일동 109-2");
  const [addressDetail, setAddressDetail] = useState("제일빌딩 5층");
  const dispatch = useDispatch();
  const confirmAddress = async () => {
    const fullAddress = `${addressRoad ? addressRoad : addressJibun} ${addressDetail}`;
    await getStore(fullAddress)
      .then((storeData) => {
        const { status, message, store } = storeData;
        if (status) {
          const { seq, name } = store;
          dispatch(modifyAdress({ addressJibun, addressRoad, addressDetail }));
          dispatch(modifyStoreInfo({ storeSeq: seq, storeName: name }));
          closeModal();
        } else {
          alert(`${message} 다른 주소를 선택해 주세요.`);
        }
      })
      .catch((err) => {
        alert("에러가 발생하였습니다. 다시 시도해 주세요.");
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <div className="relative max-h-[530px] px-20 bg-white">
          <button
            onClick={() => closeModal()}
            className="absolute right-0 top-0 bg-icon-close bg-no-repeat bg-center w-24 h-24"
          ></button>
          <div className="flex flex-col justify-center items-center py-12">
            <p className="text-2xl text-bgwred font-black mb-8 pt-20 bg-icon-position bg-no-repeat bg-top">
              배달지 주소
            </p>
            <p className="text-3xl font-black text-center">{addressRoad}</p>
            <p className="text-3xl font-black text-center mb-8">{addressDetail}</p>
            <p className="text-2xl font-black border-t-2 pt-4 border-e5e5e5 border-dashed">
              위 배달지로 주문하시겠습니까?
            </p>
          </div>
        </div>
        <div className="flex w-full">
          <button className="w-3/6 px-4 py-4 bg-2e2e2e">
            <span className="text-white font-black text-3xl">배달지 변경</span>
          </button>
          <button onClick={() => confirmAddress()} className="w-3/6 px-4 py-4 bg-bgwred">
            <span className="text-white font-black text-3xl">예</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalCheckAddress;
