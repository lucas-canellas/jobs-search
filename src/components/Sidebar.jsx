import React from "react";
import { BiWorld } from "react-icons/bi";

function Sidebar({ getLocation }) {
  return (
    <div className="col-span-6 sm:col-span-2">
      <div className="flex items-center gap-3 mb-8">
        <input type="checkbox" name="" id="" />
        <p className="text-[#334680] font-bold text-sm">Full time</p>
      </div>
      <h3 className="text-[#B9BDCF] font-bold text-sm mb-3">LOCATION</h3>
      <div onChange={getLocation}>
        <input
          className="outline-none w-full rounded shadow h-12 mb-7"
          type="text"
          name=""
          id=""
        />
      </div>
      <div onChange={getLocation}>
        <div className="flex items-center gap-3 mb-4">
          <input type="radio" name="radAnswer" value="Rio de Janeiro" />
          <p className="text-[#334680] font-bold text-sm">Rio de Janeiro</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <input type="radio" name="radAnswer" value="São Paulo" />
          <p className="text-[#334680] font-bold text-sm">São Paulo</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <input type="radio" name="radAnswer" value="Minas Gerais" />
          <p className="text-[#334680] font-bold text-sm">Minas Gerais</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <input type="radio" name="radAnswer" value="Santa Catarina" />
          <p className="text-[#334680] font-bold text-sm">Santa Catarina</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
