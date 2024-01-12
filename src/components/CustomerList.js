import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  deleteCustomerFromServer,
  getAllCustomerFromServer,
} from "../services/FitnessApiService";

export function CustomerList() {
  const [customerList, setCustomerList] = useState([]);
  const [selectedCustomerName, setSelectedCustomerName] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => {
    setIsModalOpened(true);
  };
  const closeModal = () => {
    setIsModalOpened(false);
  };
  async function getAllCustomer() {
    const response = await getAllCustomerFromServer();
    setCustomerList(response.data);
  }
  const deleteCustomerFromServer = async () => {
    const response = await deleteCustomerFromServer(selectedCustomerName);
    console.log(response.data);
    closeModal();
    getAllCustomer();
  };

  useEffect(() => {
    getAllCustomer();
  }, []);

  return (
    <>
      {/* <header className="header">
        <div className="left">
          <img src="./logo2.png" alt="" />
          <h2>
            <div>Fitness Frek</div>
          </h2>
        </div> */}
      <div className="center">
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">AboutUs</Link>
          </li>
          <li>
            <Link to="/Features">Features</Link>
          </li>
          <li>
            <Link to="/Membership">Membership</Link>
          </li>
          <li>
            <Link to="/Trainers">Trainers</Link>
          </li>
          <li>
            <Link to="/CustomerList">Client List</Link>
          </li>
        </ul>
      </div>
      {/* </header> */}
      <Container className="mt-5 mb-5 text-center">
        <Alert>List of all the Customer</Alert>
      </Container>
      <Container>
        <Table border="primary" style={{ width: "90rem" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Password</th>
              <th>Telephone</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Course</th>
              <th>comments</th>
            </tr>
          </thead>
          <tbody>
            {customerList.map((fitness) => {
              return (
                <tr>
                  <td>{fitness.Name}</td>
                  <td>{fitness.Address}</td>
                  <td>{fitness.EMail}</td>
                  <td>{fitness.Password}</td>
                  <td>+91-{fitness.Telephone}</td>
                  <td>{fitness.Gender}</td>
                  <td>{fitness.Age}</td>
                  <td>{fitness.Course}</td>
                  <td>{fitness.comments}</td>
                  <td>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => {
                        setSelectedCustomerName(fitness.Name);
                        openModal();
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      <Modal show={isModalOpened} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete customer with name{" "}
          {selectedCustomerName}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={deleteCustomerFromServer}>
            Yes, Delete
          </Button>
          <Button variant="danger" onClick={closeModal}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
