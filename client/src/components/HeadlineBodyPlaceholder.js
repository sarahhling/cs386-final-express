import React from "react";
import { Row, Col, Image, Placeholder } from "react-bootstrap";

export default function MyComponent() {
  const renderPlaceholders = () => {
    const placeholders = [];

    for (let i = 0; i < 6; i++) {
      placeholders.push(
        <Row className="ms-2 py-2" key={i}>
          <Col xs={2}>
            <Image
              src="/images/placeholder_img.png"
              className="w-100"
              alt="image placeholder"
            ></Image>
          </Col>
          <Col>
            <Row className="py-1">
              <Placeholder as="span" animation="glow">
                <Placeholder xs={2} bg="secondary" />
              </Placeholder>
            </Row>
            <Row className="pb-1">
              <Placeholder as="span" animation="glow">
                <Placeholder xs={9} bg="secondary" />
              </Placeholder>
            </Row>
            <Row>
              <Placeholder as="span" animation="glow">
                <Placeholder xs={4} bg="secondary" />
              </Placeholder>
            </Row>
          </Col>
        </Row>
      );
    }

    return placeholders;
  };

  return <div>{renderPlaceholders()}</div>;
}
