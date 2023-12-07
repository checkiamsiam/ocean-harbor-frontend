import CategoryLinkCard from "@/components/common/CategoryLinkCard";
import { Category } from "@/types/ApiResponse";

const CategoryResult = ({ categories }: { categories: Category[] }) => {
  return (
    <div>
      <div className="p-5 my-5">
        <div className="flex flex-wrap md:gap-10 gap-5 justify-center ">
          {categories?.map((cat, i) => (
            <CategoryLinkCard key={cat.id} link={`/categories/${cat.id}`} img={cat.icon} title={cat.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryResult;
