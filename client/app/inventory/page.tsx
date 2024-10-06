"use client"

import { useGetProductsQuery } from "@/state/api"
import Header from "../(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {field: "productId", headerName: "ID", width: 90},
  {field: "name", headerName: "Product Name", width: 200},
]

const Inventory = () => {
    const {data: products, isError, isLoading} = useGetProductsQuery();

    if (isLoading) {
        return <div className="py-4">Loading...</div>
    }

    if(isError || !products) {
        return(
            <div className="text-center text-red-500 py-4">
                Failed to fetch products
            </div>
        )
    }

  return (
    <div className="flex flex-col">
      <Header  name="Investory"/>
      <DataGrid 
      rows={products}
      columns={columns}
      />
    </div>
  )
}

export default Inventory
