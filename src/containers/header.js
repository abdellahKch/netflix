import React from "react";
import { Header } from "../components"

export function HeaderContainer(){
    return(
        <Header>
            <Header.Frame>
                <Header.Logo></Header.Logo>
                <Header.Button></Header.Button>
            </Header.Frame>
        </Header>
    )
} 