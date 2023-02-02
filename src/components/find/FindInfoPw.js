/** @format */
import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ActiveBlackButton from '../base/ActiveBlackButton';
import PageName from '../base/PageName';
import FindPw from './FindPw';
import UserEmailId from '../base/UserEmailId';
import UserInfoType from '../base/UserInfoType';
import UserName from '../base/UserName';
import useInput from '../join/hook/useInput';
import { loginUser } from '../../reducer/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const FindInfoPw = () => {
  const a = useSelector((state) => state.user);
  console.log(a);

  const [joinName, userName] = useInput('윤민식');
  const [joinEmail, userEmail] = useInput('user002@email.com');

  const dispatch = useDispatch();

  const registFunc = async (e) => {
    e.preventDefault();

    if (!joinName) {
      return alert('이메일을 입력하세요.');
    }
    if (!joinEmail) {
      return alert('비밀번호를 입력하세요.');
    }
    console.log('입력된 내용', joinName, joinEmail);

    let params = {
      name: joinName,
      email: joinEmail,
    };

    axios
      .get('http://192.168.0.122:9898/api/member/pwd', params)
      .then((res) => {
        console.log(res.data.data.message);

        alert(res.data.data.message);
      })
      .catch((err) => {
        // 서버가 반응이 없다.
        console.log(err);
        alert('안됨');
      });
  };
  console.log('입력값', joinName, joinEmail);
  return (
    <div className="container max-w-6xl px-5 py-12">
      <Helmet>
        <title>비밀번호 찾기</title>
        <style>{'body {background:#f2ebe6;'}</style>
      </Helmet>
      <div className="container w-10/12">
        <PageName pagename={'아이디 / 비밀번호 찾기'} />
        <ul className="flex">
          <li className="pr-3 mb-4 font-JUA text-2xl">
            <Link to="/findinfoId" className={'text-black'}>
              아이디 찾기
            </Link>
          </li>
          <li className="pr-3 mb-4 font-JUA text-2xl">
            <Link
              to="/findinfoPw"
              className={'pb-1 text-bgwred border-b-4  border-bgwred'}
            >
              비밀번호 찾기
            </Link>
          </li>
        </ul>
        <div className="bg-white drop-shadow ">
          <p className="w-full bg-ededed px-16 py-6 text-xl">
            회원님의 정보(이메일)로 비밀번호 재설정을 위한 경로를 보내드립니다.
          </p>
          <div className="px-16 py-6 text-2xl pl-14">
            <div className="flex">
              <UserInfoType name={'이름'} />
              <UserName joinName={joinName} userName={userName} />
            </div>
            <div className="flex">
              <UserInfoType name={'이메일 주소'} />
              <UserEmailId
                emailId={'이메일 주소'}
                FindPw={FindPw}
                joinEmail={joinEmail}
                userEmail={userEmail}
              />
            </div>
            <ul className="text-lg pt-10 pl-6" style={{ listStyle: 'disc' }}>
              <li>
                가입 시 입력한 이메일로 비밀번호 재설정을 위한 경로가 발송
                됩니다.
              </li>
              <li>
                네이버, 카카오톡, 삼성앱카드, 애플아이디로 가입하신 회원님께서는
                해당 서비스에서 아이디/
                <br />
                비밀번호 찾기를 진행해 주세요
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-5" onClick={registFunc}>
        <ActiveBlackButton name={'비밀번호 찾기'} />
      </div>
    </div>
  );
};

export default FindInfoPw;