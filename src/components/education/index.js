import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Education = () => {
  const [education, setEducation] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const educationRef = ref(db, "education");
    onValue(educationRef, (snapshot) => {
      const data = snapshot.val();
      setEducation(data);
    });
  }, []);
  return (
    <div className="education-section px-3 px-lg-4 pb-4">
      <h2 className="h3 mb-4">{education.education1}</h2>
      <div className="timeline">
        <div className="timeline-card timeline-card-success card shadow-sm">
          <div className="card-body">
            <div className="h5 mb-1">
            {education.education2}{" "}
              <span className="text-muted h6">{education.education3}</span>
            </div>
            <div className="text-muted text-small mb-2">{education.education5}</div>
            <div>
            {education.education4}
            </div>
          </div>
        </div>
        <div className="timeline-card timeline-card-success card shadow-sm">
          <div className="card-body">
            <div className="h5 mb-1">
            {education.education6}{" "}
              <span className="text-muted h6">{education.education7}</span>
            </div>
            <div className="text-muted text-small mb-2">{education.education8}</div>
            <div>
            {education.education9} 
            </div>
          </div>
        </div>
        <div className="timeline-card timeline-card-success card shadow-sm">
          <div className="card-body">
            <div className="h5 mb-1">
            {education.education10}{" "}
              <span className="text-muted h6">{education.education11}</span>
            </div>
            <div className="text-muted text-small mb-2">{education.education12}</div>
            <div>{education.education13}</div>
          </div>
        </div>
        <div className="timeline-card timeline-card-success card shadow-sm">
          <div className="card-body">
            <div className="h5 mb-1">
            {education.education14}{" "}
              <span className="text-muted h6">{education.education15}</span>
            </div>
            <div className="text-muted text-small mb-2">{education.education16}</div>
            <div>{education.education17}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
