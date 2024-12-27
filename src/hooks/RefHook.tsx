import { useEffect, useRef } from "react"

// state value
//     triggers a re-render
//     updated in the next render
// ref value
//     doesn't trigger a re-render
//     updated in the current render

export const RefHook = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type Something..." />
    </div>
  )
}
