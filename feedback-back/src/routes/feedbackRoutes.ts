import FeedbackController from '../controller/feedbackController';


const routes = (app) => {
    app.route('/')
    .get((req, res) => FeedbackController.homePage(req, res));

    app.route('/addFeedback')
    .post((req, res) => FeedbackController.addFeedback(req, res));
    
 
    app.route('/getFeedback')
    .get(FeedbackController.getFeedback);
};

export default routes;