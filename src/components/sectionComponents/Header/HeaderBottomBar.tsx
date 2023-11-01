import { theme } from "@/utils/theme/theme";
import { Col, Flex, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { BiSolidCartAlt, BiSolidUser } from "react-icons/bi";
import SearchBar from "./SearchBar";

const HeaderBottomBar = () => {
  return (
    <div className="pt-3">
      <Row justify="center" align="bottom">
        <Col span={6}>
          <div className="hidden lg:block">
            <Image src="/img/GOLDEN-ANCHOR-PNG-LOGO.png" alt="golden anchor logo" width={50} height={50} />
          </div>
        </Col>
        <Col span={10}>
          <div className="hidden lg:block">
            <SearchBar />
          </div>
        </Col>
        <Col span={8}>
          <Flex justify="end" align="center" gap={10}>
            <Link href="/" className="text-white flex justify-center gap-2 items-center hover:text-primary">
              <span>Sign In</span> <BiSolidUser style={{ fontSize: theme.fontSizes.icon }} />
            </Link>
            <Link href="/" className="text-white flex justify-center gap-2 items-center hover:text-primary">
              <BiSolidCartAlt style={{ fontSize: theme.fontSizes.icon }} />
            </Link>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderBottomBar;
