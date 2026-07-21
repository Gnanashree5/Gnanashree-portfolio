"use client";

import Image from "next/image";

const features = [
    {
        title: "Structured Learning Journey",
        subtitle: "Letters → Words → Sentences → Stories",
        description:
            "Children gradually progress through carefully structured learning modules designed to improve Kannada articulation step by step instead of overwhelming them with complex speech exercises.",
        image: "/projects/spashta-2.png",
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Learn Through Rewards",
        subtitle: "Flowers • Stars • Diamonds",
        description:
            "Gamification keeps children motivated. Every correct answer earns visual rewards that encourage consistent practice and make therapy enjoyable.",
        image: "/projects/spashta-3.png",
        color: "from-pink-500 to-purple-500",
    },
    {
        title: "Positive Reinforcement",
        subtitle: "Celebrate Every Achievement",
        description:
            "Children receive encouraging feedback with cheerful animations and celebrations, creating confidence instead of fear while learning.",
        image: "/projects/spashta-4.png",
        color: "from-orange-500 to-red-500",
    },
    {
        title: "Progress Analytics",
        subtitle: "Parents Can Track Improvement",
        description:
            "Parents and clinicians can monitor practice history, accuracy, daily streaks, rewards earned and overall improvement through intuitive dashboards.",
        image: "/projects/spashta-5.png",
        color: "from-green-500 to-emerald-500",
    },
    {
        title: "Letter-wise Performance",
        subtitle: "Every Kannada Sound Matters",
        description:
            "The application records progress for each Kannada letter, helping parents and speech therapists identify sounds that require additional practice.",
        image: "/projects/spashta-6.png",
        color: "from-indigo-500 to-blue-500",
    },
    {
        title: "Sentence Practice",
        subtitle: "Real-life Communication",
        description:
            "Children move beyond individual words and practice complete sentences, improving pronunciation in everyday conversations.",
        image: "/projects/spashta-7.png",
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "Story-based Learning",
        subtitle: "Interactive & Engaging",
        description:
            "Story modules combine reading, listening and speaking practice, making articulation exercises more enjoyable and meaningful.",
        image: "/projects/spashta-9.png",
        color: "from-cyan-500 to-blue-500",
    },
];
export default function FeatureShowcase() {
    return (
        <section className="py-32 bg-white">

            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-24 text-center">

                    <p className="text-blue-600 uppercase tracking-[0.35em] font-semibold">
                        Experience the App
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Designed for Children.
                        <br />
                        Trusted by Parents.
                    </h2>

                </div>

                {features.map((feature, index) => (

                    <div
                        key={feature.title}
                        className={`mb-32 grid items-center gap-16 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                            }`}
                    >

                        <div>

                            <div
                                className={`inline-flex rounded-full bg-gradient-to-r ${feature.color} px-5 py-2 text-white`}
                            >
                                {feature.subtitle}
                            </div>

                            <h3 className="mt-8 text-4xl font-bold text-slate-900">
                                {feature.title}
                            </h3>

                            <p className="mt-8 text-lg leading-9 text-slate-600">
                                {feature.description}
                            </p>

                        </div>

                        <div className="rounded-[40px] bg-slate-100 p-8 shadow-xl">

                            <Image
                                src={feature.image}
                                alt={feature.title}
                                width={450}
                                height={900}
                                className="mx-auto rounded-3xl"
                            />

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}