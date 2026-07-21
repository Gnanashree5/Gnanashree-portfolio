import Image from "next/image";

const features = [
    {
        title: "Structured Learning",
        subtitle: "Letters → Words → Sentences → Stories",
        image: "/projects/spashta 2.png",
        description:
            "Children gradually progress from letters to stories using clinically guided activities that build pronunciation confidence step by step.",
    },
    {
        title: "Gamified Rewards",
        subtitle: "Flowers • Stars • Diamonds",
        image: "/projects/spashta 3.png",
        description:
            "Every correct answer earns rewards that motivate children to practice consistently and enjoy learning.",
    },
    {
        title: "Progress Tracking",
        subtitle: "Parents Stay Informed",
        image: "/projects/spashta 5.png",
        description:
            "Parents can track learning progress, practice history, rewards earned and overall improvement through intuitive dashboards.",
    },
    {
        title: "Letter-wise Analytics",
        subtitle: "Monitor Every Sound",
        image: "/projects/spashta 6.png",
        description:
            "Detailed analytics help identify Kannada letters that require additional articulation practice.",
    },
    {
        title: "Story-based Learning",
        subtitle: "Making Practice Fun",
        image: "/projects/spashta 9.png",
        description:
            "Interactive stories combine listening, reading and pronunciation practice to keep children engaged.",
    },
];

export default function SpashtaFeatures() {
    return (
        <section className="py-28 bg-slate-50">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-20 text-center">
                    <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Key Features
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-black">
                        Designed for Real Learning
                    </h2>
                </div>

                {features.map((feature, index) => (
                    <div
                        key={feature.title}
                        className={`mb-24 grid items-center gap-14 lg:grid-cols-2 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""
                            }`}
                    >
                        <Image
                            src={feature.image}
                            alt={feature.title}
                            width={350}
                            height={700}
                            className="mx-auto rounded-3xl shadow-2xl"
                        />

                        <div>
                            <p className="text-blue-600 font-semibold">
                                {feature.subtitle}
                            </p>

                            <h3 className="mt-3 text-4xl font-bold text-black">
                                {feature.title}
                            </h3>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}