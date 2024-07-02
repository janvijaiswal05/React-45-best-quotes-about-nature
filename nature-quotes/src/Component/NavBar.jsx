import React from "react";

export default function NavBar(props) {
  return (
    <nav>
      <ul>
        <li>{props.navHeading}</li>
      </ul>
    </nav>
  );
}
