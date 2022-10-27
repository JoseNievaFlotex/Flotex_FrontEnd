import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
//Router
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Dolar } from "./pages/Dolar";
import Piso from "./pages/Piso";
import MainPage from "./components/MainPage";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="ayrton">
      {/* <Navigation /> */}
      {/* <Header data={landingPageData.Header} /> */}
      
      {/* <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact/> */}

      <Router className="ayrton2">
        <MainPage/>
      </Router>
      

      
      
      <div>
        <div id='footer' className="footer-flotex">
          <div className='container text-center'>
            <p>
              &copy; 2020 Issaaf Kattan React Land Page Template. Design by{' '}
              <a href='http://www.templatewire.com' rel='nofollow'>
                TemplateWire
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
