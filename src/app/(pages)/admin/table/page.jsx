'use client'

import { Payment, columns } from "./columns"
import { DataTable } from "../../../../components/data-table"

const getData = async () => {
   const res = await fetch (
    'https://65a8df6a219bfa371867d228.mockapi.io/api/todoapp/1/data-table'
   )

   const data = await res.json()
   return data;
}

// const data = [
//   {
//     "name": "Name 1",
//     "email": "E-mail 1",
//     "last_seen" : "31-31-2009",
//     "password": "Password 1",
//     "id": "1"
//   },
//   {
//     "name": "Name 2",
//     "email": "E-mail 2",
//     "last_seen" : "31-31-2009",
//     "password": "Password 2",
//     "id": "2"
//   },
//   {
//     "name": "Name 3",
//     "email": "E-mail 3",
//     "last_seen" : "31-31-2009",
//     "password": "Password 3",
//     "id": "3"
//   },
// ]

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <h1 className=" text-2xl font-medium text-center mb-4">Data table users</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
