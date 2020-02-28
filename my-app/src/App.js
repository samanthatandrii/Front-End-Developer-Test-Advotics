import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

import logo from './img/advotics-logo.jpg';
import avatar from './img/Profile.svg';
import sidebar from './img/side.svg';
import dash from './img/dashboard.svg';
import help from './img/Help.png';
import sales from './img/group.svg';
import trolley from './img/SalesTurnover.svg';

import Chart from './test.js';

import './App.css';


function App() {
	function buttonClicked(e) {
		e.preventDefault();
		console.log('The button was clicked.');
	}

	return (
		<div className="wrapper">
			<Navbar sticky='top' className="nav">
				<Navbar.Brand href="#home">
					<img className="logo" src={logo} />
					<span className="powered">powered by</span>
					<img className="logo2" src={logo} />
				</Navbar.Brand>
				<Navbar.Collapse className="justify-content-end">
					<div className="navbar-text">
						<span className="user">Username</span>
						<span className="company">Company Name</span>
						<img alt="User" src={avatar} className="ava" />
						<button className="logout" onClick={buttonClicked}><img /></button>
						{/* <IconButton aria-label="logout" className="logout d-inline">
							<img />
						</IconButton> */}
					</div>
				</Navbar.Collapse>
			</Navbar>
			<div className="navigation-left">
				<a><img src={sidebar} className="sidebar-menu"/></a>
				<a className="highlight" onClick={buttonClicked} href="#" ><div className="rectangle"><img src={dash} className="dashboard-menu"/></div></a>
			</div>  

			<div className="body-wrapper container">
				
				<div className="top-section row">
					<h1>Dashboard</h1>

					<div className="date-picker">
					{/* insert date time picker later */}
					helooo
					</div>
				</div>
				

				<div className="market-insight container row">
					<div className="row">
						<span className="col-lg mi-title">MARKET INSIGHTS</span>
						<img className="col- help" src={help} />
						<a className="col- click" href="#">Click Here for Help</a>
						<button className="col-sm- arrowup" onClick={buttonClicked}><FontAwesomeIcon icon={faAngleUp} /></button>
					</div>
				</div>

				<div className="sales row">
					<img className="sales-img" src={sales} />
					<img className="trolley" src={trolley} />
				</div>

				<div className="data row">
					<div className="chart">
						<span className="apv">AVERAGE PURCHASE VALUE</span>
						<Chart className="char-apv" />
					</div>
				</div>

			</div>

		</div>
    );
}

export default App;
