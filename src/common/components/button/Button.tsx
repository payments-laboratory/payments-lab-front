import React from "react";

import { BasicButtonProps } from "./types";

const Button: React.FC<BasicButtonProps> = ({ children }) => {
    return <div>{children}</div>;
};

export default Button;
