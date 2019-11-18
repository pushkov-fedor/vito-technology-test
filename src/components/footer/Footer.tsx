import * as React from "react";
import "./Footer.css";

type MyProps = {};

type MyState = {};

export class Footer extends React.Component<MyProps, MyState> {
  state: MyState = {};

  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-nav">
            <h2 className="footer-nav-header">Navigation</h2>
            <ul className="footer-nav-items">
              <li className="footer-nav-item">First</li>
              <li className="footer-nav-item">Second</li>
            </ul>
          </div>
          <div className="footer-horizontal-rule"></div>
          <h3 className="footer-copyrights">
            Novosibirsk, Russia | 2019 NoName Company, All Rights Reserved.
          </h3>
        </div>
      </div>
    );
  }
}
