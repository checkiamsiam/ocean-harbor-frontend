"use client";
import { Col, Row } from "antd";
import FormInput from "../form/FormInput";
import FormSelectField from "../form/FormSelectField";
import FormTextArea from "../form/FormTextArea";

const CompanyInfo = () => {
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
          <FormInput type="text" name="companyName" size="large" label="Company Name" />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput type="text" name="companyRegNo" size="large" label="Company Register No." />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput type="text" name="taxNumber" size="large" label="Tax Number" />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelectField
            name="companyType"
            label="Company Type"
            size="large"
            options={[
              { label: "Shop", value: "shop" },
              { label: "Wholesale", value: "wholesale" },
            ]}
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormTextArea name="companyDetails" label="Details About Company" rows={5} />
        </Col>
      </Row>
    </div>
  );
};

export default CompanyInfo;
