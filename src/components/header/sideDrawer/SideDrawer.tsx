import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

type SideDrawerProps = {
  show: boolean;
  drawerClickHandler: () => void;
};

type SideDrawerState = {};

export class SideDrawer extends React.Component<
  SideDrawerProps,
  SideDrawerState
> {
  state: SideDrawerState = {};

  render() {
    var classes = "side-drawer";
    if (this.props.show) {
      classes = "side-drawer open";
    }

    return (
      <nav className={classes}>
        <ul className="side-drawer-nav-items">
          <li>
            <Link
              to="/first"
              className="side-drawer-nav-items-link"
              onClick={this.props.drawerClickHandler}
            >
              First
            </Link>
          </li>
          <li>
            <Link
              to="/second"
              className="side-drawer-nav-items-link"
              onClick={this.props.drawerClickHandler}
            >
              Second
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
