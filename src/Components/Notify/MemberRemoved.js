// MemberRemoval.js


import { useState, useEffect } from "react";


function MemberRemoval({ onMemberRemoved }) {
  const [removalStatus, setRemovalStatus] = useState(null);

  useEffect(() => {
    // This effect runs when the component mounts
    handleRemoveMember();
  }, []); // The empty dependency array ensures it runs only once when mounted

  const handleRemoveMember = () => {
    const storedMembers =
      JSON.parse(localStorage.getItem("notifyMember")) || [];

    if (storedMembers.length > 0) {
      const removedMember = storedMembers.pop();

      // Update localStorage with the modified member list
      localStorage.setItem("notifyMember", JSON.stringify(storedMembers));

      // Pass the removed member data to the parent component
      onMemberRemoved({
        name: removedMember.name,
        time: new Date().toLocaleTimeString(),
      });

      setRemovalStatus("success");
    } else {
      console.log("No members found for removal");
      setRemovalStatus("failure");
    }
  };
}

export default MemberRemoval;