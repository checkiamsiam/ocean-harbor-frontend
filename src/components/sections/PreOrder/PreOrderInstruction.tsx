import GAButton from "@/components/ui/GAButton";
import Link from "next/link";

const PreOrderInstruction = () => {
  return (
    <div>
      <div className="ga-container">
        <div className="py-10">
          <div>
            <h1 className="text-heading text-primary uppercase">Seeking a Customized Order or Quotation?</h1>
            <hr className="text-primary bg-primary" />
            <div className="pt-5 text-secondary leading-6 pl-10">
              <p className="text-body mb-5">
                Take the first step towards a personalized sourcing experience with Golden Anchor. Request a quotation today and unlock a world of
                bespoke sourcing solutions tailored to your needs. <br /> Experience the difference with Golden Anchor, where your unique preferences
                drive our sourcing expertise.
              </p>

              <Link href="/contact">
                <GAButton arrow>Request a Custom Quotation</GAButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOrderInstruction;
