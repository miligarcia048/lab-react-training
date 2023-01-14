import visaImage from '../assets/images/visa.png';

function BoxColor(props) {
  return (
    <div
      className="creditCard"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div className="cardImage">
        <img src={visaImage} alt="card logo" />
      </div>
      <h6> • • • • • • • • • • • • {props.number.slice(-4)}</h6>
      <div className="info">
        <p>
          Expieres {props.expirationMonth}/{props.expirationYear} {props.bank}
        </p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}

export default BoxColor;
