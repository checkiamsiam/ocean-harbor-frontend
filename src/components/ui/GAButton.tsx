"use client";

import { Button, ButtonProps, Flex } from "antd";
import { IoIosArrowForward } from "react-icons/io";

type IProps = {
  children: React.ReactNode | string;
  square?: boolean;
  arrow?: boolean;
};

const GAButton = ({ children, square, shape = "round", arrow, style, ...rest }: IProps & ButtonProps) => {
  return (
    <Button type="primary" style={{ textTransform: "capitalize", borderRadius: square ? 0 : undefined, ...style }} shape={shape} {...rest}>
      <Flex justify="center" align="center" gap={4}>
        <span>{children}</span>
        {arrow && (
          <span className="flex justify-center items-center">
            <IoIosArrowForward />
          </span>
        )}
      </Flex>
    </Button>
  );
};

export default GAButton;
