import React from "react";

export default class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>{this.props.inval}</p>;
  }
}
