import { Component } from "react"

class MovieDisplay extends Component {
  state = {
    movies: []
  }

  getMovies = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=265027af&s=harry%20potter"
      )
      if (response.ok) {
        let result = await response.json()
        console.log(result)
        this.setState({ movies: result })
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

  render() {
    return (
      <div className="movie-gallery m-2">
        <h5 className="text-light mt-2 mb-2">Movie</h5>
        <div className="carousel slide" data-bs-ride="carousel">
          {/* button section */}
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#watch-it-again"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#watch-it-again"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    )
  }
}

export default MovieDisplay
