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
          <h2 className="h3 mb-3">{about.about1}</h2>
          <p>
          {about.about2}
          </p>
        </div>
        <div className="col-md-5 offset-md-1">
          <div className="row mt-2">
            <div className="col-sm-4">
              <div className="pb-1">{about.about3}</div>
            </div>
            <div className="col-sm-8">
              <div className="pb-1 text-secondary">{about.about4}</div>
            </div>
            <div className="col-sm-4">
              <div className="pb-1">{about.about5}</div>
            </div>
            <div className="col-sm-8">
              <div className="pb-1 text-secondary">{about.about6}</div>
            </div>
            <div className="col-sm-4">
              <div className="pb-1">{about.about7}</div>
            </div>
            <div className="col-sm-8">
              <div className="pb-1 text-secondary">{about.about8}</div>
            </div>
            <div className="col-sm-4">
              <div className="pb-1">{about.about9}</div>
            </div>
            <div className="col-sm-8">
              <div className="pb-1 text-secondary">
              {about.about10}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
