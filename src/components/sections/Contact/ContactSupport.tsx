import { Card } from "antd";
import { RiCustomerService2Fill, RiMailSendLine, RiWhatsappLine } from "react-icons/ri";

const ContactSupport = () => {
  return (
    <div className="ga-container">
      <div className="pb-10 ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <Card>
            <a href="tel:+8701910072662">
              <div className="flex flex-col justify-center items-center">
                <RiCustomerService2Fill className="text-[6rem] text-secondary" />
                <div>
                  <h2 className="text-heading text-primary capitalize text-center">customer service</h2>
                  <p className="text-body  text-center text-secondary">+31 6 24945665</p>
                </div>
              </div>
            </a>
          </Card>
          <Card>
            <a href="https://api.whatsapp.com/send?phone=+31 6 24945665">
              <div className="flex flex-col justify-center items-center">
                <RiWhatsappLine className="text-[6rem] text-secondary" />
                <div>
                  <h2 className="text-heading text-primary capitalize text-center">Whatsapp Chat</h2>
                  <p className="text-body  text-center text-secondary">+31 6 24945665</p>
                </div>
              </div>
            </a>
          </Card>
          <Card>
            <a href="mailto:info@oceanharbor.nl">
              <div className="flex flex-col justify-center items-center">
                <RiMailSendLine className="text-[6rem] text-secondary" />
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
