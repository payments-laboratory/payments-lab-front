// TYPES SAMPLE
import React, { ReactElement } from "react";

interface BasicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    full?: boolean;
    width?: string;
    children?: ReactElement;
}

export type { BasicButtonProps };
