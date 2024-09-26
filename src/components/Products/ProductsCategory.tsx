"use client"

import * as React from "react"

// components ui
import { ScrollArea } from "@/components/shadcn/ui/scroll-area"
import { Separator } from "@/components/shadcn/ui/separator"
import { Checkbox } from "@/components/shadcn/ui/checkbox"
import { Input } from "@/components/shadcn/ui/input"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion"
import { NavBreadcrumb } from "../NavBreadcrumb"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function ProductsCategory() {
  return (
    <div>
      <div className="sticky top-0 inset-x-0 px-2">
        <NavBreadcrumb />
      </div>
      <div className="my-12"></div>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-2 text-xl">Category</AccordionTrigger>
          <AccordionContent>
            <div className="p-1">
              <Input placeholder="search" />
            </div>
            <ScrollArea className="h-72">
              <div className="p-2">
                {tags.map((tag) => (
                  <React.Fragment key={tag}>
                    <div className="text-sm flex flex-row gap-x-2 items-center">
                      <Checkbox id={tag} />
                      {tag}
                    </div>
                    <Separator className="my-2" />
                  </React.Fragment>
                ))}
              </div>
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
