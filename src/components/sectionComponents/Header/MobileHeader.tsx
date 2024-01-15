"use client";
import useClickOutside from "@/hooks/useClickOutside";
import { Link } from "@/lib/router-events";
import { Col, Row } from "antd";
import { Squash as Hamburger } from "hamburger-react";
import { useRef, useState } from "react";
import SearchBar from "./SearchBar";

const MobileHeader = () => {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  useClickOutside(ref, () => setOpen(false));
  return (
    <div ref={ref}>
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
            <Link href="/" className="text-white capitalize hover:text-primary no-underline">
              Home
            </Link>
            <Link href="/categories" className="text-white capitalize hover:text-primary no-underline">
              Products
            </Link>
            <Link href="/brands" className="text-white capitalize hover:text-primary no-underline">
              Brands
            </Link>
            <Link href="/faq" className="text-white capitalize hover:text-primary no-underline">
              FAQs
            </Link>
            <Link href="/about" className="text-white capitalize hover:text-primary no-underline">
              About ocean harbor
            </Link>
            <Link href="/pre-order" className="text-white capitalize hover:text-primary no-underline">
              Pre-order
            </Link>
            <Link href="/contact" className="text-white capitalize hover:text-primary no-underline">
              Contact us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
