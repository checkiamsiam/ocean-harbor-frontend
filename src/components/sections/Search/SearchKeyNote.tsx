const SearchKeyNote = ({ searchKey }: { searchKey: string }) => {
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
