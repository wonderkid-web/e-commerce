'use client'

// icons

import { signOut } from 'next-auth/react'
import React from 'react'
import { IoLogOutOutline } from "react-icons/io5";

export default function ButtonLogout() {
  return (
    <div onClick={()=>signOut()} className=' flex items-center gap-3 hover:cursor-pointer'><IoLogOutOutline />Logout</div>
  )
}
