import React from "react";

const Follow_card = () => {
  return (
    <div className="w-[167px] border-1 rounded-lg pb-2 shadow-md   ">
      <div className="flex justify-center p-4 rounded-t-lg bg-pink-700 position-relative">
        <img
          className="inline-block h-14 w-14 rounded-full   shadow-md  position-absolute top-100 start-50 translate-middle"
          src="https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-6/373611637_2003925126646573_1171042221997763294_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xSKWcJhDLKYAX-OAg1U&_nc_ht=scontent.fccu20-1.fna&oh=00_AfATstk1Vb0wBDDQkL6xfUyJKEocXjqLzyDgZGZluHRkig&oe=652FA770"
          alt="user"
        />
      </div>
      <div className="text-center pt-5">
        <p className=" text-[14px] fw-semibold">Avishek Sharma</p>
        <p className="  text-[12px] text-gray-500">Author of the Designer</p>
        <div className=" text-[12px] text-pink-700 p-1 ">
          <i class="fa-solid fa-arrow-trend-up" />
          <span> Riser</span>
        </div>
        <p className="  text-[12px] text-gray-500">56k followers</p>
      </div>
      <div class="d-grid gap-2 ps-2 pe-2 pt-2">
        <button type="button" className="btn btn-success border-0  bg-lime-400">
          Follow
        </button>
      </div>
    </div>
  );
};

export default Follow_card;
