import React, {Component} from "react";

export default class JobSelector extends Component {
  render() {
    return (
      <div>
        <select>
          <option value="0">Select</option>
          <option value="1">Programmer</option>
          <option value="2">Product Owner</option>
          <option value="3">Project Manager</option>
          <option value="3">Technical Architect</option>
        </select>
      </div>
    );
  }
}
