import { useEffect, useState } from "react"

export const EffectHook = () => {
  const [state, setState] = useState(true)

  useEffect(() => {
    console.log("state has changed")
  }, [state])

  return (
    <div className="flex gap-2">
      {state ? "true" : "false"}
      <button onClick={() => setState((prev) => !prev)}>Toggle</button>
    </div>
  )
}