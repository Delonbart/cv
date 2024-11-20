import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Header = () => {
  const [header, setHeader] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);
  return (
    <header className="d-print-none">
      <div className="container text-center text-lg-left">
        <div className="py-3 clearfix">
          <h1 className="site-title mb-0">{header.header1}</h1>
          <div className="site-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.facebook.com/delon.bart.1?mibextid=ZbWKwL"
                    title="Facebook"
                  >
                    <i className="fab fa-facebook" />
                    <span className="menu-title sr-only">{header.header2}</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.instagram.com/invites/contact/?igsh=1gek2a69pxchd&utm_content=27tytlw"
                    title="Instagram"
                  >
                    <i className="fab fa-instagram" />
                    <span className="menu-title sr-only">{header.header3}</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/account"
                    title="Github"
                  >
                    <i className="fab fa-github" />
                    <span className="menu-title sr-only">{header.header4}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
