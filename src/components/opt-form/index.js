import React from "react";
import { Container,
         Input, 
         Text, 
         Button, 
         Break} from "../opt-form/styles/opt-form"

export default function OptForm ({ children, ...restProps}){
    return(<Container {...restProps}>{children}</Container>)
}

OptForm.Input = function OptFormInput({...restProps}){
    return <Input { ...restProps}></Input>
} 

OptForm.Button = function OptFormButton({ children, ...restProps}){
    return <Button { ...restProps}>
         {children} <img src="/images/icons/chevron-right.png" alr="Try now"></img>
        </Button>
}
OptForm.Text = function OptFormText ({ children, ...restprops}){
    return(<Text { ...restprops }>{ children }</Text>)
}
OptForm.Break = function OptFormBreak ({ ...restProps}){
    return <Break {...restProps}></Break>
}
