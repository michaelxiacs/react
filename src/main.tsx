import "./index.css"
import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { NotFoundPage } from "./pages/NotFoundPage"
import { HomePage } from "./pages/HomePage"
import { ItemsPage } from "./pages/ItemsPage"
import { Table } from "./ui/Table"
import { RadioGroup } from "./ui/RadioGroup"
import { Spinner } from "./ui/Spinner"
import { Select } from "./ui/Select"
import { DatePicker } from "./ui/DatePicker"
import { Input } from "./ui/Input"
import { Button } from "./ui/Button"

const uiPaths = [
  { path: "radio-group", element: <RadioGroup /> },
  { path: "spinner", element: <Spinner /> },
  { path: "table", element: <Table /> },
  { path: "select", element: <Select /> },
  { path: "date-picker", element: <DatePicker /> },
  { path: "input", element: <Input /> },
  { path: "button", element: <Button /> },
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
    path: "/ui",
    children: uiPaths,
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex h-screen w-screen items-center justify-center">
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
