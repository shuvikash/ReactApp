import React from 'react';
import axios from 'axios';
import './TableView.css';
import { Link } from 'react-router-dom';

class TableView extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
           users: [],
		   searchText: ""
		};
		this.detailView=this.detailView.bind(this);
		this.compareBy=this.compareBy.bind(this);
		this.sortBy=this.sortBy.bind(this);
		this.handleSearchText=this.handleSearchText.bind(this);
	}
	detailView(e) {
		window.location='/';
    }
	//To retrieve the data from api through  axios
	componentWillMount(){
		axios.get("http://demo9197058.mockable.io/users")
		  .then(res => {
			const users= res.data;
			this.setState({ users });
		  })
}
compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy(key) {
    let arrayCopy = [...this.state.users];
    arrayCopy.sort(this.compareBy(key));
    this.setState({users: arrayCopy});
  }
  handleSearchText(e) {
		this.setState({ searchText: e.target.value });
    }
	
	render() {
	    let filteredUsers = this.state.users.filter((user)=>{
        return user.first_name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !==-1;
		});
	  return (
	  <div className="container">
	  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
	  <div className="header">
	  <h4> &ensp;&#9776; &emsp; Data Peace</h4>
	  </div>
	  <div>
	  <form>
         <input type="text" placeholder="Search by first name" onChange={this.handleSearchText} className="search" style={{backgroundImage:"url('search.png')",backgroundSize:"25px 20px"}}/>
	  </form>
	  </div>
	  <div className="table-responsive"> 	  
  <table className="table">
    <thead>
      <tr className="tableheader">
        <th onClick={e => this.sortBy('first_name')}>First Name</th>
        <th onClick={e => this.sortBy('last_name')}>Last Name</th>
        <th onClick={e => this.sortBy('company_name')}>Company Name</th>
        <th onClick={e => this.sortBy('city')}>City</th>
		<th onClick={e => this.sortBy('state')}>State</th>
        <th onClick={e => this.sortBy('zip')}>Zip</th>
		<th onClick={e => this.sortBy('email')}>Email</th>
		<th onClick={e => this.sortBy('web')}>Web</th>
		<th onClick={e => this.sortBy('age')}>Age</th>
      </tr>
    </thead>
    <tbody>
	{ 
	filteredUsers.map((user,i) => 
	<tr key={'user_' + i} onClick={this.detailView}>
	<td>{user.first_name}</td>
	<td>{user.last_name}</td>
	<td>{user.company_name}</td>
	<td>{user.city}</td>
	<td>{user.state}</td>
	<td>{user.zip}</td>
	<td>{user.email}</td>
	<td>{user.web}</td>
	<td>{user.age}</td>
	</tr>
	)}
    </tbody>
  </table>
  </div>
  <div className="np-btn">
  <button type="button" className="btn btn-default" style={{marginRight:'895px'}}>Previous</button>
  <button type="button" className="btn btn-default">Next</button>
  </div>
  <div className="pagination">
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a className="active" href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">7</a>
  <a href="#">8</a>
  <a href="#">9</a>
  <a href="#">&raquo;</a>
  </div>
	  </div>
	  );
    }
}
export default TableView;