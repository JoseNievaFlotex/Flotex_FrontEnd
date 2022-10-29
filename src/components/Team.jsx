import { Button, Col, Container, Row } from "react-bootstrap";
import React from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import Form from 'react-bootstrap/Form';


export const Team = (props) => {
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  return (
    <div id="team" className="text-center">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-sm-6">
            <Form>
              <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formPlaintextEmail">
                <Form.Label column sm="4">
                  Tipo Comprobante
                </Form.Label>
                <Col sm="6">
                  <Form.Select aria-label="Default select example">
                    <option>Factura</option>
                    <option value="1">Boleta</option>
                    <option value="2">Nota de credito</option>
                    <option value="3">Nota de debito</option>
                    <option value="3">Retencion</option>
                  </Form.Select>
                </Col>
                <Col sm="1">
                  <Form.Label column>
                    (*)
                  </Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                  Serie y Numero
                </Form.Label>
                <Col sm="3">
                  <Form.Control type="password" placeholder="Ejem: F001" />
                </Col>
                <Col sm="3">
                  <Form.Control placeholder="Ejem: 2524" />
                </Col>
                <Col sm="1">
                  <Form.Label column>
                    (*)
                  </Form.Label>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                  Fecha comprobante
                </Form.Label>
                <Col sm="6">
                  <Form.Control type="password" placeholder="Fecha comprobante" />
                </Col>
                <Col sm="1">
                  <Form.Label column>
                    (*)
                  </Form.Label>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                  Monto total
                </Form.Label>
                <Col sm="6">
                  <Form.Control type="password" placeholder="Monto total" />
                </Col>
                <Col sm="1">
                  <Form.Label column>
                    (*)
                  </Form.Label>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3 justify-content-center " controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                  Ruc emisor
                  (Proveedor)
                </Form.Label>
                <Col sm="6">
                  <Form.Control type="password" placeholder="Ingresa RUC emisor del Provedor" />
                </Col>
                <Col sm="1">
                  <Form.Label column>
                    (*)
                  </Form.Label>
                </Col>
              </Form.Group>


              <Form.Group as={Row} className="mb-3 justify-content-center " controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                  Ruc emisor
                  (Proveedor)
                </Form.Label>
                <Col sm="6">
                  <ReCAPTCHA
                    sitekey="YOUR-SITE-KEY"
                    onChange={onChange}
                  />
                </Col>
                <Col sm="1">
                  <Form.Label column>
                    (*)
                  </Form.Label>
                </Col>
              </Form.Group>
              <Form.Group >
                <Button>Consultar ahora</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
