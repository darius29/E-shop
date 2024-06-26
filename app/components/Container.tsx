import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-[1920px] mx-auto x1:px-20 md:px-2 px-4 ">
      {children}
    </div>
  );
};

export default Container;
