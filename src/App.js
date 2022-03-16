import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from "./Components/Navigation/navigation";
import "./App.css";

import { ShowSidebar, setPath } from "./Components/Navigation/actions/actions";

const mapStateToProps = (state) => ({
  sidebar: state.Rsidebar.sidebar,
  path: state.Rpath.path,
});

const mapDispatchToProps = (dispatch) => ({
  onClickMenuButton: () => dispatch(ShowSidebar()),
  setChangePath: (event) => dispatch(setPath(event)),
});

class App extends Component {
  render() {
    const { sidebar, path, onClickMenuButton, setChangePath } = this.props;

    return (
      <div className="App">
        <Navigation
          prop={{ sidebar, onClickMenuButton, setChangePath, path }}
        />
        <h1> ESTE ES EL PROYECTO VACIO!!! </h1>
        <h2>
          {" "}
          Aun le faltan por instalar los pack que tienen q ver con redux{" "}
        </h2>
        <h2> Aqui tienes algo, me dijiste q te diera algo y aqui esta </h2>
        <h2> {":)"} </h2>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
