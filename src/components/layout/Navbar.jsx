import ButtonLogout from "./ButtonLogout";
import Logo from "../../../public/logo.png"
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <div className="flex flex-wrap place-items-center">
      <section className="relative mx-auto">
        <nav className="flex justify-between bg-indigo-800 text-white w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <div className="text-3xl flex gap-2 justify-normal items-center font-bold font-heading" href="#">
              <Image src={Logo} height={65} width={65} alt="logo" /> E-Commerce Minta Kasih.
            </div>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 relative -left-4">
              <li>
                <Link className="hover:text-gray-200  p-2 rounded hover:bg-indigo-950" href="/admin/buat-akun">
                  Akun Penjual
                </Link>
              </li>
              <li>
                <Link className="p-2 rounded hover:text-gray-200  hover:bg-indigo-950" href="/admin/list-penjual">
                  List Penjual
                </Link>
              </li>
            </ul>
            <div className="hidden xl:flex items-center space-x-5">
              <ButtonLogout />
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}
