import React from "react";

export default class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <input type="text" onChange={this.props.handleChange} />;
  }
}
