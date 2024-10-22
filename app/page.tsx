import Link from "next/link";
import React from "react";

const link = () => {
  return (
    <div>
      <h1>
        <ul>
          <li>
            <Link href="/about">
              <strong>About</strong>
            </Link>
          </li>
          <li>
            <Link href="service">
              <strong>Service</strong>
            </Link>
          </li>
          <li>
            <Link href="contact">
              <strong>Contact</strong>
            </Link>
          </li>
        </ul>
      </h1>
    </div>
  );
};

export default link;
