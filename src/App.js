import React from "react";
import "./styles.css";
import GetInput from "./GetInput";
import Display from "./Display";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inval: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      inval: e.target.value
    });
  }
  render() {
    return (
      <div>
        <GetInput handleChange={this.handleChange} />
        <Display inval={this.state.inval} />
      </div>
    );
  }
}
