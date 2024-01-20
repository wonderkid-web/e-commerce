'use client'

import React, { useState } from "react";

// components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// icon
import { IoLogoGoogle } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

// library
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

// image public
import Backround from "../../../../../public/ecomerce.png";

export default function page() {
  const [todoData, setTodoData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://65a8df6a219bfa371867d228.mockapi.io/api/todoapp/1/data-table",
        todoData
      );
      console.log("berhasil di kirim");
    } catch (error) {
      console.log("Gagal mengirim data" + error);
    }
  };

  const dataInput = [
    {
      label: "Name",
      name: "nama",
      type: "text",
      placeholder: "masukan nama",
      value: todoData.name,
    },
    {
      label: "E-mail",
      name: "email",
      type: "email",
      placeholder: "masukan email",
      value: todoData.email,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "masukan password",
      value: todoData.password,
    },
  ];

  return (
    <div className=" grid grid-cols-[50%_50%] h-[100vh]  bg-white border">


      <div className=" p-16">
      <Button>
        <Link href={"/admin/table"}>klik untuk melihat data table nya </Link>
      </Button>
        <form className=" p-8 shadow rounded-md">
          <div>
            <span className=" text-2xl font-bold text-indigo-600">
              Welcome To Myecomerce
            </span>
          </div>
          <span className=" text-xs text-slate-600">
            Registration create new account username & password
          </span>
          <div className=" mt-6">
            {dataInput.map((itemInput, index) => (
              <div className=" mt-4" key={index}>
                <Label className=" text-slate-600">{itemInput.label}</Label>
                <Input
                  type={itemInput.type}
                  name={itemInput.name}
                  placeholder={itemInput.placeholder}
                  className=" h-10"
                  value={itemInput.value}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <div className=" mt-9">
            <p className=" flex items-center gap-3 text-slate-600">
              create acount with
              <IoLogoGoogle />
              <FaFacebookSquare />
              <FaLinkedin />
            </p>
          </div>

          <div className=" mt-9">
            <Button className="w-full h-10 bg-indigo-600">Sign in </Button>
          </div>
        </form>
      </div>

      <div className=" bg-indigo-600 flex justify-center items-center">
        <div className="">
          <Image
            onClick={handleSubmit}
            src={Backround}
            width={500}
            height={500}
            alt="pitcure 2 grid"
            className=" bottom-0"
          />
        </div>
      </div>
    </div>
  );
}
