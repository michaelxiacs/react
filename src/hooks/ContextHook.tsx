import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react"

// file 1
export const SignedInContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>] | undefined
>(undefined)

// file 2
export const ContextHook = () => {
  const [signedIn, setSignedIn] = useState(false)

  return (
    <SignedInContext.Provider value={[signedIn, setSignedIn]}>
      {signedIn ? <div>Click to sign out</div> : <div>Click to sign in</div>}
      <Child />
    </SignedInContext.Provider>
  )
}

// file 3
const Child = () => {
  const context = useContext(SignedInContext)

  if (!context) {
    throw new Error()
  }

  const [signedIn, setSignedIn] = context

  return (
    <button onClick={() => setSignedIn((prev) => !prev)}>
      {signedIn ? <div>Sign Out</div> : <div>Sign In</div>}
    </button>
  )
}
