import * as ScrollArea from "@radix-ui/react-scroll-area"
import { ReactNode } from "react"

export const ScrollAreaWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollArea.Root className="w-1/2 overflow-y-auto bg-blue-500">
      <ScrollArea.Viewport className="size-full">
        <div>{children}</div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar className="w-2 bg-gray-200" orientation="vertical">
        <ScrollArea.Thumb className="rounded-md bg-slate-500" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
