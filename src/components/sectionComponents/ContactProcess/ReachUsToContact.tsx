import { MdLocationPin } from "react-icons/md";

const ReachUsToContact = () => {
  return (
    <div>
      <h1 className="text-heading text-primary capitalize">Reach us</h1>
      <hr className="text-primary bg-primary" />
      <ul className="list-none py-5 flex flex-col gap-5">
        <li className="flex gap-3">
          <span className="p-1 h-10 w-10 bg-primary rounded-full flex justify-center items-center text-white text-icon">
            <MdLocationPin />
          </span>
          <div className="flex flex-col gap-2">
            <div>
              <h5 className="text-body font-semibold">Visiting Address</h5>
              <p className="text-body">Deltazijde 20B, 1261 ZM, Blaricum, The Netherlands</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ReachUsToContact;
