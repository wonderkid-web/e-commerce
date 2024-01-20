"use client";

import React, { useEffect } from "react";

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
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function page({params:{id}}) {
  const { handleSubmit, register, reset, setValue } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/create-product/${id}`;

      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        body: JSON.stringify({ ...data }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // If the response is successful, you can handle the result here
      await response.json();
      reset();
      router.push("/penjual/list-produk");
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error("Error:", error);
    }
  };

  useEffect(()=>{
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/create-product/${id}`;


  },[])

  return (
    <section className=" h-max bg-gradient-to-b from-indigo-800 to-whie">
      <Toaster />
      <div className="h-full flex justify-center p-7">
        <form
          className=" shadow-md w-3/4 border rounded-xl p-7 bg-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className=" text-indigo-600 text-xl font-medium p-3 text-center border-b mx   -6">
            create product form admin
          </h1>

          {/* basic */}
          <div className=" mt-5 mx-6">
            <h2 className=" text-xl">Basic detail product</h2>

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
                <div className=" mr-[300px]">
                  <FaCamera className=" text-6xl text-indigo-800"/>
                </div>
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
