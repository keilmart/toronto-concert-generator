import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header.js";
import Results from "./Results.js";
import Footer from "./Footer";
import { scroller } from "react-scroll";

// - Order of Operations - //
// Access the TicketMaster API, and get all the events//
// Get back the data and parse for what I want //
// Save the data to "state" //
// Get user selection of which genre of music they are interested in / /
// Filter the concerts for just those in the selected genre //
// Filter that group of concerts and return one random selection //
// Print the coneerts name, venue, localDate, localTime //

class App extends Component {
  constructor() {
    super();
    this.state = {
      // this is where we're saving the data
      allMusicVenues: [],
      filteredArray: [],
      finalArray: [],
    };
  }

  // hooking into component, we do our api call here because this is the last of the life cycle, (first the constructor, then the render lastly this - aka the lifecycle). we call it here because we don't want to load the api if there is no page to render to. But we don't always do our API call here, this is just an instance)
  componentDidMount() {
    axios({
      url: `https://app.ticketmaster.com/discovery/v2/events.json`,
      method: `GET`,
      dataResponse: `json`,
      params: {
        apikey: `1upokxsDOkQ6x4imtBWNcDKUEuuagvna`,
        format: `json`,
        city: `toronto`,
        classificationName: `music`,
        sort: `date,asc`,
        size: `200`,
      },
    })
      // Get back the data and parse for what I want, I pass a callback function because thats a set of steps that we tell what to do // .data goes into the array //
      .then((responsePlaceholder) => {
        // this is saving the data into set state.App // this refers to the component that we are inside of // every time setState runs, it re renders the page // We are grabbing the allMusicVenues from above, which is set to an empty array //
        this.setState({
          allMusicVenues: responsePlaceholder.data._embedded.events,
        });
      });
  }

  getArtist = (e, choiceOfGenre) => {
    e.preventDefault();

    const originalArray = [...this.state.allMusicVenues];

    let subArray = originalArray.filter((event) => {
      return event.classifications[0].genre.id === choiceOfGenre;
    });

    const filteredArray = [];
    for (let i = 0; i < 4; i++) {
      filteredArray.push(subArray[i]);
    }

    this.setState({
      finalArray: filteredArray,
    });

    scroller.scrollTo("Results", {
      duration: 1200,
      smooth: true,
    });
  };

  render() {
    return (
      <div className="App">
        <Header getArtistProp={this.getArtist} />
        <Results fourConcerts={this.state.finalArray} />
        <Footer />
      </div>
    );
  }
}

export default App;
