import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//Given a stateless functional component, add state to it
// State should have property called isLoggedIn, which is a boolean
// (true is logged in, false if not)
// once isLoggedIn state is true then display "in" text and id false the display "out" text

// ***STATE Practics example : - Always declare in Class  Components ***
class App extends React.Component {
  // Constructor is a specific method that build into java script, that initialise it's this class.
  constructor() {
    // Super is a global function
    super();
    this.state = {
      isLoggedIn: true
    };
  }
  render() {
    let wordDisplay;
    if (this.state.isLoggedIn === true) {
      wordDisplay = "in";
    } else {
      wordDisplay = "out";
    }
    return (
      <div className="App">
        <h1>you are currently logged {wordDisplay}</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
