import { useEffect, useState } from "react"
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"

const keyApi =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGE3NmY2ZTNkZDAwMTQ5NWU0MzIiLCJpYXQiOjE2OTgzMTg5NjYsImV4cCI6MTY5OTUyODU2Nn0.aZI0DuOO_gsdwCf_xEW6-DvWQ9rF4oLuse4HcOVYLS4"

const AddCommentMovie = () => {
  const params = useParams()

  const [allCommenta, setAllCommenta] = useState({
    comment: "",
    rate: "1",
    elementId: params.movieId,
  })

  const postComment = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(allCommenta),
          headers: {
            Authorization: keyApi,
            "Content-Type": "application/json",
          },
        }
      )
      if (res.ok) {
        alert("commento salvato!")
      } else {
        throw new Error("C'è stato un errore nel salvataggio del commento")
      }
    } catch (error) {
      console.log("errore nel submit del commento", error)
    }
  }

  useEffect(() => {
    setAllCommenta({
      ...allCommenta,
      elementId: params.movieId,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.movieId])

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col className="col-10 col-md-8 col-lg-6">
          <Form onSubmit={postComment} className="mt-3">
            <FormGroup className="mb-3">
              <Form.Label className="text-white">
                Lascia qui un tuo commento
              </Form.Label>
              <Form.Control
                className="bg-black text-white"
                as="textarea"
                rows={3}
                value={allCommenta.comment}
                onChange={(e) => {
                  // this.setState({
                  //     allCommenta:{
                  //     ...this.state.allCommenta,
                  //     comment: e.target.value}
                  // })
                  setAllCommenta({
                    ...allCommenta,
                    comment: e.target.value,
                  })
                }}
                required
              />
            </FormGroup>
            <FormGroup>
              <Form.Select
                className="bg-black text-white"
                aria-label="Rating"
                value={allCommenta.rate}
                onChange={(e) => {
                  setAllCommenta({
                    ...allCommenta,
                    rate: e.target.value,
                  })
                }}
              >
                <option>Lascia un voto</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Select>
            </FormGroup>
            <Button variant="warning" type="submit" className="my-2">
              Invia!
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default AddCommentMovie
