const UserGuide = () => {
  return (
    <div>
      <div className="ga-container">
        <div className="py-10">
          <div className="md:grid md:grid-cols-2 gap-5">
            <div>
              <h1 className="text-heading text-primary capitalize">New in Ocean Harbor?</h1>
              <hr className="text-primary bg-primary" />
              <div className="pt-5 text-secondary leading-6 ">
                <p className="text-body">Are you new to Ocean Harbor and would you like to request a price quote? Please follow these steps:</p>
                <ol className="text-body pl-10 mb-5">
                  <li>
                    browse through our product offer and press the plus sign under the product(s) for which you would like to receive a price quote.
                  </li>
                  <li>
                    When you have specified all products for which you wish to receive a quotation, go to the shopping cart. Here you can leave your
                    details and request a quote.
                  </li>
                  <li>Our team will get back to you within 3 working days and you will receive a tailor-made quote.</li>
                </ol>
              </div>
            </div>
            <div>
              <h1 className="text-heading text-primary capitalize">Existing Customer?</h1>
              <hr className="text-primary bg-primary" />
              <div className="pt-5 text-secondary leading-6">
                <p className="text-body">
                  Are you already a customer with us and would you like to request a price quote for a product? Please follow these steps:
                </p>
                <ol className="text-body pl-10 mb-5">
                  <li>Log on to your account in the app or on the website.</li>
                  <li>
                    Browse our range and press the plus sign for the product(s) for which you wish to receive a quote. This is the same as the usual
                    order process.
                  </li>
                  <li>When you have market all products you would like a quote for, go to the shopping cart. Here you can request a quote</li>
                  <li>We will contact you as soon as possible with a tailor-made quote.</li>
                  <li>After you have confirmed this offer, the goods will be shipped.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGuide;
