import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Notify.css";
 import MemberAddition from "./MemberAdded";
 import MemberRemoval from "./MemberRemoved";

import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFileText } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons/faCreditCard";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
function Notify() {
  const [members, setMembers] = useState([]);
  const [removedMembers, setRemovedMembers] = useState([]);
  const [membersCount, setMembersCount] = useState(0);
  const [removedMembersCount, setRemovedMembersCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [badgeTimeoutId, setBadgeTimeoutId] = useState(null);
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(badgeTimeoutId);
    };
  }, [badgeTimeoutId, showNotification]);

  const handleNotificationClick = () => {
    clearTimeout(badgeTimeoutId);

    setMembersCount(0);

    const newTimeoutId = setTimeout(() => {
      setShowNotification(false);
      setNotificationMessage("");
    }, 1000);
    setBadgeTimeoutId(newTimeoutId);
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/notifications/members"
      );

      const membersArray = Array.isArray(response.data) ? response.data : [];
      setMembers(membersArray);

      localStorage.setItem("notifyMember", JSON.stringify(membersArray));

      const uniqueIds = new Set(membersArray.map((member) => member.id));
      const count = uniqueIds.size;
   setMembersCount(count);
    } catch (error) {
      console.error("Error fetching data:", error);
      console.error("Error details:", error.response);
    }
  };

  const handleMemberAdded = (newMember) => {
 setMembers([...members, newMember]);
    setMembers([]);
  };

  const handleMemberRemoved = (removedMember) => {
    // Remove member from localStorage
    const updatedMembers = members.filter(
      (member) => member.id !== removedMember.id
    );
    localStorage.setItem("notifyMember", JSON.stringify(updatedMembers));

    // Update state
    setMembers(updatedMembers);
    setRemovedMembers([...removedMembers, removedMember]);

    // Update total members count
    const updatedCount = updatedMembers.length + removedMembers.length;
    setMembersCount(updatedCount);

    // Update removed members count
    const updatedRemovedCount = removedMembers.length + 1;
    setRemovedMembersCount(updatedRemovedCount);
  };
  
  return (
    <>

    <div id="dashboard-container" style={{ display: "flex" }}>
      <div className="frame01">
      <div className="frame02">
          <div className="digital">DIGITAL</div>

          <div className="handshake"> HANDSAKE</div>
        </div>
        <div className="frame03">
          <ul id="vertical-menu">
            <li>
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
            <li className="setting">
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
              <div className="imguser1"></div>

              <div className="P_name">hi toney mishra</div>
              <br />
            </div>

            <div className="icon-container">
              <div className="card-icon" title={`Click to view card `}>
                <FontAwesomeIcon icon={faCreditCard} />
              </div>

              <div className="notification-icon"
                     onClick={handleNotificationClick}
                    title={`Click to view notifications (${membersCount} new)`}
                >
       <FontAwesomeIcon icon={faBell} />
            {membersCount > 0 && (
             <div className="notification-badge">{membersCount}</div>
            )}
</div>
            </div>
          </div>
        </div>
        <div className="member-body">
          <div className="member-section">
            <div className="member-content">
             
               
                 <MemberAddition onMemberAdded={handleMemberAdded} /> 

                  {members && members.length > 0 ? (
                    members.map((member, index) => (
                      <div key={index}>
                        <div className="member-added">Member added</div>
                        <div className="uname">{member.name} is Added</div>
                        <div className="utime">
                          {new Date().toLocaleTimeString()}
                        </div>
                        <hr />
                      </div>
                    ))
                  ) : (
                    <div></div>
                  )}
                
             
            </div>
            <div className="member-content">
              
                <MemberRemoval onMemberRemoved={handleMemberRemoved} />

                {removedMembers.map((removedMember, index) => (
                  <div key={index}>
                    <div className="member-added">Member removed</div>
                    <div className="uname">{removedMember.name} is removed</div>
                    <div className="utime">
                      {new Date().toLocaleTimeString()},
                    </div>
                    <hr />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </div>
    </>
  );
}
export default Notify;