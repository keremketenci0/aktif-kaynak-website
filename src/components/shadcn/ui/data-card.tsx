"use client"

// react
import * as React from "react"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    SortingState,
    getSortedRowModel,
    ColumnFiltersState,
    getFilteredRowModel,
    useReactTable,
} from "@tanstack/react-table"



// components ui
import { Button } from "@/components/shadcn/ui/button"
import { Input } from "@/components/shadcn/ui/input"
import { DataTablePagination } from "@/components/shadcn/ui/DataTablePagination"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/shadcn/ui/table"
import { ProductCard } from "@/components/Products/ProductCard"
import { ProductsCard } from "@/app/[locale]/products/columns"

interface DataTableProps {
    columns: ColumnDef<ProductsCard>[]
    data: ProductsCard[]
    viewMode: "table" | "card";
}

export function DataCard<TData, TValue>({
    columns,
    data,
    viewMode,
}: DataTableProps) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        }
    })

    return (
        <div>
            <div className="flex flex-row justify-between items-center py-4">
                <Input
                    placeholder="Filter titles..."
                    value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("title")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <Button variant={viewMode === "card" ? "default" : "ghost"}>Ghost</Button>
            </div>
            <div className="flex flex-wrap justify-around">
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => {
                        const { title, description, contentImage } = row.original;
                        return (
                            <ProductCard
                                key={row.id}
                                title={title}
                                description={description}
                                contentImage={contentImage}
                            />
                        );
                    })
                ) : (
                    <div className="col-span-1 text-center">
                        No results.
                    </div>
                )}
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <DataTablePagination table={table} />
            </div>
        </div>
    )
}
