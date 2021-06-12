import React from "react";

function Footer() {
  var Curryear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {Curryear} ...</p>
    </footer>
  );
}

export default Footer;
