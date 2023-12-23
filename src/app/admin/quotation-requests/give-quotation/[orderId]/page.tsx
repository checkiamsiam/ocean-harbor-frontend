"use client";
import Form from "@/components/form/Form";
import FormUploadFile from "@/components/form/FormUploadFile";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useRouter } from "@/lib/router-events";
import { useGiveQuotationMutation } from "@/redux/features/order/orderApi";
import { Button, Col, Row, message } from "antd";
import { useParams } from "next/navigation";

const GiveQuotationPage = () => {
  const params = useParams();
  const router = useRouter();
  const [giveQuotation] = useGiveQuotationMutation();
  const submitHandler = async (data: any) => {
    const file = data["quotation"];
    if (!file) {
      message.warning("Please upload quotation");
      return;
    }
    const formData = new FormData();
    formData.append("quotation", file as Blob);
    message.loading("Uploading Quotation...");
    console.log(formData.values());
    try {
      const res = await giveQuotation({
        id: params.orderId as string,
        data: formData,
      }).unwrap();
      if (!!res) {
        message.destroy();
        message.success("Quotation uploaded successful");
        router.push("/admin/quotation-given");
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to upload quotation! try again");
    }
  };
  return (
    <div>
      <GAActionBar title="Quotation Upload">
        <GABreadCrumb items={[{ label: "Order" }, { label: "Quotation Requests" }, { label: "Give Quotation" }]} />
      </GAActionBar>

      <Form submitHandler={submitHandler}>
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
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormUploadFile name="quotation" type="pdf" />
              </Col>
            </Row>
          </div>
          <div style={{ marginTop: 24 }}>
            <Button type="primary" htmlType="submit">
              Upload
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default GiveQuotationPage;
