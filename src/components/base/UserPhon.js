/** @format */
import { useState, useEffect } from 'react';
import React from 'react';

const UserPhon = () => {
  const [joinPhon, setJoinPhon] = useState('');
  const userPhon = (e) => {
    setJoinPhon(e.target.value);
    console.log(joinPhon);
  };
  useEffect(() => {
    console.log('핸드폰', joinPhon);
  }, [joinPhon, setJoinPhon]);

  return (
    <div className="flex text-2xl w-full pb-6">
      <input
        className="w-full bg-underline bg-repeat-x bg-bottom outline-none"
        type="tel"
        placeholder="000-0000-0000"
        required
        onChange={(e) => userPhon(e)}
      />
    </div>
  );
};

export default UserPhon;
