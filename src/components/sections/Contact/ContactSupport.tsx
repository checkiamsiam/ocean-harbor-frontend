import { Card } from "antd";
import { FcCustomerSupport } from "react-icons/fc";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { TbMailForward } from "react-icons/tb";

const ContactSupport = () => {
  return (
    <div className="ga-container">
      <div className="pb-10 ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <Card className="hover:bg-[#bedce5]">
            <a href="tel:+8701910072662">
              <div className="flex flex-col justify-center items-center">
                <FcCustomerSupport className="text-[6rem] text-secondary" />
                <div>
                  <h2 className="text-heading text-primary capitalize text-center">customer service</h2>
                  <p className="text-body  text-center text-secondary">+31 6 24945665</p>
                </div>
              </div>
            </a>
          </Card>
          <Card className="hover:bg-[#bedce5]">
            <a href="https://api.whatsapp.com/send?phone=+31 6 24945665">
              <div className="flex flex-col justify-center items-center">
                <PiWhatsappLogoDuotone className="text-[6rem] text-secondary" />
                <div>
                  <h2 className="text-heading text-primary capitalize text-center">Whatsapp Chat</h2>
                  <p className="text-body  text-center text-secondary">+31 6 24945665</p>
                </div>
              </div>
            </a>
          </Card>
          <Card className="hover:bg-[#bedce5]">
            <a href="mailto:info@oceanharbor.nl">
              <div className="flex flex-col justify-center items-center">
                <TbMailForward className="text-[6rem] text-secondary" />
                <div>
                  <h2 className="text-heading text-primary capitalize text-center">Contact email</h2>
                  <p className="text-body  text-center text-secondary">info@oceanharbor.nl</p>
                </div>
              </div>
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
