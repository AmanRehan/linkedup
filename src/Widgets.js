import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Crypto Crash",
        "Bitcoin along with other crypto-currencies crash."
      )}
      {newsArticle(
        "Covid - Updates",
        "Covid on the rise as the world fears the 4th wave."
      )}
      {newsArticle(
        "Technology",
        "Google annouces new pixel tablet along with other new releases."
      )}
    </div>
  );
}

export default Widgets;
