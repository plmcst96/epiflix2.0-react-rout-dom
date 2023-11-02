import { useEffect, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import { Person, Trash } from "react-bootstrap-icons"
import { useParams } from "react-router-dom"

const keyApi =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGE3NmY2ZTNkZDAwMTQ5NWU0MzIiLCJpYXQiOjE2OTgzMTg5NjYsImV4cCI6MTY5OTUyODU2Nn0.aZI0DuOO_gsdwCf_xEW6-DvWQ9rF4oLuse4HcOVYLS4"

const Comments = () => {
  const params = useParams()
  const [comment, setComment] = useState([])

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

  useEffect(() => {
    getOnComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Row className="d-flex justify-content-center align-items-center mt-4">
      {comment.map((comm) => (
        <Col
          className="col-6 col-md-4 border border-white rounded-2 m-2"
          key={comm._id}
        >
          <Row>
            <Col className="col-2 ps-0 d-flex justify-content-center align-items-center ps-2 border-end">
              <Person className="text-white fs-3" />
            </Col>
            <Card.Body className="col-10 p-2">
              <p className="w-100" style={{ color: "#E50815" }}>
                {comm.author}
              </p>
              <p className="text-white-50">
                Rate:<em className="text-white"> {comm.rate}</em>
              </p>
              <Button variant="warning">
                <Trash />
              </Button>
            </Card.Body>
          </Row>
        </Col>
      ))}
    </Row>
  )
}
export default Comments
