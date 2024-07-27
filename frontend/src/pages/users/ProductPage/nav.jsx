import React, { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

const NavComponent = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Description":
        return <Tab1 />;
      case "Details":
        return <Tab2 />;
      case "Reviews":
        return <Tab3 />;
      default:
        return <Tab1 />;
    }
  };

  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "Description" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Description")}
          >
            Description
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "Details" ? "active" : ""}`}
            onClick={() => setActiveTab("Details")}
          >
            Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "Reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("Reviews")}
          >
            Reviews
          </button>
        </li>
      </ul>

      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default NavComponent;