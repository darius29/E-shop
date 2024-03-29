import React from "react";

type BackdropProps = {
  onClick: () => void;
};

const Backdrop = ({ onClick }: BackdropProps) => {
  return (
    <div
      onClick={onClick}
      className="z-20 bg-slate-200 opacity-50 w-screen h-screen fixed top-0 left-0"></div>
  );
};

export default Backdrop;
