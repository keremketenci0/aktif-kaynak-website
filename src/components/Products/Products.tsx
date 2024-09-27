import { Product } from "@/app/[locale]/products/columns"
import React from "react";
import { ProductsCategory } from "@/components/Products/ProductsCategory";
import ProductsList from "@/components/Products/ProductsList";

// Move the data fetching here (server-side)
async function getData(): Promise<Product[]> {
  const product: Product[] = [];

  for (let i = 0; i < 100; i++) {
    product.push({
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      title: "title",
      description: "desc",
      contentImage: "/images/1.jpeg"
    });
  }

  return product;
}

export default async function ProductsTable() {
  const data = await getData();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row space-x-12">
        <div className="py-4 w-1/4">
          <ProductsCategory />
        </div>

        <div className="w-full mx-auto">
          <ProductsList data={data} />
        </div>
      </div>
    </div>
  )
}
