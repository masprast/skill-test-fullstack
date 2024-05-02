import React from "react";
import { AppProps } from "next/app";

import '../styles/global.css';

export default function FrontEnd({Component,pageProps}:AppProps) {
    return <Component {...pageProps}/>
};