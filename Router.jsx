import React from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component{
	render(){
		return(		
			<Router>
				<div>
					<Route path="/" exact component={Login} />
					<Route path="/signup" exact component={Signup} />
				</div>
			</Router>
		)
	}
}

export default Main;