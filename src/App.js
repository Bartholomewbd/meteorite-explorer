import React, { Component } from "react";
import "./App.css";
import MeteorList from "./components/MeteorList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
      .then(response => response.json())
      .then(data => this.setState({ data }));
    console.log();
  }

  render() {
    const { data } = this.state;

    return <MeteorList meteorites={data} />;
  }
}

export default App;
