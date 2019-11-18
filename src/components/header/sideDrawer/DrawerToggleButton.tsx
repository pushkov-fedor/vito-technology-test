import React from "react";

import "./DrawerToggleButton.css";

type DrawerToggleButtonProps = {
  click: () => void;
};

type DrawerToggleButtonState = {};

export class DrawerToggleButton extends React.Component<
  DrawerToggleButtonProps,
  DrawerToggleButtonState
> {
  state: DrawerToggleButtonState = {};

  render() {
    return (
      <button className="toggle-button" onClick={this.props.click}>
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
      </button>
    );
  }
}
