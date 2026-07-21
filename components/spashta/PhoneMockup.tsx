"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const screens = [
    "/projects/spashta_1.png",
    "/projects/spashta 2.png",
    "/projects/spashta 3.png",
    "/projects/spashta 4.png",
    "/projects/spashta 5.png",
    "/projects/spashta 6.png",
    "/projects/spashta 7.png",
    "/projects/spashta 8.png",
    "/projects/spashta 9.png",
];

export default function PhoneMockup() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % screens.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex justify-center">
            <div className="rounded-[40px] bg-black p-2 shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
                {/* Speaker */}
                <div className="mx-auto mb-3 h-2 w-24 rounded-full bg-neutral-700" />
                {/* Screen */}
                <div className="relative overflow-hidden rounded-[34px]">

                    <AnimatePresence mode="wait">

                        <motion.div
                            key={current}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                            <Image
                                src={screens[current]}
                                alt="Spashta Nudi"
                                width={300}
                                height={600}
                                priority
                                className="block h-auto w-[300px]"
                            />
                        </motion.div>

                    </AnimatePresence>

                </div>

            </div>
        </div>
    );
}