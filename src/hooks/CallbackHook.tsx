import { memo, useCallback, useState } from "react"

// functions are different across render
// useCallback memoize the function across render
export const CallbackHook = () => {
  const [flag, setFlag] = useState(false)

  const func = useCallback((text: string) => {
    console.log(flag)
    console.log("do something")
  }, [flag])

  return (
    <>
      <div>{flag ? "true" : "false"}</div>
      <button
        onClick={() =>
          setFlag((prev) => {
            func("hello")
            return !prev
          })
        }
      >
        Toggle
      </button>
      <Component func={func} />
    </>
  )
}

interface ComponentProps {
  func: (text: string) => void
}

export const Component = memo(({ func }: ComponentProps) => {
  console.log("Component rendered")
  return <div>Component</div>
})
