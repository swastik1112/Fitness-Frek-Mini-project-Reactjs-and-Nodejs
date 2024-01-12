import "./App.css";
// import "./App1.css";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs";
import { NavigationBar } from "./components/NavigationBar";
import { Features } from "./components/Features";
import { Membership } from "./components/Membership";
import { Trainers } from "./components/Trainers";
import { SignIn } from "./components/SignIn";
import { LogIn } from "./components/LogIn";
import { CustomerList } from "./components/CustomerList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationBar></NavigationBar>}></Route>
          <Route path="/" element={<Footer></Footer>}></Route>
          <Route path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
          <Route path="/Features" element={<Features></Features>}></Route>
          <Route path="/Membership" element={<Membership></Membership>}></Route>
          <Route path="/Trainers" element={<Trainers></Trainers>}></Route>
          <Route path="/SignIn" element={<SignIn></SignIn>}></Route>
          <Route path="/LogIn" element={<LogIn></LogIn>}></Route>
          <Route
            path="/CustomerList"
            element={<CustomerList></CustomerList>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
