import { useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import AddNewPizza from "../components/Admin/AddNewPizza";
import OrderList from "../components/Admin/OrderList";
import Pizzaslist from "../components/Admin/Pizzaslist";
import Userlist from "../components/Admin/Userlist";
import EditPizza from "./../components/Admin/EditPizza";
const AdminScreen = () => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const navigate=useNavigate();
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button onClick={() => navigate("/admin/userlist")}>
                All Users
              </Button>
              <Button onClick={() => navigate("/admin/pizzalist")}>
                All Pizzas
              </Button>
              <Button onClick={() => navigate("/admin/addnewpizza")}>
                Add New Pizza
              </Button>
              <Button onClick={() => navigate("/admin/orderlist")}>
                All Orders
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={10}>
            <Routes>
              <Route path="/admin" element={<Userlist/>} exact />
              <Route path="/admin/userlist" element={<Userlist/>} exact />
              <Route
                path="/admin/editpizza/:pizzaId"
                element={<EditPizza/>}
                exact
              />
              <Route path="/admin/pizzalist" element={<Pizzaslist/>} exact />
              <Route path="/admin/addnewpizza" element={<AddNewPizza/>} exact />
              <Route path="/admin/orderlist" element={<OrderList/>} exact />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;
