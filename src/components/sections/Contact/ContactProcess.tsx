"use client";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import FormTextArea from "@/components/form/FormTextArea";

const ContactProcess = () => {
  const submitHandler = (data: any) => {
    console.log("submited");
  };
  return (
    <div className="ga-container">
      <div className="  py-10 ">
        <div className="p-5 shadow-lg grid grid-cols-2 gap-5">
          <div>
            <h1 className="text-heading text-primary uppercase">Questions</h1>
            <hr className="text-primary bg-primary" />
            <p className="text-body my-5 text-secondary">
              Do you have a question, or do you want to get in touch with us? We are happy to help. Please fill out our contact form and we will get
              back to you as soon as possible.
            </p>
          </div>
          <div>
            <Form submitHandler={submitHandler}>
              <div className="flex flex-col gap-4">
                <div>
                  <FormInput name="name" required label="Name" size="large" />
                </div>
                <div>
                  <FormInput name="company" required label="Company" size="large" />
                </div>
                <div>
                  <FormInput name="phone" required label="Phone Number" size="large" />
                </div>
                <div>
                  <FormInput name="email" required label="Email Adress" size="large" />
                </div>
                <div>
                  <FormTextArea name="message" required label="Message" rows={5} />
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactProcess;
