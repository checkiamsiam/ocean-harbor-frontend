import { Link } from "@/lib/router-events";

const FooterContact = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <p className="capitalize text-primary font-bold">OCEAN HARBOR B.V</p>
        <p className="">Chamber of Commerce: 91891434</p>
        <p className="">RSIN: 865807267</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="capitalize text-primary font-bold">PHONE</p>
        <span>
          <Link href="tel:+8701910072662" className=" hover:text-primary  text-inherit ">
            +31 6 24945665
          </Link>
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="capitalize text-primary font-bold">Email</p>
        <span>
          <Link href="mailto:info@oceanharbor.nl" className=" hover:text-primary  text-inherit">
            info@oceanharbor.nl
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FooterContact;
