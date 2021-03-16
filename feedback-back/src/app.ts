import express from 'express';
import cors = require('cors');
import routes from './routes/feedbackRoutes';
import { Survey } from './model/Survey';

class App {
  public express : any;
  public survey: Survey = new Survey();
  private port = process.env.PORT || 4000;
  
  constructor(){
    this.express = express();
    this.config();
    this.listen();
   }
  
   private config(){
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(express.json());
    this.express.use(cors());
    routes(this.express);
  }

  private listen(){
    this.express.listen(this.port, (err) => {
      if (err) {
        return console.log(err)
      }
    
      return console.log(`server is listening on ${this.port}`)
    })
  }

}

export default new App();
