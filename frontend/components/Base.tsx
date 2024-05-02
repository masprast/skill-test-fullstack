import React, { ReactNode } from "react";

type Props = {
    children?:ReactNode
}

const Base = ({ children }: Props): React.ReactElement => (
    // <div className="container bg-gradient-to-r from-[#0a171d]">
    <div className="container bg-gradient-to-r from-[#0a171d] to-[#1d3e43]">
        {children}
    </div> )

export default Base