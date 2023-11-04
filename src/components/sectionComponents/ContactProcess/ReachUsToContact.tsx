import { MdLocalPhone, MdLocationPin, MdMail } from "react-icons/md";

const ReachUsToContact = () => {
  return (
    <div>
      <h1 className="text-heading text-primary uppercase">Reach us</h1>
      <hr className="text-primary bg-primary" />
      <ul className="list-none py-5 flex flex-col gap-5">
        <li className="flex gap-3">
          <span className="p-1 h-10 w-10 bg-primary rounded-full flex justify-center items-center text-white text-icon">
            <MdLocationPin />
          </span>
          <div className="flex flex-col gap-2">
            <div>
              <h5 className="text-body font-semibold ">Postal Address</h5>
              <p className="text-body">63 word, dhaka 1232</p>
            </div>
            <div>
              <h5 className="text-body font-semibold">Visiting Address</h5>
              <p className="text-body">RS Tower, 2nd Floor, Rupa Tower, Jhalkuri, Narayangang</p>
            </div>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="p-1 h-10 w-10 bg-primary rounded-full flex justify-center items-center text-white text-icon">
            <MdLocalPhone />
          </span>
          <div className="flex flex-col gap-2">
            <div>
              <h5 className="text-body font-semibold">Phone</h5>
              <p className="text-body">+8801910072662 , +8802159982566</p>
            </div>
            <div>
              <h5 className="text-body font-semibold">Whatsapp</h5>
              <p className="text-body">+8801910072662 , +8802159982566</p>
            </div>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="p-1 h-10 w-10 bg-primary rounded-full flex justify-center items-center text-white text-icon">
            <MdMail />
          </span>
          <div className="flex flex-col gap-2">
            <div>
              <h5 className="text-body font-semibold">Email</h5>
              <p className="text-body">info@goldenanchor.com</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ReachUsToContact;
