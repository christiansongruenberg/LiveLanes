import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const Profile = () => (
  <div className="profile">
    <img
      alt="profile"
      src="https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png"
    />
    <div>
      <FontAwesomeIcon icon={faCaretDown} color="#a7a9ac" />
    </div>
  </div>
);

export default Profile;
