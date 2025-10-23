import React from "react";
import { FullScreenCenterAbsoluteChildProps } from "./types";

const FullScreenCenterAbsoluteChild = ({
  children,
}: FullScreenCenterAbsoluteChildProps) => {
  return <div className="fs-center-absolute-child">{children}</div>;
};

export default FullScreenCenterAbsoluteChild;
