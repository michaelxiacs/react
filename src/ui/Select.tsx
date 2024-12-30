export const Select = () => {
  return (
    // <div className="space-y-1">
    //   <label className="block">Please select</label>
    //   <div className="relative h-10 w-56">
    //     <select className="h-full w-full appearance-none rounded-lg border border-gray-300 px-3 text-sm text-gray-700 focus:outline-none">
    //       <option value="">Country</option>
    //       <option value="US">United States</option>
    //       <option value="CN">China</option>
    //     </select>
    //     <div className="absolute right-3 top-1/2 -translate-y-1/2">▼</div>
    //   </div>
    // </div>

    <div className="relative h-10 w-44">
      <select className="h-full w-full appearance-none rounded-lg border border-gray-300 px-3 text-sm text-gray-700 focus:outline-none">
        <option value="">Country</option>
        <option value="US">United States</option>
        <option value="CN">China</option>
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2">▼</div>
    </div>
  )
}
