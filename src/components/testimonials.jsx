import React from "react";
import { Container, Row } from "react-bootstrap";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                <img src="img/testimonials/01.jpg" alt="" />
              </div>
              <div className="testimonial-content">
                <p>
                  ""Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </p>
                <div className="testimonial-meta"> - John Doe </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                <img src="img/testimonials/02.jpg" alt="" />
              </div>
              <div className="testimonial-content">
                <p>
                  ""Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </p>
                <div className="testimonial-meta"> - Johnathan Doe </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                <img src="img/testimonials/03.jpg" alt="" />
              </div>
              <div className="testimonial-content">
                <p>
                  ""Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </p>
                <div className="testimonial-meta"> - Jose Doe </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                <img src="img/testimonials/04.jpg" alt="" />
              </div>
              <div className="testimonial-content">
                <p>
                  ""Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </p>
                <div className="testimonial-meta"> - John Doe </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                <img src="img/testimonials/05.jpg" alt="" />
              </div>
              <div className="testimonial-content">
                <p>
                  ""Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </p>
                <div className="testimonial-meta"> - John Doe </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                <img src="img/testimonials/06.jpg" alt="" />
              </div>
              <div className="testimonial-content">
                <p>
                  ""Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </p>
                <div className="testimonial-meta"> - John Doe </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenedor Team */}
      <Container>
        <Row>
          <div className="container">
            <div className="center col-md col-md-offset-2 section-title">
              <h2 className="text-center">Meet the Team</h2>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                dapibus leonec.
              </p>
            </div>
            <Row id="row">
              <div className="col-md-3 col-sm-6 team">
                <div className="thumbnail">
                  <img src="img/team/01.jpg" alt="..." className="team-img" />
                  <div className="caption">
                    <h4>John Doe</h4>
                    <p>Director</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 team">
                <div className="thumbnail">
                  <img src="img/team/02.jpg" alt="..." className="team-img" />
                  <div className="caption">
                    <h4>John Doe</h4>
                    <p>Director</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 team">
                <div className="thumbnail">
                  <img src="img/team/03.jpg" alt="..." className="team-img" />
                  <div className="caption">
                    <h4>John Doe</h4>
                    <p>Director</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 team">
                <div className="thumbnail">
                  <img src="img/team/04.jpg" alt="..." className="team-img" />
                  <div className="caption">
                    <h4>John Doe</h4>
                    <p>Director</p>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};
