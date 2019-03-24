import React from "react";
import { ReactComponent as LoaderSVG } from "../assets/img/layout/loaderLogo.svg";

export default function Loader(props){
    return(
        <LoaderSVG className={props.class}/>
    )
}