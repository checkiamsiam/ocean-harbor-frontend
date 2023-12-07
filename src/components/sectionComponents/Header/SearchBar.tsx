"use client";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import GAButton from "@/components/ui/GAButton";
import { Flex } from "antd";
import { useRouter } from "@/lib/router-events";

const SearchBar = () => {
  const router = useRouter();
  const submitHandler = (data: any) => {
    if(!data.searchKey) return;
    router.push(`/search/${data.searchKey}`);
  };
  return (
    <div>
      <Form submitHandler={submitHandler}>
        <Flex>
          <FormInput name="searchKey" size="large"  placeholder="Search for product" />
          <GAButton htmlType="submit" square arrow size="large">
            Search
          </GAButton>
        </Flex>
      </Form>
    </div>
  );
};

export default SearchBar;
