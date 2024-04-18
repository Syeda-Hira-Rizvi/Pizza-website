import { useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../actions/userAction";
// import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  // const dispatch = useDispatch();
const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("currentUser")) {
  //     window.location.href = "/";
  //   }
  // }, []);
  const submitHandler = () => {
    // const user = { email };
    // dispatch(loginUser(user));
    console.log("submit");
    navigate("/reset-password")
  };
  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              Enter your registered email, we will send you the verification code
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
