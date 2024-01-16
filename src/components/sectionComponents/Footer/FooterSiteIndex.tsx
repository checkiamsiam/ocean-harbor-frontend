import { Link } from "@/lib/router-events";

const FooterSiteIndex = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p className="capitalize text-primary font-bold">SITE INDEX</p>
        <span>
          <Link href="/about" className=" hover:text-primary  text-inherit">
            About Ocean Harbor
          </Link>
        </span>
        <span>
          <Link href="/brands" className=" hover:text-primary  text-inherit">
            Brands
          </Link>
        </span>
        <span>
          <Link href="/faq" className=" hover:text-primary  text-inherit">
            FAQs
          </Link>
        </span>
        <span>
          <Link href="/pre-order" className=" hover:text-primary  text-inherit">
            Pre-order
          </Link>
        </span>
        <span>
          <Link href="/contact" className=" hover:text-primary  text-inherit">
            Contact us
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FooterSiteIndex;
