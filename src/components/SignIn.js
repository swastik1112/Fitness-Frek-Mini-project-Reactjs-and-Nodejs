// import { Button, Modal } from "bootstrap";
import { Component } from "react";
import { Link } from "react-router-dom";
import { saveFitness } from "../services/FitnessApiService";

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      formData: {},
      Name: "",
      Address: "",
      EMail: "",
      Password: "",
      Telephone: "",
      Gender: "",
      Course: "",
      comments: "",
      modalOpeningStatus: false,
    };
  }
  openDialog = () => {
    this.setState({ modalOpeningStatus: true });
  };
  closeDialog = () => {
    this.setState({ modalOpeningStatus: false });
  };
  handleChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await saveFitness(this.state.formData);
    console.log(response.data);
    if (response.status === 200) {
      this.setState({
        formData: {
          Name: "",
          Address: "",
          EMail: "",
          Password: "",
          Telephone: "",
          Gender: "",
          Course: "",
          comments: "",
        },
      });
      this.openDialog();
    }
  };
  render() {
    return (
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SignIn</title>
        <link rel="icon" type="image/x-icon" href="logo2.png" />

        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n      h1{\n        color: red;\n      }\n         form {\n\n        font-weight: bold;\n        color: red;\n        border-radius: 30px;\n        border-style:solid;\n         font-size:20px;\n        background-color:pink;\n    border-color: white;\n        /* background-color: brown; */\n        background-size: 500px;\n        margin: 0 auto;\n        width: 600px;\n      }\n      #reg{\n        margin-left: 250px;\n      }\n        body {\n          font-family: "Montserrat", sans-serif;\n          color: white;\n          margin: 0px;\n          padding: 0px;\n          background: url("G:FitnessFrek\fitness-freksrcimages\b2.jpg");\n        }\n    \n        /* .header {\n            background: url(\'images/AS.jpg\');\n            margin-top: 0px;\n        } */\n    \n        .left {\n          position: absolute;\n          left: 34px;\n          top: 20px;\n          /* border: 2px solid red; */\n          display: inline-block;\n        }\n    \n        .left img {\n          width: 100px;\n        }\n    \n        .left div {\n          font-family: "Montserrat", sans-serif;\n          text-align: center;\n        }\n    \n        .center {\n          /* border: 2px solid white; */\n          display: block;\n          width: 50%;\n          margin: 20px auto;\n        }\n    \n        .navbar {\n          display: inline-block;\n          background-color: black;\n        }\n    \n        .navbar li {\n          display: inline-block;\n          font-size: 18px;\n        }\n    \n        .navbar li a {\n          color: bisque;\n          text-decoration: none;\n          padding: 10px 10px;\n        }\n    \n        .navbar li a:hover,\n        .navbar li a:active {\n          text-decoration: underline;\n          color: rgb(252, 66, 4);\n        }\n    \n        .right {\n          position: absolute;\n          right: 34px;\n          top: 35px;\n          /* border: 2px solid blue; */\n          display: inline-block;\n        }\n    \n        .btn {\n          font-family: "Montserrat", sans-serif;\n          margin: 0px 18px;\n          color: white;\n          background-color: black;\n          /* border: 2px solid grey; */\n          border-radius: 10px;\n          cursor: pointer;\n        }\n    \n        .btn:hover {\n          background-color: rgb(53, 47, 47);\n        }\n    \n        .container {\n          border: 2px solid white;\n          position: absolute;\n          right: 35%;\n          top: 120px;\n          margin-top: 53px;\n          /* border: 2px solid blue; */\n          display: inline-block;\n          margin: 108px 25px;\n          padding: 75px;\n          width: 250px;\n          border-radius: 28px;\n        }\n    \n        .container h4 {\n          background-color: bisque;\n          text-align: center;\n          color: rgb(16, 1, 1);\n        }\n    \n        .container button {\n          display: block;\n          width: 119px;\n          margin: auto;\n          background-color: aliceblue;\n          color: black;\n        }\n    \n        .container button:hover {\n          background-color: rgb(114, 186, 248);\n        }\n    \n        .form-group input {\n          font-family: "Montserrat", sans-serif;\n          font-size: 15px;\n          text-align: center;\n          display: block;\n          width: 230px;\n          margin: 10px;\n          padding: 4px;\n          /* border: 1px solid black; */\n          border-radius: 23px;\n        }\n    \n        .form-group input:focus {\n          background-color: rgb(245, 245, 192);\n        }\n    \n        .slideshow {\n          border: 2px solid black;\n          position: absolute;\n          width: 500px;\n          height: 250px;\n          margin-top: 100px;\n          margin-left: 34px;\n        }\n        .container .btn {\n          margin-right: 110px;\n        }\n      ',
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
          <h1 style={{ textAlign: "center" }}>REGISTRATION FORM</h1>
          <form name="RegForm" onSubmit={this.handleSubmit} method="post">
            <p>
              Name:{" "}
              <input
                type="text"
                size={65}
                name="Name"
                onChange={this.handleChange}
              />
            </p>
            <br />
            <p>
              Address:{" "}
              <input
                type="text"
                size={65}
                name="Address"
                onChange={this.handleChange}
              />
            </p>
            <br />
            <p>
              E-mail:{" "}
              <input
                type="text"
                size={65}
                name="EMail"
                onChange={this.handleChange}
              />
            </p>
            <br />
            <p>
              Password:{" "}
              <input
                type="password"
                size={65}
                name="Password"
                onChange={this.handleChange}
              />
            </p>
            <br />
            <p>
              Telephone:{" "}
              <input
                type="text"
                size={65}
                name="Telephone"
                onChange={this.handleChange}
              />
            </p>
            <br />
            Select gender:
            <input
              type="radio"
              name="Gender"
              id="male"
              value="Male"
              onChange={this.handleChange}
            />
            <label htmlFor="male">
              Male
              <input
                type="radio"
                name="Gender"
                value="Female"
                id="female"
                onChange={this.handleChange}
              />
              <label htmlFor="female">
                Female
                <p>
                  <label htmlFor="Age">
                    Age:
                    <input
                      type="number"
                      name="Age"
                      id="Age"
                      onChange={this.handleChange}
                    />
                  </label>
                </p>
                <p>
                  SELECT YOUR COURSE
                  <select
                    type="text"
                    value="select"
                    name="Course"
                    onChange={this.handleChange}
                  >
                    <option>CARDIO</option>
                    <option>HIGH-INTNSITY INTERVAL TRAINING</option>
                    <option>YOGA</option>
                    <option>AEROBIC</option>
                    <option>ZUMBA</option>
                    <option>CROSS-TRAINING</option>
                    <option>KICKBOXING</option>
                    <option>STRENGTH TRAINING</option>
                    <option>CIRCUIT TRAINING</option>
                    <option>POWER YOGA</option>
                    <option>CYCLING</option>
                    <option>WEIGTH LIFTING</option>
                  </select>
                </p>
                <br />
                <br />
                <p>
                  Comments:{" "}
                  <textarea
                    cols={55}
                    name="comments"
                    defaultValue={" "}
                    onChange={this.handleChange}
                  />
                </p>
                <p id="reg">
                  <input
                    className="btn mx-2"
                    type="submit"
                    defaultValue="submit"
                    name="Submit"
                    onChange={this.handleChange}
                  />
                  <input
                    className="btn mx-2"
                    type="reset"
                    defaultValue="Reset"
                    name="Reset"
                    onChange={this.handleChange}
                  />
                </p>
              </label>
            </label>
          </form>
        </header>
      </>
    );
  }
}
