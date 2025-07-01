"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mt-2 flex flex-row justify-center p-4 gap-4 md:gap-10 text-lg md:text-xl font-semibold">
      <Link href="#">Home</Link>
      <Link href="/#projects">Projects</Link>
      {/* <Link href="/#about">About</Link> */}
      <Link href="/Katie_Kimura_Resume.pdf" target="_blank" download title="Download my resume">Resume</Link>
    </nav>
  );
}