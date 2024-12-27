import { ChangeEvent } from "react"

export const RadioGroup = () => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const message = `Selected value: ${event.target.value}`
    console.log(message)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <label className="relative flex cursor-pointer items-center justify-center">
          <input
            name="time"
            type="radio"
            onChange={handleChange}
            value="AM"
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400"
          />
          <span className="absolute h-3 w-3 rounded-full bg-slate-800 opacity-0 peer-checked:opacity-100"></span>
        </label>
        <label className="cursor-pointer">AM</label>
      </div>

      <div className="flex gap-2">
        <label className="relative flex cursor-pointer items-center justify-center">
          <input
            name="time"
            type="radio"
            onChange={handleChange}
            value="PM"
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400"
          />
          <span className="absolute h-3 w-3 rounded-full bg-slate-800 opacity-0 peer-checked:opacity-100"></span>
        </label>
        <label className="cursor-pointer">PM</label>
      </div>
    </div>
  )
}
