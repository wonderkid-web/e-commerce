"use client";

import React from "react";


// components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// columns
import { dataInput } from "../list-penjual/columns";

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

// image public
import Bg from "../../../../../public/logoo.jpg";
import Logo from "../../../../../public/logo.png";
import { useRouter } from "next/navigation";
import { addPenjual } from "@/action";
import Navbar from "@/components/layout/Navbar";


export default function Page() {
  const { handleSubmit, register, reset } = useForm();

  const router = useRouter()

  const onSubmit = async (formData) => {
    try {
      
      const res = await addPenjual(formData)
      
      if(res){
        reset()
        toast.success("berhasil di kirim");
        router.push('/admin/list-penjual')
      }
    } catch (error) {
      toast.error("Gagal mengirim data");
      toast.error(error.message);
    }
  };

  return (
    <>
      <Toaster />
      <Navbar />
      <div className=" grid grid-cols-[50%_50%] h-[100vh]  bg-white border">
        <div className=" p-16">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" p-8 shadow rounded-md"
          >
            <div className="text-center">
              <Image className="mx-auto" src={Logo} width={75} height={75} alt="Logo" />
              <span className=" text-2xl font-bold text-indigo-600">
                Jadilah penjual di M-Ecomerce!
              </span>
            </div>
            <span className=" text-xs text-slate-600">
              buat akun baru dan password pada form dibawah ini.
            </span>

            <div className="flex flex-col gap-2 mt-6">
              {dataInput.map((itemInput) => (
                <div className="" key={uuid()}>
                  <Label className=" text-slate-600">{itemInput.label}</Label>
                  <Input
                    type={itemInput.type}
                    name={itemInput.name}
                    placeholder={itemInput.placeholder}
                    className=" h-10"
                    {...register(itemInput.name)}
                  />
                </div>
              ))}
            </div>

            <div className=" mt-9">
              <Button className="w-full h-10 bg-indigo-600">Daftar</Button>
            </div>
          </form>
        </div>

        <div className="border overflow-hidden border-l-[1px] bg-white">
          <Image
            src={Bg}
            alt="pitcure 2 grid" 
          />
        </div>
      </div>
    </>
  );
}
