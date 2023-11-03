import Link from "next/link";

const FooterSiteIndex = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p className="uppercase text-primary font-bold">Site index</p>
        <span>
          <Link href="/" className=" hover:text-primary hover:underline text-inherit">
            About Golden Anchor
          </Link>
        </span>
        <span>
          <Link href="/" className=" hover:text-primary hover:underline text-inherit">
            Brands
          </Link>
        </span>
        <span>
          <Link href="/" className=" hover:text-primary hover:underline text-inherit">
            Faqs
          </Link>
        </span>
        <span>
          <Link href="/" className=" hover:text-primary hover:underline text-inherit">
            Pre-order
          </Link>
        </span>
        <span>
          <Link href="/" className=" hover:text-primary hover:underline text-inherit">
            Contact us
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FooterSiteIndex;
