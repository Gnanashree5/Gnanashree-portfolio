"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    "About",
    "Projects",
    "Skills",
    "Experience",
    "Education",
    "Achievements",
    "Contact",
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

                {/* Logo */}

                <Link
                    href="/" className="group flex items-center">
                    <span className="text-3xl font-bold">SBGJ</span>

                    <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-blue-600 opacity-0 transition-all duration-500 group-hover:ml-3 group-hover:max-w-[320px] group-hover:opacity-100">
                        S B Gnanashree Jain
                    </span>
                </Link>

                {/* Desktop */}

                <nav className="hidden items-center gap-10 lg:flex">

                    {navItems.map((item) => (

                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative text-[15px] font-medium text-slate-600 transition duration-300 hover:text-blue-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
                            {item}
                        </a>

                    ))}


                </nav>

                {/* Mobile */}

                <button
                    className="lg:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X /> : <Menu />}
                </button>

            </div>

            {open && (

                <div className="border-t border-slate-200 bg-white lg:hidden">

                    {navItems.map((item) => (

                        <a
                            onClick={() => setOpen(false)}
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="block px-8 py-5"
                        >
                            {item}
                        </a>

                    ))}

                </div>

            )}

        </header>
    );
}