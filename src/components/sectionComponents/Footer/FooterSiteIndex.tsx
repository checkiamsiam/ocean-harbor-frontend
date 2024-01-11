import { Link } from "@/lib/router-events";

const FooterSiteIndex = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p className="uppercase text-primary font-bold">Site index</p>
        <span>
          <Link href="/about" className=" hover:text-primary hover:underline text-inherit">
            About Golden Anchor
          </Link>
        </span>
        <span>
          <Link href="/brands" className=" hover:text-primary hover:underline text-inherit">
            Brands
          </Link>
        </span>
        <span>
          <Link href="/faq" className=" hover:text-primary hover:underline text-inherit">
            FAQs
          </Link>
        </span>
        <span>
          <Link href="/pre-order" className=" hover:text-primary hover:underline text-inherit">
            Pre-order
          </Link>
        </span>
        <span>
          <Link href="/contact" className=" hover:text-primary hover:underline text-inherit">
            Contact us
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FooterSiteIndex;
