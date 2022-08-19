import React from "react";
import { Footer } from "../components";

export function FooterContainer(){
    return(<Footer>
            <Footer.Title>Questions? Contact Us</Footer.Title>
            <Footer.Break></Footer.Break>
            <Footer.Row>
                <Footer.Colum>
                <Footer.Link href ="#">FAQ</Footer.Link>
                <Footer.Link href ="#">Investor Relations</Footer.Link>
                <Footer.Link href ="#">Ways To Watch</Footer.Link>
                <Footer.Link href ="#">Coporate Information</Footer.Link>
                <Footer.Link href ="#">Netflix Orginals</Footer.Link>
                </Footer.Colum>

                <Footer.Colum>
                <Footer.Link href ="#">help Center</Footer.Link>
                <Footer.Link href ="#">Jobs</Footer.Link>
                <Footer.Link href ="#">Terms Of Use</Footer.Link>
                <Footer.Link href ="#">Contact Us</Footer.Link>
                </Footer.Colum>

                <Footer.Colum>
                <Footer.Link href ="#">Account</Footer.Link>
                <Footer.Link href ="#">Reddemn Gift Cards</Footer.Link>
                <Footer.Link href ="#">Privacy</Footer.Link>
                <Footer.Link href ="#">Speed Test</Footer.Link>
                </Footer.Colum>

                <Footer.Colum>
                <Footer.Link href ="#">Media Center</Footer.Link>
                <Footer.Link href ="#">Buy Gift Cards</Footer.Link>
                <Footer.Link href ="#">Cookie Prefrences</Footer.Link>
                <Footer.Link href ="#">legal Notices</Footer.Link>
                </Footer.Colum>
            </Footer.Row>
            <Footer.Break></Footer.Break>
            <Footer.Text>Algeria</Footer.Text>
           </Footer>)
}