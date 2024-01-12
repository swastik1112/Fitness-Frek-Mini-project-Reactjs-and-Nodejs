// import "./App1.css";

import { Component } from "react";
import { Link } from "react-router-dom";

export class AboutUs extends Component {
  render() {
    return (
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AboutUs</title>
        <link rel="icon" type="image/x-icon" href="logo2.png" />
        <link rel="stylesheet" href="style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />

        <header className="header">
          <div className="left">
            <img src="logo2.png" />
            <div>Fitness Frek</div>
          </div>
          <div className="center">
            <ul className="navbar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/AboutUs">AboutUs</Link>
              </li>
              <li>
                <Link to="/Features">Features</Link>
              </li>
              <li>
                <Link to="/Membership">Membership</Link>
              </li>
              <li>
                <Link to="/Trainers">Trainers</Link>
              </li>
              <li>
                <Link to="/CustomerList">Client List</Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="container">
          <div className="card" style={{ width: "50rem" }}>
            <div className="card-body">
              <h1 className="card-title">Our Gym</h1>
              <p className="card-text"></p>
              <li>25 states</li>
              <li>95 cities</li>
              <li>Personal Training program</li>
              <p />
            </div>
          </div>
          <div className="card" style={{ width: "50rem" }}>
            <div className="card-body">
              <h1 className="card-title">What Do We Do</h1>
              <p className="card-text"></p>
              <li>
                Fitness Frek Has Been The Authority In Fitness Since 1965 Dating
                Back To The Original Gold's Gym In Venice, California. It Was
                The Place For Serious Fitness. Opened Long Before The Modern-Day
                Health Club Existed, The Original Gold's Gym Featured Homemade
                Equipment And A Dedication To Getting Results. It Was An Instant
                Hit. Fitness Frek Quickly Became Known As “The Mecca Of
                Bodybuilding.''
              </li>
              <p />
            </div>
          </div>
          <div className="card" style={{ width: "50rem" }}>
            <div className="card-body">
              <h1 className="card-title">Personal Trainer</h1>
              <p className="card-text"></p>
              <li>
                our personal trainer is an individual who creates and delivers
                safe and effective exercise programs for apparently healthy
                individuals and groups, or those with medical clearance to
                exercise. They motivate clients by collaborating to set goals,
                providing meaningful feedback, and by being a reliable source
                for accountability
              </li>
              <p />
            </div>
          </div>
        </div>
      </>
    );
  }
}
