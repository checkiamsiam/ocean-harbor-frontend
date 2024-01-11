import { Link } from "@/lib/router-events";

const FooterContact = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <p className="uppercase text-primary font-bold">Golden Anchor B.V</p>
        <p className="">Chamber of Commerce: 90042794
</p>
        <p className="">RSIN: 865192157</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="uppercase text-primary font-bold">PHONE</p>
        <span>
          <Link href="tel:+8701910072662" className=" hover:text-primary hover:underline text-inherit ">
            +31 6 87359280
          </Link>
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="uppercase text-primary font-bold">Email</p>
        <span>
          <Link href="mailto:info@goldenanchor.nl" className=" hover:text-primary hover:underline text-inherit">
          info@goldenanchor.nl
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FooterContact;
