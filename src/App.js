import React, { Component } from "react";
import "./App.css";
import MeteorList from "./components/MeteorList";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      searchValue: "",
      data: []
    };
  }

  onSearchChange = e => {
    this.setState({ input: e.target.value });
  };

  onDetectSubmit = () => {
    this.setState({ searchValue: this.state.input });
  };

  componentDidMount() {
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    const findMatches = (wordToMatch, meteorites) => {
      return meteorites.filter(meteorite => {
        const regex = new RegExp(wordToMatch, "gi");
        return meteorite.name.match(regex);
      });
    };
    const filteredMeteorites = findMatches(this.state.searchValue, data);

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Meteorite Explorer</h1>
        <SearchBox
          onSearchChange={this.onSearchChange}
          onDetectSubmit={this.onDetectSubmit}
        />
        <MeteorList meteorites={filteredMeteorites} />
      </div>
    );
  }
}

export default App;
