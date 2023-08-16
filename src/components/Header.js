import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-white shadow-lg py-2 px-10 flex justify-between">
        <form
          action=""
          method="post"
          className="w-4/12 bg-gray-300 flex items-center px-3 rounded-lg"
        >
          <span class="material-symbols-outlined">search</span>
          <input
            type="text"
            className="border-0 outline-0 px-2 py-1 w-full bg-transparent"
            placeholder="Search"
          />
        </form>
        <button type="button">
          <span class="material-symbols-outlined">home</span>
        </button>
      </div>
    </>
  );
};

export default Header;
