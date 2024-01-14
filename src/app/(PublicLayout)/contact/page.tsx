import Banner from "@/components/common/Banner";
import ContactProcess from "@/components/sections/Contact/ContactProcess";
import ContactSupport from "@/components/sections/Contact/ContactSupport";
import styles from "@/styles/contact.module.css";

const ContactPage = () => {
  return (
    <div>
      <Banner background={styles.bannerBG} title="Contact us" />
      <ContactProcess />
      <ContactSupport />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.308571806981!2d4.903923476185014!3d52.40108354502758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60846862e0d67%3A0xd459f62b2141593c!2sMetaalbewerkerweg%2019%2C%20c%2C%201032%20KW%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2sbd!4v1704981828250!5m2!1sen!2sbd"
        width="100%"
        height="450"
        loading="lazy"
        className="p-0 m-0"
      ></iframe>
    </div>
  );
};

export default ContactPage;
