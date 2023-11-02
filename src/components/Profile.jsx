import { Col, Container, Dropdown, FormCheck, Row } from "react-bootstrap"
import avatar from "../assets/avatar.png"
// import logo from "../assets/netflix_logo.png"

const Profile = () => {
  return (
    <>
      {/* <header>
        <Container fluid>
          <a className="navbar-brand" href="netflix.html"
            ><img
              src={logo}
              alt=""
              width="150px"
          /></a>
        </Container>
      </header> */}
      <main>
        <Container fluid className="mt-5" id="profile" style={{ width: "75%" }}>
          <Row className="border-bottom border-secondary">
            <h1 className="text-white">Edit Profile</h1>
          </Row>
          <Row className="mt-4">
            <Col className="col p-0 col-3 col-lg-2 col-md-2">
              <img src={avatar} alt="" className="w-100" />
            </Col>
            <Col className="col-8 col-lg-8 ps-3">
              <Row className="p-0 ps-2">
                <button
                  type="button"
                  className="btn btn-secondary w-100 d-flex align-items-center"
                >
                  Strive Student
                </button>
                <Col className="col-8 col-lg-8 d-flex flex-column p-o ps-2 mt-4">
                  <h5 className="text-white-50 m-0 mb-1">Language:</h5>
                  <Dropdown data-bs-theme="dark">
                    <Dropdown.Toggle
                      id="dropdown-button-dark-example1"
                      variant="black"
                      className="border-1 border-white "
                    >
                      English
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1" active>
                        Italian
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Franch</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">German</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">Japan</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
              <hr className="text-white" />
              <Row className="d-flex flex-column mt-4">
                <Col className="ps-4" id="setting">
                  <h5 className="text-white-50">Maturity Settings:</h5>
                  <div className="bg-secondary p-2 ps-2 mt-3">
                    <h6 className="text-white m-0 t-3">ALL MATURITY RATINGS</h6>
                  </div>
                  <p className="text-white pt-3">
                    Showe titles of <strong>all maturity ratings</strong> for
                    this profile.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-secondary text-white-50 mb-3"
                  >
                    EDIT
                  </button>
                  <hr className="text-white" />
                </Col>
              </Row>
              <Row id="checkbox">
                <h5 className="text-white-50 m-0 mb-1">Autoplat controls</h5>
                <div className="form-check">
                  <FormCheck
                    type="checkbox"
                    label="Autoplay next episode in a series on all devices"
                    className="text-white"
                  />
                </div>
                <div className="form-check">
                  <FormCheck
                    type="checkbox"
                    label="Autoplay previews while browsing on all devices"
                    className="text-white"
                  />
                </div>
              </Row>
            </Col>
          </Row>
          <hr className="text-white" />
          <div className="d-flex justify-content-center align-items-center">
            <Col className="col-lg-2 p-0">
              <button
                id="btn1"
                type="button"
                className="btn btn-outline-secondary text-white-50 mb-3 ps-4 pe-4 m-0"
              >
                SAVE
              </button>
            </Col>
            <Col className="col-lg-2 p-0">
              <button
                id="btn2"
                type="button"
                className="btn btn-outline-secondary text-white-50 mb-3 m-0"
              >
                CANCEL
              </button>
            </Col>
            <Col className="col-lg-4 p-0">
              <button
                id="btn3"
                type="button"
                className="btn btn-outline-secondary text-white-50 mb-3 m-0"
              >
                DELETE PROFILE
              </button>
            </Col>
          </div>
        </Container>
      </main>
    </>
  )
}

export default Profile
