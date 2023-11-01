import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import GAButton from "@/components/ui/GAButton";
import { Flex } from "antd";

const SearchBar = () => {
  const submitHandler = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <Form submitHandler={submitHandler}>
        <Flex>
          <FormInput name="searchKey" size="large" placeholder="Search for product" />
          <GAButton htmlType="submit" square arrow size="large" >
            Search
          </GAButton>
        </Flex>
      </Form>
    </div>
  );
};

export default SearchBar;
