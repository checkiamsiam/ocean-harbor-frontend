"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import GAButton from "@/components/ui/GAButton";
import { MdOutlineClose } from "react-icons/md";

import { Product } from "@/types/ApiResponse";
import { Button, Col, Row, message } from "antd";
import { useState } from "react";
import { useCSVReader } from "react-papaparse";
import { useBulkAddProductMutation } from "@/redux/features/product/productApi";
import { useRouter } from "@/lib/router-events";

const BulkProductUpload = () => {
  const router = useRouter();
  const [parsedData, setParsedData] = useState<Partial<Product>[]>([]);
  const { CSVReader } = useCSVReader();
  const [bulkAddProduct] = useBulkAddProductMutation()
  const handleBulkUpload = async () => {
    message.loading("Adding...");
    try {
      const res = await bulkAddProduct({ data: parsedData }).unwrap();
      if (!!res) {
        message.destroy();
        message.success("Your request to add products has been sent successful");
        router.push("/admin/manage-products");
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to add new products! try again");
    }
  };
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
                config={{
                  header: true,
                }}
                onUploadAccepted={async (results: any) => {
                  await results;
                  setParsedData(results.data);
                    // Filter out empty rows
                    const nonEmptyRows = results.data.filter((row: any) => Object.values(row).some((cell: any) => cell !== ''));
                    setParsedData(nonEmptyRows);
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
          <Button type="primary" onClick={handleBulkUpload}>
            Upload All At Once
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BulkProductUpload;
