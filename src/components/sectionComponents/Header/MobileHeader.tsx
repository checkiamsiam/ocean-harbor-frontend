"use client";
import { Col, Row } from "antd";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";

const MobileHeader = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Row>
        <Col span={4}>
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
        </Col>
        <Col span={20}>
          <SearchBar />
        </Col>
      </Row>

      {isOpen && (
        <div className="mobile-navigation mt-5 ">
          <div className="flex flex-col gap-5">
            <Link href="/" className="text-white uppercase hover:text-primary no-underline">
              Home
            </Link>
            <Link href="/categories" className="text-white uppercase hover:text-primary no-underline">
              Products
            </Link>
            <Link href="/brands" className="text-white uppercase hover:text-primary no-underline">
              Brands
            </Link>
            <Link href="/faq" className="text-white uppercase hover:text-primary no-underline">
              Faqs
            </Link>
            <Link href="/about" className="text-white uppercase hover:text-primary no-underline">
              About golden anchor
            </Link>
            <Link href="/pre-order" className="text-white uppercase hover:text-primary no-underline">
              Pre-order
            </Link>
            <Link href="/contact" className="text-white uppercase hover:text-primary no-underline">
              Contact us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
