import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import logo from './img/advotics-logo.jpg';
import avatar from './img/Profile.svg';
import './App.css';

function App() {
	return (
		<div className="wrapper">
			<Navbar fixed="top" className="nav">
				<Navbar.Brand href="#home">
					<img className="logo" src={logo} />
					<text className="powered">powered by</text>
					<img className="logo2" src={logo} />
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<div className="navbar-text">
						<text className="user">Username</text>
						<text className="company">Company Name</text>
						<img alt="User" src={avatar} className="ava" />
						<button className="logout"><img /></button>
						{/* <IconButton aria-label="logout" className="logout d-inline">
							<img />
						</IconButton> */}
					</div>
				</Navbar.Collapse>
			</Navbar>
			<div className="navigation-left">

			</div>  

			<div className="body-wrapper">

				{/*<h1>Dashboard</h1>*/}
				<div className="period">
				{/* insert date time picker later */}
				</div>

			</div>

		</div>
    );
}

export default App;
