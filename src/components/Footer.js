import { Component } from "react";
// import "./App1.css";

export class Footer extends Component {
  render() {
    return (
      <>
        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3>Quick Links</h3>
              <a className="links" href="#home">
                home
              </a>
              <a className="links" href="aboutus.html">
                About Us
              </a>
              <a className="links" href="features.html">
                Features
              </a>
              <a className="links" href="membership.html">
                Membership
              </a>
              <a className="links" href="trainer.html">
                Trainers
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
                <i className="fas fa-envelope" /> swastik@gmail.com
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
