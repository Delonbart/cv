import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Footer = () => {
  const [footer, setFooter] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "footer");
    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
    });
  }, []);
  return (
    <footer className="pt-4 pb-4 text-muted text-center d-print-none">
      <div className="container">
        <div className="my-3">
          <div className="h4">Delon Puiya</div>
          <div className="footer-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.facebook.com/delon.bart.1?mibextid=ZbWKwL"
                    title="Facebook"
                  >
                    <i className="fab fa-facebook" />
                    <span className="menu-title sr-only">Facebook</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.instagram.com/invites/contact/?igsh=1gek2a69pxchd&utm_content=27tytlw"
                    title="Instagram"
                  >
                    <i className="fab fa-instagram" />
                    <span className="menu-title sr-only">Instagram</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/Delonbart"
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
  );
};

export default Footer;
