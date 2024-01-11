import React from "react";
import { FaDiscord } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { GiLinkedRings } from "react-icons/gi";
import "../css/Footer.css";
import coingenie from "../assets/coingenie.png";
export default function Footer() {
  return (
    <>
      <section className="footer ">
        <div className="container pt-5 pb-3 ">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 ">
              <div className="Logo-alignment">
                <img
                  className="mx-auto pos"
                  width="60%"
                  src={coingenie}
                  alt=""
                />
              </div>
              <br />
              <p className="text-secondary text-center">coingni@2024</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center">
              <ul>
                <li>
                  <div>
                    <h6 className="links link hover-2 fw-bold text-secondary">
                      SERVICES
                    </h6>
                  </div>
                </li>
                <li>
                  <div>
                    <a className="footerLinksParent link hover-2" href="/a">
                      opt 1
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a className="footerLinksParent link hover-2" href="/a">
                      opt 2
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a className="footerLinksParent link hover-2" href="/a">
                      opt 3
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a className="footerLinksParent link hover-2" href="/a">
                      opt 4
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center">
              <ul>
                <li>
                  <div>
                    <h6 className="links link hover-2 text-secondary fw-bold">
                      ABOUT
                    </h6>
                  </div>
                </li>
                <li>
                  <div>
                    <a className="footerLinksParent link hover-2" href="/a">
                      opt 1
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a className="footerLinksParent link hover-2" href="/a">
                      opt 2
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a className="footerLinksParent link hover-2" href="/a">
                      opt 3
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a className="footerLinksParent link hover-2" href="/a">
                      opt 4
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center">
              <h6 className="links link hover-2 text-secondary fw-bold">
                SOCIAL
              </h6>
              <div className="d-flex justify-content-around mt-2 ">
                <FaDiscord className="app" />
                <FaTwitter className="app" />
                <FaTelegramPlane className="app" />
                <GiLinkedRings className="app" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
