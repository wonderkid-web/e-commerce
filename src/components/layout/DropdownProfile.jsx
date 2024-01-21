"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ButtonLogout from "./ButtonLogout";
import {  useSession } from "next-auth/react";


export default function DropdownProfile() {

    const session = useSession()


  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
        {
            session?.data.user.gambar && <AvatarImage className="object-cover object-center" src={session?.data.user.gambar} alt="@shadcn" />
        }
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Keluar?</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            <ButtonLogout />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
