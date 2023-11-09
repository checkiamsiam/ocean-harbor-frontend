import GALogo from "@/components/common/GALogo";
import { Col, Flex, Row } from "antd";
import Link from "next/link";
import { BiSolidCartAlt, BiSolidUser } from "react-icons/bi";
import SearchBar from "./SearchBar";

const HeaderBottomBar = () => {
  return (
    <div className="pt-3">
      <Row justify="center" align="bottom">
        <Col span={0} md={6}>
          <div className="hidden lg:block">
            <GALogo />
          </div>
        </Col>
        <Col span={4} md={10}>
          <div className="hidden lg:block">
            <SearchBar />
          </div>
        </Col>
        <Col span={20} md={8}>
          <Flex justify="end" align="center" gap={10}>
            <Link href="/login" className="text-white flex justify-center gap-2 items-center hover:text-primary">
              <span>Sign In</span> <BiSolidUser className="text-icon" />
            </Link>
            <Link href="/cart" className="text-white flex justify-center gap-2 items-center hover:text-primary">
              <BiSolidCartAlt className="text-icon" />
            </Link>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderBottomBar;
