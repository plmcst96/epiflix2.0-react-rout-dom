import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"

const keyApi =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGE3NmY2ZTNkZDAwMTQ5NWU0MzIiLCJpYXQiOjE2OTgzMTg5NjYsImV4cCI6MTY5OTUyODU2Nn0.aZI0DuOO_gsdwCf_xEW6-DvWQ9rF4oLuse4HcOVYLS4"

const MovieDetails = () => {
  const params = useParams()

  const [movieDetail, setMovieDetail] = useState([])
  const [comment, setComment] = useState([])

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

  const getOnComments = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + params.movieId,
        {
          headers: {
            Authorization: keyApi,
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        setComment(data)
      } else {
        throw new Error("I dati del film non sono  stati trovati!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  //   useEffect(() => {
  //     getOnComments()
  //   }, [])

  useEffect(() => {
    getOneMovie()
    getOnComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <Col className="col-6 px-1 mx-3 ">
            <Card className="my-3 bg-black p-2 border-1 border-white">
              <Card.Img
                variant="top"
                src={movieDetail.Poster}
                className="h-50"
              />
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
          <Col className="col-6 px-1 mx-3 ">
            <Card className="my-3 bg-black p-2 border-1 border-white">
              <Card.Body style={{ opacity: "0.6" }}>
                <Card.Text className="text-white">
                  <span style={{ fontSize: "14px" }}>
                    <em> {comment.comment}</em>
                  </span>
                  <hr />
                  <span>{comment.rate}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MovieDetails
