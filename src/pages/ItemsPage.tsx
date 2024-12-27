import { Link, useParams, useSearchParams } from "react-router-dom"
import { ItemDetail } from "../components/ItemDetails"
import { NotFoundPage } from "./NotFoundPage"

export const ItemsPage = () => {
  const items = [1, 2, 3]
  const { id } = useParams()

  if (!id) {
    return <NotFoundPage />
  }

  const [searchParams] = useSearchParams()
  const language = searchParams.get("language") || "english"
  console.log(language)
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <Link key={item} to={`/items/${item}`}>
            Item {item}
          </Link>
        ))}
      </div>
      <ItemDetail id={id} />
    </div>
  )
}
