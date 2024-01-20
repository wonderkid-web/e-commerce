"use server";

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
