function Rating(props) {
  let stars = Math.round(props.children);
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
    <div className="ratings">
      <div>{rating}</div>
    </div>
  );
}

export default Rating;
