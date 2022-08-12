import React from "react";
import { Pane, SubTitle, Title, Image, Inner, Container } from "./styles/jumbotron"
export default function Jumbotron( {children, direction = "row" , ...restProps}){
    
    return (
       <Inner  direction = {direction}>
            <p>{children}</p>
        </Inner>
    )
}

Jumbotron.Container = function JumbotronContainer({children , ...restProps}){
    return (<Container {...restProps}>{children}</Container>)
}
Jumbotron.Title = function JumbotronTitle ({children, ...restProp}){
    return <Title {...restProp}>{children}</Title>
}
Jumbotron.SubTitle = function JumbotronSubTitle ({children, ...restProp}){
    return <SubTitle {...restProp}>{children}</SubTitle>
}
Jumbotron.Image = function JumbotronImage ({ ...restProp}){
    return <Image {...restProp}></Image>
}
Jumbotron.Pane = function JumbotronPane ( { children, ...restprop} ) {
    return <Pane {...restprop}> {children} </Pane>
}
