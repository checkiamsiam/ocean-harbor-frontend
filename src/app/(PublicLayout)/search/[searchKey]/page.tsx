import SearchKeyNote from "@/components/sections/Search/SearchKeyNote";
import SearchResultTab from "@/components/sections/Search/SearchResultTab";
import { IQuery } from "@/types";

const SearchPage = ({ params, searchParams }: { params: { searchKey: string }; searchParams: IQuery }) => {
  const convertStr = params.searchKey.replace(/%20/g, " ");
  return (
    <div>
      <SearchKeyNote searchKey={convertStr} />
      <SearchResultTab searchKey={convertStr} searchParams={searchParams} />
    </div>
  );
};

export default SearchPage;
