import React from "react";
import { Inner, Container } from "./styles/jumbotron"
export default function Jumbotron( { children , direction = "row", ...restProp}){
    
    return (
       <Inner direction = { direction }>
            Hello world !
        </Inner>
    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
    return <Container { ...restProps}>{children}</Container>
}