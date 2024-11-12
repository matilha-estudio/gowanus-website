"use client"

import { PropertiesResponse } from "@/services/models/availability"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowDown, Download } from "lucide-react"

export const AvailabilityColumns: ColumnDef<PropertiesResponse>[] = [
    {
        accessorKey: "apartment_type",
        header: ({ column }) => {
            return (
                <div
                    className="flex gap-8 items-center"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Apartment Type
                    <ArrowDown className="ml-2 h-4 w-4" />
                </div>
            )
        }
    },
    {
        accessorKey: "residence_group",
        header: "Residence Group",
    },
    {
        accessorKey: "rent",
        header: ({ column }) => {
            return (
                <div
                    className="flex gap-8 items-center"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Rent
                    <ArrowDown className="ml-2 h-4 w-4" />
                </div>
            )
        },
        cell: ({ cell }) => {
            return (
                <span>From ${cell.getValue<number>()}+/m</span>
            )
        }
    },
    {
        accessorKey: "availability",
        header: ({ column }) => {
            return (
                <div
                    className="flex gap-8 items-center"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Availability
                    <ArrowDown className="ml-2 h-4 w-4" />
                </div>
            )
        }
    },
    {
        accessorKey: "floor_plan",
        header: "Floor Plan",
        cell: () => {
            return (
                <div className="flex items-center justify-center">
                    <Download />
                </div>
            )
        }
    },
]