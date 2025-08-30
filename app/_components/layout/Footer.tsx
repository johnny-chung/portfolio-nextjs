import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-center align-center z-100 w-full text-sm text-gray-200 bg-gray-800 border-t mt-4 p-4 text-center gap-2 lg:gap-8 lg:text-base">
      <small>© {new Date().getFullYear()} Goodmanltd</small>
    </footer>
  );
}
