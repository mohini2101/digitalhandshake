import React, { useState, useEffect } from "react";

import "./homeDash.css";
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
import { Link } from "react-router-dom";


function HomeDash() {
  
  const [searchQuery, setSearchQuery] = useState("");

  
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle search action
  const handleSearch = () => {
    // Perform search action using the searchQuery state value
    console.log("Performing search for:", searchQuery);
  };
  return (
    <div id="dashboard-container" style={{ display: "flex" }}>
      <div className="frame01">
        <div className="frame02">
          <div className="digital">Digital</div>


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

      <div id="main-content" style={{ flex: 1 }}>
      <div className="frame04">
          <div className="frame05">
            <div className="profile-container">
              <div className="imguser"></div>

              <div className="P_name">hi toney mishra</div>
              <br />
            </div>

            <div className="iconcontainer">
              <div className="card-icon" title={`Click to view card `}>
                <FontAwesomeIcon icon={faCreditCard} />
              </div>

              <div className="notification-icon"
                    
                    title={`Click to view notifications  new)`}
                >
       <FontAwesomeIcon icon={faBell} />
           
        </div>
            </div>
          </div>
        </div>
        <div className="frame06">
          <div className="frame07">
            <div className="frame08">
              <div className="search-container">
            <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="searchcard"
        placeholder="Search card...."
        
      />
              <FontAwesomeIcon className="searchicon"  onChange={handleSearch} icon={faSearch} />
            </div>
            </div>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 14.5C14 12.8431 15.3431 11.5 17 11.5C18.6568 11.5 20 12.8431 20 14.5C20 16.1569 18.6568 17.5 17 17.5C15.3431 17.5 14 16.1569 14 14.5Z"
                stroke="#413D7B"
              />
              <path
                d="M3.99998 9.5C3.99998 11.1569 5.34312 12.5 6.99998 12.5C8.65683 12.5 9.99998 11.1569 9.99998 9.5C9.99998 7.84315 8.65683 6.5 6.99998 6.5C5.34312 6.5 3.99998 7.84315 3.99998 9.5Z"
                stroke="#413D7B"
              />
              <path
                d="M16.9585 9L16.9585 2"
                stroke="#413D7B"
                stroke-linecap="round"
              />
              <path
                d="M6.9585 15L6.9585 22"
                stroke="#413D7B"
                stroke-linecap="round"
              />
              <path
                d="M16.9585 22L16.9585 20"
                stroke="#413D7B"
                stroke-linecap="round"
              />
              <path
                d="M6.9585 2L6.9585 4"
                stroke="#413D7B"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="frame09">
            <div className="cardgif"></div>

            <div className="contentCard">

              <div className="addedcard ">No Card Added Yet</div>
              <div className="addedDetail">
                Open the camera and start adding business card to your library!
              </div>
            </div>
          </div>

          <div className="scan">
  <Link to="/CameraFront">
    <FontAwesomeIcon className="cameraicon" icon={faCamera} />
  </Link>
</div>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </div>
  );
}
export default HomeDash;