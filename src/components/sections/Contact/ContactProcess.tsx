import ContactForm from "@/components/sectionComponents/ContactProcess/ContactForm";
import ReachUsToContact from "@/components/sectionComponents/ContactProcess/ReachUsToContact";
import { Card } from "antd";

const ContactProcess = () => {
  return (
    <div className="ga-container">
      <div className="py-10 ">
        <Card>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <ReachUsToContact />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactProcess;
