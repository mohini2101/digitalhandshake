import React from "react";

import "./CameraFront.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFileText } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";

import { faCreditCard } from "@fortawesome/free-solid-svg-icons/faCreditCard";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";

function frontCamera() {
  return (
    <div id="dashboard-container">
      <div className="frame01">
        <div className="frame02">
          <div className="digital">Digital</div>


          <div className="handshake"> Handshake</div>

          <div className="handshake"> Handsake</div>

        </div>
        <div className="frame03">
          <ul id="vertical-menu">
            <li className="homebody">
             
              <FontAwesomeIcon
                icon={faHome}
                style={{ fontSize: "20px", color: "white" }}
              />
              <a href="#">Home</a>
             
            </li>
            <li>
              <FontAwesomeIcon
                icon={faFileText}
                style={{ fontSize: "20px", color: "white" }}
              />
              <a href="#">Teams</a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ fontSize: "20px", color: "white" }}
              />
              <a href="#">Favcard</a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCogs}
                style={{ fontSize: "20px", color: "white" }}
              />
              <a href="#">Settings</a>
            </li>
          </ul>
        </div>
        <div className="logoutbtn">
          <FontAwesomeIcon
            icon={faSignOutAlt}
            style={{ fontSize: "20px", color: "white" }}
          />
          <a href="#">Logout</a>
        </div>
      </div>

      <div id="main-content1" style={{ flex: 1 }}>
        <div className="frame04">
          <div className="frame05">
            <div className="profile-container">
              <div className="imguser"></div>

              <div className="P_name ">hi toney mishra</div>
              <br />
            </div>

            <div className="icon-containers">
              <div className="card-icon" title={`Click to view card `}>
                <FontAwesomeIcon icon={faCreditCard} />
              </div>

              <div className="notification-icon" title={`Click to view card `}>
                <FontAwesomeIcon icon={faBell} />
              </div>
            </div>
          </div>
        </div>
        <div className="bgimg">
          <div className="cardcontent">
            <div className="containercard">
              <svg
                width="400"
                height="330"
                viewBox="0 0 544 330"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="247.167"
                  y="158.839"
                  width="155.276"
                  height="3.37557"
                  transform="rotate(-90 247.167 158.839)"
                  fill="url(#backgroundPattern)"
                />
                <rect
                  x="250.543"
                  y="156.589"
                  width="168.779"
                  height="3.37556"
                  transform="rotate(90 250.543 156.589)"
                  fill="url(#paint1_linear_941_5621)"
                />
                <path
                  d="M249.417 325.368L249.417 3.56299L492.351 3.56298C519.131 3.56298 540.842 25.2731 540.842 52.0538L540.842 275.491C540.842 303.037 518.511 325.368 490.965 325.368L249.417 325.368Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M3 262.357L3 278.002C3 304.783 24.7101 326.493 51.4908 326.493L68.2611 326.493"
                  stroke="white"
                  stroke-width="5.54181"
                  stroke-linecap="round"
                />
                <path
                  d="M540.842 262.357L540.842 278.002C540.842 304.783 519.132 326.493 492.351 326.493L475.581 326.493"
                  stroke="white"
                  stroke-width="5.54181"
                  stroke-linecap="round"
                />
                <path
                  d="M3 67.1364L3 51.4913C3 24.7106 24.7101 3.00049 51.4908 3.00049L68.2611 3.00049"
                  stroke="white"
                  stroke-width="5.54181"
                  stroke-linecap="round"
                />
                <path
                  d="M540.841 67.1359L540.841 51.4908C540.841 24.7101 519.131 3 492.35 3L475.58 3"
                  stroke="white"
                  stroke-width="5.54181"
                  stroke-linecap="round"
                />
                <defs>
                  <pattern
                    id="backgroundPattern"
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    patternContentUnits="objectBoundingBox"
                  >
                    <image
                      href=""
                      x="0"
                      y="0"
                      width="1"
                      height="1"
                      preserveAspectRatio="none"
                    />
                  </pattern>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="url(#backgroundPattern)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_941_5621"
                    x1="324.805"
                    y1="158.839"
                    x2="402.443"
                    y2="158.839"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_941_5621"
                    x1="334.932"
                    y1="156.589"
                    x2="419.322"
                    y2="156.589"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="frame1">
              <div className="carbody">
                <div className="picture"></div>
              </div>

              <div className="camera">

              <div className="cameraBody">

                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 88 88"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="43.9998" cy="43.7942" r="37.0564" fill="white" />
                  <circle
                    cx="44"
                    cy="43.794"
                    r="41.9171"
                    stroke="white"
                    stroke-width="3.75377"
                  />
                </svg>
              </div>
              <div className="rotate">
                <svg
                  width="78"
                  height="78"
                  viewBox="0 0 61 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="30.9696"
                    cy="30.7938"
                    r="30.0302"
                    fill="#C4C4C4"
                    fill-opacity="0.2"
                  />
                  <g clip-path="url(#clip0_941_5635)">
                    <path
                      d="M14.7142 17.1416C14.6333 16.4739 15.0986 15.867 15.7663 15.786C16.434 15.705 17.041 16.1704 17.1219 16.8381L17.8503 22.4831C20.602 18.396 25.2556 15.8669 30.2733 15.8669C36.667 15.8669 42.3524 19.9337 44.4364 25.9632C44.659 26.5904 44.3151 27.2783 43.6878 27.5008C43.5665 27.5413 43.4248 27.5615 43.2832 27.5615C42.7773 27.5615 42.312 27.2378 42.1299 26.7522C40.3899 21.6939 35.6149 18.2948 30.2734 18.2948C25.9031 18.2948 21.8363 20.6013 19.5702 24.2838L25.6401 23.5959C26.3078 23.5149 26.9147 24.0005 26.9755 24.6682C27.0361 25.3359 26.5708 25.9429 25.9031 26.0036L17.1624 26.9951C17.1219 26.9951 17.0612 26.9951 17.0208 26.9951C16.4137 26.9951 15.8877 26.5499 15.827 25.943L14.7142 17.1416ZM44.7804 33.3886L36.0397 34.38C35.372 34.461 34.8864 35.0477 34.9673 35.7154C35.0483 36.3831 35.635 36.8687 36.3027 36.7878L41.5835 36.2011C39.5197 40.5511 35.1292 43.3635 30.2531 43.3635C24.7699 43.3635 19.8331 39.7014 18.2549 34.461C18.0526 33.8136 17.3849 33.4494 16.7375 33.6517C16.09 33.8539 15.7258 34.5217 15.9281 35.1691C16.8386 38.1838 18.7405 40.8951 21.2494 42.7969C23.8594 44.7595 26.9753 45.8116 30.2531 45.8116C36.242 45.8116 41.6038 42.2507 43.971 36.8484L44.8208 43.586C44.9017 44.193 45.4278 44.6381 46.0145 44.6381C46.0752 44.6381 46.1157 44.6381 46.1764 44.6381C46.8441 44.5571 47.3094 43.9502 47.2285 43.2825L46.0955 34.4812C46.0348 33.7933 45.4481 33.3279 44.7804 33.3886Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_941_5635">
                      <rect
                        width="32.5327"
                        height="32.5327"
                        fill="black"
                        transform="matrix(1 0 0 -1 14.7041 47.0605)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </div>
    </div>
  );

}
export default frontCamera;