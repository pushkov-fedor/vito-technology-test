import * as React from "react";
import { Link } from "react-router-dom";
import { DrawerToggleButton } from "./sideDrawer/DrawerToggleButton";
import "./Header.css";

type MyProps = {
  drawerClickHandler: () => void;
};

type MyState = {};

export class Header extends React.Component<MyProps, MyState> {
  state: MyState = {};

  render() {
    return (
      <div className="header">
        {/* <div className="header-container"> */}
        <nav className="header-navigation">
          <ul className="header-nav-items">
            <li className="header-nav-item">
              <Link to="/first" className="header-nav-item-link">
                First
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/second" className="header-nav-item-link">
                Second
              </Link>
            </li>
          </ul>
          {/* <div>
          </div> */}
          <DrawerToggleButton click={this.props.drawerClickHandler} />
        </nav>
        {/* </div> */}
      </div>
    );
  }
}
