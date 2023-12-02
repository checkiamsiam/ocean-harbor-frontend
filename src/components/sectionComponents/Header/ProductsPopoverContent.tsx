"use client";
import useClickOutside from "@/hooks/useClickOutside";
import { Link } from "@/lib/router-events";
import { Col, Row } from "antd";
import { useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const dummyCategory: string[] = [
  "Fruit",
  "Vegetables",
  "Meat",
  "Fish",
  "Dairy",
  "Bread",
  "Canned",
  "Frozen",
  "Beverages",
  "Baking",
  "Household",
  "Personal care",
];

const ProductsPopoverContent = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useClickOutside(ref, () => setShow(false));
  return (
    <>
      <div className="relative">
        <p onClick={() => setShow(!show)} className="uppercase cursor-pointer hover:text-primary flex items-center gap-1">
          Products <AiFillCaretDown />
        </p>
        {show && (
          <div ref={ref} className="absolute z-50 p-5 bg-secondary mt-4 w-[800px] shadow-lg">
            <Row gutter={[10, 10]}>
              {dummyCategory.map((slug, i) => (
                <Col span={8} key={i}>
                  <Link href={`/categories/${slug}`} className="text-white  hover:text-primary">
                    {slug}
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsPopoverContent;
