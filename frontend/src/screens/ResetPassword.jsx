import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { loginUser } from "../actions/userAction";
import {useNavigate} from "react-router-dom";
const ForgetPassword = () => {
  const [otp, setOTP] = useState("");
  const dispatch = useDispatch();
  // const navigate=useNavigate();
const navigate=useNavigate()

  // useEffect(() => {
  //   if (localStorage.getItem("currentUser")) {
  //     window.location.href = "/";
  //   }
  // }, []);
  const submitHandler = () => {
    // const user = { email };
    // dispatch(loginUser(user));
    console.log("submit");
    // navigate("/reset-password")
    history.push("/reset-password")
  };
  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>verification Code</Form.Label>
            <Form.Control
              type="number"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              Check the verification code we have sent you on email{" "}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={submitHandler}>
            Continue
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default ForgetPassword;
