"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 rounded-full bg-blue-600 p-4 text-white shadow-xl hover:bg-blue-700"
        >
            <ArrowUp size={20} />
        </button>
    );
}