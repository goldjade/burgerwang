import React from "react";
import UserBirthDate from "../base/UserBirthDate";
import UserGender from "../base/UserGender";
import UserInfoType from "../base/UserInfoType";
import styled from "./Join.module.css";

const JoinOptional = ({
  userGen,
  joinGen,
  birthYear,
  birthYearValue,
  birthMonth,
  birthMonthValue,
  birthDay,
  birthDayValue,
  chcheck,
  ch
}) => {
  return (
    <div className="mb-10">
      <h3 className="mb-4 pl-12 flex items-center bg-icon-check bg-no-repeat bg-left">
        <span className="font-JUA text-2xl">선택정보</span>
      </h3>
      <div className="bg-white drop-shadow  px-16 py-6 text-2xl">
        <div className="flex   pt-6">
          <UserInfoType name={"성별"} />
          <UserGender userGen={userGen} />
        </div>
        <div className="flex  pb-6">
          <UserInfoType name={"생년월일"} />
          <UserBirthDate
            birthYear={birthYear}
            birthYearValue={birthYearValue}
            birthMonth={birthMonth}
            birthMonthValue={birthMonthValue}
            birthDay={birthDay}
            birthDayValue={birthDayValue}
            chcheck={chcheck}
            ch={ch}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinOptional;
