import { DataTable } from "@/components/Table/DataTable";
import Navbar from "@/components/layout/Navbar";
import { unstable_noStore } from "next/cache";

const getData = async () => {
  unstable_noStore()
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/akun`);
  const data = await res.json();
  return data;
};

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="mx-auto ">
      <Navbar />
      <div className="p-8">
        <DataTable data={data} />
      </div>
    </div>
  );
}
