import React from "react";
import bootstrap from "bootstrap";
import "../css/HalamanLogin.css";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../image/LogoAdminTokoRumahan.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function HalamanLogin() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Modal
      backdrop="static"
      keyboard={false}
      className="Lmodal"
      show={show}
      onHide={handleClose}
    >
      <Form className="form">
        <img className="logo" src={logo} />

        <h5 className="txt-login">Login Admin</h5>
        <Form.Group className="form2 mb-3" controlId="formBasicEmail">
          <Form.Label className="Llabel">Email</Form.Label>
          <Form.Control
            className="kotakForm"
            type="email"
            placeholder="Masukan alamat email"
          />
        </Form.Group>

        <Form.Group className="form2 mb-3" controlId="formBasicPassword">
          <Form.Label className="Llabel">Kata Sandi</Form.Label>
          <Form.Control
            className="kotakForm"
            type="password"
            placeholder="Masukan kata sandi"
          />
        </Form.Group>

        <Link to="/dashboard" style={{ textDecoration: "none" }}>
        <Button className="btnSubmit" variant="primary" type="submit">
          Masuk
        </Button>
        </Link>
      </Form>
    </Modal>
  );
}

export default HalamanLogin;
