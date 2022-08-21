import React from "react"
import faqsdata from "../fixtures/faq.json"
import { Accordion } from "../components"
import { OptForm } from "../components"

export function FaqsContainer(){
   return(<Accordion>
          <Accordion.Frame>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsdata.map((item)=>(
               <Accordion.Item key={item.id}>
                  <Accordion.Header>{item.header}</Accordion.Header>
                  <Accordion.Body>{item.body}</Accordion.Body>
               </Accordion.Item> 
            ))} 
            </Accordion.Frame>
            <OptForm>
               <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
               <OptForm.Input placeholder="Email address"></OptForm.Input>
               <OptForm.Button>Get Started </OptForm.Button>
            </OptForm>
           </Accordion>)
} 