import React from "react";
import ReactDOM from "react-dom";

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
const csstyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  csstyle.color = "green";
} else if (curDate >= 12 && curDate < 19) {
  greeting = "Good Afternoon";
  csstyle.color = "orange";
} else {
  greeting = "Good Night";
  csstyle.color = "black";
}

ReactDOM.render(
  <>
    <div>
      <h1>
        {" "}
        Hello sir,<span style={csstyle}> {greeting}</span>{" "}
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
