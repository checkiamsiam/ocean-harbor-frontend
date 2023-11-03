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
                question="HOW CAN I BECOME A CUSTOMER?"
                answer="You can become a customer by filling out the registration form clicking on the button below. After you have filled the form out please
                send a mail to us at info@goldenanchor.com so our admin can register you as a customer. The sales manager of your area will contact
                you shortly after to make an appointment for a first meeting."
                action={{ text: "Become a customer", link: "https://www.unidexholland.com/en/faqs" }}
              />
            </div>
            <div>
              <FAQsAndAns
                question="WHY ARE THERE NO PRICES SHOWN ON THE WEBSITE?"
                answer="We supply to a variety of companies all over the world in small and bigger quantities. Our prices depend on your order size and our logistical costs. This is why it is not possible to communicate one price for everyone; We calculate our best possible offer for every individual customer. If you have a specific request please let us know and we will send you a personal offer."
              />
            </div>
            <div>
              <FAQsAndAns
                question="DO YOU DELIVER TO CONSUMERS?"
                answer="We do not sell to consumers directly. We can only deliver goods to registered companies."
              />
            </div>
            <div>
              <FAQsAndAns
                question="I WOULD LIKE TO MAKE A DELIVERY. HOW CAN I GET IN CONTACT WITH THE RIGHT DEPARTMENT?"
                answer="In case of a delivery announcement you can contact our logistics department at transport@goldenanchor.com. If you are a supplier and you would like us to carry your products you can send your company information to purchase@goldenanchor.com."
              />
            </div>
            <div>
              <FAQsAndAns
                question="WHAT ARE THE VISITING HOURS OF THE WAREHOUSE?"
                answer="You can collect your order in our warehouse from 8 AM till 4 PM. Please have your ordernumber ready for our warehouse staff."
              />
            </div>
            <div>
              <FAQsAndAns
                question="WHERE DO I FILE A COMPLAINT ABOUT MY DELIVERY OR A PRODUCT?"
                answer="If you have a complaint about your delivery or products please contact your regular sales contact so they can solve the problem. In case there is damage due to shipment please inform the driver and mention this on the shipping documents. This way we can solve your complaint quicker."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqQue;
