import { Session } from "next-auth";
import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { PiGear, PiHeart, PiPackage } from "react-icons/pi";
import Link from "next/link";
import { db } from "@/lib/db";
import { signOut } from "next-auth/react";

interface AvatarProps {
  authenticatedUser: Session | null;
}

const Avatar: FC<AvatarProps> = ({ authenticatedUser }) => {
  const handleMyUpvotes = () => {
    window.location.href = "/my-upvoted";
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Image
            src={authenticatedUser?.user?.image || ""}
            alt="avatar"
            width={50}
            height={50}
            className="rounded-full border h-8 w-8"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 space-y-1 p-2 text-gray-600">
          <DropdownMenuItem>
            <Link
              href="/my-products"
              className="flex gap-x-2 rounded-sm w-full cursor-pointer"
            >
              <PiPackage className="text-xl" />
              My Products
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div
              onClick={handleMyUpvotes}
              className="flex gap-x-2 rounded-sm w-full cursor-pointer"
            >
              <PiHeart className="text-xl" />
              Upvoted
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/settings"
              className="flex gap-x-2 rounded-sm w-full cursor-pointer"
            >
              <PiGear className="text-xl" />
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div onClick={() => signOut()}>Log out</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Avatar;
