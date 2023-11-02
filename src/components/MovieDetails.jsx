import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"

const MovieDetails = () => {
  const params = useParams()

  const [movieDetail, setMovieDetail] = useState([])

  const getOneMovie = async () => {
    try {
      const res = await fetch(
        "http://www.omdbapi.com/?apikey=e2e8cced&i=" + params.movieId
      )
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        setMovieDetail(data)
      } else {
        throw new Error("I dati del film non sono  stati trovati!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getOneMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col className="col-5 px-1 mx-3 ">
          <Card className="my-3 bg-black p-2 border-1 border-white">
            <Card.Img variant="top" src={movieDetail.Poster} className="h-50" />
            <Card.Body style={{ opacity: "0.6" }}>
              <Card.Title style={{ fontSize: "19px" }} className="text-white">
                {movieDetail.Title} | <i>{movieDetail.Year}</i>
              </Card.Title>
              <Card.Text className="text-white">
                <span style={{ fontSize: "14px" }}>
                  Actors:
                  <em> {movieDetail.Actors}</em>
                </span>
                <hr />
                <span>{movieDetail.Plot}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetails
