import ButtonLogout from "./ButtonLogout";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function NavbarPembeli() {
  return (
    <nav className="flex py-2 justify-center bg-indigo-800 text-white w-screen">
      <div
        className="text-3xl flex gap-2 justify-normal items-center font-bold font-heading"
        href="#"
      >
        <Image src={Logo} height={65} width={65} alt="logo" /> My-Commerce.
      </div>
    </nav>
  );
}
