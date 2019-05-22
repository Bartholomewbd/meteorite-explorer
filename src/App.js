import React, { Component } from "react";
import "./App.css";
import MeteorList from "./components/MeteorList";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      data: []
    };
  }

  onSearchChange = e => {
    this.setState({ searchValue: e.target.value });
    console.log(this.state.searchValue);
  };

  componentDidMount() {
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
      .then(response => response.json())
      .then(data => this.setState({ data }));
    console.log();
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
        <SearchBox searchChange={this.onSearchChange} />
        <MeteorList meteorites={filteredMeteorites} />
      </div>
    );
  }
}

export default App;
