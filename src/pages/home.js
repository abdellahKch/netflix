import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from "../containers/header"
import { OptForm } from "../components";
import { Feature } from "../components";

export default function Home(){
    return(
            <>
             <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel any time.</Feature.SubTitle>
                </Feature>
              <OptForm>
              <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
               <OptForm.Input placeholder="Email address"></OptForm.Input>
               <OptForm.Button>Get Started </OptForm.Button>
              </OptForm>
             </HeaderContainer>
             <JumbotronContainer></JumbotronContainer>
             <FooterContainer></FooterContainer>
             <FaqsContainer></FaqsContainer>
             </>
            )
}