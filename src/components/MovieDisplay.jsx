import { Component } from "react"
import { Row, Col, Image, Carousel } from "react-bootstrap"

class MovieDisplay extends Component {
  state = {
    movies: []
  }

  getMovies = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=265027af&s=${this.props.series}`
      )
      if (response.ok) {
        let r = await response.json()
        console.log(r)
        console.log("---------------logging the Search object---------------")
        console.log(r.Search)
        let movieList = r.Search
        this.setState({ movies: movieList })
      } else {
        console.log("something went wrong")
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount = () => {
    this.getMovies()
  }

  // splitting the array if movies into chunks
  //   use this function when making all the carousel cards

  movieChunks = (inputArray, perChunk) => {
    let result = inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk)

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []
      }

      resultArray[chunkIndex].push(item)

      return resultArray
    }, [])
    return result
  }

  render() {
    return (
      <div className="movie-gallery m-2">
        <Carousel indicators={false}>
          <h5 className="text-light mt-2 mb-2">{this.props.series}</h5>
          {this.movieChunks(this.state.movies, 7).map((moviesRow, index) => (
            <Carousel.Item key={`carousel-${index}`}>
              <div className="active d-flex inline">
                <div className="movie-row">
                  <Row>
                    {moviesRow.map((movie) => (
                      <Col key={movie.imdbID}>
                        <Image className="movie-cover" src={movie.Poster} />
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default MovieDisplay
