import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const About = () => {
    const [about, setAbout] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);
  return (
    <div className="about-section pt-4 px-3 px-lg-4 mt-1">
      <div className="row">
        <div className="col-md-6">
          <h2 className="h3 mb-3">About Me</h2>
          <p>
          Hello, I am Delon, currently studying at Universitas Klabat (UNKLAB), majoring in Information Systems (IS).
          </p>
        </div>
        <div className="col-md-5 offset-md-1">
          <div className="row mt-2">
            <div className="col-sm-4">
              <div className="pb-1">Age</div>
            </div>
            <div className="col-sm-8">
              <div className="pb-1 text-secondary">20</div>
            </div>
            <div className="col-sm-4">
              <div className="pb-1">Email</div>
            </div>
            <div className="col-sm-8">
              <div className="pb-1 text-secondary">delonbart77@gmail.com</div>
            </div>
            <div className="col-sm-4">
              <div className="pb-1">Phone</div>
            </div>
            <div className="col-sm-8">
              <div className="pb-1 text-secondary">+62 82195146313</div>
            </div>
            <div className="col-sm-4">
              <div className="pb-1">Address</div>
            </div>
            <div className="col-sm-8">
              <div className="pb-1 text-secondary">
                universitas klabat
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
