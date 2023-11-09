import Image from "next/image";
import Link from "next/link";

const ProductImage = ({ url }: { url: string }) => {
  return (
    <div>
      <Image src={url} alt="" width={600} height={600} className="shadow-md w-full h-full" layout="responsive" />
      <div className="text-center">
        <Link href={url} target="_blank" className=" text-primary underline hover:text-primary text-sm mt-2">
          view full screen
        </Link>
      </div>
    </div>
  );
};

export default ProductImage;
