import { useEffect, useState } from "react"
import { Card, Col } from "react-bootstrap"
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
    <Col className="col-5 px-1 mx-3 ">
      {comment.map((comm) => (
        <Card
          className="my-3 bg-black p-2 border-1 border-white"
          key={comm._id}
        >
          <Card.Body style={{ opacity: "0.6" }}>
            <Card.Text className="text-white">
              <span style={{ fontSize: "14px" }}>
                <em> {comm.comment}</em>
              </span>
              <hr />
              <span>{comm.rate}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Col>
  )
}
export default Comments
