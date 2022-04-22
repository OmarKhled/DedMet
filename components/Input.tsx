import React, { FC } from "react";

interface params {
  type?: "text" | "email" | "number" | "tel" | "radio" | "submit";
  className?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
}

const Input: FC<params> = (args) => {
  return <input {...args} />;
};

export default Input;
