import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ toggleMobileDropdown }) {
  return (
    <div className="logo">
      <div className="menu" onClick={toggleMobileDropdown}>
        <i class="fa-solid fa-bars menu"></i>
      </div>
      <div className="logo_img">
        <Link to="/">
          <img
            src="https://file.hstatic.net/1000360022/file/logo_8b0d2e825baf4515b4f4ce8ec3aeba94.png"
            alt="Company Logo"
          />
        </Link>
      </div>
    </div>
  );
}
