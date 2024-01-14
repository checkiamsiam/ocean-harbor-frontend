const AboutMore = () => {
  return (
    <div>
      <div className="ga-container">
        <div className="pb-10">
          <div className="md:grid md:grid-cols-2 gap-5">
            <div>
              <h1 className="text-heading text-primary uppercase">Our Mission</h1>
              <hr className="text-primary bg-primary" />
              <div className="pt-5 text-secondary leading-6 ">
                <p className="text-body mb-5">
                  Golden Anchor is committed to revolutionizing the European culinary scene by integrating the authentic taste of Bangladeshi products
                  into the mainstream retail chains across the continent. We believe in the distinctiveness and quality of our offerings and strive to
                  make them a regular feature in European kitchens.
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-heading text-primary uppercase">Our Reach</h1>
              <hr className="text-primary bg-primary" />
              <div className="pt-5 text-secondary leading-6">
                <p className="text-body mb-5">
                  Boundaries do not define us. Golden Anchor takes pride in delivering our products to all EU countries, ensuring that no matter where
                  you are in Europe, the authentic flavors of Bangladesh are just an order away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMore;
