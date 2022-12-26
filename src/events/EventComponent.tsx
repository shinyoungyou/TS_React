const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  }

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Dragged!");
  }

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me
      </div>
    </div>
  )
}

export default EventComponent;