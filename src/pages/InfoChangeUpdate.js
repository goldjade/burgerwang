/** @format */
import { Helmet } from 'react-helmet-async';
import React from 'react';
import PageName from '../components/base/PageName';
import UserInfoType from '../components/base/UserInfoType';
import ChangeButton from '../components/base/ChangeButton';
import JoinOptional from '../components/join/JoinOptional';
import { Link } from 'react-router-dom';

const InfoChangeUpdate = () => {
  return (
    <div>
      <Helmet>
        <title>회원정보 변경</title>
        <style>{'body {background:#f2ebe6;'}</style>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <div className="container w-9/12">
          <PageName pagename={'회원정보 변경'} />
          <h3 className="mb-4 pl-12 flex items-center bg-icon-out bg-no-repeat bg-left">
            <span className="font-JUA text-2xl">기본정보</span>
          </h3>
          <div className="bg-white drop-shadow">
            <div className="px-16 py-6 text-2xl">
              <div className=" flex items-center pb-6">
                <UserInfoType name={'이메일'} />
                <p className="w-full  font-black mr-2">User@email.com</p>
              </div>
              <div className="flex  items-center text-2xl pb-6">
                <UserInfoType name={'이름'} />
                <p className="w-full font-black mr-2">이름</p>
              </div>
              <div className="flex  items-center text-2xl pb-6">
                <UserInfoType name={'핸드폰'} />
                <div className="flex items-center w-full font-black">
                  <p className=" mr-4">010-000-0000</p>
                  <ChangeButton name={'변경'} />
                </div>
              </div>
            </div>
          </div>
          <JoinOptional />
          <center className=" pt-10">
            <button
              to="/PwChange"
              className="w-80 font-JUA bg-2e2e2e text-2xl text-white rounded-xl h-16 px-3"
            >
              비밀번호 변경
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default InfoChangeUpdate;
