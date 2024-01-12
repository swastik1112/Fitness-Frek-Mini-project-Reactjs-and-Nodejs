// import "./App.css";

import { Component } from "react";
import { Link } from "react-router-dom";
// import { img1 } from "./src/img/cbum.jpg";

export class NavigationBar extends Component {
  render() {
    return (
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The gym</title>
        <link rel="icon" type="image/x-icon" href="logo2.png" />
        <link rel="stylesheet" href="style1.css" />
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
            <img src="./logo2.png" alt="" />
            <h2>
              <div>Fitness Frek</div>
            </h2>
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
          <div className="right">
            <button className="btn">
              <Link to="/LogIn">LogIn</Link>
            </button>
            <button className="btn">
              <Link to="/SignIn">SignIn</Link>
            </button>
          </div>
        </header>
        <div className="container">
          <h1>Join the best Gym In Our City</h1>
          <form>
            <div className="form-group">
              <input type="text" name="" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <input type="text" name="" placeholder="Enter your contact no." />
            </div>
            <div className="form-group">
              <input type="email" name="" placeholder="Enter your email-id" />
            </div>
            <div className="form-group">
              <input type="number" name="" placeholder="Enter your age" />
            </div>
            <button className="btn">submit</button>
          </form>
        </div>
        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3>Quick Links</h3>
              <a className="links" href="#home">
                home
              </a>
              <a className="links" href="/AboutUs">
                About Us
              </a>
              <a className="links" href="/Features">
                Features
              </a>
              <a className="links" href="/Membership">
                Membership
              </a>
              <a className="links" href="/Trainers">
                Trainers
              </a>
              <a className="links" href="/CustomerList">
                CustomerList
              </a>
              {/* <a class="links" href="/blogs.html">Blogs</a> */}
            </div>
            <div className="box">
              <h3>Opening Hours</h3>
              <p>
                monday : <i> 7:00am - 10:30pm </i>
              </p>
              <p>
                tuesday : <i> 7:00am - 10:30pm </i>
              </p>
              <p>
                wednesday : <i> 7:00am - 10:30pm </i>
              </p>
              <p>
                friday : <i> 7:00am - 10:30pm </i>
              </p>
              <p>
                saturday : <i> 7:00am - 10:30pm </i>
              </p>
              <p>
                sunday : <i> closed </i>
              </p>
            </div>
            <div className="box">
              <h3>Contact Us</h3>
              <p>
                <i className="fas fa-phone" /> +123-456-7890
              </p>
              <p>
                <i className="fas fa-phone" /> +111-222-3333
              </p>
              <p>
                <i className="fas fa-envelope" /> fitnessfrek@gmail.com
              </p>
              <p>
                <i className="fas fa-map" /> Nagpur, india - 4442325
              </p>
            </div>
            <div className="box">
              <h3>Newsletter</h3>
              <p>subscribe for latest updates</p>
              <form action="">
                <input
                  type="email"
                  name=""
                  className="email"
                  placeholder="enter your email"
                  id=""
                />
                <input type="submit" defaultValue="subscribe" className="btn" />
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}
