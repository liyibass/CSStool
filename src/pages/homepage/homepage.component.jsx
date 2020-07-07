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

  const [flexBox, setFlexBox] = useState({
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "start",
    flex: "auto",
  });

  // const [componentProps, setComponentProps] = useState({
  //   fixSize: {
  //     width: "200px",
  //     height: "200px",
  //   },
  //   flexSize: {
  //     minWidth: "200px",
  //     minHeight: "200px",
  //   },
  // });

  const handleBoxModelChange = (event) => {
    setBoxModel({ ...boxModel, [event.target.name]: event.target.value });
  };

  const containerStyle = {
    display: `${display.parentDisplay}`,
    flexDirection: flexBox.flexDirection,
    alignItems: flexBox.alignItems,
    justifyContent: flexBox.justifyContent,
  };

  const componentStyle = {
    margin: `${boxModel.margin}px`,
    padding: `${boxModel.padding}px`,
    display: display.childDisplay,
    // flex: flexBox.flex,
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

        <div className="flexBoxController">
          <h3>Flexbox</h3>
          {/* --------------------flex-direction-------------------- */}

          <div className="radioContainer">
            <input
              type="radio"
              name="flexbox-flex-direction"
              onChange={() =>
                setFlexBox({
                  ...flexBox,
                  flexDirection: "row",
                })
              }
            />
            <label>flex-direction:row</label>
          </div>

          <div className="radioContainer">
            <input
              type="radio"
              name="flexbox-flex-direction"
              onChange={() =>
                setFlexBox({
                  ...flexBox,
                  flexDirection: "column",
                })
              }
            />
            <label>flex-direction:column</label>
          </div>
          <br />
          {/* --------------------align-items-------------------- */}
          <div className="radioContainer">
            <input
              type="radio"
              name="flexbox-align-items"
              onChange={() =>
                setFlexBox({
                  ...flexBox,
                  alignItems: "flex-start",
                })
              }
            />
            <label>align-items:flex-start</label>
          </div>

          <div className="radioContainer">
            <input
              type="radio"
              name="flexbox-align-items"
              onChange={() =>
                setFlexBox({
                  ...flexBox,
                  alignItems: "center",
                })
              }
            />
            <label>align-items:center</label>
          </div>

          <div className="radioContainer">
            <input
              type="radio"
              name="flexbox-align-items"
              onChange={() =>
                setFlexBox({
                  ...flexBox,
                  alignItems: "flex-end",
                })
              }
            />
            <label>align-items:flex-end</label>
          </div>

          <div className="radioContainer">
            <input
              type="radio"
              name="flexbox-align-items"
              onChange={() =>
                setFlexBox({
                  ...flexBox,
                  alignItems: "stretch",
                })
              }
            />
            <label>align-items:stretch</label>
          </div>
          <br />
          {/* --------------------justify-content-------------------- */}
          <div className="radioContainer">
            <input
              type="radio"
              name="flexbox-justify-content"
              onChange={() =>
                setFlexBox({
                  ...flexBox,
                  justifyContent: "flex-start",
                })
              }
            />
            <label>justity-content:flex-start</label>
          </div>

          <div className="radioContainer">
            <input
              type="radio"
              name="flexbox-justify-content"
              onChange={() =>
                setFlexBox({
                  ...flexBox,
                  justifyContent: "center",
                })
              }
            />
            <label>justity-content:center</label>
          </div>

          <div className="radioContainer">
            <input
              type="radio"
              name="flexbox-justify-content"
              onChange={() =>
                setFlexBox({
                  ...flexBox,
                  justifyContent: "flex-end",
                })
              }
            />
            <label>justity-content:flex-end</label>
          </div>
          <div className="radioContainer">
            <input
              type="radio"
              name="flexbox-justify-content"
              onChange={() =>
                setFlexBox({
                  ...flexBox,
                  justifyContent: "space-between",
                })
              }
            />
            <label>justity-content:space-between</label>
          </div>
          <div className="radioContainer">
            <input
              type="radio"
              name="flexbox-justify-content"
              onChange={() =>
                setFlexBox({
                  ...flexBox,
                  justifyContent: "space-around",
                })
              }
            />
            <label>justity-content:space-around</label>
          </div>
          <div className="radioContainer">
            <input
              type="radio"
              name="flexbox-justify-content"
              onChange={() =>
                setFlexBox({
                  ...flexBox,
                  justifyContent: "space-evenly",
                })
              }
            />
            <label>justity-content:space-evenly</label>
          </div>
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
      <div className="elementContainer" style={containerStyle}>
        <div className="component A" style={componentStyle}>
          A
        </div>
        <div className="component B" style={componentStyle}>
          B
        </div>
        <div className="component C" style={componentStyle}>
          C
        </div>
      </div>
    </div>
  );
}

export default Homepage;
