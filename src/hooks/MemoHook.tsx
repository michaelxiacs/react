import { useState, useMemo, useEffect } from "react"

const fetchData = (dataId: string) => {
  console.log("Fetchin data...")
  return `data about ${dataId}`
}

export const MemoHook = () => {
  const [count, setCount] = useState(0)
  const [dataId, setDataId] = useState<string>("x")

  const data = useMemo(() => fetchData(dataId), [dataId])

  // code below achievs the same thing but more tedious
  // const [data, setData] = useState(() => fetchData(dataId))
  // useEffect(() => {
  //   setData(fetchData(dataId))
  // }, [dataId])

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div>
      <div>
        <input type="text" onChange={(e) => setDataId(e.target.value)} />
      </div>

      <div>{data}</div>
    </div>
  )
}
