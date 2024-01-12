import { Component } from "react";
import { Link } from "react-router-dom";
// import "./App1.css";

export class Trainers extends Component {
  render() {
    return (
      <>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Trainers</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="icon" type="image/x-icon" href="logo2.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n      body {\n        font-family: "Montserrat", sans-serif;\n        color: white;\n        margin: 0px;\n        padding: 0px;\n    background-color:blue;\n    background: url("G:FitnessFrek\fitness-freksrcimagescbum.jpg");\n      }\n  \n          .left {\n        position: absolute;\n        left: 34px;\n        top: 20px;\n        display: inline-block;\n      }\n  \n      .left img {\n        width: 100px;\n      }\n  \n      .left div {\n        font-family: "Montserrat", sans-serif;\n        text-align: center;\n      }\n  \n      .center {\n         display: block;\n        width: 50%;\n        margin: 20px auto;\n      }\n  \n      .navbar {\n        display: inline-block;\n        background-color: black;\n      }\n  \n      .navbar li {\n        display: inline-block;\n        font-size: 10px;\n      }\n  \n      .navbar li a {\n        color: bisque;\n        text-decoration: none;\n        padding: 0px 0px;\n      }\n  \n      .navbar li a:hover,\n      .navbar li a:active {\n        text-decoration: underline;\n        color: rgb(252, 66, 4);\n      }\n  \n      .right {\n        position: absolute;\n        right: 500px;\n        top: 35px;\n        /* border: 2px solid blue; */\n        display: inline-block;\n      }\n  \n      .btn {\n        font-family: "Montserrat", sans-serif;\n        margin: 0px 18px;\n        color: white;\n        background-color: black;\n        /* border: 2px solid grey; */\n        border-radius: 10px;\n        cursor: pointer;\n      }\n  \n      .btn:hover {\n        background-color: rgb(53, 47, 47);\n      }\n  \n      .container {\n        /* border: 2px solid white; */\n         background-color: brown; \n        position: absolute;\n        right: 100px;\n        top: 120px;\n        margin-top: 53px;\n        /* border: 2px solid blue; */\n        display: inline-block;\n        /* margin: 108px 25px;\n      padding: 75px;\n      width: 250px;\n      border-radius: 28px; */\n      }\n  \n      .container h4 {\n        background-color: bisque;\n        text-align: center;\n        color: rgb(16, 1, 1);\n      }\n  \n      .container button {\n        display: block;\n        width: 119px;\n        margin: auto;\n        background-color: aliceblue;\n        color: black;\n      }\n  \n      .container button:hover {\n        background-color: rgb(114, 186, 248);\n      }\n  \n      .form-group input {\n        font-family: "Montserrat", sans-serif;\n        font-size: 50px;\n        text-align: center;\n        display: block;\n        width: 230px;\n        margin: 10px;\n        padding: 4px;\n        /* border: 1px solid black; */\n        border-radius: 23px;\n      }\n  \n      .form-group input:focus {\n        background-color: rgb(245, 245, 192);\n      }\n  \n      .slideshow {\n        border: 2px solid black;\n        position: absolute;\n        width: 500px;\n        height: 250px;\n        margin-top: 100px;\n        margin-left: 34px;\n      }\n    ',
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
        <div className="container my-4">
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary">
                    Trainer-1
                  </strong>
                  <h3 className="mb-0">Rakesh</h3>
                  <div className="mb-1 text-muted" />
                  <p className="card-text mb-auto">
                    Enjoys inspiring others to commit to long-term health and
                    fitness goals. Encourages activities and coping methods that
                    transform unhealthy habits and fuel healthy minds and
                    bodies.
                  </p>
                  <li>4 Times World Champion</li>
                  <li>state level champion</li>
                  <p />
                  <a href="#" className="stretched-link" />
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    className="bd-placeholder-img"
                    width={250}
                    height={250}
                    src="G:\FitnessFrek\fitness-frek\src\images\trainer-1.jpg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveaspectratio="xMidYMid slice"
                    focusable="false"
                  />
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">
                    Trainer-2
                  </strong>
                  <h3 className="mb-0">Shila</h3>
                  <div className="mb-1 text-muted" />
                  <p className="mb-auto">
                    Enjoys inspiring others to commit to long-term health and
                    fitness goals. Encourages activities and coping methods that
                    transform unhealthy habits and fuel healthy minds and
                    bodies.
                  </p>
                  <li>2 Times World Champion</li>
                  <li>state level champion</li>
                  <p />
                  <a href="#" className="stretched-link" />
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    className="bd-placeholder-img"
                    width={250}
                    height={250}
                    src="trainer-2.jpg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveaspectratio="xMidYMid slice"
                    focusable="false"
                  />
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em" />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary">
                    Trainer-3
                  </strong>
                  <h3 className="mb-0">Suresh</h3>
                  <div className="mb-1 text-muted" />
                  <p className="card-text mb-auto">
                    Enjoys inspiring others to commit to long-term health and
                    fitness goals. Encourages activities and coping methods that
                    transform unhealthy habits and fuel healthy minds and
                    bodies.
                  </p>
                  <li>2 Times World Champion</li>
                  <li>state level champion</li>
                  <p />
                  <a href="#" className="stretched-link" />
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    className="bd-placeholder-img"
                    width={250}
                    height={250}
                    src="trainer-3.jpg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveaspectratio="xMidYMid slice"
                    focusable="false"
                  />
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">
                    Trainer-4
                  </strong>
                  <h3 className="mb-0">Lila</h3>
                  <div className="mb-1 text-muted" />
                  <p className="mb-auto">
                    Enjoys inspiring others to commit to long-term health and
                    fitness goals. Encourages activities and coping methods that
                    transform unhealthy habits and fuel healthy minds and
                    bodies.
                  </p>
                  <li>1 Times World Champion</li>
                  <li>state level champion</li>
                  <p />
                  <a href="#" className="stretched-link" />
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    className="bd-placeholder-img"
                    width={250}
                    height={250}
                    src="trainer-4.jpg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveaspectratio="xMidYMid slice"
                    focusable="false"
                  />
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
