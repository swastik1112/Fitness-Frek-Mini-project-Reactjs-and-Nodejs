import { Component } from "react";
import { Link } from "react-router-dom";
// import "./App1.css";

export class Membership extends Component {
  render() {
    return (
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Membership</title>
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
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    body {\n      font-family: "Montserrat", sans-serif;\n      color: white;\n      margin: 0px;\n      padding: 0px;\n      background: url("G:FitnessFrek\fitness-freksrcimagescbum.jpg");\n    }\n\n    /* .header {\n        background: url(\'images/AS.jpg\');\n        margin-top: 0px;\n    } */\n\n    .left {\n      position: absolute;\n      left: 34px;\n      top: 20px;\n      /* border: 2px solid red; */\n      display: inline-block;\n    }\n\n    .left img {\n      width: 100px;\n    }\n\n    .left div {\n      font-family: "Montserrat", sans-serif;\n      text-align: center;\n    }\n\n    .center {\n      /* border: 2px solid white; */\n      display: block;\n      width: 50%;\n      margin: 20px auto;\n    }\n\n    .navbar {\n      display: inline-block;\n      background-color: black;\n    }\n\n    .navbar li {\n      display: inline-block;\n      font-size: 18px;\n    }\n\n    .navbar li a {\n      color: bisque;\n      text-decoration: none;\n      padding: 10px 10px;\n    }\n\n    .navbar li a:hover,\n    .navbar li a:active {\n      text-decoration: underline;\n      color: rgb(252, 66, 4);\n    }\n\n    .right {\n      position: absolute;\n      right: 34px;\n      top: 35px;\n      /* border: 2px solid blue; */\n      display: inline-block;\n    }\n\n    .btn {\n      font-family: "Montserrat", sans-serif;\n      margin: 0px 18px;\n      color: white;\n      background-color: black;\n      /* border: 2px solid grey; */\n      border-radius: 10px;\n      cursor: pointer;\n    }\n\n    .btn:hover {\n      background-color: rgb(53, 47, 47);\n    }\n\n    .container {\n      border: 2px solid white;\n      position: absolute;\n      right: 600px;\n      top: 120px;\n      /* margin-top: 30px; */\n      /* border: 2px solid blue; */\n      display: inline-block;\n      /* margin: 20px 25px; */\n      padding: 75px;\n      width: 250px;\n      border-radius: 28px;\n      text-decoration: red;\n    }\n    .container .card {\n      /* text-decoration: red; */\n      background-color: brown;\n      /* text-align: center; */\n      /* text-decoration-color: black; */\n    }\n\n    .container h4 {\n      background-color: bisque;\n      text-align: center;\n      color: rgb(16, 1, 1);\n    }\n\n    .container button {\n      display: block;\n      width: 119px;\n      margin: auto;\n      background-color: aliceblue;\n      color: black;\n    }\n\n    .container button:hover {\n      background-color: rgb(114, 186, 248);\n    }\n\n    .form-group input {\n      font-family: "Montserrat", sans-serif;\n      font-size: 15px;\n      text-align: center;\n      display: block;\n      width: 230px;\n      margin: 10px;\n      padding: 4px;\n      /* border: 1px solid black; */\n      border-radius: 23px;\n    }\n\n    .form-group input:focus {\n      background-color: rgb(245, 245, 192);\n    }\n\n    .slideshow {\n      border: 2px solid black;\n      position: absolute;\n      width: 500px;\n      height: 250px;\n      margin-top: 100px;\n      margin-left: 34px;\n    }\n  ',
          }}
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
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h1 className="card-title">1 Month Plan</h1>
              <h4 className="card-subtitle mb-2 text-muted">Rs.3000/Month</h4>
              <p className="card-text"></p>
              <li>Cardio</li>
              <li>Trainer</li>
              <p />
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h1 className="card-title">6 Month Plan</h1>
              <h4 className="card-subtitle mb-2 text-muted">Rs.2500/Month</h4>
              <p className="card-text"></p>
              <li>Cardio</li>
              <li>Trainer</li>
              <li>Diet Plan</li>
              <p />
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h1 className="card-title">12 Month Plan</h1>
              <h4 className="card-subtitle mb-2 text-muted">Rs.2000/Month</h4>
              <p className="card-text"></p>
              <li>Cardio</li>
              <li>Trainer</li>
              <li>Diet Plan</li>
              <li>Protein</li>
              <p />
            </div>
          </div>
        </div>
      </>
    );
  }
}
