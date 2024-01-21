"use client";

import React, { useRef, useState } from "react";

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

// icons
import { FaCamera } from "react-icons/fa";

// library
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { addProduk } from "@/action";
import Image from "next/image";

export default function Page() {
  const { handleSubmit, register, reset } = useForm();

  const fileInput = useRef(null);
  const router = useRouter();

  const onSubmit = async (data) => {
    const file = fileInput.current.files[0];
    // alert(JSON.stringify(file, null, 2))
    try {
      toast.loading(`Sedang mengupload foto kamu..`);
      const response = await fetch(`/api/avatar/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      });

      const { url } = await response.json();

      toast.success(`Upload foto sukses!`);
      toast.loading(`Mengirim data diri penjual ke server`);

      await addProduk({...data, gambar:url});

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
    <>
      <Toaster />
      <section className=" h-max bg-gradient-to-b from-indigo-800 to-whie">
        <div className=" border h-full flex justify-center p-7">
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
                  <Label className="-mt-4 text-slate-600">
                    Foto Produk
                  </Label>
                  <Input className="h-10" ref={fileInput} id="picture" type="file" />
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
    </>
  );
}
