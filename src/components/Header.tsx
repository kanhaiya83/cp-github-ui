"use client";
import { useEffect, useRef, useState } from "react";
import { firebaseAuth } from "@/config/firebase";
import { useRouter } from "next/navigation";
import React from "react";
import ProfilePopup from "./setting/ProfilePopup";
import { useCurrentUser } from "@/hooks/user";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const [isProfilePopupOpen, setIsProfilePopupOpen] = React.useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const queryClient = useQueryClient();

  const { user } = useCurrentUser();

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      setIsUserLoggedIn(!!user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleClick = async () => {
    if (!isUserLoggedIn) {
      router.push("/login");
    }
  };

  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsProfilePopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-black sticky top-0 z-30 text-white flex justify-between items-center py-6 px-14 border-b border-[#201e27]">
      {/* Logo Section */}
      <div
        onClick={() => router.push("/")}
        className="text-xl cursor-pointer font-bold flex flex-col"
      >
        <img src="/asset/logo.svg" alt="" />
      </div>

      {/* Button Section */}
<div className="flex gap-16 items-center hover:underline">
     <Link className="font-medium" href={"/datasets"}>Datasets</Link>
<div className="flex justify-center items-center gap-3">
        {!isUserLoggedIn && (
          <div className="inline-block p-[1px] rounded-[5px] bg-gradient-to-r from-blue-400 to-purple-500">
            <button
              onClick={handleClick}
              className="bg-black text-white px-6 py-2 rounded-[5px] hover:bg-[#333] transition"
            >
              Login
            </button>
          </div>
        )}
        <div className="flex relative  items-center justify-center gap-2 ">
          {user && isUserLoggedIn ? (
            <div
              className=" cursor-pointer"
              onClick={() => setIsProfilePopupOpen((prev) => !prev)}
            >
              <img
                src={user?.display_photo || "ass"}
                alt="Profile Icon"
                onError={(e) => {
                  console.error("Image failed to load:", e);
                }}
                onLoad={() => {
                  console.log("Image loaded successfully");
                }}
                className="object-contain rounded-full shrink-0 self-start aspect-square w-[52px]"
              />
            </div>
          ) : null}

          {isProfilePopupOpen && (
            <div className="absolute top-14 right-0" ref={popupRef}>
              <ProfilePopup setIsProfilePopupOpen={setIsProfilePopupOpen} />
            </div>
          )}
        </div>
        {/* <img src="/asset/logo.svg" alt="Logo" /> */}
      </div>
  </div>    </header>
  );
};

export default Header;
