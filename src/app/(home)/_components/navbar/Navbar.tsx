"use client";

import AuthModal from "@/components/ui/modals/AuthModal";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Session } from "next-auth";
import { FC } from "react";
import Avatar from "./Avatar";
import NotificationIcon from "./NotificationIcon";

interface NavbarProps {
  authenticatedUser: Session | null;
}

const Navbar: FC<NavbarProps> = ({ authenticatedUser }) => {
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
          {authenticatedUser ? (
            <>
              {/* <Submit
                products={products}
                authenticatedUser={authenticatedUser}
              />
              notifications={notifications}
             
               */}
                <NotificationIcon  />
               <Avatar authenticatedUser={authenticatedUser} />
            </>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex items-center space-x-6 cursor-pointer text-sm">
                  <div className="text-gray-600">Sign in</div>
                  <div className="bg-[#ff6154] text-white text-center p-2 rounded-sm hover:bg-[#d45347]">
                    Sign up
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <AuthModal />
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
