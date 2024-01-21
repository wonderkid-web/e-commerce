import ButtonLogout from "./ButtonLogout";
import Logo from "../../../public/logo.png"
import Image from "next/image";
import Link from "next/link";

export default function NavbarPenjual() {
  return (
    <div className="flex flex-wrap place-items-center">
      <section className="relative mx-auto">
        <nav className="flex justify-between bg-indigo-800 text-white w-screen">
          <div className="px-5 xl:px-12 py-4 flex w-full items-center">
            <div className="text-lg font-medium flex gap-2 justify-normal items-center  font-heading" href="#">
              <Image src={Logo} height={30} width={30} alt="logo" /> my-Commerce.
            </div>
            <ul className="hidden md:flex px-4 mx-auto font-medium font-heading space-x-12 relative -left-4">
              <li>
                <Link className="hover:text-gray-200 transition-all  p-2 rounded hover:bg-indigo-950" href="/penjual/form-produk">
                  Tambah Produk
                </Link>
              </li>
              <li>
                <Link className="p-2 rounded hover:text-gray-200 transition-all  hover:bg-indigo-950" href="/penjual/list-produk">
                  Listing Produk
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
