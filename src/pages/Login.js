/** @format */
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import BlindEyesButton from '../components/base/BlindEyesButton';
import ActiveButton from '../components/base/ActiveButton';
import ActiveBlackButton from '../components/base/ActiveBlackButton';
import { Link } from 'react-router-dom';
import UserEmailId from '../components/base/UserEmailId';
import UserPassword from '../components/base/UserPassword';
const Login = () => {
  //임시로 넣어둠 나중에 분리 예정
  const [pwType, setPwType] = useState({
    type: 'password',
    visible: false,
  });
  const handlePwType = (e) => {
    setPwType(() => {
      if (!pwType.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  };

  return (
    <div>
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <div className="container max-w-6xl px-5 py-12">
        <div className="container w-9/12">
          <h2 className="flex flex-col font-JUA pb-12 text-4xl ">
            <em className="not-italic text-bgwred">YOUR WAY</em>
            <span className="font-[BMJUA]">어서오세요! 버거왕입니다.</span>
          </h2>
          <h3 className="mb-4 pl-12 flex items-center h-10 bg-icon-key bg-no-repeat bg-left">
            <span className="font-JUA text-2xl">일반 로그인</span>
          </h3>

          <div className=" px-16 py-6 text-2xl pl-14">
            <div className="pb-10">
              <UserEmailId emailId={'이메일아이디'} />
              <UserPassword />
            </div>
            <div className="pb-6">
              <Link to="menu">
                <ActiveButton name={'로그인'} />
              </Link>
              <Link to="/join">
                <ActiveBlackButton name={'회원가입'} />
              </Link>
            </div>
            <ul className="flex font-JUA">
              <li className="mr-4">아이디 찾기</li>
              <li className="ml-4">비밀번호 찾기</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
