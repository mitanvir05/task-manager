import React from "react";
export default function Header() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
  <div className="container mx-auto px-4 md:px-20 flex items-center justify-between gap-x-6">
    <a href="/">
      <p className="text-white text-3xl h-[45px] font-bold">Task Manager</p>
    </a>
  </div>
</nav>
  );
}
