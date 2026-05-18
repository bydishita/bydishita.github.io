"use client"; //turns navbar into a client component allowing me to usePathname not ideal i think
import { usePathname } from "next/navigation";

const navTabs = [
  { name: "graduation", href: "/graduation" },
  { name: "events", href: "/events" },
  { name: "portraits", href: "/portraits" },
  { name: "more", href: "/more" },
  { name: "about", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isHome
          ? "bg-transparent"
          : "bg-yellow-200 shadow-lg border-b border-black"
      }`}
      style={{ minHeight: "64px" }}
    >
      <div className="flex items-center max-w-screen-xl mx-auto px-8 sm:px-12 py-3">
        <a href="/" className="italic font-bold text-lg">
          NAME
        </a>

        <div
          className="flex italic ml-auto"
          style={{ gap: "clamp(0.5rem, 1vw, 3rem)" }}
        >
          {navTabs.map((tab) => (
            <a key={tab.name} href={tab.href}>
              {tab.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
