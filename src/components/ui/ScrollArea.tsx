import * as ScrollArea from "@radix-ui/react-scroll-area"

const sentences = Array.from(
  { length: 20 },
  () => "this is a very long sentence trying to mimic overflow",
)

const ScrollAreaDemo = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <ScrollArea.Root className="flex max-h-80 w-56 flex-col rounded border bg-white">
        <ScrollArea.Viewport className="size-full">
          <div>
            {sentences.map((sentence, index) => (
              <div className="whitespace-nowrap px-10 py-5" key={index}>
                {sentence}
              </div>
            ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="w-2 bg-gray-200"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="rounded-md bg-slate-500" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          className="flex h-2 flex-col bg-gray-200"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="flex-1 rounded-md bg-slate-500" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="bg-gray-200" />
      </ScrollArea.Root>
    </div>
  )
}

export default ScrollAreaDemo
