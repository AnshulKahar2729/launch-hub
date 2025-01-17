import { signIn } from "next-auth/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const AuthModal = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-orange-600 text-3xl font-bold">LaunchHub</div>
        <div className="text-2xl font-medium py-4">
          See what&apos;s new in tech
        </div>
        <div className="text-md text-gray-600 w-4/5 mx-auto">
          Join our community of friendly folks discovering and sharing the
          latest product in tech
        </div>
      </div>

      <button
        onClick={() => signIn("google", { redirect: false })}
        className="border rounded-md py-2 mt-4 flex items-center gap-4 px-10"
      >
        <FcGoogle className="text-xl" />
        Sign in with Google
      </button>

      <button
        onClick={() => signIn("github", { redirect: false })}
        className="border rounded-md py-2 mt-4 flex items-center gap-4 px-10"
      >
        <FaGithub className="text-xl text-purple-800" />
        Sign in with Github
      </button>
    </div>
  );
};

export default AuthModal;
