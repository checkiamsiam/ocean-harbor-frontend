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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7306.00395967897!2d90.428901288472!3d23.711623337944626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9cbe9b9698d%3A0x32363e6e6ecbcd2b!2sJatrabari%20Police%20Station!5e0!3m2!1sen!2sbd!4v1699084839036!5m2!1sen!2sbd"
        width="100%"
        height="450"
        loading="lazy"
        className="p-0 m-0"
      ></iframe>
    </div>
  );
};

export default ContactPage;
