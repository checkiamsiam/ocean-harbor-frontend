"use client";
import GABrandSelect from "@/components/form/FormBrandSelect";
import GACategorySelect from "@/components/form/FormCategorySelect";
import FormInput from "@/components/form/FormInput";
import FormSelectField from "@/components/form/FormSelectField";
import GASubCategorySelect from "@/components/form/FormSubCategorySelect";
import FormUploadFile from "@/components/form/FormUploadFile";
import { Col, Row } from "antd";

const ProductForm = () => {
  return (
    <div>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        <h1 className="text-heading text-primary capitalize mb-5">Product Information</h1>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="text" name="title" size="large" label="Title" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="text" name="netWeight" size="large" label="Net Weight (kg/gm/lt)" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="number" name="packetPerBox" size="large" label="Packet Per Box" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormSelectField
              name="type"
              size="large"
              options={[
                { label: "Frozen", value: "frozen" },
                { label: "Dry", value: "dry" },
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
            <FormUploadFile name="image" label="Image" />
          </Col>
        </Row>
        <h1 className="text-heading text-primary capitalize mb-5">Product taxonomy</h1>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <GACategorySelect name="categoryId" label="Category" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <GASubCategorySelect name="subCategoryId" label="Sub Category" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <GABrandSelect name="brandId" label="Brand" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductForm;
