'use client'

import { signOut } from 'next-auth/react'
import React from 'react'

export default function ButtonLogout() {
  return (
    <div onClick={()=>signOut()} className='p-2 hover:cursor-pointer hover:bg-indigo-950 rounded-md bg-indigo-900 text-white'>Logout</div>
  )
}
