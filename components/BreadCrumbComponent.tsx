'use client'
import { Slash } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation";

type Props = {
  id?: string;
  page: string;
  name?: string
  cart?:boolean
}

export function BreadCrumbComponent(
  {id, page, name, cart} : Props
) {
  const pathname = usePathname()

  return (
    <Breadcrumb className="my-6 lg:my-10 ">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-lg lg:text-xl">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href={`/${page}`} className={`text-lg lg:text-xl capitalize `}>{page}</BreadcrumbLink>
        </BreadcrumbItem>
        {cart && (
          <>
            <BreadcrumbSeparator>
          <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem        className={`text-lg lg:text-xl capitalize `}>
            cart
          </BreadcrumbItem>
          </>
        )}
        {id && (
          <>
            <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href={`/${page}/${id}`} className="text-lg lg:text-xl capitalize">{name}</BreadcrumbLink>
        </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
