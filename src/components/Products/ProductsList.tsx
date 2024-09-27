'use client'

import { Product, columnsTable, columnsCard } from "@/app/[locale]/products/columns"
import { DataCard } from "@/components/shadcn/ui/data-card"
import { DataTable } from "@/components/shadcn/ui/data-table"
import React, { useState } from "react";
import { Button } from "@/components/shadcn/ui/button"

// Accept data as props from the Server Component
interface ProductListProps {
    data: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ data }) => {
    const [viewMode, setViewMode] = useState<"table" | "card">("table");

    return (
        <div className="container">
            <div className="flex justify-end py-4">
                {/* Switch view buttons */}
                <Button variant={viewMode === "table" ? "default" : "ghost"} onClick={() => setViewMode("table")}>
                    Table View
                </Button>
                <Button variant={viewMode === "card" ? "default" : "ghost"} onClick={() => setViewMode("card")}>
                    Card View
                </Button>
            </div>

            {/* Render table or card based on the view mode */}
            {viewMode === "table" ? (
                <DataTable columns={columnsTable} data={data} viewMode={viewMode} />
            ) : (
                <DataCard columns={columnsCard} data={data} viewMode={viewMode} />
            )}
        </div>
    );
};

export default ProductList;
