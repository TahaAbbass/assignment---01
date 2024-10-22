import Link from "next/link";
import React from "react";

const page2 = () => {
  return (
    <div>
      <h1>
        <strong>This Is About Page.</strong>
      </h1>
      <Link href="about/about-us">About-us.</Link>
    </div>
  );
};

export default page2;
