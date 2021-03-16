import React, { Component } from "react";
import { surveyTitle, answerThanks, feedbackThanks } from "../Constant";
import "./Thanks.css";

export class Thanks extends Component {
  render() {
    return (
      <div>
        <div className="survey-form-header-name">{surveyTitle}</div>
        <hr></hr>
        <div className="survey-thanks-content-message">
          <h2>{answerThanks}</h2>
          <div className="survey-thanks-content">{feedbackThanks}</div>
        </div>
        <div className="survey-thanks-content-image">
          <img alt="smiley emoji" src="https://nps.kokemuksia.fi/smiley.svg" />
          <div className="survey-thanks-content-from">
            Best Regards, <br />
            Trustmary Dev
          </div>
        </div>
      </div>
    );
  }
}

export default Thanks;
