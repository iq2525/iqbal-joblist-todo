import React, {Component} from "react";
import {ListGroupItem, ListGroup} from "react-bootstrap";
import ButtonGroup from "./ButtonGroup";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  handleClick = () => {
    const p = prompt();
    this.setState(({data}) => {
      data.push(p);
      return {data};
    });
  };

  render() {
    const list = [...this.state.data];

    if (list.length === 0) {
      list.push(<i>Nothing added</i>);
    }

    return (
      <div>
        <ListGroup>
          {list.map((item, i) => <ListGroupItem key={i}>{item}</ListGroupItem>)}
        </ListGroup>
        <ButtonGroup addItem={this.handleClick} />
        {/* <Button onClick={this.handleClick}>Add</Button> */}
      </div>
    );
  }
}
