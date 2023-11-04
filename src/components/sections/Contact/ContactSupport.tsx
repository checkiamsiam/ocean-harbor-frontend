import { Card } from "antd";
import { RiCustomerService2Fill, RiMailSendLine, RiWhatsappLine } from "react-icons/ri";

const ContactSupport = () => {
  return (
    <div className="ga-container">
      <div className="pb-10 ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <Card>
            <div className="flex flex-col justify-center items-center">
              <RiCustomerService2Fill className="text-[6rem] text-secondary" />
              <div>
                <h2 className="text-heading text-primary uppercase text-center">customer service</h2>
                <p className="text-body  text-center text-secondary">+8801910072665</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col justify-center items-center">
              <RiWhatsappLine className="text-[6rem] text-secondary" />
              <div>
                <h2 className="text-heading text-primary uppercase text-center">Whatsapp Chat</h2>
                <p className="text-body  text-center text-secondary">+8801910072665</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col justify-center items-center">
              <RiMailSendLine className="text-[6rem] text-secondary" />
              <div>
                <h2 className="text-heading text-primary uppercase text-center">Contact email</h2>
                <p className="text-body  text-center text-secondary">support@goldenanchor.com</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
