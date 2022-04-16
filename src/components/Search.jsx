import React from "react";

function Search({ getKeyword }) {
  return (
    <div className="bg-auto bg-no-repeat bg-center bg-[url('/img/backgroundImg.png')] py-10 rounded-lg mb-11 px-4">
      <div className="bg-white rouded max-w-3xl w-full mx-auto flex p-1 rounded">
        <input
          className="outline-none w-full bg-transparent border-none appearance-none text-[#B9BDCF] text-xs font-normal"
          type="text"
          placeholder="Title, companies, expertise or benefits"
          onChange={getKeyword}
        />

        <button className="w-[146px] rounded bg-[#1E86FF] py-3.5 text-[#FFF] font-medium text-base ml-auto shrink-0">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
