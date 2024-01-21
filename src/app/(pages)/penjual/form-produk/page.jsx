"use client";

import React, { useState } from "react";

// components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";

// icons
import { FaCamera } from "react-icons/fa";

// library
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { addProduk } from "@/action";
import Image from "next/image";

export default function Page() {
  const { handleSubmit, register, reset } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await addProduk(data);

      toast.success("Berhasil menambah produk");
      router.push("/penjual/list-produk");
    } catch (error) {
      toast.error("gagal menambah produk");
      toast.error(error.message);
    }

    console.log(data);
  };

  // fungsi untuk foto

  const [foto, setFoto] = useState();
  const onChange = (e) => setFoto(URL.createObjectURL(e.target.files[0]));

  return (
    <section className=" h-max bg-white to-whie">
      <Toaster />
      <div className=" border h-full flex justify-center p-7">
        <form
          className=" shadow-md w-3/4 border rounded-xl p-7 bg-white"
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data" 
        >
          <h1 className="text-xl font-medium p-3 text-center border-b mx-6">
            create product form admin
          </h1>

          {/* basic */}
          <div className=" mt-5 mx-6">
            <h2 className=" text-xl">Basic detail product</h2>

            {/* one */}
            <div className=" flex items-center justify-between mt-5">
              <div className=" w-full">
                <Label className=" text-slate-600">Nama barang</Label>
                <Input
                  className="w-full h-10"
                  type="text"
                  placeholder="nama barang"
                  {...register("nama_barang")}
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
                <Label className=" text-slate-600">Stock</Label>
                <Input
                  type="number"
                  placeholder="stock"
                  className=" w-[380px] h-10"
                  {...register("stock")}
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
              <div>
                <Label className=" text-slate-600">Diskon</Label>
                <Input
                  type="number"
                  placeholder="Masukan diskon (optional)"
                  {...register("diskon")}
                />
              </div>
            </div>
          </div>

          {/* <div className="flex items-center justify-center mx-6 mt-8">
            <label
              for="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="" />
            </label>
          </div> */}

          {/* input foto */}
          {/* <Input type="file" id="" onChange={onChange} className=" mx-6 mt-7"/>
          {foto && <Image src={foto} alt="foto produk" width={100} height={100} /> } */}

          <div class="flex items-center justify-center mx-6 mt-7">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" onChange={onChange} />
            </label>
          </div>
          <div className=" mx-6 mt-1">
            {foto && <Image src={foto} alt="foto produk" width={500} height={500} className=" border rounded-xl" {...register('foto')} /> }
          </div>

          <div className=" p-6">
            <Button className=" mt-7 w-full h-10 bg-indigo-600" type="submit">
              Save and Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
