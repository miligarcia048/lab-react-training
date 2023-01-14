function Random(props) {
  const random =
    Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
  return (
    <div className="random">
      <p>
        {props.children} {random}
      </p>
    </div>
  );
}

export default Random;
