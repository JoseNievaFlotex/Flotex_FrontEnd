import { About } from "./about";
import { Contact } from "./contact";
import { Features } from "./features";
import { Gallery } from "./gallery";
import { Services } from "./services";
import { Testimonials } from "./testimonials";
import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row home-flotex-row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  Flotex
                  <span></span>
                </h1>
                <p>
                  Ayrton Laura dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sed commodo nibh ante
                  facilisis bibendum.
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features></Features>
      <About></About>
      <Services></Services>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </header>
  );
};
