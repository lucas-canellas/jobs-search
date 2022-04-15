import React from "react";
import { BiWorld } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { parseISO } from "date-fns";

function CardJob({ job }) {
  return (
    <div className="flex bg-white rounded shadow p-3 gap-4 mb-8">
      <div>
        <img
          className="w-[90px] h-[90px] object-cover rounded max-w-none"
          src="/img/backgroundImg.png"
          alt="Imapgem empresa"
        />
      </div>
      <div className="flex w-full flex-col">
        <div>
          <p className="text-xs text-[#334680] font-bold">{job.company}</p>
          <h3 className="text-[#334680] font-normal text-lg mb-2">
            {job.title}
          </h3>
          <span className="rounded border border-[#334680] text-xs text-[#334680] font-bold px-2 py-1">
            Full time
          </span>
        </div>
        <div className="flex items-center gap-7  mt-4 lg:mt-0 lg:ml-auto">
          <div className="flex items-center gap-2">
            <BiWorld color="#B9BDCF" />
            <p className="text-[#B9BDCF] font-medium text-xs whitespace-nowrap">
              {job.location}
            </p>
          </div>
          {/* <div className="flex items-center gap-2">
            <AiOutlineClockCircle color="#B9BDCF" />
            <p className="text-[#B9BDCF] font-medium text-xs whitespace-nowrap">
              {formatDistance(subDays(new Date(), 1649816164), new Date(), {
                addSuffix: true,
              })}
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CardJob;
