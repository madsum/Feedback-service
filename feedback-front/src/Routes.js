import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

import SurveyForm1 from "./component/SurveyForm1/SurveyForm1";
import SurveyForm2 from "./component/SurveyForm2/SurveyFrom2";
import Thanks from "./component/Thanks/Thanks";
import { question1, question3 } from "./component/Constant";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <SurveyForm1 question1={question1} />
          </Route>
          <Route path="/question2" exact component={SurveyForm2} />
          <Route path="/question3" exact>
            <SurveyForm1 question3={question3} />
          </Route>
          <Route path="/thanks" exact component={Thanks} />
        </Switch>
      </Router>
    );
  }
}
