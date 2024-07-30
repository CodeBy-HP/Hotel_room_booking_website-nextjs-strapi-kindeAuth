"use client";
import React, { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { FaCalendarCheck, FaHome, FaSignOutAlt } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Dropdown = ({ user }: { user: any }) => {
  const { picture, given_name, family_name } = user;
  const initials = `${given_name[0]}${family_name[0]}`;
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Check if the image URL is blank
    if (picture.includes("d=blank")) {
      setShowFallback(true);
    } else {
      // Check if the image actually loads
      const img = new Image();
      img.src = picture;
      img.onload = () => {
        if (img.width === 0 && img.height === 0) {
          setShowFallback(true);
        }
      };
      img.onerror = () => {
        setShowFallback(true);
      };
    }
  }, [picture]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
          {/* Avatar */}
          <Avatar>
            {/* Conditionally render AvatarImage or AvatarFallback */}
            {!showFallback ? (
              <AvatarImage src={picture} />
            ) : (
              <AvatarFallback className="bg-accent text-white">
                {initials}
              </AvatarFallback>
            )}
          </Avatar>
          {/* Name & Email */}
          <div>
            <div className="flex gap-1 font-bold">
              <p>{given_name}</p>
              <p>{family_name}</p>
            </div>
            <p className="text-sm font-semibold">{user.email}</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-72 mt-4 p-4 flex flex-col gap-2"
        align="start"
      >
        <DropdownMenuLabel className="text-base">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="flex flex-col gap-2">
          <Link href="/">
            <DropdownMenuItem>
              Homepage
              <DropdownMenuShortcut className="text-lg text-accent">
                <FaHome />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href="/dashboard">
            <DropdownMenuItem>
              My Bookings
              <DropdownMenuShortcut className="text-lg text-accent">
                <FaCalendarCheck />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <LogoutLink>
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut className="text-lg text-accent">
              <FaSignOutAlt />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </LogoutLink>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
