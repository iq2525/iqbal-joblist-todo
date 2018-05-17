import React, {Component} from "react";
import JobSelector from "./JobSelector";

export default class JobItem extends Component {
  render() {
    return (
      <div className="single-job">
        <div className="single-job__occupation">
          <div>What is your occupation?</div>
          <div>
            <JobSelector />
          </div>
        </div>

        <div className="single-job__company-name">
          <div>Company Name</div>
          <div>
            <input type="text" />
          </div>
        </div>

        <div className="single-job__income">
          <div>Income</div>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
    );
  }
}
