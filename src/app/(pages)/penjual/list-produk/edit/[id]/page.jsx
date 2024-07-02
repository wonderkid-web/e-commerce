"use client";

import React, { useEffect, useRef, useState } from "react";

// components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// library
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";
import { editProduk } from "@/action";

export const revalidate = 0;

export default function Page({ params: { id } }) {
  const { handleSubmit, register, reset, setValue } = useForm();
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Makanan", "Minuman", "Kerajinan Tangan", "Busana"];

  const router = useRouter();

  const fileInput = useRef(null);

  const onSubmit = async (data) => {
    const file = fileInput.current.files[0];
    try {
      // alert(JSON.stringify(file, null, 2))
      toast.loading(`Sedang mengupload foto kamu..`);
      const res = await fetch(`/api/avatar/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      });

      const { url } = await res.json();

      toast.success(`Upload foto sukses!`);
      toast.loading(`Mengirim data diri penjual ke server`);

      // const response = await fetch(apiUrl, {
      //   method: "PUT",
      //   headers: {
      //     "Content-Type": "application/json",
      //     // Add any additional headers if needed
      //   },
      //   body: JSON.stringify({ ...data, gambar: url }),
      // });

      const response = await editProduk({ ...data, gambar: url, type:selectedOption }, id);
      if (response) {
        reset();
        toast.success("berhasil di kirim");
        router.push("/penjual/list-produk");
      }

      // If the response is successful, you can handle the result here
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error("Error:", error);
    }
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/create-product/${id}`, {
        cache:"no-store"
      }
    ).then((raw) =>
      raw.json().then((res) => {
        // console.log(res)
      
        setValue("nama_barang", res.nama_barang);
        setValue("alamat", res.alamat);
        setValue("harga", res.harga);
        setValue("Stok", res.Stok);
        setValue("no_hp", res.no_hp);
        setValue("ukuran", res.password);
        setValue("deskripsi", res.deskripsi);
        setValue("ongkir", res.ongkir);
        setValue("diskon", res.diskon);
        setSelectedOption(res.type)
      })
    );

    fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/create-product/`, {
        cache:"no-store"
      }
    ).then((raw) =>
      raw.json().then((res) => {
        console.log(res)
      })
    );
  }, []);

  return (
    <section className=" h-max bg-gradient-to-b from-indigo-800 to-whie">
      <Toaster />
      <div className="h-full flex justify-center p-7">
        <form
          className=" shadow-md w-3/4 border rounded-xl p-7 bg-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className=" text-indigo-600 text-xl font-medium p-3 text-center border-b mx   -6">
            Tambah Produk
          </h1>

          {/* basic */}
          <div className=" mt-5 mx-6">
            <h2 className=" text-xl">Detail Produk</h2>

            {/* one */}
            <div className=" flex items-center justify-between mt-5 ">
              <div>
                <Label className=" text-slate-600">Nama barang</Label>
                <Input
                  className="w-[380px] h-10"
                  type="text"
                  placeholder="nama barang"
                  {...register("nama_barang")}
                />
              </div>
              <div>
                <Label className="-mt-4 text-slate-600">Foto Produk</Label>
                <Input
                  className="h-10"
                  ref={fileInput}
                  id="picture"
                  type="file"
                />
              </div>
            </div>

            {/* two */}
            <div className=" mt-6">
              <div>
                <Label className=" text-slate-600">Alamat</Label>
                <Input
                  type="text"
                  placeholder="alamat"
                  className=" h-10"
                  {...register("alamat")}
                />
              </div>
            </div>

            {/* three */}
            <div className=" flex items-center justify-between mt-6">
              <div>
                <Label className=" text-slate-600">Harga</Label>
                <Input
                  type="number"
                  placeholder="Harga"
                  className=" w-[380px] h-10"
                  {...register("harga")}
                />
              </div>
              <div>
                <Label className=" text-slate-600">Stok</Label>
                <Input
                  type="number"
                  placeholder="Stok"
                  className=" w-[380px] h-10"
                  {...register("Stok")}
                />
              </div>
            </div>

            {/* four */}
            <div className=" flex items-center justify-between mt-6">
              <div>
                <Label className=" text-slate-600">no hp/wa</Label>
                <Input
                  className="w-[380px] h-10"
                  type="number"
                  placeholder="no_hp"
                  {...register("no_hp")}
                />
              </div>
              <div className="">
                <Label className=" text-slate-600">ukuran</Label>
                <Input
                  className="w-[380px] h-10"
                  type="text"
                  placeholder="ukuran barang"
                  {...register("ukuran")}
                />
              </div>
            </div>

            {/* five */}
            <div className=" mt-6">
              <Label className=" text-slate-600">deskripsi barang</Label>
              <Textarea
                placeholder="masukan deskripsi barang"
                {...register("deskripsi")}
              />
            </div>
          </div>

          {/* price */}
          <div className=" mt-8 border p-6 mx-6 rounded-md">
            <div className=" flex justify-between gap-2 ">
              <div>
                <Label className=" text-slate-600">Ongkir</Label>
                <Input
                  type="number"
                  placeholder="Masukan ongkir"
                  {...register("ongkir")}
                />
              </div>
              <div className="mt-4 border p-2 mx-6 rounded-md">
                <label htmlFor="selectInput">Pilih Kategori:</label>
                <select
                  id="selectInput"
                  value={selectedOption}
                  onChange={handleChange}
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="p-6">
            <Button className=" mt-7 w-full h-10 bg-indigo-600" type="submit">
              Simpan
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
