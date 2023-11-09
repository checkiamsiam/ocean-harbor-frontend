"use client";
import { useSearchParams } from "next/navigation";

const SearchKeyNote = () => {
  const searchParams = useSearchParams();
  const searchKey = searchParams.get("searchKey");
  return (
    <div>
      <div className="ga-container">
        <div className="pt-10 pb-5">
          <h1 className="text-primary">Search for : {searchKey}</h1>
        </div>
      </div>
    </div>
  );
};

export default SearchKeyNote;
