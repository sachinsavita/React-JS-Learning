import React from "react";
function Greeting() {
  const date = new Date();
  const currentTime = date.getHours();
  let greeting;
  const customeStyle = {
    color: ""
  };
  if (currentTime < 12) {
    greeting = "Good Morning!";
    customeStyle.color = "red";
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = "Good Afternoon!";
    customeStyle.color = "green";
  } else {
    greeting = "Good Evening!";
    customeStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customeStyle}>
      {greeting}
    </h1>
  );
}

export default Greeting;
