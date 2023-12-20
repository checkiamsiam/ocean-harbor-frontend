"use client";
import { Col, Row } from "antd";
import FormInput from "../form/FormInput";

const ContactInfo = () => {
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
          <FormInput type="text" name="phone" size="large" label="Phone No." />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
            
          }}
        >
          <FormInput type="text" name="country" size="large" label="Country" />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
            
          }}
        >
          <FormInput type="text" name="city" size="large" label="City" />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
            
          }}
        >
          <FormInput type="text" name="address" size="large" label="Address" />
        </Col>
        
      </Row>
    </div>
  );
};

export default ContactInfo;
