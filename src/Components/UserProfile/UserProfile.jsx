import React from "react";

const UserProfile = () => {
  return (
    <div className="flex w-full items-center justify-between p-3">
      <img
        className="inline-block h-14 w-14 rounded-full ring-2 ring-white col-2"
        src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
        alt=""
      />
      <div className="col-10  ps-3">
        <p className="fw-semibold">Avishek Sharma</p>
        <p className="text-[11px] text-gray-500"> ID: 1540563669</p>
        <p className="text-[10px] text-gray-500">Male , 21yr</p>
      </div>
    </div>
  );
};

export default UserProfile;
