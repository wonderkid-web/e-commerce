import React from "react";

// library next
import Image from "next/image";
import Link from "next/link";

// components
import sepatu from "../../../../../../public/nike.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";

// react icons
import { IoBagCheckOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";

export default function page({ params: { id } }) {
  return (
    <div className=" p-10">
      <div className=" grid grid-cols-[40%_60%] border rounded-xl shadow-md">
        <div className=" p-5 my-7">
          <Image src={sepatu} width={600} height={600} alt="product" />
        </div>
        <div className=" p-9 bg-gray-50">
          <div className=" mt-9 flex gap-3 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <h1 className=" text-xl">Kitakalee.ID</h1>
          </div>
          <div className=" mt-10">
            <h1 className=" text-4xl">Sepatu nike ukuran XL reborn</h1>
          </div>
          <div className=" mt-9 flex items-center gap-4">
            <span className=" text-3xl">$38.90</span>
            <div className=" flex items-center gap-3">
              <svg
                className="w-9 h-9 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-9 h-9 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-9 h-9 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-9 h-9 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-9 h-9 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </div>
          <div className=" mt-7">
            <p className=" text-slate-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo cum
              eum voluptate ipsa. Alias eos molestias repellendus aut eligendi
              accusamus! Accusamus facilis, expedita a error fugit adipisci!
              Rem, quis! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Obcaecati, doloremque magni. Fugit laborum atque accusantium
              sint blanditiis placeat cum necessitatibus.
            </p>
          </div>
          <div className=" flex gap-5 mt-9">
            <Button className=" flex gap-3 h-10"><IoBagCheckOutline />Beli sekarang</Button>
            <Button className=" flex gap-3 h-10"><SlBasket /> Tambah ke keranjang</Button>
          </div>
          <div className=" mt-8">
            <span className=" text-slate-700">create by toko kita.ID @copyright</span>
          </div>
        </div>
      </div>
    </div>
  );
}
