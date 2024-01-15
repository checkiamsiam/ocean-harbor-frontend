import { Link } from "@/lib/router-events";
import { Flex } from "antd";
import ProductsPopoverContent from "./ProductsPopoverContent";

const HeaderNavigationDesktop = () => {
  return (
    <div>
      <Flex align="center" gap={25} style={{ color: "white" }}>
        <Link href="/" className="text-white capitalize hover:text-primary">
          Home
        </Link>

        <ProductsPopoverContent />

        <Link href="/brands" className="text-white capitalize hover:text-primary">
          Brands
        </Link>
        <Link href="/faq" className="text-white capitalize hover:text-primary">
          FAQs
        </Link>
        <Link href="/about" className="text-white capitalize hover:text-primary">
          About ocean harbor
        </Link>
        <Link href="/pre-order" className="text-white capitalize hover:text-primary">
          Pre-order
        </Link>
        <Link href="/contact" className="text-white capitalize hover:text-primary">
          Contact us
        </Link>
      </Flex>
    </div>
  );
};

export default HeaderNavigationDesktop;
