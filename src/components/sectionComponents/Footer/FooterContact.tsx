import Link from "next/link";

const FooterContact = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <p className="uppercase text-primary font-bold">Golden Anchor B.V</p>
        <p className="">Postbus 301</p>
        <p className="">2170 AH Hillegom</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="uppercase text-primary font-bold">PHONE</p>
        <span>
          <Link href="tel:+8701910072662" className=" hover:text-primary hover:underline text-inherit ">
            +8701910072662
          </Link>
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="uppercase text-primary font-bold">Email</p>
        <span>
          <Link href="mailto:info@goldenanchor.com" className=" hover:text-primary hover:underline text-inherit">
            info@goldenanchor.com
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FooterContact;
