"use client";
import Form from "@/components/form/Form";
import FormUploadFile from "@/components/form/FormUploadFile";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import GAButton from "@/components/ui/GAButton";
import { uploaded_image_persist_key } from "@/constants/localstorageKeys";
import { useBulkUploadMutation } from "@/redux/features/upload/uploadApi";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/browserStorage/localstorage";
import { Button, Col, Row, message } from "antd";
import { useEffect, useState } from "react";
import { useCSVDownloader } from "react-papaparse";

const BulkImageUpload = () => {
  const { CSVDownloader, Type } = useCSVDownloader();
  const [uploadedImage, setUploadedImage] = useState<any>([]);

  const [bulkUpload, { isLoading }] = useBulkUploadMutation();
  const submitHandler = async (data: any) => {
    const files = data["images"];

    if (!files || files.length === 0) {
      message.warning("Please upload images");
      return;
    }
    const formData = new FormData();
    files.forEach((file: any, index: any) => {
      formData.append("images", file); // Use the same key for all files ("images")
    });
    message.loading("Uploading Images...");
    try {
      const res = await bulkUpload({
        data: formData,
      }).unwrap();
      if (!!res) {
        message.destroy();
        message.success("Images uploaded successful");
        setUploadedImage(res);
        setToLocalStorage(uploaded_image_persist_key, JSON.stringify(res));
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to upload Images! try again");
    }
  };

  useEffect(() => {
    return () => {
      setUploadedImage(JSON.parse(getFromLocalStorage(uploaded_image_persist_key) as string));
    };
  }, [isLoading]);

  return (
    <div>
      <GAActionBar title="Bulk Upload">
        <GABreadCrumb items={[{ label: "Bulk Upload" }, { label: "Image" }]} />
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
                span={24}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormUploadFile name="images" type="image" multiple />
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
      <div>
        {uploadedImage.length > 0 && (
          <div className="mt-5">
            <h3 className="mb-5">Recent Uploads</h3>
            <CSVDownloader type={Type.Link} filename={"images"} bom={true} data={uploadedImage}>
              <GAButton style={{ margin: "0px 5px" }} type="primary">
                Download CSV
              </GAButton>
            </CSVDownloader>
            <div className="mt-5 flex flex-col gap-2">
              {uploadedImage.length > 0 &&
                uploadedImage.map((image: any, index: any) => {
                  return (
                    <div key={index}>
                      <a href={image.path} target="_blank">
                        {index + 1}. {image.path}
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BulkImageUpload;
