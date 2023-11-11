import Image from "next/image";

const ProductImage = ({ url }: { url: string }) => {
  return (
    <div>
      <Image src={url} alt="" width={600} height={600} className="shadow-md w-full h-full" layout="responsive" />
    </div>
  );
};

export default ProductImage;
