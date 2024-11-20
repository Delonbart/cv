import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Contact = () => {
    const [contact, setContact] = useState({});

    useEffect(() => {
      const db = getDatabase();
      const contactRef = ref(db, "contact");
      onValue(contactRef, (snapshot) => {
        const data = snapshot.val();
        setContact(data);
      });
    }, []);  
  return (
    <div className="contant-section px-3 px-lg-4 pb-4" id="contact">
      <h2 className="h3 text mb-3">Contact</h2>
      <div className="row">
        <div className="col-md-7 d-print-none">
          <div className="my-2">
            <form action="https://formspree.io/your@email.com" method="POST">
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
              Unklab
            </div>
            <h3 className="h6">Phone</h3>
            <div className="pb-2 text-secondary">+62 82195146313</div>
            <h3 className="h6">Email</h3>
            <div className="pb-2 text-secondary">delonbart77@gmal.com</div>
          </div>
        </div>
        <div className="col d-none d-print-block">
          <div className="mt-2">
            <div>
              <div className="mb-2">
                <div className="text-dark">
                  <i className="fab fa-facebook mr-1" />
                  <span>https://www.facebook.com/delon.bart.1?mibextid=ZbWKwL</span>
                </div>
              </div>
              <div className="mb-2">
                <div className="text-dark">
                  <i className="fab fa-instagram mr-1" />
                  <span>https://www.instagram.com/invites/contact/?igsh=1gek2a69pxchd&utm_content=27tytlw</span>
                </div>
              </div>
              <div className="mb-2">
                <div className="text-dark">
                  <i className="fab fa-github mr-1" />
                  <span>https://github.com/Delonbart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
