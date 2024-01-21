import React from "react";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { unstable_noStore } from "next/cache";
import { DataTablePenjual } from "@/components/Table/DataTablePenjual";

const getData = async () => {
  unstable_noStore();
  const { user } = await getServerSession(options);

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/create-product`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // If the response is successful, you can handle the result here
    const result = await response.json();



    return result.filter(u=>u.nama_penjual == user.nama);

  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Error:", error);
  }
};

// const getData = async () => {
//   unstable_noStore()
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/create-product`);
//   const data = await res.json();
//   return data;
// };

export default async function page() {
  
  const data = await getData();
  return (
    <div className="p-8">
      {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
      <DataTablePenjual data={data} />
    </div>
  );
}
