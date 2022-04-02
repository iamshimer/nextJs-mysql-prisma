import React from "react";

function CompOne() {
  console.log("CompOne rendered");
  return <div>CompOne</div>;
}

export default React.memo(CompOne);
