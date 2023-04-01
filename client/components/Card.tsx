export default function Card(props) {
  return (
    <h1>
      {props.selection.time}, {props.selection.type}
    </h1>
  )
}
