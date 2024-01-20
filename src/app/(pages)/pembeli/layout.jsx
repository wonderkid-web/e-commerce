import NavbarPembeli from "@/components/layout/NavbarPembeli";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <NavbarPembeli />
      {children}
    </div>
  );
}
