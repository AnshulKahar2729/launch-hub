import React from "react";
import Navbar from "./_components/navbar/Navbar";
import { auth } from "@/auth";

const Homelayout = async ({ children }: { children: React.ReactNode }) => {
    const authenticatedUser = await auth();
    console.log(authenticatedUser);
  
  return (
    <>
      <Navbar 
        authenticatedUser={authenticatedUser}
        
      />
      {children}
    </>
  );
};

export default Homelayout;
