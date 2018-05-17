import React, {Component} from "react";
import {Button} from "react-bootstrap";

export default class ButtonGroup extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.addItem}>Add</Button>
        <Button>Remove</Button>
      </div>
    );
  }
}
