import Link from "next/link";

const ProductInfo = () => {
  return (
    <div>
      <h1 className="text-primary mb-5">BD BEST EVER FOOD BD BEST EVER FOOD</h1>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 text-md">
          <p className="text-secondary font-semibold">Product number:</p>
          <p className="text-secondary">GA000060</p>
        </div>
        <div className="grid grid-cols-2 text-md">
          <p className="text-secondary font-semibold">Packaging:</p>
          <p className="text-secondary">10 x 1 kg</p>
        </div>
        <div className="grid grid-cols-2 text-md">
          <p className="text-secondary font-semibold">Category:</p>
          <p className="text-secondary">
            <Link href="/" className="hover:text-primary text-secondary hover:underline">
              Food
            </Link>
          </p>
        </div>
        <div className="grid grid-cols-2 text-md">
          <p className="text-secondary font-semibold">Sub Category</p>
          <Link href="/" className="hover:text-primary text-secondary hover:underline">
            Baby
          </Link>
        </div>
        <div className="grid grid-cols-2 text-md">
          <p className="text-secondary font-semibold">Brand</p>
          <Link href="/" className="hover:text-primary text-secondary hover:underline">
            Pran
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
