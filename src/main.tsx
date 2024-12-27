import "./index.css"
import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { NotFoundPage } from "./pages/NotFoundPage"
import { HomePage } from "./pages/HomePage"
import { ItemsPage } from "./pages/ItemsPage"

import { CallbackHook } from "./hooks/CallbackHook"
import { EffectHook } from "./hooks/EffectHook"
import { ContextHook } from "./hooks/ContextHook"
import { RefHook } from "./hooks/RefHook"
import { MemoHook } from "./hooks/MemoHook"
import { Table } from "./components/ui/Table"
import { RadioGroup } from "./components/ui/RadioGroup"
import { SelectComponent } from "./components/ui/Select"
import { Spinner } from "./components/ui/Spinner"
import ScrollAreaDemo from "./components/ui/ScrollArea"
import * as ScrollArea from "@radix-ui/react-scroll-area"
import { ScrollAreaWrapper } from "./components/ScrollAreaWrapper"

const uiComponents = [
  { path: "radio-group", element: <RadioGroup /> },
  { path: "select", element: <SelectComponent /> },
  { path: "spinner", element: <Spinner /> },
  { path: "table", element: <Table /> },
  { path: "scroll-area", element: <ScrollAreaDemo /> },
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/items/:id?",
    element: <ItemsPage />,
  },
  {
    path: "/components",
    children: uiComponents,
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="h-screen w-screen">
      <nav className="h-[10%] w-full bg-red-500">NavBar</nav>
      <div className="flex h-[90%] w-full">
        {/* <div className="w-1/2 overflow-y-auto bg-blue-500">Sidebar</div> */}
        <ScrollAreaWrapper>
          <div className="h-40">Content</div>
          <div className="h-40">Content</div>
          <div className="h-40">Content</div>
          <div className="h-40">Content</div>
          <div className="h-40">Content</div>
          <div className="h-40">Content</div>
        </ScrollAreaWrapper>

        <div className="w-1/2 overflow-y-auto bg-green-500">Post</div>
      </div>
    </div>

    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)
