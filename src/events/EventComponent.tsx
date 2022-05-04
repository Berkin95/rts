const EventComponent:React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    };

    const onDragStart = (event: React.DragEvent<HTMLInputElement>) => {
        console.log(event);
    };

    return (
        <div>
            <input 
                className="form-control" 
                onChange={onChange} 
            />
            <div draggable onDragStart={onDragStart}>Drag me!</div>
        </div>
    );
};

export default EventComponent;