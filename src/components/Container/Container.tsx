import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  tailStyles?: string;
};

export const Container = ({ children, tailStyles = "" }: ContainerProps) => {
  const baseTailStyled = "px-2 md:px-5 py-4 max-w-7xl mx-auto w-full";
  const className = tailStyles
    ? `${baseTailStyled} ${tailStyles}`
    : baseTailStyled;

  return <div className={className}>{children}</div>;
};
