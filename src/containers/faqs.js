import React from "react"
import faqsdata from "../fixtures/faq.json"
import { Accordion } from "../components"
export function FaqsContainer(){
   return(<Accordion>
          <Accordion.Frame>
            {faqsdata.map((item)=>(
               <Accordion.Item key={item.id}>
                  <Accordion.Header>{item.header}</Accordion.Header>
                  <Accordion.Body>{item.body}</Accordion.Body>
               </Accordion.Item>
            ))}
            </Accordion.Frame>
            
           </Accordion>)
}