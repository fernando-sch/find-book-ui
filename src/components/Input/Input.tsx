import { forwardRef } from "react";

type InputProps = {
  placeholder: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, ...rest }: InputProps, ref) => {
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        className="outline-none shadow-lg border border-gray-100 rounded-lg w-full p-3 my-2"
        {...rest}
      />
    );
  }
);
