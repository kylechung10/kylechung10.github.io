import React from "react";

function Computer() {
  const screenCode = (
    <div className="screen-code">
      <div className="tag"></div>
      <div className="row">
        <div className="block blue"></div>
        <div className="block green"></div>
        <div className="block yellow"></div>
      </div>
      <div className="row">
        <div className="block yellow"></div>
        <div className="block green"></div>
        <div className="block blue"></div>
      </div>
    </div>
  );
  return (
    <div id="computer">
      <div className="screen">
        {screenCode}
        {screenCode}
        {screenCode}
        {screenCode}
        {screenCode}
      </div>
      <div className="base" />
      <div className="plate" />
    </div>
  );
}

export default Computer;
