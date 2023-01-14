function Rating(props) {
  let stars = Math.round(props.rating);
  let rating = '☆☆☆☆☆';

  switch (stars) {
    case 0:
      rating = '☆☆☆☆☆';
      break;
    case 1:
      rating = '★☆☆☆☆';
      break;
    case 2:
      rating = '★★☆☆☆';
      break;
    case 3:
      rating = '★★★☆☆';
      break;
    case 4:
      rating = '★★★★☆';
      break;
    case 5:
      rating = '★★★★★';
      break;
    default:
      rating = 'No rating available';
  }

  return (
    <div className="driverCards">
      <div className="imageDriver">
        <img src={props.img} alt="driver" />
      </div>

      <div className="driverInfo">
        <p style={{ fontWeight: 'bold', fontSize: '25px' }}>{props.name}</p>
        <p style={{ fontSize: '30px' }}>{rating}</p>
        <p>
          {props.car.model} {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default Rating;
