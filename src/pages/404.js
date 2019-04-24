import React from "react";

export default function NoMatch(props) {
    document.title = "La Danza de las Fieras | 404";
    return (
      <div id="404" className="Page">
        <h1>
          No match for <code>{props.location.pathname}</code>
        </h1>
      </div>
    );
  }