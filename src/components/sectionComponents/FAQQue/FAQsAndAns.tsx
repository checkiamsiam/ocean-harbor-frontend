import GAButton from "@/components/ui/GAButton";
import { Link } from "@/lib/router-events";

const FAQsAndAns = ({
  question,
  answer,
  action,
}: {
  question: string;
  answer: string;
  action?: {
    text: string;
    link: string;
  };
}) => {
  return (
    <div>
      <h1 className="text-heading text-primary capitalize">{question}</h1>
      <hr className="text-primary bg-primary" />
      <div className="pt-5 text-secondary leading-6 pl-10">
        <p className="text-body mb-5">{answer}</p>
        {action && (
          <Link href={action.link}>
            <GAButton arrow>{action.text}</GAButton>
          </Link>
        )}
      </div>
    </div>
  );
};

export default FAQsAndAns;
