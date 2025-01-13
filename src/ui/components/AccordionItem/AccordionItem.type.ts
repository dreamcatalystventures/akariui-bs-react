import { ReactNode } from "react"

export interface AccordionItemProps {
  id: string
  children: ReactNode
  parent: string
  title: string
}

