import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./header/Header";
import { SideDrawer } from "./header/sideDrawer/SideDrawer";
import { ImageUploader } from "./main/ImageUploader";
import { Yoda } from "./main/Yoda";
import { Footer } from "./footer/Footer";
import { PageNotFound } from "./404/PageNotFound";
import { Backdrop } from "./backdrop/Backdrop";

type AppProps = {};

type AppState = {
  sideDrawerOpen: boolean;
};

export default class App extends React.Component<AppProps, AppState> {
  state: AppState;
  constructor(props: AppProps) {
    super(props);
    this.state = {
      sideDrawerOpen: false
    };

    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backdropClickHander = this.backdropClickHander.bind(this);
  }

  drawerToggleClickHandler() {
    this.setState(prevState => ({
      sideDrawerOpen: !prevState.sideDrawerOpen
    }));
  }

  backdropClickHander() {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    var backdrop: JSX.Element = <div></div>;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHander} />;
    }
    return (
      <div className="App">
        <Router>
          <Header drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            drawerClickHandler={this.drawerToggleClickHandler}
          />
          {backdrop}
          <Switch>
            <Route exact path="/first" component={ImageUploader} />
            <Route exact path="/second" component={Yoda} />
            <Route path="*" component={PageNotFound} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
