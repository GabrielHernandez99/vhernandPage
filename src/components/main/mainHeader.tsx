import React from "react";
import CommonNavbar from "../common/commonNavbar.tsx";

const mainHeader = () => {
  const navContent = [
    {
      name: "Home",
      link: "/home",
      active: true,
    },
    {
      name: "Features",
      link: "/features",
      active: false,
    },
    {
      name: "Pricing",
      link: "/pricing",
      active: false,
    },
    {
      name: "Disabled",
      link: "/disabled",
      active: false,
    },
  ]

  return (
    <div className="h-28 bg-slate-500 grid grid-cols-5 items-center px-10 w-full justify-center">
      <div>Logo Vhernand</div>
      <div className="flex justify-center col-span-3 w-full">
        <CommonNavbar navContent={navContent}/>
      </div>
      <div className="flex justify-end">mainHeader</div>
    </div>
  );
};

export default mainHeader;
