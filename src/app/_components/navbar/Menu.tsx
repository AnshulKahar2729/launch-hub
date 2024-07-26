"use client";

import { useState } from "react";
import Link from "next/link";
import { aboutMenuList, communityMenuList, launchMenuList } from "./menulist";

const Menu = () => {
  const [showLaunchesMenu, setShowLaunchesMenu] = useState(false);
  const [showCommunityMenu, setShowCommunityMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  return (
    <div className="hidden lg:flex items-center relative">
      <div className="space-x-6 text-gray-600 text-sm flex items-center cursor-pointer">
        <div
          onMouseEnter={() => setShowLaunchesMenu(true)}
          onMouseLeave={() => setShowLaunchesMenu(false)}
          className="hover:text-[#ff6154] py-4"
        >
          Launches {showLaunchesMenu && <LaunchesMenu />}
        </div>

        <Link href={"/categories"} className="hover:text-[#ff6154]">
          Categories
        </Link>

        <div
          onMouseEnter={() => setShowCommunityMenu(true)}
          onMouseLeave={() => setShowCommunityMenu(false)}
          className="hover:text-[#ff6154] py-4"
        >
          Community {showCommunityMenu && <CommunityMenu />}
        </div>

        <div className="hover:text-[#ff6154] py-4">Advertise</div>

        <div
          onMouseEnter={() => setShowAboutMenu(true)}
          onMouseLeave={() => setShowAboutMenu(false)}
          className="hover:text-[#ff6154] py-4"
        >
          About {showAboutMenu && <AboutMenu />}
        </div>
      </div>
    </div>
  );
};

function LaunchesMenu() {
  return (
    <div className="border rounded-sm shadow-md bg-white absolute top-full text-gray-600">
      <div className="flex cursor-pointer p-4">
        <div className="flex flex-col items-start space-y-3">
          {launchMenuList.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-white p-1 rounded-sm shadow-sm">
                {item.icon}
              </div>
              <div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-xs w-60">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CommunityMenu() {
  return (
    <div
      className="    
          border
          border-gray-200
        rounded-sm
          shadow-md
          bg-white
          absolute
          top-full
          text-gray-600
          "
    >
      <div className="flex cursor-pointer">
        <div className="p-4 flex ">
          <div className="flex flex-col items-start space-y-3 ">
            {communityMenuList.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-white p-1 rounded-sm shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold">{item.title}</div>
                  <div className="text-xs w-48">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutMenu() {
  return (
    <div
      className="
    w-32
    border
    border-gray-200
  rounded-sm
    shadow-md
    bg-white
    absolute
    text-gray-600
    top-full"
    >
      <ul className="flex flex-col items-start p-4 space-y-2 cursor-pointer">
        {aboutMenuList.map((item, index) => (
          <div key={index} className="flex ">
            <div className="text-sm">{item.title}</div>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Menu;
