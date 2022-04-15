import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { useRouter } from "next/router";
import Link from "next/link";

function Job({ props }) {
  const router = useRouter();

  const { title, company, location, snippet } = router.query;
  console.log(title);

  router;
  return (
    <div className="container mx-auto px-2 md:px-0">
      <h1 className="text-2xl font-bold text-[#282538] py-8">
        Github <span className="font-light">Jobs</span>
      </h1>
      <div className="grid grid-cols-6 gap-4">
        <div className=" col-span-6 md:col-span-2">
          <Link href="/">
            <a>
              <p className="flex items-center gap-4 text-[#1E86FF] font-medium text-sm mb-9">
                <BsArrowLeft />
                Back to search
              </p>
            </a>
          </Link>
          <h3 className="text-[#B9BDCF] font-bold text-sm mb-4">
            HOW TO APPLY
          </h3>
          <p className="text-[#334680] font-medium text-sm w-[220px]">
            Please email a copy of your resume and online portfolio to
            <span className="text-[#1E86FF]"> wes@kasisto.com</span> & CC
            <span className="text-[#1E86FF]">eric@kasisto.com</span>
          </p>
        </div>
        <div className=" col-span-6 md:col-span-4">
          <div className="mb-8 flex items-center gap-4">
            <h1 className="text-[#334680] text-2xl font-bold ">{title}</h1>
            <span className=" whitespace-nowrap flex items-center shrink justify-center rounded border border-[#334680] text-xs text-[#334680] font-bold w-[63px] h-[26px]">
              Full time
            </span>
          </div>
          <div className="flex gap-3 mb-8">
            <img
              className="w-[42px] h-[42px] object-cover rounded max-w-none"
              src="/img/backgroundImg.png"
              alt="Imapgem empresa"
            />
            <div>
              <h3 className="text-[#334680] text-lg font-bold">{company}</h3>
              <div className="flex items-center gap-2">
                <BiWorld color="#B9BDCF" />
                <p className="text-[#B9BDCF] font-medium text-xs whitespace-nowrap">
                  {location}
                </p>
              </div>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: snippet }} />
        </div>
      </div>
    </div>
  );
}

export default Job;
