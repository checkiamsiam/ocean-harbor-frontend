"use client";
import { Col, Row } from "antd";
import FormInput from "../form/FormInput";

const CustomerInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
            
          }}
        >
          <FormInput type="text" name="name" size="large" label="Name" />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput type="email" name="email" size="large" label="Email Address" />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput type="password" name="password" size="large" label="Set Password" />
        </Col>
      </Row>
    </div>
  );
};

export default CustomerInfo;
