'use client'

// icons

import { signOut } from 'next-auth/react'
import React from 'react'
import { IoLogOutOutline } from "react-icons/io5";

export default function ButtonLogout() {
  return (
    <div onClick={()=>signOut()} className='p-2 flex items-center gap-3 hover:cursor-pointer hover:bg-indigo-950 rounded-md bg-indigo-900 text-white'><IoLogOutOutline />Logout</div>
  )
}
