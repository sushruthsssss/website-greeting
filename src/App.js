import React from "react";
import { add, sub, prod, div } from "./Calc";
function App() {
  return (
    <>
      <ul>
        <li>The sum of two number is {add(40, 4)}</li>
        <li>The difference of two number is {sub(40, 4)}</li>
        <li>the product of two number is {prod(40, 4)}</li>
        <li> the division of two number is {div(40, 10)}</li>
      </ul>
    </>
  );
}
export default App;
