import React, { useState } from "react";
import "./homepage.style.scss";
import Component from "../../components/Component/Component.component";

function Homepage() {
  const [display, setDisplay] = useState({
    parentDisplay: "block",
    childDisplay: "block",
  });
  const [boxModel, setBoxModel] = useState({
    margin: 0,
    padding: 0,
  });

  const handleBoxModelChange = (event) => {
    setBoxModel({ ...boxModel, [event.target.name]: event.target.value });
  };

  return (
    <div className="homepage">
      <div className="controllerContainer">
        <div className="parentController">
          <h3>Parent</h3>
          <input
            type="radio"
            name="display"
            // checked={display.parentDisplay === "block"}
            onChange={() =>
              setDisplay({
                parentDisplay: "block",
                childDisplay: "block",
              })
            }
          />
          <label>block</label>
          <input
            type="radio"
            name="display"
            onChange={() =>
              setDisplay({
                parentDisplay: "flex",
                childDisplay: "block",
              })
            }
          />
          <label>flex</label>
        </div>
        <div className="childController">
          <h3>Child</h3>
          <input
            type="radio"
            name="display"
            onChange={() =>
              setDisplay({
                parentDisplay: "block",
                childDisplay: "inline",
              })
            }
          />
          <label>inline</label>
          <input
            type="radio"
            name="display"
            onChange={() =>
              setDisplay({
                parentDisplay: "block",
                childDisplay: "inline-block",
              })
            }
          />
          <label>inline-block</label>
        </div>
        <div className="boxModelController">
          <h3>Box model</h3>
          <label>margin</label>
          <input
            type="range"
            name="margin"
            min="0"
            max="100"
            value={boxModel.margin}
            onChange={(event) => handleBoxModelChange(event)}
            className="form-control"
          />
          <label>padding</label>
          <input
            type="range"
            name="padding"
            min="0"
            max="100"
            value={boxModel.padding}
            onChange={(event) => handleBoxModelChange(event)}
            className="form-control"
          />
        </div>
      </div>
      {/* <Component /> */}
      <div
        className="elementContainer"
        style={{ display: `${display.parentDisplay}` }}
      >
        <div
          className="component A"
          style={{
            margin: `${boxModel.margin}px`,
            padding: `${boxModel.padding}px`,
            display: `${display.childDisplay}`,
          }}
        >
          A
        </div>
        <div
          className="component B"
          style={{
            margin: `${boxModel.margin}px`,
            padding: `${boxModel.padding}px`,
            display: `${display.childDisplay}`,
          }}
        >
          B
        </div>
        <div
          className="component C"
          style={{
            margin: `${boxModel.margin}px`,
            padding: `${boxModel.padding}px`,
            display: `${display.childDisplay}`,
          }}
        >
          C
        </div>
      </div>
    </div>
  );
}

export default Homepage;
