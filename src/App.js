import React from "react";
import Jumbotron from "./fixtures/components/jumbotron";
import jumbodata from "../src/fixtures/jumpo.json"
export default function App() {
  return (
    
      <Jumbotron.Container>
        {jumbodata.map ((item) => (
          <Jumbotron  key={item.id} direction = {item.direction}>
            <p>hello</p>
          </Jumbotron>
        ))}
      </Jumbotron.Container>

  );
}
 

