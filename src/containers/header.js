import React from "react";
import { Header } from "../components"
import * as ROUTES from "../constants/routes"
import logo from "../../src/logo.svg"
export function HeaderContainer({children}){
    return(
        <Header>
            <Header.Frame>
                <Header.Logo  to={ROUTES.HOME} src={logo} alt="Netflix"></Header.Logo>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
} 