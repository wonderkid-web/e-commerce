"use client";

import React, { useEffect, useRef } from "react";

// components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// columns
// import { dataInput } from "../list-penjual/columns";
import { dataInput } from "../../list-penjual/columns";

// icon
import { IoLogoGoogle } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

// library
import Image from "next/image";
import axios from "axios";
import { useForm } from "react-hook-form";
import uuid from "react-uuid";
import { Toaster, toast } from "sonner";

import Bg from "../../../../../../public/logoo.jpg";
import Logo from "../../../../../../public/logo.png";
import { useRouter } from "next/navigation";
import { addPenjual } from "@/action";
import Navbar from "@/components/layout/Navbar";

export default function Page({ params: { id } }) {
  const { handleSubmit, register, reset, setValue } = useForm();

  const router = useRouter();

  const fileInput = useRef(null)

  useEffect(() => {
    fetch(`https://65a8df6a219bfa371867d228.mockapi.io/akun/${id}`).then(
      (raw) =>
        raw.json().then((res) => {
          setValue("nama", res.nama);
          setValue("email", res.email);
          setValue("no_hp", res.no_hp);
          setValue("password", res.password);
        })
    );
  }, []);

  const onEditData = async (data) => {
    const file = fileInput.current.files[0];

    try {
      toast.loading(`Sedang mengupload foto kamu..`);
      const apiUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/akun/${id}`;

      const res = await fetch(`/api/avatar/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      });

      const { url } = await res.json();

      toast.success(`Upload foto sukses!`);
      toast.loading(`Mengirim data diri penjual ke server`);


      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        body: JSON.stringify({ ...data, gambar: url }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // If the response is successful, you can handle the result here
      await response.json();
      reset();
      router.push("/admin/list-penjual");
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Toaster />
      <Navbar />
      <div className=" grid grid-cols-[50%_50%] h-[100vh]  bg-white border">
        <div className=" p-16">
          <form
            onSubmit={handleSubmit(onEditData)}
            className=" p-8 shadow rounded-md"
          >
            <div className="text-center">
              <Image
                className="mx-auto"
                src={Logo}
                width={75}
                height={75}
                alt="Logo"
              />
              <span className=" text-2xl font-bold text-indigo-600">
                Jadilah penjual di M-Ecomerce!
              </span>
            </div>
            <span className=" text-xs text-slate-600">
              buat akun baru dan password pada form dibawah ini.
            </span>

            <div className="flex flex-col gap-2 mt-6">
              <div className="">
                <Label className=" text-slate-600">Nama lengkap anda</Label>
                <Input
                  type="text"
                  name="nama"
                  placeholder="masukan nama"
                  className=" h-10"
                  {...register("nama")}
                />
              </div>
              <div className="">
                <Label className=" text-slate-600">email anda</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="masukan email"
                  className=" h-10"
                  {...register("email")}
                />
              </div>
              <div className="">
                <Label className=" text-slate-600">Nomor Handphone / WA</Label>
                <Input
                  type="number"
                  name="no_hp"
                  placeholder="masukan no hp/wa anda"
                  className=" h-10"
                  {...register("no_hp")}
                />
              </div>
              <div className="">
                <Label className=" text-slate-600">Password anda</Label>
                <Input
                  type="text"
                  name="password"
                  placeholder="masukan password"
                  className=" h-10"
                  {...register("password")}
                />
              </div>
              <div>
                <Label className="mt-2 text-slate-600">
                  Foto Profile Penjual
                </Label>
                <Input ref={fileInput} id="picture" type="file" />
              </div>
            </div>

            <div className=" mt-9">
              <Button className="w-full h-10 bg-indigo-600">Update</Button>
            </div>
          </form>
        </div>

        <div className="border overflow-hidden border-l-[1px] bg-white">
          <Image src={Bg} alt="pitcure 2 grid" />
        </div>
      </div>
    </>
  );
}

// {
//   label: "Name",
//   name: "nama",
//   type: "text",
//   placeholder: "masukan nama",
// },
// {
//   label: "E-mail",
//   name: "email",
//   type: "email",
//   placeholder: "masukan email",
// },
// {
//   label: "Nomor Handphone / WA",
//   name: "no_hp",
//   type: "number",
//   placeholder: "Nomor HP atau Nomor WA yang aktif",
// },
// {
//   label: "Password",
//   name: "password",
//   type: "password",
//   placeholder: "masukan password",
// },
// ];
