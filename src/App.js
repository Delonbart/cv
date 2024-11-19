import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Cover from "./components/page/cover";
import About from "./components/page/about";
import Skills from "./components/page/skills";

function App() {
  return (
    <div classname="App">
      <Header />
      <div className="page-content">
        <div className="container">
          <div className="cover shadow-lg bg-white">
            <Cover />
            <About/>
            <hr className="d-print-none" />
            <Skills/>
            <hr className="d-print-none" />
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
