import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const Cover = () => {
  const [cover, setCover] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const coverRef = ref(db, "cover");
    onValue(coverRef, (snapshot) => {
      const data = snapshot.val();
      setCover(data);
    });
  }, []);
  return (
    <div className="cover-bg p-3 p-lg-4 text-white">
      <div className="row">
        <div className="col-lg-4 col-md-5">
          <div className="avatar hover-effect bg-white shadow-sm p-1">
            <img src={cover.img || ""} width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
