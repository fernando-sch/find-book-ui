import classNames from "classnames";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={classNames(
        "px-2 md:px-5 py-4 max-w-7xl mx-auto w-full",
        className
      )}
    >
      {children}
    </div>
  );
};
