import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  // Define a function to fetch GIFs from the Giphy API
  fetchGifs = (query) => {
    const apiKey = "Z5oAXlQQckPK34TBtq8buBSaDae6eQ4q"; // Replace with your Giphy API key
    let url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    if (query === "example") {
      url = `https://api.giphy.com/v1/gifs/search?q=example&api_key=${apiKey}&rating=g`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ gifs: data.data.slice(0, 3) });
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
