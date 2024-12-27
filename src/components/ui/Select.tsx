import * as ScrollArea from "@radix-ui/react-scroll-area"
import * as Select from "@radix-ui/react-select"
import { useRef, useState } from "react"

const states = [
  "New York",
  "California",
  "Texas",
  "Florida",
  "Washington",
  "Illinois",
  "Pennsylvania",
  "Ohio",
  "Georgia",
  "North Carolina",
  "Michigan",
  "New Jersey",
  "Virginia",
  "Arizona",
  "Massachusetts",
  "Tennessee",
  "Indiana",
  "Missouri",
  "Maryland",
  "Wisconsin",
  "None",
]

export const SelectComponent = () => {
  const stateRefs = useRef<(HTMLDivElement | null)[]>([])
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  return (
    <div className="m-20">
      <Select.Root
        onValueChange={(value) => {
          console.log("Selected value: ", value)
        }}
      >
        <Select.Trigger className="box-border flex h-10 w-40 items-center justify-between rounded-md border px-3.5 outline-none">
          <Select.Value placeholder="Select a state" />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            position="popper"
            sideOffset={5}
            className="w-40 rounded-md border bg-white shadow-lg"
          >
            <ScrollArea.Root
              className="flex max-h-80 w-full flex-col rounded bg-white"
              type="auto"
            >
              <Select.Viewport asChild className="size-full px-3.5 py-2">
                <ScrollArea.Viewport>
                  {states.map((state, index) => (
                    <Select.Item
                      key={index}
                      className={`flex h-10 cursor-pointer items-center rounded-md pl-2 outline-none ${index === highlightedIndex && "bg-blue-100"}`}
                      value={state}
                      ref={(el) => (stateRefs.current[index] = el)}
                      onFocus={() => setHighlightedIndex(index)}
                      onMouseEnter={() => setHighlightedIndex(index)}
                    >
                      <Select.ItemText>{state}</Select.ItemText>
                    </Select.Item>
                  ))}
                </ScrollArea.Viewport>
              </Select.Viewport>

              <ScrollArea.Scrollbar
                className="w-2 bg-gray-200"
                orientation="vertical"
              >
                <ScrollArea.Thumb className="rounded-md bg-slate-500" />
              </ScrollArea.Scrollbar>
            </ScrollArea.Root>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
