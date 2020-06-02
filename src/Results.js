import React, { Component } from "react";
import ScrollUpButton from "react-scroll-up-button";
import "./Results.css";

class Results extends Component {
  render() {
    return (
      <div className="Results">
        <main>
          <ul className="wrapper container">
            {this.props.fourConcerts.map((chosenEvent) => {
              return (
                <li className="imgBacker">
                  <h2>{chosenEvent.name}</h2>
                  <h3>{chosenEvent._embedded.venues[0].name}</h3>
                  <h4>
                    {chosenEvent.dates.start.localDate}
                    <span role="img" aria-label="Calender">
                      {" "}
                      📅
                    </span>
                  </h4>
                  <h4>
                    {chosenEvent.dates.start.localTime}{" "}
                    <span role="img" aria-label="Clock">
                      {" "}
                      🕓
                    </span>
                  </h4>
                  <div className="imgHold">
                    <img
                      src={chosenEvent.images[5].url}
                      alt="Selected Concerts"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <ScrollUpButton
            StopPosition={0}
            ShowAtPosition={150}
            EasingType="easeOutCubic"
            AnimationDuration={500}
            ContainerClassName="ScrollUpButton__Container"
            TransitionClassName="ScrollUpButton__Toggled"
            style={{}}
            ToggledStyle={{}}
          />
        </main>
      </div>
    );
  }
}

export default Results;
