import GAButton from "@/components/ui/GAButton";
import { Link } from "@/lib/router-events";

const PreOrderInstruction = () => {
  return (
    <div>
      <div className="ga-container">
        <div className="py-10">
          <div>
            <h1 className="text-heading text-primary capitalize">Request A Personalised Order or Quote</h1>
            <hr className="text-primary bg-primary" />
            <div className="pt-5 text-secondary leading-6 pl-10">
              <p className="text-body mb-5">
                Start your journey towards a customized seafood trading experience with Ocean Harbor. Fill out the form below and get access to a
                range of exclusive sourcing solutions designed for your needs. Discover the excellence of Ocean Harbor, where your specific
                requirements guide our trading expertise.
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
