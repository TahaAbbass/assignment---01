import Link from "next/link";
import React from "react";

const Contactpage = () => {
  return (
    <div>
      <h1>
        <strong>This Is Contact Page.</strong>
      </h1>
      <Link href="contact/contact-us">Contact-us</Link>
    </div>
  );
};

export default Contactpage;
