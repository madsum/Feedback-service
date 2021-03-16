import React, { Component } from "react";
import axios from "axios";
import history from "../../history";
import { surveyTitle, ratings } from "../Constant";
import "../SurveyFormCommon.css";

export class SurveyForm1 extends Component {
  question = "";
  constructor(props) {
    super(props);
    this.state = {
      selectedRatingIndex: -1,
      question1: this.props.question1,
      question3: this.props.question3,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderRating = () =>
    ratings.map((val) => (
      <button
        key={val}
        className={
          this.state.selectedRatingIndex === val
            ? "selectedButton"
            : "rate-range-button"
        }
        onClick={(e) => {
          e.preventDefault();

          this.setState({
            selectedRatingIndex: val,
          });
        }}
      >
        {val}
      </button>
    ));

  handleSubmit(event) {
    event.target.reset();
    event.preventDefault();

    let data = "";
    let nextPage = "";

    if (this.state.selectedRatingIndex === -1) {
      alert("Please select at least one rate!");
      return;
    }

    if (this.state.question1) {
      data = {
        questionOneAnswer: this.state.selectedRatingIndex,
      };
      nextPage = "/question2";
    } else if (this.state.question3) {
      data = {
        questionThreeAnswer: this.state.selectedRatingIndex,
      };
      nextPage = "/thanks";
    }

    axios
      .post("http://localhost:4000/addFeedback", data, {})
      .then((res) => {
        history.push({
          pathname: nextPage,
          state: {
            response: res.data,
          },
        });
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }

  render() {
    if (this.state.question1) {
      this.question = this.state.question1;
    } else if (this.state.question3) {
      this.question = this.state.question3;
    }
    return (
      <div>
        <div className="survey-form-header-name">{surveyTitle}</div>
        <hr></hr>
        <form onSubmit={this.handleSubmit}>
          <label className="survey-question-label" title="Field is required">
            <div>
              {this.question}
              <span className="field-label-required">*</span>
            </div>
            <div></div>
          </label>
          <div>{this.renderRating()}</div>
          <div className="range-labels-text">
            <div className="range-labels-text-max">
              Very likely&nbsp;&nbsp;&nbsp;
            </div>
            <div className="range-labels-text-min">Very unlikely</div>
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

export default SurveyForm1;
