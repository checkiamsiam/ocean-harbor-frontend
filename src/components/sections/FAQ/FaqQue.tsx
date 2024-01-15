import FAQsAndAns from "@/components/sectionComponents/FAQQue/FAQsAndAns";

const FaqQue = () => {
  return (
    <div>
      <div className="ga-container">
        <div className="py-10">
          {/* =========== FAQs =========== */}
          <div className="flex flex-col gap-10">
            <div>
              <FAQsAndAns
                question="how can i become a customer?"
                answer="Fill out the registration form below and email us at info@oceanharbor.nl. Our sales manager will contact you soon for a meeting"
                action={{ text: "Become a customer", link: "/registration" }}
              />
            </div>
            <div>
              <FAQsAndAns
                question="why are there no prices shown on the website?"
                answer="Our prices vary depending on your order size and our logistical costs. We offer the best possible offer for each customer. Contact us for a personal quote"
              />
            </div>
            <div>
              <FAQsAndAns
                question="do you deliver to consumers?"
                answer="No, we only deliver to registered companies."
              />
            </div>
            <div>
              <FAQsAndAns
                question="i would like to make a delivery. how can i get in contact with the right department?"
                answer="For delivery announcements, email info@oceanharbor.nl. For suppliers, email info@oceanharbor.nl."
              />
            </div>
            <div>
              <FAQsAndAns
                question="what are the visiting hours of the warehouse?"
                answer=" You can collect your order from 8 AM to 4 PM. Have your order number ready."
              />
            </div>
            <div>
              <FAQsAndAns
                question="where do i file a complaint about my delivery or a product?"
                answer="Contact your sales contact for any complaints. Inform the driver and note it on the shipping documents if there is any damage."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqQue;
