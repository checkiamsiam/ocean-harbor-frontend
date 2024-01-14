"use client";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import GAButton from "@/components/ui/GAButton";
import { useRouter } from "@/lib/router-events";
import { Flex } from "antd";

const SearchBar = () => {
  const router = useRouter();
  const submitHandler = (data: any) => {
    if (!data.searchKey) return;
    router.push(`/search/${data.searchKey}`);
  };
  return (
    <div>
      <Form submitHandler={submitHandler}>
        <Flex>
          <FormInput name="searchKey" size="large" placeholder="Search for product" style={{ borderRadius: 0 }} />
          <GAButton htmlType="submit" square arrow size="large">
            Search
          </GAButton>
        </Flex>
      </Form>
    </div>
  );
};

export default SearchBar;
