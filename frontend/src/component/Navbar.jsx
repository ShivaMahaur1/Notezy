import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow min-h-[64px]">
      {/* Left: Logo and Brand */}
      <div className="flex items-center space-x-3">
        {/* Logo Image */}
        <img
          src="/brain.png" // Use your actual logo path
          alt="Logo"
          className="h-16 w-16 rounded-full object-contain"
        />
        {/* Brand Name and Tagline */}
        <div className="flex flex-col">
          <span className="font-bold text-xl text-gray-900">StudyAI</span>
          <span className="text-xs text-gray-500">
            Your intelligent study companion
          </span>
        </div>
      </div>

      {/* Right: Notification and User/Profile/Login */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <IoMdNotificationsOutline className="h-6 w-6 text-gray-500" />
        </button>
        {/* User/Profile/Login */}
        <div className="relative group flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full cursor-pointer">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <>
              <span className="text-lg font-medium text-blue-600">
                <FaUserGraduate />
              </span>
              <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <SignInButton mode="modal">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                    Login
                  </button>
                </SignInButton>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;