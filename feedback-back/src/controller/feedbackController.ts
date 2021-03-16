import App from '../app';

class FeedbackController {

    public homePage(req, res){
      res.send('Welcome to feedback service');
    }

  
  public addFeedback(req, res){
    if(req.body.questionOneAnswer != null ){
       return this.setQuestionOneAnswer(req, res)
    }else if(req.body.questionTwoAnswer != null){
       return this.setQuestionTwoAnswer(req, res);
    }else if(req.body.questionThreeAnswer != null){
      return this.setQuestionThreeAnswer(req, res);
    }

  }

  private setQuestionOneAnswer(req, res): String{
    App.survey.question1 = 'How likely are you going to recommend our service to a friend or colleague?';
    App.survey.answer1 = req.body.questionOneAnswer;
    if(req.body.questionOneAnswer <= 6){
      App.survey.question2 = `It is considered a lower rating. Why did you give ${req.body.questionOneAnswer}?`;
      return  res.send(App.survey.question2);
    }else {
      App.survey.question2 = `It is considered a high rating. Why did you give ${req.body.questionOneAnswer}?`; 
      return  res.send(App.survey.question2);
    } 
  }

  private setQuestionTwoAnswer(req, res): String{
    App.survey.answer2 = req.body.questionTwoAnswer;
    return res.sendStatus(200);  
  }

  public setQuestionThreeAnswer(req, res){
    App.survey.question3 = 'How likely will you continue using our service?';
    App.survey.answer3 = req.body.questionThreeAnswer;
    return res.sendStatus(200)
  };

  public getFeedback(req, res){
    return res.json(App.survey);
  }

}

export default new FeedbackController();