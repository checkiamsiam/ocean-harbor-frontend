"use client";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import FormSelectField from "@/components/form/FormSelectField";
import FormUploadFile from "@/components/form/FormUploadFile";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { Button, Col, Row } from "antd";

const CreateCustomerPage = () => {
  const submitHandler = async (values: any) => {
    // message.loading("Creating...");
    // try {
    //   const res = await addCustomerWithFormData(values).unwrap();
    //   if (!!res) {
    //     message.destroy();
    //     message.success("Your request to add customer has been sent successful");
    //   }
    // } catch (err: any) {
    //   message.destroy();
    //   message.warning("Failed to add new customer! try again");
    // }
  };
  return (
    <div>
      <GAActionBar title="Create Customer">
        <div className=" ">
          <GABreadCrumb items={[{ label: "Management" }, { label: "Manage Product" }, { label: "Add" }]} />
        </div>
      </GAActionBar>
      <Form submitHandler={submitHandler}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
            marginTop: "10px",
          }}
        >
          <h1 className="text-heading text-primary uppercase mb-5">Product Information</h1>
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
              <FormUploadFile name="image" />
            </Col>
          </Row>
          <h1 className="text-heading text-primary uppercase mb-5">Product taxonomy</h1>
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
            
          </Row>
        </div>
        <div style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateCustomerPage;
