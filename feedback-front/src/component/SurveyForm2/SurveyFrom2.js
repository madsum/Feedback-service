import React, { Component } from "react";
import axios from "axios";
import history from "../../history";
import "../SurveyFormCommon.css";
import { question3, surveyTitle } from "../Constant";

export class SurveyForm2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionTwoAnswer: "",
      questionTwo: this.props.location.state.response,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ questionTwoAnswer: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();

    let data = {
      questionTwoAnswer: this.state.questionTwoAnswer,
    };
    if (!this.state.questionTwoAnswer) {
      alert("Please provide your valuable comment!");
      return;
    }
    axios
      .post("http://localhost:4000/addFeedback", data)
      .then((res) => {
        history.push({
          pathname: "/question3",
          state: {
            response: question3,
          },
        });
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }

  render() {
    return (
      <div>
        <div className="survey-form-header-name">{surveyTitle}</div>
        <hr></hr>
        <form onSubmit={this.handleSubmit}>
          <label className="survey-question-label">
            <div>
              {this.state.questionTwo}
              <span className="field-label-required">*</span>
            </div>
          </label>
          <div>
            <textarea
              className="textarea-size"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="survey-form-submit">
            <button className="survey-form-submit-button" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SurveyForm2;
