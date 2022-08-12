import React from "react";
import Jumbotron from "./fixtures/components/jumbotron";
import jumbodata from "../src/fixtures/jumpo.json"
export default function App() {
  return (
    <Jumbotron.Container>
      {jumbodata.map((item) => (
      <Jumbotron key={item.id} direction = { item.direction }>
        <Jumbotron.Pane >
          <Jumbotron.Title>{item.title}</Jumbotron.Title>
          <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
        </Jumbotron.Pane> 
        <Jumbotron.Pane>
          <Jumbotron.Image src = {item.image} alt = {item.alt}></Jumbotron.Image>
        </Jumbotron.Pane> 
      </Jumbotron>)
      )}
    </Jumbotron.Container>)
}
 

