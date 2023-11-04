import ContactForm from "@/components/sectionComponents/ContactProcess/ContactForm";
import ReachUsToContact from "@/components/sectionComponents/ContactProcess/ReachUsToContact";

const ContactProcess = () => {
  return (
    <div className="ga-container">
      <div className="py-10 ">
        <div className="p-5 shadow-lg grid md:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <ReachUsToContact />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactProcess;
