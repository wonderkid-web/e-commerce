"use server";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export const addPenjual = async (data) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/akun`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    revalidatePath("/admin/list-penjual");
    return res.json();
  } catch (e) {
    return e.message;
  }
};

export const addProduk = async (data) => {
  const session = await getServerSession(options);

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/create-product`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers if needed
      },
      body: JSON.stringify({ ...data, nama_penjual: session?.user.nama }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // If the response is successful, you can handle the result here
    revalidatePath("/penjual/list-produk");
<<<<<<< HEAD
    return response.json();
=======
    reset();
    return response.json()
>>>>>>> 06732a613b8510b3188d155f19e7b2141071cc51
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Error:", error);
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> 06732a613b8510b3188d155f19e7b2141071cc51
