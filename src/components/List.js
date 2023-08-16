import React from "react";

const List = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 px-10 mt-5">
      <div className="shadow">
        <img src="https://via.placeholder.com/200" alt="" className="w-full"/>
        <div className="p-2">
          <div className="flex justify-between">
            <h4>Movie title</h4>
            <div className="flex">Rating</div>
          </div>
          <p className="line-clamp-2">Description:</p>
        </div>
      </div>
    </div>
  );
};

export default List;
