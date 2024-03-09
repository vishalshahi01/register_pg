import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [email, setEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSignInPasswordChange = (event) => {
    setSignInPassword(event.target.value);
  };

  const handleSignUpPasswordChange = (event) => {
    setSignUpPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleMiddleNameChange = (event) => {
    setMiddleName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      // Here you can add your login logic
      console.log("Email:", email);
      console.log("Password:", signInPassword);
    } else {
      // Here you can add your signup logic
      console.log("First Name:", firstName);
      console.log("Middle Name:", middleName);
      console.log("Last Name:", lastName);
      console.log("Email:", email);
      console.log("Mobile:", mobile);
      console.log("Date of Birth:", dateOfBirth);
      console.log("Password:", signUpPassword);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Container
        className="d-flex p-6  h-78 "
        style={{ width: "80%", margin: "auto", padding: "0" }}
      >
        <div className="card bg-primary  " style={{ flex: "1", border: "none" }}>
          <div className="card-body d-flex flex-column mt-5 align-items-center justify-content-center">
            <p className=" d-block text-white">Don't have an account ?</p>
            <p className="text-center text-white">
              <a href="#" onClick={toggleForm} className="text-white">
                Get started!
              </a>
            </p>
          </div>
          <p className="mt-5 d-block text-white text-center ">
            Read our{" "}
            <a href="/forgot-password" className="text-white">
              {" "}
              terms{" "}
            </a>
            and{" "}
            <a href="/forgot-password" className="text-white">
              conditions{" "}
            </a>
          </p>
        </div>

        <div className="card  " style={{ flex: "1", border: "none" }}>
          <div className="card-body ">
            <h2 className="text-center mb-3 ">
              {isLogin ? "Account Login" : "Sign up"}
            </h2>
            <Form className="" onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <Row>
                    <Col>
                      <Form.Group controlId="formBasicFirstName">
                        <Form.Label className="fw-bold mb-1">First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter first name"
                          value={firstName}
                          onChange={handleFirstNameChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formBasicMiddleName">
                        <Form.Label className="fw-bold mb-1">Middle Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter middle name"
                          value={middleName}
                          onChange={handleMiddleNameChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formBasicLastName">
                        <Form.Label className="fw-bold mt-1 mb-1">Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter last name"
                          value={lastName}
                          onChange={handleLastNameChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="formBasicMobile">
                        <Form.Label className="fw-bold mt-2 mb-1">Mobile</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Enter mobile"
                          value={mobile}
                          onChange={handleMobileChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formBasicDateOfBirth">
                        <Form.Label className="fw-bold mt-2 mb-1">Date of Birth</Form.Label>
                        <Form.Control
                          type="date"
                          value={dateOfBirth}
                          onChange={handleDateOfBirthChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </>
              )}
              
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="fw-bold mt-2 mb-1">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </Form.Group>
              
              <Form.Group controlId="formBasicPassword">
                <Form.Label className="mt-1 mb-1  fw-bold">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={isLogin ? signInPassword : signUpPassword}
                  onChange={isLogin ? handleSignInPasswordChange : handleSignUpPasswordChange}
                  required
                />
              </Form.Group>

              {isLogin && (
                <div className=" mt-3 d-flex justify-content-between align-items-center">
                  <Form.Check
                    type="checkbox"
                    label="Remember Me"
                    id="rememberMeCheckbox"
                  />
                  <a href="/forgot-password" style={{ textDecoration: 'none', color: 'blue' }}>Forgot Password?</a>
                </div>
              )}
              <Button variant="primary" type="submit" className="w-100 mt-3">
                {isLogin ? "Login" : "Sign Up"}
              </Button>
                
              {isLogin && (
                <div className="text-center mt-4">
                  <p className="font-weight-light ">or login with </p>
                  <div className="mt-4" >
                    <button className="btn px-5 btn-danger  mx-2"> Google</button>
                    <button className="btn px-5 btn-primary">Facebook</button>
                  </div>
                </div>
              )}
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
