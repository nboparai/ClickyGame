import React from "react";
import "./jumbotron.css";

const Header = props => {

return( <div className="jumbotron">
  <h1 className="display-4">Clicky Game!</h1>
  <p className="lead">Click on any image to score! Don't click twice-you will get in trouble.</p>
  <hr className="my-4"/>
 
  
  <div className="col-md-4 scores lead">Current Score: {props.currentScore} </div>
  <div className="col-md-4 scores lead" >Top Score: {props.topScore} </div>
  <div className="col-md-4 scores lead" >{props.win}</div>
</div> )
}

export default Header;