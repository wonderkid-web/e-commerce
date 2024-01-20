import NavbarPenjual from '@/components/layout/NavbarPenjual'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
        <NavbarPenjual />
        {children}
    </div>
  )
}
