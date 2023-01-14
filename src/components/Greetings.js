function Greetings(props) {
  return (
    <div className="greetings">
      <p>
        {props.lang} {props.children}
      </p>
    </div>
  );
}

export default Greetings;
