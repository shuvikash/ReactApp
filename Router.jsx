import React from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Uploader from './Uploader.jsx';
import TableView from './TableView.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component{
	render(){
		return(		
			<Router>
				<div>
					<Route path="/" exact component={Login} />
					<Route path="/signup" exact component={Signup} />
					<Route path="/upload" exact component={Uploader} />
					<Route path="/table" exact component={TableView} />
				</div>
			</Router>
		)
	}
}

export default Main;