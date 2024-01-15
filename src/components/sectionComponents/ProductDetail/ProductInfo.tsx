import { Link } from "@/lib/router-events";
import { Product } from "@/types/ApiResponse";

const ProductInfo = ({ product }: { product: Product }) => {
  return (
    <div>
      <h1 className="text-primary mb-5">{product?.title}</h1>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 text-md">
          <p className="text-secondary font-semibold">Product Id:</p>
          <p className="text-secondary">{product?.id}</p>
        </div>
        <div className="grid grid-cols-2 text-md">
          <p className="text-secondary font-semibold">Packaging:</p>
          <p className="text-secondary">
            {product?.packetPerBox} x {product?.netWeight}
          </p>
        </div>
        <div className="grid grid-cols-2 text-md">
          <p className="text-secondary font-semibold">Type:</p>
          <p className="text-secondary">{product?.type}</p>
        </div>
        <div className="grid grid-cols-2 text-md">
          <p className="text-secondary font-semibold">Category:</p>
          <p className="text-secondary">
            <Link href={`/categories/${product.categoryId}`} className="hover:text-primary text-secondary ">
              {product?.category?.title}
            </Link>
          </p>
        </div>
        <div className="grid grid-cols-2 text-md">
          <p className="text-secondary font-semibold">Sub Category</p>
          <Link href={`/categories/${product.categoryId}/subCategoryId=${product.subCategoryId}`} className="hover:text-primary text-secondary ">
            {product?.subCategory?.title}
          </Link>
        </div>
        <div className="grid grid-cols-2 text-md">
          <p className="text-secondary font-semibold">Brand</p>
          <Link href="/" className="hover:text-primary text-secondary ">
            {product?.brand?.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
