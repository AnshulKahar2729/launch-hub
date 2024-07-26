"use client";

import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";

const Navbar = () => {
  const [authModalVisible, setAuthModalVisible] = useState(false);

  return (
    <div className="border-b py-2 px-4 md:px-6">
      <div className="flex justify-between items-center ">
        <div className="flex items-center">
          <Logo />
          <Search />
        </div>

        <div className="absolute right-1/2 translate-x-1/2 transform z-10">
          <Menu />
        </div>

        <div className="flex items-center text-sm space-x-6 cursor-pointer">
          {false ? (
            <>
              {/* <Submit
                products={products}
                authenticatedUser={authenticatedUser}
              />
              <NotificationIcon notifications={notifications} />
              <Avatar authenticatedUser={authenticatedUser} /> */}
            </>
          ) : (
            <div
              onClick={() => {
                setAuthModalVisible(true);
              }}
              className="flex items-center space-x-6 cursor-pointer text-sm"
            >
              <SignInButton />
              <SignUpButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
