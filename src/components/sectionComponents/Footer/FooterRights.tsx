const FooterRights = () => {
  return (
    <div className="md:pt-20 sm:pt-10 ">
      <p className="text-body">
        © 2020 - 2023 Golden Anchor |{" "}
        <a href="/pdf/website-policies.pdf" target="_blank" className=" hover:text-primary no-underline hover:underline text-inherit">
          Website Policies
        </a>{" "}
        |{" "}
        <a href="https://tigotek.net" target="_blank" className=" hover:text-primary no-underline hover:underline text-inherit">
          Powered by Tigotek
        </a>
      </p>
    </div>
  );
};

export default FooterRights;
