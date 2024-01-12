"use client";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import FormTextArea from "@/components/form/FormTextArea";
import GAButton from "@/components/ui/GAButton";
import { useContactMailMutation } from "@/redux/features/contact/contactApi";
import { IContactMail } from "@/types";
import { message } from "antd";

const ContactForm = () => {
  const [sendMail] = useContactMailMutation();
  const submitHandler = async (data: IContactMail) => {
    await sendMail({ data });
    message.success("Your message has been sent successfully");
  };
  return (
    <div>
      <Form submitHandler={submitHandler}>
        <div className="flex flex-col gap-4">
          <div>
            <FormInput name="name" required label="Name" size="large" />
          </div>
          <div>
            <FormInput name="companyName" required label="Company" size="large" />
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
          <div className="flex justify-end">
            <GAButton htmlType="submit" size="large" arrow>
              Send
            </GAButton>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
