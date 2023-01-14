function BoxColor(props) {
  return (
    <div className="boxColor">
      <div
        style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}
      >
        rgb({props.r}, {props.g}, {props.b})
      </div>
    </div>
  );
}

export default BoxColor;
