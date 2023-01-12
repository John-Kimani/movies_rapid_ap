import Card from "react-bootstrap/Card";

const MovieItem = (props) => {
  // fetch(streamURL, options).then(response => response.json())
  // .then(response => console.log(response))
  // .catch(err => console.log(err));
  // console.log("Test", props.movies);

  const displayMovie = (props) => {
    const { movies } = props;

    if (movies.length > 0) {
      return movies.map((movie, index) => {
        // console.log("Last", movie);
        return (
          <div key={movie.id} className="col-sm-3 col-md-2 mt-2">
            <Card
              className="movie_card"
              shadow={0}
              style={{
                background: `url(${movie.image_url})`,
                height: "280px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></Card>
          </div>
        );
      });
    } else {
      return (
        <>
          <Card>
            <Card.Body className="text-center">
              <h3>Please wait...</h3>
              <p>Just a moment we are getting your movies.</p>
            </Card.Body>
          </Card>
        </>
      );
    }
  };

  return <>{displayMovie(props)}</>;
};

export default MovieItem;
