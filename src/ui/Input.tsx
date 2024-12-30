export const Input = () => {
  return (
    <div className="relative">
      <input
        className="peer h-12 w-52 rounded-lg border px-3 focus:pb-1 focus:pt-6 focus:outline-none"
        type="text"
      />
      <label className="absolute left-[13px] top-1/2 -translate-y-1/2 transition-all peer-focus:top-1/4 peer-focus:pt-1 peer-focus:text-xs">
        Email
      </label>
    </div>
  )
}
