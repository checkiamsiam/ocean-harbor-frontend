"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import GAButton from "@/components/ui/GAButton";
import { MdOutlineClose } from "react-icons/md";

import { Button, Col, Row } from "antd";
import { useCSVReader } from "react-papaparse";

const BulkProductUpload = () => {
  const { CSVReader } = useCSVReader();
  return (
    <div>
      <GAActionBar title="Bulk Upload">
        <GABreadCrumb items={[{ label: "Bulk Upload" }, { label: "Product" }]} />
      </GAActionBar>

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
              <CSVReader
                onUploadAccepted={async (results: any) => {
                  console.log("---------------------------");
                  console.log(results);
                  console.log("---------------------------");
                }}
              >
                {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }: any) => (
                  <>
                    <div>
                      <button {...getRootProps()} type="button" className="border-2 rounded-md p-8 border-dotted p-3  w-80">
                        <div className=" w-full h-full flex flex-col items-center">
                          <p className="font-medium mb-1">Drop document here</p>
                          <p className="font-medium text-sm mb-4 text-gray-600">or upload it manualy</p>
                          <GAButton>
                            Upload manualy{" "}
                            <span>
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 1V6M6 11V6M6 6H1M6 6H11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </span>
                          </GAButton>
                        </div>
                      </button>
                      <div className="mt-5">
                        {acceptedFile && acceptedFile.name} {acceptedFile && <MdOutlineClose className="cursor-pointer" {...getRemoveFileProps()} />}
                      </div>
                    </div>
                    <ProgressBar className="bg-primary mt-5" />
                  </>
                )}
              </CSVReader>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BulkProductUpload;
