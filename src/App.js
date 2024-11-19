import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Cover from "./components/page/cover";

function App() {
  return (
    <div classname="App">
      <Header />
      <div className="page-content">
        <div className="container">
          <div className="cover shadow-lg bg-white">
            <Cover />
            <div className="about-section pt-4 px-3 px-lg-4 mt-1">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="h3 mb-3">About Me</h2>
                  <p>
                    Hello! I’m Joyce Harrison. I am passionate about UI/UX
                    design and Web Design. I am a skilled Front-end Developer
                    and master of Graphic Design tools such as Photoshop and
                    Sketch.
                  </p>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="row mt-2">
                    <div className="col-sm-4">
                      <div className="pb-1">Age</div>
                    </div>
                    <div className="col-sm-8">
                      <div className="pb-1 text-secondary">28</div>
                    </div>
                    <div className="col-sm-4">
                      <div className="pb-1">Email</div>
                    </div>
                    <div className="col-sm-8">
                      <div className="pb-1 text-secondary">
                        Joyce@company.com
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="pb-1">Phone</div>
                    </div>
                    <div className="col-sm-8">
                      <div className="pb-1 text-secondary">+0718-111-0011</div>
                    </div>
                    <div className="col-sm-4">
                      <div className="pb-1">Address</div>
                    </div>
                    <div className="col-sm-8">
                      <div className="pb-1 text-secondary">
                        140, City Center, New York, U.S.A
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="d-print-none" />
            <div className="skills-section px-3 px-lg-4">
              <h2 className="h3 mb-3">Professional Skills</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-2">
                    <span>HTML</span>
                    <div className="progress my-1">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        data-aos="zoom-in-right"
                        data-aos-delay={100}
                        data-aos-anchor=".skills-section"
                        style={{ width: "90%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <span>CSS</span>
                    <div className="progress my-1">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        data-aos="zoom-in-right"
                        data-aos-delay={200}
                        data-aos-anchor=".skills-section"
                        style={{ width: "85%" }}
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <span>JavaScript</span>
                    <div className="progress my-1">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        data-aos="zoom-in-right"
                        data-aos-delay={300}
                        data-aos-anchor=".skills-section"
                        style={{ width: "75%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-2">
                    <span>Adobe Photoshop</span>
                    <div className="progress my-1">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        data-aos="zoom-in-right"
                        data-aos-delay={400}
                        data-aos-anchor=".skills-section"
                        style={{ width: "80%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <span>Sketch</span>
                    <div className="progress my-1">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        data-aos="zoom-in-right"
                        data-aos-delay={500}
                        data-aos-anchor=".skills-section"
                        style={{ width: "85%" }}
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <span>Adobe XD</span>
                    <div className="progress my-1">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        data-aos="zoom-in-right"
                        data-aos-delay={600}
                        data-aos-anchor=".skills-section"
                        style={{ width: "75%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="d-print-none" />
            <div className="work-experience-section px-3 px-lg-4">
              <h2 className="h3 mb-4">Work Experience</h2>
              <div className="timeline">
                <div className="timeline-card timeline-card-primary card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">
                      Frontend Developer{" "}
                      <span className="text-muted h6">at Creative Agency</span>
                    </div>
                    <div className="text-muted text-small mb-2">
                      May, 2015 - Present
                    </div>
                    <div>
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews. Iterative approaches to corporate
                      strategy foster collaborative thinking to further the
                      overall value proposition.
                    </div>
                  </div>
                </div>
                <div className="timeline-card timeline-card-primary card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">
                      Graphic Designer{" "}
                      <span className="text-muted h6">at Design Studio</span>
                    </div>
                    <div className="text-muted text-small mb-2">
                      June, 2013 - May, 2015
                    </div>
                    <div>
                      Override the digital divide with additional clickthroughs
                      from DevOps. Nanotechnology immersion along the
                      information highway will close the loop on focusing solely
                      on the bottom line.
                    </div>
                  </div>
                </div>
                <div className="timeline-card timeline-card-primary card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">
                      Junior Web Developer{" "}
                      <span className="text-muted h6">at Indie Studio</span>
                    </div>
                    <div className="text-muted text-small mb-2">
                      Jan, 2011 - May, 2013
                    </div>
                    <div>
                      User generated content in real-time will have multiple
                      touchpoints for offshoring. Organically grow the holistic
                      world view of disruptive innovation via workplace
                      diversity and empowerment.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="d-print-none" />
            <div className="page-break" />
            <div className="education-section px-3 px-lg-4 pb-4">
              <h2 className="h3 mb-4">Education</h2>
              <div className="timeline">
                <div className="timeline-card timeline-card-success card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">
                      Masters in Information Technology{" "}
                      <span className="text-muted h6">
                        from International University
                      </span>
                    </div>
                    <div className="text-muted text-small mb-2">
                      2011 - 2013
                    </div>
                    <div>
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews. Iterative approaches to corporate
                      strategy foster collaborative thinking to further the
                      overall value proposition.
                    </div>
                  </div>
                </div>
                <div className="timeline-card timeline-card-success card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">
                      Bachelor of Computer Science{" "}
                      <span className="text-muted h6">
                        from Regional College
                      </span>
                    </div>
                    <div className="text-muted text-small mb-2">
                      2007 - 2011
                    </div>
                    <div>
                      Override the digital divide with additional clickthroughs
                      from DevOps. Nanotechnology immersion along the
                      information highway will close the loop on focusing solely
                      on the bottom line.
                    </div>
                  </div>
                </div>
                <div className="timeline-card timeline-card-success card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">
                      Science and Mathematics{" "}
                      <span className="text-muted h6">from Mt. High Scool</span>
                    </div>
                    <div className="text-muted text-small mb-2">
                      1995 - 2007
                    </div>
                    <div>
                      User generated content in real-time will have multiple
                      touchpoints for offshoring. Organically grow the holistic
                      world view of disruptive innovation via workplace
                      diversity and empowerment.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="d-print-none" />
            <div className="contant-section px-3 px-lg-4 pb-4" id="contact">
              <h2 className="h3 text mb-3">Contact</h2>
              <div className="row">
                <div className="col-md-7 d-print-none">
                  <div className="my-2">
                    <form
                      action="https://formspree.io/your@email.com"
                      method="POST"
                    >
                      <div className="row">
                        <div className="col-6">
                          <input
                            className="form-control"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        <div className="col-6">
                          <input
                            className="form-control"
                            type="email"
                            id="email"
                            name="_replyto"
                            placeholder="Your E-mail"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group my-2">
                        <textarea
                          className="form-control"
                          style={{ resize: "none" }}
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Your Message"
                          required
                          defaultValue={""}
                        />
                      </div>
                      <button className="btn btn-primary mt-2" type="submit">
                        Send
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col">
                  <div className="mt-2">
                    <h3 className="h6">Address</h3>
                    <div className="pb-2 text-secondary">
                      140, City Center, New York, U.S.A
                    </div>
                    <h3 className="h6">Phone</h3>
                    <div className="pb-2 text-secondary">+0718-111-0011</div>
                    <h3 className="h6">Email</h3>
                    <div className="pb-2 text-secondary">Joyce@company.com</div>
                  </div>
                </div>
                <div className="col d-none d-print-block">
                  <div className="mt-2">
                    <div>
                      <div className="mb-2">
                        <div className="text-dark">
                          <i className="fab fa-twitter mr-1" />
                          <span>https://twitter.com/templateflip</span>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="text-dark">
                          <i className="fab fa-facebook mr-1" />
                          <span>https://www.facebook.com/templateflip</span>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="text-dark">
                          <i className="fab fa-instagram mr-1" />
                          <span>https://www.instagram.com/templateflip</span>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="text-dark">
                          <i className="fab fa-github mr-1" />
                          <span>https://github.com/templateflip</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="pt-4 pb-4 text-muted text-center d-print-none">
        <div className="container">
          <div className="my-3">
            <div className="h4">Joyce Harrison</div>
            <div className="footer-nav">
              <nav role="navigation">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://twitter.com/templateflip"
                      title="Twitter"
                    >
                      <i className="fab fa-twitter" />
                      <span className="menu-title sr-only">Twitter</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.facebook.com/templateflip"
                      title="Facebook"
                    >
                      <i className="fab fa-facebook" />
                      <span className="menu-title sr-only">Facebook</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.instagram.com/templateflip"
                      title="Instagram"
                    >
                      <i className="fab fa-instagram" />
                      <span className="menu-title sr-only">Instagram</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://github.com/templateflip"
                      title="Github"
                    >
                      <i className="fab fa-github" />
                      <span className="menu-title sr-only">Github</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="text-small">
            <div className="mb-1">© Right Resume. All rights reserved.</div>
            <div>
              Design -{" "}
              <a href="https://templateflip.com/" target="_blank">
                TemplateFlip
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
