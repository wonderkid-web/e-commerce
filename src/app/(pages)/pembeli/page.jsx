"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { unstable_noStore } from "next/cache";
import uuid from "react-uuid";
import Link from "next/link";
import logo from "/public/logo.png";

// getData
const getData = async () => {
  unstable_noStore();
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/create-product`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // If the response is successful, you can handle the result here
    const result = await response.json();

    return result;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Error:", error);
  }
};

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredData = data?.filter((item) =>
      item.nama_barang.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => (filter === "All" ? true : item.type === filter));

  function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  }

  return (
    <div className="!p-8">

      <form className="w-1/2 mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari Nama Produk Kamu..."
            value={searchTerm}
            onChange={handleSearchChange}
            required
          />
        </div>
      </form>

      <div className="flex justify-center my-4">
        {["All", "Minuman", "Makanan", "Busana", "Kerajinan Tangan"].map(
          (category) => (
            <button
              key={category}
              className={`mx-2 px-4 py-2 rounded ${
                filter === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-3 gap-5">
        {filteredData?.map((d) => (
          <div
            key={uuid()}
            className="hover:scale-105 transition relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
          >
            <div className="relative h-56">
              <Image
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                src={d.gambar || logo}
                alt="product image"
              />
            </div>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">
                  {d.nama_barang}
                </h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-xl font-bold text-slate-900">
                    {formatRupiah(d.harga)}
                  </span>
                </p>
                <p>
                  <span className="p-4 rounded-md text-white font-bold bg-indigo-900">
                    {d.Stok}
                  </span>
                </p>
              </div>
              <Link
                href={`/pembeli/produk/${d.id}`}
                className="flex items-center justify-center rounded-md bg-indigo-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
