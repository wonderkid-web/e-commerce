import React from "react";

// library next
import Image from "next/image";
import Link from "next/link";

// components
import sepatu from "../../../../../../public/nike.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// react icons
import { IoBagCheckOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";

const getProduk = async (id) => {
  const raw = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/create-product/${id}`
  );
  return raw.json();
};

function ubahAngka(stringAngka) {
  // Cek apakah stringAngka memiliki panjang lebih dari atau sama dengan 3
  if (stringAngka?.length >= 3) {
      // Cek apakah tiga digit pertama adalah '628'
      if (stringAngka?.substring(0, 3) === '628') {
          // Jika ya, tidak ada yang perlu diubah
          return stringAngka;
      } else {
          // Jika tidak, ubah tiga digit pertama menjadi '628'
          return '628' + stringAngka?.substring(3);
      }
  } else {
      // Jika panjang string kurang dari 3, kembalikan string tanpa perubahan
      return stringAngka;
  }
}

export default async function page({ params: { id } }) {
  const produk = await getProduk(id);

  const nomor_penjual = ubahAngka(produk.no_hp)

  const hubungiPenjual = (nomor) => {
    const template =
      `Hallo, Saya tertarik dengan produk: ${produk.nama_barang} yang ada di Website E-Commerce Minta Kasih, apakah masih tersedia?`.replace(
        / /g,
        "%20"
      );
    return `https://wa.me/${nomor}?text=${template}`;
  };

  function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  }

  return (
    <div className=" p-10">
      <div className="grid grid-cols-[40%_60%] border overflow-hidden rounded-xl shadow-md">
        <div className="relative h-[100%]">
          <Image
            src={produk.gambar || sepatu}
            fill
            alt="product"
            className="object-cover"
          />
        </div>
        <div className=" p-9 bg-gray-50">
          <div className=" mt-9 flex gap-3 items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://cdn.pixabay.com/photo/2017/03/29/04/09/shopping-icon-2184065_1280.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="capitalize text-xl">{produk.nama_penjual}</h1>
            </div>
            <div className="p-4 rounded-md bg-indigo-800 text-white font-bold">
              {produk.Stok}
            </div>
          </div>
          <div className=" mt-10">
            <h1 className=" text-4xl">{produk.nama_barang}</h1>
          </div>
          <div className=" mt-9 flex items-center gap-4">
            <span className=" text-3xl">{formatRupiah(produk.harga)}</span>
          </div>
          <div className=" mt-7">
            <p className=" text-slate-400">
              {produk.deskripsi}
            </p>
          </div>
          <div className=" flex gap-5 mt-9">
            <Link
              href={hubungiPenjual(produk.no_hp)}
              className="bg-indigo-800 items-center rounded-md px-4 text-white flex gap-3 h-10 hover:bg-indigo-950"
            >
              <IoBagCheckOutline />
              Hubungi Penjual?
            </Link>
          </div>
          <div className=" mt-8">
            <span className=" text-slate-700">
              create by E-Commerce Minta Kasih @copyright
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
