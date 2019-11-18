import React from "react";
import "./Backdrop.css";

type BackdropProps = {
  click: () => void;
};

type BackdropState = {};

export class Backdrop extends React.Component<BackdropProps, BackdropState> {
  state: BackdropState = {};

  render() {
    return <div className="backdrop" onClick={this.props.click}></div>;
  }
}
