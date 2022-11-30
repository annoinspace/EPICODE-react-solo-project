import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap"

import { useParams, useNavigate } from "react-router-dom"

export default function MovieDetails() {
  const navigate = useNavigate()
  const params = useParams()
  console.log("PARAMS", params)
  console.log("movieId is", params.movieId)
  const [movie, setMovie] = useState([])

  const getMovie = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=265027af&i=${params.movieId}`
      )
      if (response.ok) {
        let movieDetails = await response.json()
        console.log(movieDetails)

        setMovie(movieDetails)
      } else {
        console.log("something went wrong")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container>
      <h1 className="text-white">Movie</h1>
      <Row className="movie-info">
        <Col xs={6}>
          <Image className="poster-image" src={movie.Poster} />
        </Col>
        <Col xs={6}>
          <Card className="individual-card">
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <div>
                <div>{movie.Year}</div>
                <div>{movie.Type}</div>
              </div>
              <Button variant="primary" onClick={() => navigate(-1)}>
                Go Back
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
