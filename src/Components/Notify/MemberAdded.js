import React from "react";

const MemberAddition = ({ onMemberAdded }) => {
  // Fetch the data from localStorage
  const storedMembers = JSON.parse(localStorage.getItem("notifyMember")) || [];

  return (
    <div className="member-addition">
     
      {storedMembers.map((newMember, index) => (
        <div key={index}>
          {/* <div>{newMember.name}</div>
          {newMember.time} */}
        </div>
      ))}
    </div>
  );
};

export default MemberAddition;