interface Props {
  id: string
}

export const ItemDetail = (props: Props) => {
  return <div>ItemDetail for Item{props.id}</div>
}
