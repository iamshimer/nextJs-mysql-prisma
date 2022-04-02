import React from "react";

function CompTwo() {
  console.log("CompTwo rendered");
  return <div>CompTwo</div>;
}

export default React.memo(CompTwo);
